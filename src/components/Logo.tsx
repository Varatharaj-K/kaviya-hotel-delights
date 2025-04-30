
import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center">
      <div className="relative flex items-center">
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-serif text-xl font-bold">K</div>
        <div className="ml-2">
          <span className="font-serif font-bold text-xl text-primary block leading-none">Kaviya</span>
          <span className="text-secondary text-sm font-medium tracking-wider">HOTEL & CATERING</span>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
