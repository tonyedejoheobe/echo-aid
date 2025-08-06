
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Globe, Heart } from 'lucide-react';

const HeroSection = () => {
  const scrollToVolunteer = () => {
    const element = document.getElementById('volunteer');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center text-white space-y-8 fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
            Creating Hope,
            <br />
            <span className="text-yellow-200">Building Tomorrow</span>
          </h1>
          
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Join our mission to create lasting change in communities worldwide. 
            Together, we can build a future where everyone has the opportunity to thrive.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg"
              onClick={scrollToVolunteer}
              className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 text-lg group"
            >
              Become a Volunteer
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToAbout}
              className="border-2 border-white text-white hover:bg-white hover:text-primary bg-transparent font-semibold px-8 py-4 text-lg transition-all duration-200"
            >
              Learn Our Story
            </Button>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto">
            <div className="text-center space-y-2">
              <Users className="h-12 w-12 mx-auto mb-4 text-yellow-200" />
              <div className="text-3xl md:text-4xl font-bold">2,500+</div>
              <div className="text-lg opacity-90">Volunteers Worldwide</div>
            </div>
            <div className="text-center space-y-2">
              <Globe className="h-12 w-12 mx-auto mb-4 text-yellow-200" />
              <div className="text-3xl md:text-4xl font-bold">45</div>
              <div className="text-lg opacity-90">Countries Served</div>
            </div>
            <div className="text-center space-y-2">
              <Heart className="h-12 w-12 mx-auto mb-4 text-yellow-200" />
              <div className="text-3xl md:text-4xl font-bold">100k+</div>
              <div className="text-lg opacity-90">Lives Impacted</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
