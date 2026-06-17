import { Menu, X, Zap } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Brands', href: '#brands' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0b]/90 backdrop-blur-md border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <img src="/images/logo.png" alt="VoltZone" className="h-10 w-10 object-contain rounded-full" />
            <span className="font-display font-bold text-xl tracking-tighter text-zinc-100 uppercase hidden sm:block">
              VoltZone <span className="text-zinc-500">Enterprises</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2.5 border border-zinc-700 text-white font-bold rounded-sm hover:bg-zinc-800 transition-colors uppercase text-sm tracking-widest ml-4"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-400 hover:text-white p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0b] border-b border-zinc-800/50 px-4 pt-2 pb-6 space-y-1 shadow-2xl absolute w-full left-0 top-20">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-sm font-medium uppercase tracking-widest text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-md"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block mt-4 text-center border border-zinc-700 text-white px-5 py-3 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-zinc-800"
          >
            Get a Quote
          </a>
        </div>
      )}
    </nav>
  );
}
