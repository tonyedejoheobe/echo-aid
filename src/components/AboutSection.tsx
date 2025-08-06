
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Award, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 section-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            About HopeForward
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For over a decade, we've been dedicated to creating sustainable change 
            in communities around the world through education, healthcare, and economic empowerment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="text-center card-shadow hover:card-hover-shadow transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8">
              <Target className="h-16 w-16 mx-auto mb-6 text-primary" />
              <h3 className="text-xl font-display font-semibold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower communities through sustainable development programs that create lasting positive impact.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center card-shadow hover:card-hover-shadow transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8">
              <Lightbulb className="h-16 w-16 mx-auto mb-6 text-secondary" />
              <h3 className="text-xl font-display font-semibold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                A world where every person has access to quality education, healthcare, and economic opportunities.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center card-shadow hover:card-hover-shadow transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8">
              <Users className="h-16 w-16 mx-auto mb-6 text-accent" />
              <h3 className="text-xl font-display font-semibold mb-4">Our Community</h3>
              <p className="text-muted-foreground">
                A global network of passionate volunteers, partners, and supporters working together for change.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center card-shadow hover:card-hover-shadow transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8">
              <Award className="h-16 w-16 mx-auto mb-6 text-primary" />
              <h3 className="text-xl font-display font-semibold mb-4">Our Impact</h3>
              <p className="text-muted-foreground">
                Recognized globally for our transparent approach and measurable results in community development.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 card-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                Building Bridges to Better Futures
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 2012, HopeForward emerged from a simple belief: that sustainable change 
                happens when communities are empowered to drive their own development. We work 
                hand-in-hand with local leaders to identify needs and implement solutions that last.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our approach focuses on three core areas: education access, healthcare infrastructure, 
                and economic empowerment. By addressing these fundamental needs, we help communities 
                build the foundation for long-term prosperity and growth.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-primary/5 rounded-2xl">
                <div className="text-3xl font-bold text-primary mb-2">12+</div>
                <div className="text-sm text-muted-foreground">Years of Service</div>
              </div>
              <div className="text-center p-6 bg-secondary/5 rounded-2xl">
                <div className="text-3xl font-bold text-secondary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-accent/5 rounded-2xl">
                <div className="text-3xl font-bold text-accent mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center p-6 bg-primary/5 rounded-2xl">
                <div className="text-3xl font-bold text-primary mb-2">$2.5M</div>
                <div className="text-sm text-muted-foreground">Funds Raised</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
