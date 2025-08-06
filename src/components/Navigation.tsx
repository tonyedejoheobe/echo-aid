
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Heart } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary" />
            <span className="text-xl font-display font-bold text-primary">HopeForward</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('volunteer')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Volunteer
            </button>
            <Button 
              variant="default"
              onClick={() => scrollToSection('volunteer')}
              className="bg-primary hover:bg-primary/90"
            >
              Get Involved
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('volunteer')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
              >
                Volunteer
              </button>
              <div className="px-3 py-2">
                <Button 
                  variant="default"
                  onClick={() => scrollToSection('volunteer')}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Get Involved
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
