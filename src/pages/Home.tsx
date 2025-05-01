
import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Users, Calendar, Utensils, Package, MapPin } from 'lucide-react';
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

  const partners = [
    "Sequel Logistics",
    "Titan India Limited",
    "TVS",
    "NR Industries"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient-new min-h-screen flex items-center text-white">
        <div className="container py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
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
            <div className="order-1 md:order-2">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/lovable-uploads/35b15c61-f048-4007-9d5b-f32e3391d193.png" 
                  alt="Delicious biryani" 
                  className="rounded-lg shadow-xl w-full h-48 object-cover"
                />
                <img 
                  src="/lovable-uploads/5c480888-0c03-4491-9e06-6dfea73d7ce1.png" 
                  alt="Indian curry dishes" 
                  className="rounded-lg shadow-xl w-full h-48 object-cover"
                />
                <img 
                  src="/lovable-uploads/ee8966fd-20ef-4335-8779-76d37127d814.png" 
                  alt="Traditional thali" 
                  className="rounded-lg shadow-xl w-full h-48 object-cover"
                />
                <img 
                  src="/lovable-uploads/1cda7f83-899a-4abe-9fcd-a371fe45d759.png" 
                  alt="Professional kitchen" 
                  className="rounded-lg shadow-xl w-full h-48 object-cover"
                />
              </div>
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
                src="/lovable-uploads/1cda7f83-899a-4abe-9fcd-a371fe45d759.png" 
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
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/about" className="btn btn-primary">
                  Learn More About Us
                </Link>
                <a 
                  href="https://maps.app.goo.gl/zz3Fn9BK3GBy31ZT8" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-primary hover:underline"
                >
                  <MapPin size={18} className="mr-1" /> Find Us on Map
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Founder Section */}
      <section className="section bg-primary/10">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Our Founder</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-serif mb-4">Annamali K</h3>
            <p className="text-gray-700 mb-6">
              With a vision to provide premium catering services that blend traditional flavors with modern culinary techniques, 
              Annamali K established Kaviya Hotel over a decade ago. His dedication to quality and authentic taste has made 
              Kaviya Hotel one of the most trusted names in corporate and event catering services in Hosur.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="section bg-gray-900 text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Our Services</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              From daily corporate meal deliveries to grand wedding receptions, 
              we offer comprehensive catering solutions tailored to your needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all">
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-medium mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Find Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit our location in Hosur or contact us to discuss your catering needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2 flex flex-col justify-center">
              <h3 className="text-2xl font-serif mb-6">Our Location</h3>
              <p className="text-gray-600 mb-4">
                <strong>Address:</strong> Govinda Agraharam, Hosur, Tamil Nadu 635126
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Phone:</strong> <a href="tel:+917373422399" className="hover:text-primary transition-colors">+91 7373 422399</a>
              </p>
              <p className="text-gray-600 mb-6">
                <strong>Hours:</strong> Monday - Sunday: 7:00 AM - 10:00 PM
              </p>
              <a 
                href="https://maps.app.goo.gl/zz3Fn9BK3GBy31ZT8" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary inline-flex items-center"
              >
                <MapPin size={18} className="mr-2" /> View on Google Maps
              </a>
            </div>
            <div className="md:col-span-3 h-80 md:h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.664770791406!2d77.82766601078218!3d12.864934208942968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae766c523291c7%3A0xc5c47b29990c41a5!2sGovinda%20Agraharam%2C%20Hosur%2C%20Tamil%20Nadu%20635109!5e0!3m2!1sen!2sin!4v1718076622422!5m2!1sen!2sin"
                className="w-full h-full rounded-lg shadow-md"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kaviya Hotel Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Our Partners</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're proud to serve some of the most prestigious companies in the region
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg px-8 py-6 min-w-[200px] text-center">
                <p className="font-medium text-lg text-gray-800">{partner}</p>
              </div>
            ))}
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
