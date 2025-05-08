import React, { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(element => {
      observer.observe(element);
    });

    return () => {
      document.querySelectorAll('.fade-in').forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  const advantages = [
    "24/7 local support based in Central Florida",
    "20+ years of industry experience",
    "Certified technicians and IT professionals",
    "Flat-rate pricing with no hidden fees",
    "Custom solutions tailored to your business needs",
    "Proactive monitoring and maintenance",
  ];

  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team working" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-900 text-white p-6 rounded-lg shadow-lg hidden md:block">
                <p className="text-2xl font-bold">15+</p>
                <p>Years serving Central Florida</p>
              </div>
            </div>
          </div>

          <div className="fade-in" style={{ transitionDelay: '200ms' }}>
            <h2 className="text-3xl font-bold mb-6 text-blue-900">About Silestri IT Services</h2>
            <p className="mb-6 text-lg text-gray-700">
              Founded in 2010, Silestri has been the trusted technology partner for small businesses 
              throughout Central Florida. We combine enterprise-level expertise with personalized 
              service to deliver IT solutions that help your business thrive.
            </p>
            <p className="mb-8 text-lg text-gray-700">
              Our mission is simple: provide reliable, cost-effective IT services that allow small 
              businesses to leverage technology as a competitive advantage, not view it as a 
              necessary expense.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="mr-2 text-blue-500 flex-shrink-0 mt-1" size={20} />
                  <p>{advantage}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;