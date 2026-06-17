import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0a0a0b] border-b border-zinc-800/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold font-display text-zinc-100 mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-zinc-400">
            Have a bulk order or need a quote? Reach out to us today and our team will get back to you promptly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Form */}
          <div className="bg-zinc-900 rounded-sm p-8 xl:p-12 border border-zinc-800 shadow-2xl">
            <h3 className="text-2xl font-extrabold text-zinc-100 mb-8 font-display">Send an Inquiry</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Full Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-sm border border-zinc-800 bg-[#0a0a0b] text-zinc-100 focus:outline-none focus:border-amber-500 transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Phone Number</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-sm border border-zinc-800 bg-[#0a0a0b] text-zinc-100 focus:outline-none focus:border-amber-500 transition-colors" placeholder="+91 98765 43210" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-sm border border-zinc-800 bg-[#0a0a0b] text-zinc-100 focus:outline-none focus:border-amber-500 transition-colors" placeholder="you@company.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Requirements</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-sm border border-zinc-800 bg-[#0a0a0b] text-zinc-100 focus:outline-none focus:border-amber-500 transition-colors" placeholder="Tell us about the products you need..."></textarea>
              </div>
              <button type="button" className="w-full bg-white text-black px-6 py-4 rounded-sm font-bold hover:bg-amber-500 transition-colors uppercase text-sm tracking-widest">
                Submit Inquiry
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col justify-center">
            <img 
               src="/images/customer-service.jpg" 
               alt="Customer Service" 
               className="w-full h-64 object-cover rounded-sm mb-10 shadow-2xl border border-zinc-800 opacity-80"
            />
            
            <div className="space-y-8 pl-2">
              <div className="flex items-start gap-5">
                <div className="text-amber-500 shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-100 uppercase tracking-widest">Phone</h4>
                  <p className="text-zinc-400 mt-1">+91 98XXX XXXXX</p>
                  <p className="text-xs text-zinc-600 mt-0.5">Mon-Sat, 9am to 7pm</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="text-amber-500 shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-100 uppercase tracking-widest">Email</h4>
                  <p className="text-zinc-400 mt-1">info@voltzone.in</p>
                  <p className="text-xs text-zinc-600 mt-0.5">We reply within 24 hrs</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="text-amber-500 shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-100 uppercase tracking-widest">Location</h4>
                  <p className="text-zinc-400 mt-1 leading-relaxed">
                    VoltZone Enterprises HQ<br />
                    Delhi NCR, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
