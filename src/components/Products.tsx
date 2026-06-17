import { Zap, Cable, Power, Lightbulb } from 'lucide-react';

export default function Products() {
  const categories = [
    {
      title: 'Fans',
      description: 'Complete range of ceiling, wall, and exhaust fans from top brands.',
      icon: <Zap className="h-6 w-6" />,
      features: ['Orient Fans Complete Range', 'Atomberg BLDC Fans', 'Ceiling & Wall Fans', 'Heavy Duty Exhaust Fans'],
      image: "/images/category-fans.jpg"
    },
    {
      title: 'Wires & Cables',
      description: 'High quality wiring solutions for residential and industrial safety.',
      icon: <Cable className="h-6 w-6" />,
      features: ['Havells Wires', 'Polycab Cables', 'House Wiring Solutions', 'Armored Industrial Cables'],
      image: "/images/category-wires.jpg"
    },
    {
      title: 'Switches & Accessories',
      description: 'Sleek, modular, and durable switches matching your interiors.',
      icon: <Power className="h-6 w-6" />,
      features: ['Lazer Switches', 'Modular Switches', 'Extension Boards', 'Electrical Fittings'],
      image: "/images/category-switches.jpg"
    },
    {
      title: 'Electrical Components',
      description: 'Comprehensive electrical gear for distribution and lighting.',
      icon: <Lightbulb className="h-6 w-6" />,
      features: ['Havells Electrical Accessories', 'LED Lighting Solutions', 'Distribution Boards & MCBs', 'Home Equipment'],
      image: "/images/category-led.jpg"
    }
  ];

  return (
    <section id="products" className="py-24 bg-[#0f0f12] border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold font-display text-zinc-100 mb-6">
            Our Product Categories
          </h2>
          <p className="text-lg text-zinc-400">
            We stock an extensive inventory of electrical goods to ensure you find everything required for your project under one roof.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-zinc-900 rounded-sm overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-colors group flex flex-col sm:flex-row shadow-2xl">
              <div className="sm:w-2/5 overflow-hidden border-b sm:border-b-0 sm:border-r border-zinc-800">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-48 sm:h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
              </div>
              <div className="sm:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-amber-500">
                    {cat.icon}
                  </div>
                  <h3 className="text-xl font-bold text-zinc-100">{cat.title}</h3>
                </div>
                <p className="text-zinc-400 text-sm mb-6">{cat.description}</p>
                <ul className="space-y-2">
                  {cat.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-sm text-zinc-300">
                      <div className="w-1.5 h-1.5 rounded-none bg-amber-500 mt-1.5 shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
