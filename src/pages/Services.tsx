
import React from 'react';
import { ChefHat, Users, Calendar, Restaurant, Package, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceDetailProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  image: string;
  reverse?: boolean;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ icon, title, description, features, image, reverse = false }) => {
  return (
    <div className={`grid md:grid-cols-2 gap-8 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <div className={reverse ? 'order-2 md:order-1' : ''}>
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
          {icon}
        </div>
        <h3 className="text-2xl font-serif font-bold mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className={reverse ? 'order-1 md:order-2' : ''}>
        <img 
          src={image} 
          alt={title}
          className="rounded-lg shadow-lg w-full h-[400px] object-cover"
        />
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Restaurant size={32} />,
      title: "Corporate Catering",
      description: "We provide reliable daily meal delivery services for companies of all sizes. Our corporate catering ensures your employees enjoy nutritious and delicious meals every day.",
      features: [
        "Customized menu planning for employee preferences",
        "Hygienic packaging and on-time delivery",
        "Special dietary requirements accommodated",
        "Flexible ordering and volume adjustments",
        "Cost-effective bulk pricing options"
      ],
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Users size={32} />,
      title: "Event Catering",
      description: "From corporate meetings to large-scale conferences, our event catering services can handle gatherings of any size with professional service and attention to detail.",
      features: [
        "Customized menu creation for your event theme",
        "Professional serving staff available",
        "Complete setup and clean-up services",
        "Equipment rental options (tables, chairs, etc.)",
        "Theme-based food presentation"
      ],
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&q=80",
      reverse: true
    },
    {
      icon: <Calendar size={32} />,
      title: "Wedding Services",
      description: "Make your special day memorable with our wedding catering services. We offer comprehensive packages that can be tailored to match your wedding theme and preferences.",
      features: [
        "Custom wedding menu planning sessions",
        "Multiple cuisine options (South Indian, North Indian, Continental)",
        "Elegant food presentation and setup",
        "Cake and dessert buffet options",
        "Experienced service staff for your event"
      ],
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Package size={32} />,
      title: "Bulk Food Preparation",
      description: "Specializing in large-volume food production, we can handle bulk orders for any occasion, maintaining consistent quality regardless of quantity.",
      features: [
        "High-capacity kitchen facilities for large orders",
        "Quality control measures for consistency",
        "Specialized packaging for bulk transport",
        "Temperature-controlled delivery options",
        "Flexible scheduling for recurring orders"
      ],
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&q=80",
      reverse: true
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-12 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-serif font-bold mb-4">Our Catering Services</h1>
            <p className="text-gray-600 text-lg mb-0">
              Discover our range of specialized catering services designed to meet your every need.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Details */}
      <section className="section">
        <div className="container">
          <div className="space-y-24">
            {services.map((service, index) => (
              <ServiceDetail 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                image={service.image}
                reverse={service.reverse}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Why Choose Kaviya Hotel?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              With over a decade of experience in the food service industry, we offer:
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <ChefHat size={28} />
              </div>
              <h3 className="text-xl font-medium mb-3">Experienced Chefs</h3>
              <p className="text-gray-600">
                Our culinary team brings years of experience and passion to every dish they prepare.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <Clock size={28} />
              </div>
              <h3 className="text-xl font-medium mb-3">Timely Delivery</h3>
              <p className="text-gray-600">
                We understand the importance of punctuality and ensure all orders are delivered on time.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <MapPin size={28} />
              </div>
              <h3 className="text-xl font-medium mb-3">Local Expertise</h3>
              <p className="text-gray-600">
                As a local business in Hosur, we understand the regional tastes and preferences perfectly.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Ready to Place Your Order?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your catering needs and get a customized quote for your event or corporate meal service.
          </p>
          <Link to="/contact" className="btn bg-white text-primary hover:bg-gray-100">
            Contact Us Now
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
