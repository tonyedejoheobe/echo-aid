
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const VolunteerForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    availability: '',
    interests: '',
    experience: '',
    motivation: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Volunteer form submitted:', formData);
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest in volunteering. We'll be in touch soon!",
    });
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      location: '',
      availability: '',
      interests: '',
      experience: '',
      motivation: ''
    });
  };

  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="volunteer" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to make a difference? Fill out our volunteer application and become part of our global community of changemakers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Volunteer Opportunities */}
          <div className="space-y-6">
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Remote Opportunities
                </CardTitle>
                <CardDescription>
                  Contribute from anywhere in the world through our digital volunteer programs.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-secondary" />
                  Field Work
                </CardTitle>
                <CardDescription>
                  Join our on-ground teams in communities where we're making direct impact.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-accent" />
                  Flexible Schedule
                </CardTitle>
                <CardDescription>
                  Choose commitments that fit your lifestyle, from weekend projects to long-term assignments.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Application Form */}
          <div className="lg:col-span-2">
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="text-2xl font-display">Volunteer Application</CardTitle>
                <CardDescription>
                  Tell us about yourself and how you'd like to contribute to our mission.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleChange('firstName', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleChange('lastName', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location (City, Country) *</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => handleChange('location', e.target.value)}
                      required
                    />
                  </div>

                  {/* Availability */}
                  <div className="space-y-2">
                    <Label htmlFor="availability">Availability *</Label>
                    <Select onValueChange={(value) => handleChange('availability', value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your availability" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekends">Weekends Only</SelectItem>
                        <SelectItem value="evenings">Evenings (Weekdays)</SelectItem>
                        <SelectItem value="flexible">Flexible Schedule</SelectItem>
                        <SelectItem value="full-time">Full-time Commitment</SelectItem>
                        <SelectItem value="project-based">Project-based</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Areas of Interest */}
                  <div className="space-y-2">
                    <Label htmlFor="interests">Areas of Interest *</Label>
                    <Select onValueChange={(value) => handleChange('interests', value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="What area would you like to help with?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="education">Education & Training</SelectItem>
                        <SelectItem value="healthcare">Healthcare Support</SelectItem>
                        <SelectItem value="technology">Technology & Digital</SelectItem>
                        <SelectItem value="fundraising">Fundraising & Events</SelectItem>
                        <SelectItem value="marketing">Marketing & Communications</SelectItem>
                        <SelectItem value="administration">Administration</SelectItem>
                        <SelectItem value="field-work">Field Work</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Experience */}
                  <div className="space-y-2">
                    <Label htmlFor="experience">Relevant Experience</Label>
                    <Textarea
                      id="experience"
                      placeholder="Tell us about any relevant skills, education, or volunteer experience you have..."
                      value={formData.experience}
                      onChange={(e) => handleChange('experience', e.target.value)}
                      className="min-h-[100px]"
                    />
                  </div>

                  {/* Motivation */}
                  <div className="space-y-2">
                    <Label htmlFor="motivation">Why do you want to volunteer with us? *</Label>
                    <Textarea
                      id="motivation"
                      placeholder="Share what motivates you to join our mission and how you hope to contribute..."
                      value={formData.motivation}
                      onChange={(e) => handleChange('motivation', e.target.value)}
                      required
                      className="min-h-[100px]"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
                  >
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerForm;
