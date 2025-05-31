const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const SibApiV3Sdk = require('sib-api-v3-sdk');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// === CONFIGURACIÓN DE API KEY DE BREVO ===
const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.SENDINBLUE_API_KEY;

const contactsApi = new SibApiV3Sdk.ContactsApi();

const transactionalApi = new SibApiV3Sdk.TransactionalEmailsApi();

app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;
  const createContact = new SibApiV3Sdk.CreateContact();
  createContact.email = email;
  createContact.listIds = [3];

  try {
    await contactsApi.createContact(createContact);
    return res.status(200).json({ message: '¡Suscripción exitosa!' });
  } catch (error) {

    if (error.response && error.response.body && error.response.body.code === 'duplicate_parameter') {
      return res.status(200).json({ message: 'Ya estás suscrito' });
    }
    console.error('Error en /api/subscribe:', error.response?.body || error.message);
    return res.status(500).json({ error: 'Hubo un problema al suscribirse.' });
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message, subject } = req.body;

  // Validación básica
  if (!name || !email || !message || !subject) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
  }

  // Construir el contenido del correo
  const emailContent = {
    sender: {
      name: 'Formulario de Contacto',
      email: 'ejemplo@gmail.com' 
    },
    to: [
      { email: 'cbenjamincastro@gmail.com' }
    ],
    subject: `Nuevo mensaje de contacto: ${subject}`,
    htmlContent: `
      <h3>Has recibido un nuevo mensaje desde el formulario de contacto</h3>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Asunto:</strong> ${subject}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${message}</p>
    `
  };

  try {
    // Aquí se envía el correo usando TransactionalEmailsApi
    await transactionalApi.sendTransacEmail(emailContent);
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Error en /api/contact:', err.response?.body || err.message);
    return res.status(500).json({ error: 'Error al enviar el mensaje. Intenta más tarde.' });
  }
});

// Finalmente arrancamos el servidor
app.listen(5000, () => {
  console.log('Servidor escuchando en http://localhost:5000');
});