"use client";

import { useState, useRef } from 'react';
import { Play, Pause, Music, X, SkipForward, SkipBack } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const songs = [
  { title: "Welcome Dude", src: "/music/welcome.mp3" },
];

export default function FloatingMusicPlayer() {
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (!playing) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setPlaying(!playing);
  };

  const nextSong = () => {
    const next = (current + 1) % songs.length;
    setCurrent(next);
    setPlaying(true);
    setTimeout(() => {
      if (audioRef.current) audioRef.current.play();
    }, 100);
  };

  const prevSong = () => {
    const prev = (current - 1 + songs.length) % songs.length;
    setCurrent(prev);
    setPlaying(true);
    setTimeout(() => {
      if (audioRef.current) audioRef.current.play();
    }, 100);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-green-500 text-black flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:scale-110 hover:bg-green-400 transition-all z-50 group"
      >
        <Music className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </motion.button>

      {/* Popup Player */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-64 p-5 rounded-2xl border border-[#1E293B] bg-[#020617]/90 backdrop-blur-xl shadow-2xl z-50"
          >
            <div className="flex justify-between items-center mb-4">
              <p className="text-xs font-semibold tracking-wider text-[var(--color-accent-blue)] uppercase flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  {playing && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent-blue)] opacity-75"></span>}
                  <span className={`relative inline-flex rounded-full h-2 w-2 ${playing ? 'bg-[var(--color-accent-blue)]' : 'bg-neutral-500'}`}></span>
                </span>
                Now Playing
              </p>
              <button onClick={() => setOpen(false)} className="text-neutral-400 hover:text-white transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-sm font-medium text-white mb-5 line-clamp-1">{songs[current].title}</p>

            <div className="flex items-center justify-center gap-5">
              <button onClick={prevSong} className="text-neutral-400 hover:text-white transition-colors">
                <SkipBack className="w-5 h-5" fill="currentColor" />
              </button>

              <button
                onClick={togglePlay}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-black hover:bg-green-400 hover:scale-105 transition-all shadow-[0_0_15px_rgba(34,197,94,0.3)]"
              >
                {playing ? <Pause className="w-4 h-4" fill="currentColor" /> : <Play className="w-4 h-4 ml-0.5" fill="currentColor" />}
              </button>

              <button onClick={nextSong} className="text-neutral-400 hover:text-white transition-colors">
                <SkipForward className="w-5 h-5" fill="currentColor" />
              </button>
            </div>

            <audio ref={audioRef} src={songs[current].src} onEnded={nextSong} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
