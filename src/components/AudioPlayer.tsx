import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume, Volume1, Volume2, VolumeX } from 'lucide-react';

interface AudioPlayerProps {
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

const isLiveNow = () => {
  const now = new Date();
  const day = now.getDay(); 
  const hour = now.getHours();

  const isWeekday = day >= 1 && day <= 5;
  const isLiveHour = hour >= 12 && hour < 14;

  return isWeekday && isLiveHour;
};

const AudioPlayer: React.FC<AudioPlayerProps> = ({ isPlaying, setIsPlaying }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [volume, setVolume] = useState(0.8);
  const [muted, setMuted] = useState(false);
  const [liveInfo, setLiveInfo] = useState({
    song: "Canción desconocida",
    artist: "Artista desconocido"
  });

  const streamUrl = "https://icecasthd.net/proxy/azulp/live";

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play().catch(error => {
        console.error("Error al reproducir el audio:", error);
        setIsPlaying(false);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, setIsPlaying]);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = muted ? 0 : volume;
  }, [volume, muted]);

  // Simulación de información en vivo
  useEffect(() => {
    const songs = [
      { song: "Tarde Azul", artist: "Benjamin Castro" },
    ];

    const updateInfo = () => {
      const randomIndex = Math.floor(Math.random() * songs.length);
      setLiveInfo(songs[randomIndex]);
    };

    updateInfo();
    const interval = setInterval(updateInfo, 30000);
    return () => clearInterval(interval);
  }, []);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setMuted(!muted);
  };

  const VolumeIcon = () => {
    if (muted || volume === 0) return <VolumeX />;
    if (volume < 0.4) return <Volume />;
    if (volume < 0.7) return <Volume1 />;
    return <Volume2 />;
  };

  return (
    <div className="fixed hidden bottom-0 left-0 right-0 bg-gradient-to-r from-blue-900 to-blue-800 text-white z-50 shadow-lg md:block ">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button 
              onClick={togglePlay}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 transition"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-1" />}
            </button>
            
            <div className="hidden sm:block">
              <p className="font-medium">{liveInfo.song}</p>
              <p className="text-blue-200 text-sm">{liveInfo.artist}</p>
            </div>
          </div>
          
          <div className="text-center hidden md:block">
            <p className="text-lg font-semibold">93.5 FM - Tarde Azul</p>
            <p className="text-sm text-blue-200">
  {isLiveNow() ? "Transmitiendo en vivo" : "Fuera del horario en vivo (Lun–Vie, 12 a 14)"}
</p>
          </div>
          
          <div className="flex items-center space-x-3">
            <button 
              onClick={toggleMute}
              className="p-2 hover:bg-blue-700 rounded-full transition"
            >
              <VolumeIcon />
            </button>
            
            <input 
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-24 accent-blue-300"
            />
          </div>
        </div>
      </div>
      <audio ref={audioRef} src={streamUrl} preload="auto" />
    </div>
  );
};

export default AudioPlayer;
