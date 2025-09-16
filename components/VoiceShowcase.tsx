
import React, { useState, useRef, useEffect } from 'react';
import { voiceProfiles } from '../constants';
import type { VoiceProfile } from '../types';

const VoiceCard: React.FC<{ profile: VoiceProfile; isPlaying: boolean; onPlay: () => void; }> = ({ profile, isPlaying, onPlay }) => {
    return (
        <div className="bg-brand-gray border border-brand-light-gray rounded-2xl p-6 flex flex-col h-full hover:border-brand-accent transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center space-x-4">
                <div className="relative">
                    <img src={profile.imageUrl} alt={profile.name} className="w-20 h-20 rounded-full object-cover filter grayscale" />
                    <button 
                        onClick={onPlay}
                        className="absolute bottom-0 right-0 w-8 h-8 bg-brand-accent rounded-full flex items-center justify-center transform transition-transform hover:scale-110 focus:outline-none"
                        aria-label={isPlaying ? `Pause voice of ${profile.name}` : `Play voice of ${profile.name}`}
                    >
                        {isPlaying ? (
                             <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                             </svg>
                        ) : (
                            <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 5V19L19 12L8 5Z" />
                            </svg>
                        )}
                    </button>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white">{profile.name}</h3>
                </div>
            </div>
            <p className="mt-4 text-gray-400 flex-grow">{profile.description}</p>
            <a href="#" className="mt-4 text-white font-medium flex items-center group">
                Krijo llogari
                <span className="ml-2 transform transition-transform group-hover:translate-x-1">&rarr;</span>
            </a>
        </div>
    );
};

const VoiceShowcase: React.FC = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = (profile: VoiceProfile) => {
    const audio = audioRef.current;
    if (!audio) return;

    if (currentlyPlaying === profile.audioUrl) {
      audio.pause();
      setCurrentlyPlaying(null);
    } else {
      if (!audio.paused) {
          audio.pause();
      }
      audio.src = profile.audioUrl;
      audio.play();
      setCurrentlyPlaying(profile.audioUrl);
    }
  };
  
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => {
      setCurrentlyPlaying(null);
    };

    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <section className="py-12 lg:py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight">
          Zëra AI ultra-realistë
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          Gjeneratori më i mirë i zërit AI me mbi 20 folës meshkuj dhe femra.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {voiceProfiles.map((profile) => (
          <VoiceCard 
            key={profile.name} 
            profile={profile}
            isPlaying={currentlyPlaying === profile.audioUrl}
            onPlay={() => togglePlay(profile)}
          />
        ))}
      </div>
      <audio ref={audioRef} preload="none" />
    </section>
  );
};

export default VoiceShowcase;