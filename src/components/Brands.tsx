import { CheckCircle2 } from 'lucide-react';

export default function Brands() {
  const brands = [
    'Orient Electric',
    'Havells India',
    'Atomberg Technologies',
    'Polycab India',
    'Lazer'
  ];

  return (
    <section id="brands" className="py-20 bg-[#0a0a0b] border-b border-zinc-800/50 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full border border-white"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full border border-white"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-extrabold font-display mb-6 text-zinc-100">
              Brands We Deal In
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-lg">
              We have partnered with the industry's most reliable and innovative manufacturers to bring you safe, efficient, and durable electrical products.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {brands.map((brand, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-zinc-900 px-4 py-3 rounded-sm border border-zinc-800">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0" />
                  <span className="font-bold text-zinc-100">{brand}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2 w-full">
             <div className="grid grid-cols-2 gap-4">
                <img src="/images/store-showcase-1.jpg" alt="Electrical Showcase 1" className="w-full h-48 sm:h-64 object-cover rounded-sm border border-zinc-800 shadow-2xl transform -translate-y-4 opacity-80" />
                <img src="/images/store-showcase-2.jpg" alt="Electrical Showcase 2" className="w-full h-48 sm:h-64 object-cover rounded-sm border border-zinc-800 shadow-2xl transform translate-y-4 opacity-80" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
