
import React from 'react';
import { Card } from '@/components/ui/card';

interface PartnerLogoProps {
  src: string;
  alt: string;
  className?: string;
}

const PartnerLogo: React.FC<PartnerLogoProps> = ({ src, alt, className }) => {
  return (
    <Card className={`flex items-center justify-center p-4 bg-white h-32 ${className}`}>
      <img 
        src={src} 
        alt={alt} 
        className="max-h-20 object-contain"
      />
    </Card>
  );
};

export default PartnerLogo;
