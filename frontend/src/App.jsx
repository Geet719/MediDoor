import { useState } from "react";

import "./App.css";
import HeroSection from "./HeroSection";
import BenefitsSection from "./BenefitsSection";
import Footer from "./Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">MediDoor</h1>
          <nav className="space-x-4">
            <a href="#home" className="hover:text-gray-200">
              Home
            </a>
            <a href="#about" className="hover:text-gray-200">
              About Us
            </a>
            <a href="#contact" className="hover:text-gray-200">
              Contact
            </a>
          </nav>
        </div>
      </header>
      <main className="flex-grow">
        <HeroSection />
        <BenefitsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
