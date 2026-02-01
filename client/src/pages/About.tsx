/**
 * Velocity Slopes Design: About page
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Trophy, Users, Zap, Target, Heart, Rocket } from "lucide-react";
import { useLocation } from "wouter";
import Footer from "@/components/Footer";

export default function About() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#1D3557] to-[#2B2D42] text-white py-6 sticky top-0 z-50 shadow-lg w-full">
        <div className="container flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={() => setLocation('/')}
            className="text-white hover:text-[#FFB703] hover:bg-white/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <div className="flex items-center gap-3">
            <img src="/images/countdown-icon.png" alt="Christmas Rush" className="w-8 h-8" />
            <span className="text-xl font-bold">THE CHRISTMAS RUSH</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1D3557] via-[#2B2D42] to-[#1D3557] text-white py-20 w-full">
        <div className="container text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            ABOUT THE
            <span className="block text-[#E63946] mt-2">CHRISTMAS RUSH</span>
          </h1>
          <p className="text-2xl text-white/80 max-w-3xl mx-auto">
            Where holiday spirit meets startup velocity. The most exciting hackathon of the season.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container max-w-5xl">
          {/* Mission */}
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-bold text-[#1D3557] mb-6">Our Mission</h2>
            <p className="text-xl text-[#2B2D42]/80 leading-relaxed max-w-3xl mx-auto">
              The Christmas Rush is more than a hackathon - it's a celebration of innovation, creativity, and the entrepreneurial spirit. 
              We bring together the brightest minds to build solutions that matter, all while embracing the joy and magic of the holiday season.
            </p>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 border-[#E63946]/20 hover:border-[#E63946] transition-all text-center">
              <CardContent className="pt-8 pb-8">
                <Trophy className="w-16 h-16 mx-auto mb-4 text-[#FFB703]" />
                <h3 className="text-2xl font-bold text-[#1D3557] mb-3">Excellence</h3>
                <p className="text-[#2B2D42]/70">
                  We celebrate championship-level execution and reward teams that push boundaries.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#FFB703]/20 hover:border-[#FFB703] transition-all text-center">
              <CardContent className="pt-8 pb-8">
                <Heart className="w-16 h-16 mx-auto mb-4 text-[#E63946]" />
                <h3 className="text-2xl font-bold text-[#1D3557] mb-3">Community</h3>
                <p className="text-[#2B2D42]/70">
                  Building connections that last beyond the event, fostering collaboration and support.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#1D3557]/20 hover:border-[#1D3557] transition-all text-center">
              <CardContent className="pt-8 pb-8">
                <Rocket className="w-16 h-16 mx-auto mb-4 text-[#1D3557]" />
                <h3 className="text-2xl font-bold text-[#1D3557] mb-3">Impact</h3>
                <p className="text-[#2B2D42]/70">
                  Creating solutions that solve real problems and have the potential to scale.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* What Makes Us Different */}
          <Card className="bg-gradient-to-br from-[#1D3557] to-[#2B2D42] text-white mb-16">
            <CardContent className="pt-12 pb-12">
              <h2 className="text-4xl font-bold mb-8 text-center">What Makes Us Different</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-start gap-4 mb-6">
                    <Zap className="w-8 h-8 text-[#FFB703] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Investor Access</h3>
                      <p className="text-white/80">
                        Direct connections with active investors looking for their next portfolio company. 
                        18 VCs and angels are watching and ready to write checks.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Target className="w-8 h-8 text-[#FFB703] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Real Prizes</h3>
                      <p className="text-white/80">
                        $5M+ in prizes, credits, and resources. Winners get immediate funding offers, 
                        not just trophies and t-shirts.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-start gap-4 mb-6">
                    <Users className="w-8 h-8 text-[#FFB703] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Curated Teams</h3>
                      <p className="text-white/80">
                        We select the best talent from top universities and companies. 
                        Every participant is vetted for skill, passion, and commitment.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Trophy className="w-8 h-8 text-[#FFB703] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Championship Experience</h3>
                      <p className="text-white/80">
                        From venue to mentorship to post-event support, we treat this like 
                        the Olympics of hackathons. You deserve the best.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { value: "150+", label: "Participants" },
              { value: "42", label: "Projects" },
              { value: "$5M+", label: "In Prizes" },
              { value: "18", label: "Investors" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-[#E63946] mb-2">{stat.value}</div>
                <div className="text-lg text-[#2B2D42] uppercase tracking-wide accent-text">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center bg-[#FFB703] rounded-lg p-12">
            <h2 className="text-4xl font-bold text-[#2B2D42] mb-4">Ready to Join?</h2>
            <p className="text-xl text-[#2B2D42]/80 mb-8">
              Applications for the next Christmas Rush open in October 2025
            </p>
            <Button 
              size="lg"
              onClick={() => setLocation('/')}
              className="bg-[#E63946] hover:bg-[#E63946]/90 text-white px-12 py-6 text-xl font-bold uppercase tracking-wider"
            >
              View This Year's Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
