
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  rating: number;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  name, 
  role, 
  quote, 
  rating, 
  image = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=256&q=80" 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <img 
          src={image} 
          alt={name}
          className="w-14 h-14 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-medium text-lg">{name}</h4>
          <p className="text-gray-500 text-sm">{role}</p>
          <div className="flex mt-1">
            {[...Array(5)].map((_, index) => (
              <Star 
                key={index}
                size={16}
                className={`${index < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'} mr-0.5`}
              />
            ))}
          </div>
        </div>
      </div>
      <blockquote className="text-gray-600 italic">{quote}</blockquote>
    </div>
  );
};

export default TestimonialCard;
