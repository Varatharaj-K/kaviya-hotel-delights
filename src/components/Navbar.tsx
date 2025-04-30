
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        
        <div className="hidden md:flex items-center space-x-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive 
                ? "text-primary font-medium" 
                : "text-gray-700 hover:text-primary transition-colors"
            }
            end
          >
            Home
          </NavLink>
          <NavLink 
            to="/services" 
            className={({ isActive }) => 
              isActive 
                ? "text-primary font-medium" 
                : "text-gray-700 hover:text-primary transition-colors"
            }
          >
            Services
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              isActive 
                ? "text-primary font-medium" 
                : "text-gray-700 hover:text-primary transition-colors"
            }
          >
            About Us
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              isActive 
                ? "text-primary font-medium" 
                : "text-gray-700 hover:text-primary transition-colors"
            }
          >
            Contact
          </NavLink>
          <a 
            href="tel:+919876543210" 
            className="btn btn-primary"
          >
            Book Now
          </a>
        </div>
        
        <button className="md:hidden" onClick={toggleMenu}>
          <Menu size={24} className="text-gray-800" />
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4 animate-fade-in">
          <div className="container mx-auto flex flex-col space-y-4">
            <NavLink 
              to="/"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                isActive 
                  ? "text-primary font-medium py-2" 
                  : "text-gray-700 hover:text-primary py-2 transition-colors"
              }
              end
            >
              Home
            </NavLink>
            <NavLink 
              to="/services"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                isActive 
                  ? "text-primary font-medium py-2" 
                  : "text-gray-700 hover:text-primary py-2 transition-colors"
              }
            >
              Services
            </NavLink>
            <NavLink 
              to="/about"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                isActive 
                  ? "text-primary font-medium py-2" 
                  : "text-gray-700 hover:text-primary py-2 transition-colors"
              }
            >
              About Us
            </NavLink>
            <NavLink 
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                isActive 
                  ? "text-primary font-medium py-2" 
                  : "text-gray-700 hover:text-primary py-2 transition-colors"
              }
            >
              Contact
            </NavLink>
            <a 
              href="tel:+919876543210" 
              className="btn btn-primary w-full text-center"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
