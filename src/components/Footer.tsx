
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Calendar } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: About */}
          <div>
            <div className="mb-5">
              <Logo />
            </div>
            <p className="mb-4 text-gray-400">
              With over 10 years of experience in the food industry, Kaviya Hotel provides premium 
              catering services for corporate events and family functions.
            </p>
            <div className="flex space-x-4 mt-4">
              {/* Social media icons would go here */}
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-white text-xl mb-5">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Services */}
          <div>
            <h3 className="font-serif font-bold text-white text-xl mb-5">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">Corporate Catering</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">Wedding Catering</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">Event Catering</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">Bulk Food Supply</Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div>
            <h3 className="font-serif font-bold text-white text-xl mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-primary mt-1 flex-shrink-0" />
                <span>Govinda Agraharam, Hosur, Tamil Nadu 635126</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-primary flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-primary transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-primary flex-shrink-0" />
                <a href="mailto:info@kaviyahotel.com" className="hover:text-primary transition-colors">info@kaviyahotel.com</a>
              </li>
              <li className="flex items-center">
                <Clock size={20} className="mr-2 text-primary flex-shrink-0" />
                <span>Mon - Sun: 7:00 AM - 10:00 PM</span>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-gray-950 py-4">
        <div className="container text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Kaviya Hotel. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
