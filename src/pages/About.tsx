
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ChefHat, Users } from 'lucide-react';

const About: React.FC = () => {
  const milestones = [
    {
      year: "2013",
      title: "Humble Beginnings",
      description: "Kaviya Hotel was founded with a vision to provide authentic and quality food services."
    },
    {
      year: "2015",
      title: "Corporate Partnerships",
      description: "Established first major corporate food service contracts with local businesses."
    },
    {
      year: "2017",
      title: "Expanded Services",
      description: "Added event catering to our service offerings, including weddings and large gatherings."
    },
    {
      year: "2020",
      title: "Facility Expansion",
      description: "Upgraded our kitchen facilities to handle larger volumes and more diverse menus."
    },
    {
      year: "2023",
      title: "Quality Recognition",
      description: "Received local recognition for outstanding food quality and service reliability."
    },
  ];

  const team = [
    {
      name: "Ramesh Kumar",
      position: "Founder & Head Chef",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Lakshmi Devi",
      position: "Operations Manager",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Suresh Reddy",
      position: "Client Relations",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80"
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-12 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-serif font-bold mb-4">About Kaviya Hotel</h1>
            <p className="text-gray-600 text-lg mb-0">
              Discover our journey of over 10 years in the food service industry
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&q=80" 
                alt="Kaviya Hotel Story"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Established in 2013 in Hosur, Tamil Nadu, Kaviya Hotel began as a small family business with a 
                passion for authentic cooking and traditional recipes. What started as a modest kitchen has grown 
                into a trusted name in corporate catering and event food services.
              </p>
              <p className="text-gray-600 mb-4">
                Our founder, Mr. Ramesh Kumar, brought his expertise in traditional South Indian cuisine and 
                combined it with modern cooking techniques to create a unique culinary experience for our clients.
              </p>
              <p className="text-gray-600">
                Over the years, we have expanded our services to include corporate daily meal delivery, 
                wedding catering, and event food services, all while maintaining our commitment to quality and authenticity.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission & Vision */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-serif font-bold mb-4 text-primary">Our Mission</h3>
              <p className="text-gray-600">
                To provide exceptional food services that exceed client expectations by combining traditional 
                flavors with modern presentation and reliable service. We aim to be the preferred choice for 
                corporate catering and events in Hosur and surrounding areas.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-serif font-bold mb-4 text-secondary">Our Vision</h3>
              <p className="text-gray-600">
                To become the leading food service provider in the region, known for our quality, reliability,
                and ability to handle catering requirements of any scale while maintaining the authentic taste
                that we are known for.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Journey Timeline */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center">Our Journey</h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center md:justify-between ${index % 2 === 0 ? 'flex-row' : 'md:flex-row-reverse'}`}>
                  
                  {/* Content */}
                  <div className="md:w-5/12 bg-white p-6 rounded-lg shadow-md z-10">
                    <h3 className="text-xl font-medium mb-1">{milestone.title}</h3>
                    <p className="text-primary font-bold mb-2">{milestone.year}</p>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                  
                  {/* Center Point */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <Star size={18} className="text-white" />
                  </div>
                  
                  {/* Empty Space for Alternating Layout */}
                  <div className="hidden md:block md:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center">Meet Our Team</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-1">{member.name}</h3>
                  <p className="text-primary">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center">Why Choose Us</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <ChefHat size={32} />
              </div>
              <h3 className="text-xl font-medium mb-3">Expert Chefs</h3>
              <p className="text-gray-600">
                Our team of experienced chefs specializes in authentic South Indian cuisine.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-medium mb-3">10+ Years Experience</h3>
              <p className="text-gray-600">
                A decade of expertise in handling bulk food preparation and catering.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-medium mb-3">Quality Assured</h3>
              <p className="text-gray-600">
                We never compromise on the quality and freshness of our ingredients.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <ChefHat size={32} />
              </div>
              <h3 className="text-xl font-medium mb-3">Customized Solutions</h3>
              <p className="text-gray-600">
                We tailor our menu and services to meet your specific requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Ready to Experience Our Services?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Get in touch with us today to discuss how we can cater to your needs with our premium food services.
          </p>
          <Link to="/contact" className="btn bg-white text-primary hover:bg-gray-100">
            Contact Us Now
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
