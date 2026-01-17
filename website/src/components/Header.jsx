import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <h1 className="font-bold text-xl">Nontuthuzelo's Website</h1>
          <nav className="hidden md:flex space-x-8">
            <a href="#whatido" className="text-gray-700 hover:text-black">
              What I Do
            </a>
            <a href="#howitworks" className="text-gray-700 hover:text-black">
              How It Works
            </a>
            <a href="#mywork" className="text-gray-700 hover:text-black">
              My Work
            </a>
            <a href="#contact" className="text-gray-700 hover:text-black">
              Get In Touch
            </a>
          </nav>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu" className="md:hidden flex-col space-y-1">
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
        { isOpen && (
          <div>
            <ul>
              <li>
                <a href="#whatido" onClick={() => setIsOpen(false)} className="text-gray-700">
                What I Do
                </a>
                <a href="#howitworks" onClick={() => setIsOpen(false)} className="text-gray-700">
                How It Works
                </a>
                <a href="#mywork" onClick={() => setIsOpen(false)} className="text-gray-700">
                My Work
                </a>
                <a href="#contact" onClick={() => setIsOpen(false)} className="text-gray-700">
                Get In Touch
                </a>
              </li>
            </ul>
          </div>
        )}
    </header>
  );
};
