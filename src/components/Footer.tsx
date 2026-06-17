import { Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0f0f12] text-zinc-100 py-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <img src="/images/logo.png" alt="VoltZone" className="h-8 w-8 object-contain rounded-full" />
            <span className="font-display font-bold text-xl tracking-tighter uppercase">
              VoltZone <span className="text-zinc-500">Enterprises</span>
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-xs font-bold uppercase tracking-widest text-zinc-500">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#products" className="hover:text-white transition-colors">Products</a>
            <a href="#brands" className="hover:text-white transition-colors">Brands</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-zinc-800 text-[10px] uppercase tracking-widest text-zinc-600 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} VoltZone Enterprises. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built for voltzone.in</p>
        </div>
      </div>
    </footer>
  );
}
