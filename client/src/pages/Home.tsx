/**
 * Velocity Slopes Design: High-speed winter sports championship aesthetic
 * - Bold diagonal sections creating downhill momentum
 * - Racing red (#E63946), alpine blue (#1D3557), gold (#FFB703)
 * - Fast, snappy animations with diagonal slide-ins
 * - Bebas Neue headings, Roboto body text
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Trophy, Rocket, Users, TrendingUp, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";
import Footer from "@/components/Footer";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  const [, setLocation] = useLocation();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Countdown to December 27, 2025 8:00 PM GMT
    const targetDate = new Date('2025-12-27T20:00:00Z').getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };
    
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      id: "sleigh-tracker-pro",
      title: "Sleigh Tracker Pro",
      description: "Real-time GPS tracking for holiday deliveries with AI-powered route optimization. Making sure every gift arrives on time!",
      category: "Logistics",
      team: "Team Rudolph",
      status: "🎯 Finalist",
      investment: "Seeking $500K"
    },
    {
      id: "snowflake-analytics",
      title: "Snowflake Analytics",
      description: "Beautiful data visualization platform that turns complex datasets into stunning winter-themed dashboards.",
      category: "Data Science",
      team: "Frost Giants",
      status: "🏆 Winner",
      investment: "Series A Ready"
    },
    {
      id: "cocoa-connect",
      title: "Cocoa Connect",
      description: "Social platform connecting hot chocolate enthusiasts worldwide. Community-driven recipe sharing with AR try-before-you-brew.",
      category: "Social",
      team: "Marshmallow Squad",
      status: "🔥 Hot Pick",
      investment: "Seeking $250K"
    },
    {
      id: "gift-genius-ai",
      title: "Gift Genius AI",
      description: "ML-powered gift recommendation engine that analyzes personality traits and preferences to suggest the perfect present.",
      category: "AI/ML",
      team: "Santa's Helpers",
      status: "🎯 Finalist",
      investment: "Seeking $750K"
    },
    {
      id: "winter-wellness",
      title: "Winter Wellness",
      description: "Seasonal mental health app with guided meditation, mood tracking, and community support for beating winter blues.",
      category: "Health Tech",
      team: "Evergreen Minds",
      status: "💚 Rising Star",
      investment: "Seeking $400K"
    },
    {
      id: "festive-finance",
      title: "Festive Finance",
      description: "Smart budgeting tool for holiday spending with gamification and savings challenges. Make your money jingle all the way!",
      category: "FinTech",
      team: "Penny Pinchers",
      status: "🎯 Finalist",
      investment: "Seeking $600K"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Diagonal momentum with championship podium */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1D3557] via-[#2B2D42] to-[#1D3557]"
        style={{
          backgroundImage: 'url(/images/hero-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        {/* Animated speed lines */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E63946] to-transparent animate-speed-line" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFB703] to-transparent animate-speed-line" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-3/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E63946] to-transparent animate-speed-line" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container relative z-10 text-center text-white">
          <div className="animate-slide-diagonal">
            <Badge className="mb-6 px-6 py-2 text-lg bg-[#FFB703] text-[#2B2D42] hover:bg-[#FFB703]/90 border-0">
              <Trophy className="w-5 h-5 mr-2 inline" />
              Championship Event 2025
            </Badge>
            
            <h1 className="text-7xl md:text-9xl font-bold mb-6 leading-none tracking-tight">
              THE CHRISTMAS
              <span className="block text-[#E63946] mt-2">RUSH</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
              Where Innovation Meets Celebration. <span className="text-[#FFB703] font-medium">72 Hours</span> of Intense Building. 
              <span className="text-[#E63946] font-medium"> Investors Watching.</span> One Championship Trophy.
            </p>

            {/* Countdown Timer */}
            <div className="flex justify-center gap-4 md:gap-8 mb-12">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds }
              ].map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm border-2 border-[#FFB703] rounded-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
                  <div className="text-4xl md:text-5xl font-bold text-[#FFB703]">{item.value}</div>
                  <div className="text-sm md:text-base uppercase tracking-wider mt-1">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('projects-section')}
                className="bg-[#E63946] hover:bg-[#E63946]/90 text-white px-8 py-6 text-lg font-bold uppercase tracking-wider border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Rocket className="mr-2 h-5 w-5" />
                View Projects
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection('investor-section')}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1D3557] px-8 py-6 text-lg font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105"
              >
                <TrendingUp className="mr-2 h-5 w-5" />
                Investor Info
              </Button>
            </div>
          </div>
        </div>

        {/* Diagonal bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-[#F8F9FA]" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)' }}></div>
      </section>

      {/* Stats Section - Quick impact metrics */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: '150+', label: 'Participants', color: '#E63946' },
              { icon: Rocket, value: '42', label: 'Projects Built', color: '#1D3557' },
              { icon: Trophy, value: '$5M+', label: 'Prize Pool', color: '#FFB703' },
              { icon: TrendingUp, value: '18', label: 'Investors Watching', color: '#E63946' }
            ].map((stat, index) => (
              <div key={index} className="text-center transform hover:scale-105 transition-transform duration-300">
                <stat.icon className="w-12 h-12 mx-auto mb-4" style={{ color: stat.color }} />
                <div className="text-5xl font-bold mb-2" style={{ color: stat.color }}>{stat.value}</div>
                <div className="text-lg text-[#2B2D42] uppercase tracking-wide accent-text">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Diagonal layout with championship cards */}
      <section 
        id="projects-section"
        className="py-32 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1D3557 0%, #2B2D42 100%)',
          backgroundImage: 'url(/images/projects-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        {/* Top diagonal edge */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-[#F8F9FA]" style={{ clipPath: 'polygon(0 0, 100% 100%, 100% 0)' }}></div>

        <div className="container relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-6 py-2 text-base bg-[#FFB703] text-[#2B2D42] hover:bg-[#FFB703]/90 border-0">
              <Zap className="w-4 h-4 mr-2 inline" />
              Competition Highlights
            </Badge>
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-6">
              RACING TO THE
              <span className="block text-[#E63946] mt-2">FINISH LINE</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Six exceptional teams. Seventy-two hours of intense development. 
              <span className="text-[#FFB703] font-medium"> Investors are taking notes.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id}
                className="bg-white/95 backdrop-blur-sm border-2 border-transparent hover:border-[#FFB703] transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-3">
                    <Badge variant="outline" className="border-[#1D3557] text-[#1D3557] font-medium">
                      {project.category}
                    </Badge>
                    <span className="text-2xl">{project.status.split(' ')[0]}</span>
                  </div>
                  <CardTitle className="text-3xl text-[#1D3557] mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-base text-[#2B2D42]/70">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-[#2B2D42]">
                      <Users className="w-4 h-4 mr-2 text-[#1D3557]" />
                      <span className="font-medium">{project.team}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <TrendingUp className="w-4 h-4 mr-2 text-[#E63946]" />
                      <span className="font-bold text-[#E63946]">{project.investment}</span>
                    </div>
                    <Button 
                      onClick={() => setLocation(`/project/${project.id}`)}
                      className="w-full mt-4 bg-[#E63946] hover:bg-[#E63946]/90 text-white font-bold uppercase tracking-wide"
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom diagonal edge */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)' }}></div>
      </section>

      {/* Investor CTA Section */}
      <section 
        id="investor-section"
        className="py-32 relative overflow-hidden bg-white"
        style={{
          backgroundImage: 'url(/images/investor-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'soft-light'
        }}
      >
        <div className="container text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 px-6 py-2 text-lg bg-[#FFB703] text-[#2B2D42] hover:bg-[#FFB703]/90 border-0">
              <TrendingUp className="w-5 h-5 mr-2 inline" />
              Investment Opportunity
            </Badge>
            
            <h2 className="text-6xl md:text-7xl font-bold text-[#1D3557] mb-6">
              DISCOVER THE NEXT
              <span className="block text-[#E63946] mt-2">BIG THING</span>
            </h2>
            
            <p className="text-xl text-[#2B2D42]/80 mb-12 leading-relaxed">
              These aren't just hackathon projects—they're potential unicorns in the making. 
              <span className="font-bold text-[#1D3557]"> Passionate teams.</span>
              <span className="font-bold text-[#E63946]"> Innovative solutions.</span>
              <span className="font-bold text-[#FFB703]"> Market-ready ideas.</span>
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { title: 'Vetted Teams', desc: 'Top talent from leading universities and companies', icon: Users },
                { title: 'Market Validation', desc: 'Real problems, tested solutions, proven demand', icon: TrendingUp },
                { title: 'Fast Execution', desc: 'From concept to MVP in 72 hours', icon: Zap }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-[#1D3557] to-[#2B2D42] p-8 rounded-lg text-white transform hover:scale-105 transition-all duration-300">
                  <item.icon className="w-12 h-12 mx-auto mb-4 text-[#FFB703]" />
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-white/80">{item.desc}</p>
                </div>
              ))}
            </div>

            <Button 
              size="lg"
              className="bg-[#E63946] hover:bg-[#E63946]/90 text-white px-12 py-8 text-xl font-bold uppercase tracking-wider border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
            >
              <Trophy className="mr-3 h-6 w-6" />
              Connect With Teams
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
