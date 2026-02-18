import React from 'react';
import { SocialLink } from '../types';
import { ArrowRight } from 'lucide-react';

interface LinkCardProps {
  link: SocialLink;
}

export const LinkCard: React.FC<LinkCardProps> = ({ link }) => {
  const Icon = link.icon;

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group relative w-full flex items-center p-4 
        bg-black/30 backdrop-blur-xl border border-white/10
        rounded-xl transition-all duration-300 ease-out
        hover:scale-[1.02] hover:-translate-y-0.5 hover:bg-black/50 hover:border-white/20
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-purple-500
        ${link.color || 'hover:border-slate-500'}
        overflow-hidden
      `}
    >
      {/* Hover Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

      {/* Icon Container */}
      <div className="relative z-10 flex-shrink-0 mr-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/5 text-slate-200 group-hover:bg-white/10 transition-colors">
          {Icon ? <Icon size={24} strokeWidth={1.5} /> : null}
        </div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 flex-grow min-w-0">
        <h3 className="text-lg font-semibold text-white truncate group-hover:text-purple-300 transition-colors">
          {link.title}
        </h3>
        {link.description && (
          <p className="text-sm text-slate-400 truncate mt-0.5 group-hover:text-slate-300 transition-colors">
            {link.description}
          </p>
        )}
      </div>

      {/* Action Arrow */}
      <div className="relative z-10 flex-shrink-0 ml-4 text-slate-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        <ArrowRight size={20} />
      </div>
    </a>
  );
};