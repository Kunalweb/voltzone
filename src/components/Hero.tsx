import { ArrowRight, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0a0a0b] border-b border-zinc-800/50">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/40 via-[#0a0a0b] to-[#0a0a0b]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-zinc-900 border border-zinc-800 text-amber-500 text-xs font-bold uppercase tracking-widest mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              Your Trusted Partner
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-display leading-none mb-6">
              Reliable <span className="text-amber-500">Electrical</span> <br /> Solutions for Scale.
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-xl leading-relaxed">
              Quality fans, wires, cables, and switches from India's leading brands including 
              Orient, Havells, Atomberg, and Polycab. Specialist in retail and bulk industrial supply.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-black font-bold rounded-sm hover:bg-amber-500 transition-colors uppercase text-sm tracking-widest"
              >
                View Products
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-zinc-700 text-white font-bold rounded-sm hover:bg-zinc-800 transition-colors uppercase text-sm tracking-widest"
              >
                Contact Sales
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 mt-8 lg:mt-0">
            {/* Product Category Cards */}
            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 flex flex-col justify-between hover:border-zinc-700 transition-colors">
              <div className="text-amber-500 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="font-bold text-lg text-zinc-100">Premium Fans</h3>
              <p className="text-xs text-zinc-500 mt-2">Orient • Atomberg</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 flex flex-col justify-between hover:border-zinc-700 transition-colors">
              <div className="text-amber-500 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
              </div>
              <h3 className="font-bold text-lg text-zinc-100">Cables & Wires</h3>
              <p className="text-xs text-zinc-500 mt-2">Havells • Polycab</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 flex flex-col justify-between hover:border-zinc-700 transition-colors">
              <div className="text-amber-500 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
              </div>
              <h3 className="font-bold text-lg text-zinc-100">Switches</h3>
              <p className="text-xs text-zinc-500 mt-2">Lazer • Modular</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 flex flex-col justify-between hover:border-zinc-700 transition-colors">
              <div className="text-amber-500 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
              </div>
              <h3 className="font-bold text-lg text-zinc-100">LED Solutions</h3>
              <p className="text-xs text-zinc-500 mt-2">Home • Industrial</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
