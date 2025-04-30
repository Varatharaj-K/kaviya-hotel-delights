
import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const Contact: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-12 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-serif font-bold mb-4">Contact Us</h1>
            <p className="text-gray-600 text-lg mb-0">
              Get in touch with us to discuss your catering needs or request a quote
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information and Form */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                <h3 className="text-2xl font-serif font-semibold mb-6">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4 flex-shrink-0 mt-1">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Our Location</h4>
                      <p className="text-gray-600">Govinda Agraharam, Hosur, Tamil Nadu 635126</p>
                      <a 
                        href="https://maps.app.goo.gl/zz3Fn9BK3GBy31ZT8" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-primary hover:underline mt-1 inline-block"
                      >
                        View on Map
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4 flex-shrink-0 mt-1">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Phone Number</h4>
                      <a href="tel:+919876543210" className="text-gray-600 hover:text-primary">+91 98765 43210</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4 flex-shrink-0 mt-1">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Email Address</h4>
                      <a href="mailto:info@kaviyahotel.com" className="text-gray-600 hover:text-primary">info@kaviyahotel.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4 flex-shrink-0 mt-1">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Business Hours</h4>
                      <p className="text-gray-600 mb-1">Monday - Sunday: 7:00 AM - 10:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                <h3 className="text-2xl font-serif font-semibold mb-6">Send Us a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="section bg-gray-50 pb-0">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Our Location</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit us at our location in Hosur or request a meeting to discuss your catering needs.
            </p>
          </div>
        </div>
        
        <div className="h-[400px] w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.664770791406!2d77.82766601078218!3d12.864934208942968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae766c523291c7%3A0xc5c47b29990c41a5!2sGovinda%20Agraharam%2C%20Hosur%2C%20Tamil%20Nadu%20635109!5e0!3m2!1sen!2sin!4v1718076622422!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Kaviya Hotel Location"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
