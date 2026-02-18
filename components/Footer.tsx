import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="text-center pb-8">
      <p className="text-xs text-slate-500 font-medium tracking-wide">
        © {new Date().getFullYear()} nikoskindergarten.online. All rights reserved.
      </p>
    </footer>
  );
};