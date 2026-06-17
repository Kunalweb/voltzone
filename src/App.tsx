/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Brands from './components/Brands';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-zinc-100 font-sans flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-grow flex flex-col">
        <Hero />
        <About />
        <Products />
        <Brands />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
