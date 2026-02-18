import React from 'react';
import { UserProfile } from '../types';
import { Share2 } from 'lucide-react';

interface HeaderProps {
  profile: UserProfile;
}

export const Header: React.FC<HeaderProps> = ({ profile }) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: profile.name,
        text: `Check out ${profile.name}'s links!`,
        url: window.location.href,
      }).catch(console.error);
    } else {
      // Fallback for desktop or unsupported browsers
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative group cursor-pointer">
        {/* Animated Glow behind Avatar */}
        <div className="absolute -inset-1 bg-gradient-to-tr from-fuchsia-600 via-purple-600 to-cyan-600 rounded-full opacity-70 group-hover:opacity-100 blur-md group-hover:blur-lg transition-all duration-500 animate-spin-slow"></div>
        
        <img
          src={profile.avatarUrl}
          alt={profile.name}
          className="relative w-32 h-32 rounded-full border-4 border-black object-cover shadow-2xl z-10"
        />
        
        <button 
          onClick={handleShare}
          className="absolute bottom-0 right-0 z-20 p-2.5 bg-black/80 backdrop-blur-md rounded-full border border-white/10 text-slate-300 hover:text-white hover:bg-purple-900/50 hover:border-purple-500/50 transition-all shadow-lg"
          aria-label="Share profile"
        >
          <Share2 size={18} />
        </button>
      </div>
      
      <h1 className="mt-8 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white tracking-tight drop-shadow-sm">
        {profile.name}
      </h1>
      
      <p className="mt-2 text-sm font-semibold text-fuchsia-400 tracking-wide uppercase">
        {profile.handle}
      </p>

      <p className="mt-4 text-slate-300 max-w-sm leading-relaxed text-base mix-blend-plus-lighter">
        {profile.bio}
      </p>
    </div>
  );
};