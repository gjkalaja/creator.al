import React, { useState, useRef, useEffect } from 'react';
import { voiceProfiles, heroDemoTexts, arbenDemoAudio } from '../constants';

const Hero: React.FC = () => {
  const [selectedVoice, setSelectedVoice] = useState(voiceProfiles[0].name);
  const [isPlaying, setIsPlaying] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [textAreaValue, setTextAreaValue] = useState(heroDemoTexts[0]);
  const audioRef = useRef<HTMLAudioElement>(null);

  const stopAudio = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (selectedVoice === 'Arben') {
        if (isPlaying) {
            audio.pause();
            setIsPlaying(false);
        } else {
            const audioUrl = arbenDemoAudio[textIndex];
            // Ensure the correct audio source is set
            if (audio.src !== audioUrl) {
                audio.src = audioUrl;
            }
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => setIsPlaying(true))
                    .catch(error => {
                        console.error("Audio playback failed:", error);
                        setIsPlaying(false);
                    });
            }
        }
    } else {
        // Simulate playback for other voices
        if (isPlaying) return; // Prevent re-triggering animation
        setIsPlaying(true);
        setTimeout(() => setIsPlaying(false), 2000);
    }
  };

  const handleChangeText = () => {
    stopAudio();
    const nextIndex = (textIndex + 1) % heroDemoTexts.length;
    setTextIndex(nextIndex);
    setTextAreaValue(heroDemoTexts[nextIndex]);
  };

  const handleVoiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    stopAudio();
    setSelectedVoice(e.target.value);
  };
  
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onAudioEnd = () => setIsPlaying(false);
    audio.addEventListener('ended', onAudioEnd);
    return () => {
      audio.removeEventListener('ended', onAudioEnd);
    };
  }, []);


  return (
    <section id="hero" className="text-center py-12 lg:py-20 relative">
      <div>
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-black tracking-tight leading-tight">
          Shqipe e përkryer. <br /> Nga teksti në zë me AI.
        </h1>
        <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
          Zgjidhni midis dhjetra zërash. Vetëm <span className="text-brand-accent font-semibold">3€</span> për çdo orë zë të gjeneruar.
        </p>

        {/* Demo Box */}
        <div className="mt-8 md:mt-16 max-w-4xl mx-auto bg-brand-gray border border-brand-light-gray rounded-2xl shadow-2xl">
          <textarea
            className="w-full h-56 md:h-40 bg-[#393c42] text-gray-200 resize-none focus:outline-none text-lg placeholder-gray-500 p-6 rounded-t-xl"
            placeholder="Shkruani tekstin tuaj këtu..."
            value={textAreaValue}
            onChange={(e) => setTextAreaValue(e.target.value)}
          />
          
          <div className="p-4 flex justify-between items-center bg-brand-gray rounded-b-xl">
            {/* Voice Selector */}
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8v8m4-10v12m4-14v16m4-12v8m4-6v4" />
              </svg>
              <div className="relative">
                <select
                    id="voice-select"
                    value={selectedVoice}
                    onChange={handleVoiceChange}
                    className="bg-brand-light-gray/50 border border-brand-light-gray rounded-lg py-2 pl-3 pr-8 text-white font-medium focus:outline-none focus:ring-1 focus:ring-brand-accent appearance-none"
                >
                    {voiceProfiles.map(profile => (
                        <option key={profile.name} value={profile.name} className="bg-brand-gray text-white">
                            {profile.name}
                        </option>
                    ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={handleChangeText}
                className="px-3 md:px-6 py-3 bg-brand-light-gray text-white font-semibold rounded-lg hover:bg-gray-600 transition-colors"
                aria-label="Ndrysho tekstin"
              >
                <span className="hidden md:inline">Ndrysho tekstin</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </button>
              <button
                onClick={togglePlayPause}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-brand-accent text-black font-semibold rounded-lg hover:bg-lime-400 transition-colors w-[120px]"
                aria-label={isPlaying && selectedVoice === 'Arben' ? "Pause speech" : "Play generated speech"}
              >
                {isPlaying ? (
                  selectedVoice === 'Arben' ? (
                    <>
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                      </svg>
                      <span className="font-bold">Pause</span>
                    </>
                  ) : (
                    <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  )
                ) : (
                    <>
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 5V19L19 12L8 5Z" />
                        </svg>
                        <span className="font-bold">Play</span>
                    </>
                )}
              </button>
            </div>
          </div>
        </div>
        <audio ref={audioRef} preload="auto" />
      </div>
    </section>
  );
};

export default Hero;