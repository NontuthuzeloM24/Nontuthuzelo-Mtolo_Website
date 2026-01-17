import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div>
        <div>
          <h1>Nontuthuzelo's Website</h1>
          <nav>
            <a href="#whatido">
              What I Do
            </a>
            <a href="#howitworks">
              How It Works
            </a>
            <a href="#mywork">
              My Work
            </a>
            <a href="#contact">
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
