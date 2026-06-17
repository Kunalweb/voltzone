import { ShieldCheck, TrendingDown, Briefcase, Truck } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-amber-500" />,
      title: 'Genuine Products',
      description: '100% authentic electrical goods sourced directly from authorized manufacturers.'
    },
    {
      icon: <TrendingDown className="h-6 w-6 text-amber-500" />,
      title: 'Competitive Prices',
      description: 'Best market rates for retail consumers and special pricing for contractors.'
    },
    {
      icon: <Briefcase className="h-6 w-6 text-amber-500" />,
      title: 'Bulk Orders Available',
      description: 'Fully equipped to supply large volumes for commercial and industrial projects.'
    },
    {
      icon: <Truck className="h-6 w-6 text-amber-500" />,
      title: 'Fast Delivery Support',
      description: 'Reliable logistics to ensure your projects never halt due to material delays.'
    }
  ];

  return (
    <section className="py-20 bg-[#0a0a0b] border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-amber-500 rounded-sm text-xs font-bold uppercase tracking-widest mb-6">
              About Us
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold font-display text-zinc-100 mb-6 leading-tight">
              Your One-Stop Destination For Premium Electricals
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Welcome to VoltZone Enterprises. We provide high-quality fans, wires, cables, switches, and electrical accessories from India's leading brands. Whether you are upgrading your home or powering a massive industrial facility, we have the right solutions.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1 bg-zinc-900 border border-zinc-800 p-2.5 rounded-sm h-fit">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-100 mb-1">{feature.title}</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-sm overflow-hidden shadow-2xl relative border border-zinc-800">
              <img 
                src="/images/warehouse.jpg" 
                alt="Electrical Supplies Warehouse" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b]/90 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-zinc-900/90 backdrop-blur rounded-sm p-6 shadow-lg border border-zinc-800">
                  <div className="text-4xl font-extrabold text-amber-500 mb-1 font-display">10+</div>
                  <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Years of Trust</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
