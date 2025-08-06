
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-primary" />
              <span className="text-xl font-display font-bold">HopeForward</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Creating hope and building tomorrow through sustainable community development programs worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-display font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#volunteer" className="text-gray-300 hover:text-white transition-colors">Volunteer</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Our Projects</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Impact Stories</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-display font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-gray-300">hello@hopeforward.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-gray-300">New York, NY, USA</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-display font-semibold">Stay Updated</h3>
            <p className="text-gray-300 text-sm">
              Subscribe to our newsletter for the latest updates and impact stories.
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary"
              />
              <Button className="w-full bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 HopeForward. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
