import React from 'react';
import { Header } from './components/Header';
import { LinkCard } from './components/LinkCard';
import { SOCIAL_LINKS, USER_PROFILE } from './constants';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-black selection:bg-fuchsia-500 selection:text-white">
      {/* Psychedelic Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* Vibrant Orbs - Subtle movement */}
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-purple-600 rounded-full mix-blend-color-dodge filter blur-[100px] opacity-30 animate-blob"></div>
        <div className="absolute top-[40%] right-[20%] w-[400px] h-[400px] bg-cyan-500 rounded-full mix-blend-color-dodge filter blur-[100px] opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-[10%] left-[30%] w-[600px] h-[600px] bg-fuchsia-700 rounded-full mix-blend-color-dodge filter blur-[120px] opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute top-[50%] left-[-10%] w-[300px] h-[300px] bg-indigo-600 rounded-full mix-blend-color-dodge filter blur-[80px] opacity-20 animate-pulse-slow"></div>

        {/* Grid Overlay - Reduced opacity */}
        <div className="absolute inset-0 psychedelic-grid opacity-10"></div>
      </div>

      {/* Content Container */}
      <main className="relative z-10 max-w-xl mx-auto px-4 py-12 md:py-20 flex flex-col items-center min-h-screen">
        
        {/* Header Section */}
        <div className="w-full mb-10 animate-fade-in-up" style={{ animationDelay: '0ms' }}>
          <Header profile={USER_PROFILE} />
        </div>

        {/* Links Section */}
        <div className="w-full flex flex-col gap-4">
          {SOCIAL_LINKS.map((link, index) => (
            <div 
              key={link.id} 
              className="animate-fade-in-up"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <LinkCard link={link} />
            </div>
          ))}
        </div>

        {/* Spacer */}
        <div className="flex-grow"></div>

        {/* Footer */}
        <div className="w-full mt-12 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
          <Footer />
        </div>

      </main>
    </div>
  );
};

export default App;