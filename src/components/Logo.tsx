
import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center">
      <div className="relative flex items-center">
        <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white shadow-md">
          <ChefHat size={20} className="text-white" />
        </div>
        <div className="ml-2">
          <span className="font-serif font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary block leading-none">Kaviya</span>
          <span className="text-secondary-600 text-xs font-medium tracking-wider">HOTEL & CATERING</span>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
