import React from "react";

export const CtaSection = () => {
  return (
    <section className="relative py-24 px-6 md:py-32 overflow-hidden z-10" id="kontakt">
      {/* Subtle Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-KVS-secondary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-4xl">
        <div className="glass-panel p-10 md:p-20 border-white/10 flex flex-col items-center gap-10 relative overflow-hidden text-center rounded-3xl shadow-2xl">
          {/* Decorative Corner Accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl -mr-20 -mt-20 rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-KVS-secondary/10 blur-3xl -ml-20 -mb-20 rounded-full" />

          {/* Icon Header */}
          <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-full flex items-center justify-center relative z-10 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-tr before:from-KVS-secondary/20 before:to-transparent before:rounded-full before:z-[-1]">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-10 h-10 text-KVS-secondary" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
          </div>

          <div className="space-y-6 relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-3xl">
              Klar for å <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-KVS-secondary">komme i gang?</span>
            </h2>
            <p className="text-lg md:text-2xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
              Kontakt meg for en uforpliktende befaring. Akkurat nå tar vi praten enklest over telefon!
            </p>
          </div>
          
          <div className="mt-4 relative group z-10">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-KVS-secondary/60 to-white/20 rounded-full blur-md opacity-40 group-hover:opacity-80 transition duration-500"></div>
            <a 
              href="tel:+4799233904" 
              className="relative flex items-center gap-5 bg-black/60 backdrop-blur-xl border border-white/10 hover:border-white/30 px-10 py-5 rounded-full text-white transition-all transform hover:scale-105 hover:-translate-y-1 active:scale-95 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]"
            >
              <div className="bg-KVS-secondary/20 p-3 rounded-full group-hover:bg-KVS-secondary/30 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-KVS-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <span className="text-2xl md:text-3xl font-semibold tracking-wide">+47 992 33 904</span>
            </a>
          </div>
          
          <div className="flex items-center gap-2 mt-2 text-white/50 text-sm md:text-base font-medium px-4 py-2 rounded-full bg-white/5 border border-white/5 relative z-10">
            <span className="w-2 h-2 rounded-full bg-KVS-secondary animate-pulse"></span>
            Ring for en hyggelig prat
          </div>
        </div>
      </div>
    </section>
  );
};
