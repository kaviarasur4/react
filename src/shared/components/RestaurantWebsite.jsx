import React, { useState, useEffect } from 'react';
import { ChefHat, Star, Clock, MapPin, Phone, Mail, Instagram, Facebook, Twitter, ArrowRight, Menu, X } from 'lucide-react';

const RestaurantWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Truffle Risotto', price: '$28', description: 'Creamy arborio rice with black truffle, parmesan, and wild mushrooms', category: 'mains' },
    { name: 'Seared Scallops', price: '$32', description: 'Pan-seared scallops with cauliflower purée and crispy pancetta', category: 'mains' },
    { name: 'Duck Confit', price: '$35', description: 'Slow-cooked duck leg with cherry gastrique and roasted vegetables', category: 'mains' },
    { name: 'Burrata Caprese', price: '$18', description: 'Fresh burrata with heirloom tomatoes, basil oil, and aged balsamic', category: 'starters' },
    { name: 'Tuna Tartare', price: '$22', description: 'Fresh ahi tuna with avocado, citrus, and sesame crackers', category: 'starters' },
    { name: 'Chocolate Soufflé', price: '$14', description: 'Dark chocolate soufflé with vanilla bean ice cream', category: 'desserts' },
  ];

  const reviews = [
    { name: 'Sarah Chen', rating: 5, text: 'Absolutely incredible dining experience. The truffle risotto was perfection!' },
    { name: 'Michael Rodriguez', rating: 5, text: 'Best restaurant in the city. Impeccable service and amazing food.' },
    { name: 'Emma Thompson', rating: 5, text: 'The atmosphere is magical and every dish is a work of art.' },
  ];

  const NavigationMenu = () => (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <ChefHat className="h-8 w-8 text-amber-400" />
            <span className="text-2xl font-bold text-white">Lumière</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['Home', 'Menu', 'About', 'Reviews', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item.toLowerCase())}
                className="text-white hover:text-amber-400 transition-colors duration-200 font-medium"
              >
                {item}
              </button>
            ))}
          </div>
          
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg">
          <div className="px-4 py-4 space-y-4">
            {['Home', 'Menu', 'About', 'Reviews', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActiveSection(item.toLowerCase());
                  setIsMenuOpen(false);
                }}
                className="block text-white hover:text-amber-400 transition-colors duration-200 font-medium"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );

  const HeroSection = () => (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0  "></div>
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <div className="mb-8 animate-fade-in">
          <ChefHat className="h-16 w-16 text-amber-400 mx-auto mb-4" />
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-300 bg-clip-text text-transparent">
            Lumière
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            Where culinary artistry meets exceptional dining
          </p>
        </div>
        
        <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
          <button className="group bg-gradient-to-r from-amber-400 to-amber-500 text-black px-8 py-4 rounded-full font-semibold hover:from-amber-300 hover:to-amber-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center w-full md:w-auto">
            Reserve Table
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 w-full md:w-auto">
            View Menu
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );

  const MenuSection = () => {
    const [activeCategory, setActiveCategory] = useState('starters');
    const categories = ['starters', 'mains', 'desserts'];

    return (
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Our Menu</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Carefully crafted dishes using the finest seasonal ingredients
            </p>
          </div>
          
          <div className="flex justify-center mb-12">
            <div className="bg-gray-800 rounded-full p-2 flex space-x-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 capitalize font-medium ${
                    activeCategory === category
                      ? 'bg-amber-400 text-black'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {menuItems
              .filter((item) => item.category === activeCategory)
              .map((item, index) => (
                <div
                  key={index}
                  className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-gray-800/70 transition-all duration-300 border border-gray-700 hover:border-amber-400/50"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-semibold text-white group-hover:text-amber-400 transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-2xl font-bold text-amber-400">{item.price}</span>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              ))}
          </div>
        </div>
      </section>
    );
  };

  const AboutSection = () => (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold text-white mb-6">About Lumière</h2>
            <p className="text-xl text-gray-400 mb-6 leading-relaxed">
              Founded in 2015, Lumière has been at the forefront of modern fine dining, 
              combining traditional French techniques with contemporary innovation.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Our award-winning chef creates culinary masterpieces using locally sourced, 
              seasonal ingredients, delivering an unforgettable dining experience in an 
              elegant atmosphere.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">8+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">50k+</div>
                <div className="text-gray-400">Happy Customers</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-3xl p-8 backdrop-blur-sm border border-amber-400/30">
              <div className="bg-gray-800 rounded-2xl p-8 text-center">
                <ChefHat className="h-16 w-16 text-amber-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Chef Antoine Dubois</h3>
                <p className="text-gray-400 mb-4">Executive Chef</p>
                <p className="text-gray-300 italic">
                  "Every dish tells a story, and I'm here to make sure it's extraordinary."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const ReviewsSection = () => (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">What Our Guests Say</h2>
          <div className="flex justify-center items-center space-x-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-amber-400 fill-current" />
            ))}
            <span className="text-xl text-gray-400 ml-2">4.9/5 Average Rating</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-amber-400/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{review.text}"</p>
              <div className="font-semibold text-white">— {review.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const ContactSection = () => (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Visit Us</h2>
          <p className="text-xl text-gray-400">We'd love to welcome you to Lumière</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-colors duration-300">
              <MapPin className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-400">123 Gourmet Street<br />Downtown, NY 10001</p>
            </div>
          </div>
          
          <div className="text-center group">
            <div className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-colors duration-300">
              <Phone className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-400">(555) 123-4567</p>
            </div>
          </div>
          
          <div className="text-center group">
            <div className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-colors duration-300">
              <Clock className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Hours</h3>
              <p className="text-gray-400">Tue-Sun: 5PM-11PM<br />Closed Mondays</p>
            </div>
          </div>
          
          <div className="text-center group">
            <div className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-colors duration-300">
              <Mail className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-400">hello@lumiere.com</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-amber-400 to-amber-500 text-black px-12 py-4 rounded-full font-semibold text-lg hover:from-amber-300 hover:to-amber-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            Make a Reservation
          </button>
        </div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="bg-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <ChefHat className="h-8 w-8 text-amber-400" />
            <span className="text-2xl font-bold text-white">Lumière</span>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Lumière Restaurant. All rights reserved. | Crafted with passion for culinary excellence.
          </p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <NavigationMenu />
      <HeroSection />
      <MenuSection />
      <AboutSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default RestaurantWebsite;