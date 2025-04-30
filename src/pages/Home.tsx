
import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Users, Calendar, Utensils, Package } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';

const Home: React.FC = () => {
  const services = [
    {
      icon: <Utensils size={32} />,
      title: "Corporate Catering",
      description: "Daily meal delivery services for companies with fresh, high-quality food prepared in bulk quantities."
    },
    {
      icon: <Users size={32} />,
      title: "Event Catering",
      description: "Customized catering solutions for family events, corporate functions, and special occasions."
    },
    {
      icon: <Calendar size={32} />,
      title: "Wedding Services",
      description: "Comprehensive catering services for weddings with customized menus and professional service."
    },
    {
      icon: <Package size={32} />,
      title: "Bulk Food Preparation",
      description: "Large-scale food preparation and packaging services for various requirements and events."
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "HR Manager, Tech Solutions",
      quote: "Kaviya Hotel has been our corporate lunch provider for over 2 years. Their food quality and service consistency is exceptional!",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      role: "Event Organizer",
      quote: "We hired Kaviya for our annual corporate event. The variety of dishes and taste was loved by all our 300+ attendees.",
      rating: 5
    },
    {
      name: "Ananya Patel",
      role: "Wedding Planner",
      quote: "The team at Kaviya Hotel delivered beyond our expectations for my client's wedding reception. Highly recommended!",
      rating: 4
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center text-white">
        <div className="container py-20 md:py-28">
          <div className="max-w-3xl mx-auto md:mx-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Premium Catering Services for Your Special Occasions
            </h1>
            <p className="text-xl mb-8 opacity-90 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              With over 10 years of experience in serving delicious meals for corporate events, weddings, and family functions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <Link to="/contact" className="btn bg-white text-primary hover:bg-gray-100 font-medium text-base py-3 px-8">
                Request Quote
              </Link>
              <Link to="/services" className="btn border-2 border-white text-white hover:bg-white/10 font-medium text-base py-3 px-8">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&q=80" 
                alt="Kaviya Hotel Kitchen"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4 text-gray-800">
                Welcome to <span className="text-primary">Kaviya Hotel</span>
              </h2>
              <p className="text-gray-600 mb-6">
                For over a decade, we have been delivering exceptional food services in Hosur, Tamil Nadu.
                Our journey began with a passion for authentic flavors and has grown into a trusted name 
                for corporate catering and event food services.
              </p>
              <p className="text-gray-600 mb-6">
                At Kaviya Hotel, we specialize in preparing bulk quantities of food without compromising 
                on quality or taste. Our experienced chefs craft each dish with precision and care, 
                ensuring that your guests or employees enjoy a memorable culinary experience.
              </p>
              <Link to="/about" className="btn btn-primary">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From daily corporate meal deliveries to grand wedding receptions, 
              we offer comprehensive catering solutions tailored to your needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-4">Ready to Plan Your Next Event?</h2>
            <p className="mb-8">
              Contact us today to discuss your catering needs and get a customized quote for your event.
            </p>
            <Link to="/contact" className="btn bg-white text-primary hover:bg-gray-100 font-medium">
              Contact Us Now
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We take pride in providing exceptional service to our clients. Here's what they have to say about us.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                quote={testimonial.quote}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
