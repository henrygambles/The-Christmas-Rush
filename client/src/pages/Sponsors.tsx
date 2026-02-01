/**
 * Velocity Slopes Design: Sponsors page
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowLeft, Trophy, Zap, Gift, Award, X, Check, Loader2 } from "lucide-react";
import { useLocation } from "wouter";
import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import Footer from "@/components/Footer";

export default function Sponsors() {
  const [, setLocation] = useLocation();
  const [showPackagesModal, setShowPackagesModal] = useState(false);
  const [sponsorFormData, setSponsorFormData] = useState({
    name: "",
    email: "",
    company: "",
    tier: "",
    message: ""
  });

  const createSubmissionMutation = trpc.submissions.create.useMutation({
    onSuccess: () => {
      toast.success("Sponsorship inquiry sent! We'll be in touch soon.");
      setSponsorFormData({ name: "", email: "", company: "", tier: "", message: "" });
      setShowPackagesModal(false);
    },
    onError: (error) => {
      toast.error(error.message || "Failed to send inquiry. Please try again.");
    }
  });

  const handleSponsorFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSponsorFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSponsorSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!sponsorFormData.name || !sponsorFormData.email || !sponsorFormData.company) {
      toast.error("Please fill in all required fields");
      return;
    }

    await createSubmissionMutation.mutateAsync({
      type: "sponsor_inquiry",
      name: sponsorFormData.name,
      email: sponsorFormData.email,
      company: sponsorFormData.company,
      sponsorshipTier: sponsorFormData.tier,
      message: sponsorFormData.message
    });
  };

  const sponsors = {
    title: [
      {
        name: "Velocity Ventures",
        description: "Leading early-stage VC firm investing in the next generation of startups",
        contribution: "$2M in prizes + mentorship"
      },
      {
        name: "Alpine Capital",
        description: "Growth equity firm backing ambitious founders",
        contribution: "$1.5M in prizes + office hours"
      }
    ],
    gold: [
      {
        name: "CloudScale Technologies",
        description: "Enterprise cloud infrastructure provider",
        contribution: "$100K AWS credits per team"
      },
      {
        name: "DevTools Pro",
        description: "Developer productivity platform",
        contribution: "$50K in software licenses"
      },
      {
        name: "DataStream Analytics",
        description: "Real-time data processing solutions",
        contribution: "Free enterprise tier for 1 year"
      }
    ],
    silver: [
      {
        name: "CodeCraft Academy",
        contribution: "Technical workshops"
      },
      {
        name: "StartupLegal",
        contribution: "Free legal consultations"
      },
      {
        name: "BrandForge",
        contribution: "Design & branding services"
      },
      {
        name: "TechRecruit",
        contribution: "Hiring support"
      }
    ],
    community: [
      {
        name: "London Tech Hub",
        contribution: "Venue partnership"
      },
      {
        name: "Festive Foods Co.",
        contribution: "Catering services"
      },
      {
        name: "Energy Boost Drinks",
        contribution: "Beverages for all participants"
      },
      {
        name: "Comfort Sleep",
        contribution: "Sleeping bags & rest areas"
      }
    ]
  };

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
            OUR
            <span className="block text-[#FFB703] mt-2">SPONSORS</span>
          </h1>
          <p className="text-2xl text-white/80 max-w-3xl mx-auto">
            Thank you to our incredible partners who make The Christmas Rush possible
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          {/* Title Sponsors */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <Badge className="mb-4 px-6 py-2 text-lg bg-[#E63946] text-white border-0">
                <Trophy className="w-5 h-5 mr-2 inline" />
                Title Sponsors
              </Badge>
              <h2 className="text-5xl font-bold text-[#1D3557]">Championship Partners</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {sponsors.title.map((sponsor, index) => (
                <Card key={index} className="border-2 border-[#E63946]/30 hover:shadow-lg transition-all">
                  <CardContent className="pt-8">
                    <div className="w-16 h-16 rounded-lg bg-[#E63946] mb-4 flex items-center justify-center text-white text-2xl font-bold">
                      {sponsor.name.split(' ').map(w => w[0]).join('')}
                    </div>
                    <h3 className="text-2xl font-bold text-[#1D3557] mb-2">{sponsor.name}</h3>
                    <p className="text-[#2B2D42]/70 mb-4">{sponsor.description}</p>
                    <p className="text-lg font-bold text-[#E63946]">{sponsor.contribution}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Gold Sponsors */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <Badge className="mb-4 px-6 py-2 text-lg bg-[#FFB703] text-[#2B2D42] border-0">
                <Award className="w-5 h-5 mr-2 inline" />
                Gold Sponsors
              </Badge>
              <h2 className="text-5xl font-bold text-[#1D3557]">Premium Partners</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {sponsors.gold.map((sponsor, index) => (
                <Card key={index} className="border-2 border-[#FFB703]/30 hover:shadow-md transition-all">
                  <CardContent className="pt-8">
                    <div className="w-12 h-12 rounded-lg bg-[#FFB703] mb-4 flex items-center justify-center text-[#2B2D42] text-lg font-bold">
                      {sponsor.name.split(' ').map(w => w[0]).join('')}
                    </div>
                    <h3 className="text-xl font-bold text-[#1D3557] mb-2">{sponsor.name}</h3>
                    <p className="text-[#2B2D42]/70 mb-2">{sponsor.description}</p>
                    <p className="text-sm font-bold text-[#FFB703]">{sponsor.contribution}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Silver Sponsors */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <Badge className="mb-4 px-6 py-2 text-lg bg-[#1D3557] text-white border-0">
                <Zap className="w-5 h-5 mr-2 inline" />
                Silver Sponsors
              </Badge>
              <h2 className="text-5xl font-bold text-[#1D3557]">Supporting Partners</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {sponsors.silver.map((sponsor, index) => (
                <Card key={index} className="border border-[#1D3557]/20 hover:shadow-md transition-all">
                  <CardContent className="pt-6 pb-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-[#1D3557] mx-auto mb-2 flex items-center justify-center text-white text-sm font-bold">
                      {sponsor.name.split(' ').map(w => w[0]).join('')}
                    </div>
                    <h3 className="text-base font-bold text-[#1D3557] mb-1">{sponsor.name}</h3>
                    <p className="text-xs text-[#2B2D42]/70">{sponsor.contribution}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Community Sponsors */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <Badge className="mb-4 px-6 py-2 text-lg bg-[#2B2D42] text-white border-0">
                <Gift className="w-5 h-5 mr-2 inline" />
                Community Sponsors
              </Badge>
              <h2 className="text-5xl font-bold text-[#1D3557]">Community Partners</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {sponsors.community.map((sponsor, index) => (
                <Card key={index} className="border border-[#2B2D42]/20 hover:shadow-md transition-all">
                  <CardContent className="pt-6 pb-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-[#2B2D42] mx-auto mb-2 flex items-center justify-center text-white text-sm font-bold">
                      {sponsor.name.split(' ').map(w => w[0]).join('')}
                    </div>
                    <h3 className="text-base font-bold text-[#1D3557] mb-1">{sponsor.name}</h3>
                    <p className="text-xs text-[#2B2D42]/70">{sponsor.contribution}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Become a Sponsor CTA */}
          <Card className="bg-gradient-to-br from-[#E63946] to-[#C52A36] text-white border-0 mt-16">
            <CardContent className="pt-12 pb-12 text-center">
              <Trophy className="w-16 h-16 mx-auto mb-6 text-[#FFB703]" />
              <h2 className="text-4xl font-bold mb-4">Become a Sponsor</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join us in supporting the next generation of innovators. 
                Sponsorship packages available for 2026.
              </p>
              <Button 
                size="lg"
                onClick={() => setShowPackagesModal(true)}
                className="bg-[#FFB703] hover:bg-[#FFB703]/90 text-[#2B2D42] px-12 py-6 text-xl font-bold uppercase tracking-wider"
              >
                View Sponsorship Packages
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1D3557] text-white py-8">
        <div className="container text-center">
          <p className="text-white/70">
            © 2025 The Christmas Rush. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Sponsorship Packages Modal */}
      <Dialog open={showPackagesModal} onOpenChange={setShowPackagesModal}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-4xl font-bold text-[#1D3557] text-center mb-2">
              Sponsorship Packages 2026
            </DialogTitle>
            <p className="text-center text-[#2B2D42]/70 text-lg">
              Partner with us to support innovation and connect with top talent
            </p>
          </DialogHeader>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {/* Platinum Package */}
            <Card className="border-4 border-[#FFB703] bg-gradient-to-br from-white to-[#FFB703]/10">
              <CardContent className="pt-8">
                <Badge className="mb-4 bg-[#FFB703] text-[#2B2D42] text-base px-4 py-2">
                  <Trophy className="w-4 h-4 mr-2 inline" />
                  Platinum
                </Badge>
                <h3 className="text-3xl font-bold text-[#1D3557] mb-2">£50,000</h3>
                <p className="text-[#2B2D42]/70 mb-6">Title sponsor with maximum visibility</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#FFB703] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Logo on all event materials & website</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#FFB703] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Speaking slot at opening ceremony</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#FFB703] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Private meeting room for investor pitches</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#FFB703] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Judge panel seat</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#FFB703] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">10 VIP passes</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#FFB703] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Exclusive access to participant database</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Gold Package */}
            <Card className="border-2 border-[#E63946]/50">
              <CardContent className="pt-8">
                <Badge className="mb-4 bg-[#E63946] text-white text-base px-4 py-2">
                  <Award className="w-4 h-4 mr-2 inline" />
                  Gold
                </Badge>
                <h3 className="text-3xl font-bold text-[#1D3557] mb-2">£25,000</h3>
                <p className="text-[#2B2D42]/70 mb-6">Premium partner with high visibility</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#E63946] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Logo on event materials & website</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#E63946] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Booth space in main hall</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#E63946] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Workshop or tech talk slot (45 min)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#E63946] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">5 VIP passes</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#E63946] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Social media mentions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Silver Package */}
            <Card className="border-2 border-[#1D3557]/30">
              <CardContent className="pt-8">
                <Badge className="mb-4 bg-[#1D3557] text-white text-base px-4 py-2">
                  <Zap className="w-4 h-4 mr-2 inline" />
                  Silver
                </Badge>
                <h3 className="text-3xl font-bold text-[#1D3557] mb-2">£10,000</h3>
                <p className="text-[#2B2D42]/70 mb-6">Supporting partner with visibility</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#1D3557] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Logo on website & select materials</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#1D3557] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Booth space in sponsor area</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#1D3557] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">3 VIP passes</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#1D3557] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Newsletter feature</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Bronze Package */}
            <Card className="border border-[#2B2D42]/20">
              <CardContent className="pt-8">
                <Badge className="mb-4 bg-[#2B2D42] text-white text-base px-4 py-2">
                  <Gift className="w-4 h-4 mr-2 inline" />
                  Bronze
                </Badge>
                <h3 className="text-3xl font-bold text-[#1D3557] mb-2">£5,000</h3>
                <p className="text-[#2B2D42]/70 mb-6">Community partner</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#2B2D42] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Logo on website</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#2B2D42] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">2 passes</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-[#2B2D42] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Social media mention</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 border-t pt-8">
            <h3 className="text-2xl font-bold text-[#1D3557] mb-6 text-center">Interested in Sponsoring?</h3>
            <form onSubmit={handleSponsorSubmit} className="space-y-4 max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-[#1D3557] mb-2">Name *</label>
                  <input 
                    type="text"
                    name="name"
                    value={sponsorFormData.name}
                    onChange={handleSponsorFormChange}
                    className="w-full px-3 py-2 border-2 border-[#2B2D42]/20 rounded-lg focus:border-[#E63946] focus:outline-none transition-colors text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#1D3557] mb-2">Email *</label>
                  <input 
                    type="email"
                    name="email"
                    value={sponsorFormData.email}
                    onChange={handleSponsorFormChange}
                    className="w-full px-3 py-2 border-2 border-[#2B2D42]/20 rounded-lg focus:border-[#E63946] focus:outline-none transition-colors text-sm"
                    placeholder="your@company.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-[#1D3557] mb-2">Company *</label>
                  <input 
                    type="text"
                    name="company"
                    value={sponsorFormData.company}
                    onChange={handleSponsorFormChange}
                    className="w-full px-3 py-2 border-2 border-[#2B2D42]/20 rounded-lg focus:border-[#E63946] focus:outline-none transition-colors text-sm"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#1D3557] mb-2">Package Interest</label>
                  <select 
                    name="tier"
                    value={sponsorFormData.tier}
                    onChange={handleSponsorFormChange}
                    className="w-full px-3 py-2 border-2 border-[#2B2D42]/20 rounded-lg focus:border-[#E63946] focus:outline-none transition-colors text-sm"
                  >
                    <option value="">Select a package</option>
                    <option value="Platinum">Platinum £50,000</option>
                    <option value="Gold">Gold £25,000</option>
                    <option value="Silver">Silver £10,000</option>
                    <option value="Bronze">Bronze £5,000</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#1D3557] mb-2">Message</label>
                <textarea 
                  name="message"
                  rows={3}
                  value={sponsorFormData.message}
                  onChange={handleSponsorFormChange}
                  className="w-full px-3 py-2 border-2 border-[#2B2D42]/20 rounded-lg focus:border-[#E63946] focus:outline-none transition-colors resize-none text-sm"
                  placeholder="Tell us more about your company..."
                />
              </div>

              <div className="flex gap-3 justify-center">
                <Button 
                  type="button"
                  variant="outline"
                  onClick={() => setShowPackagesModal(false)}
                  className="px-6 py-2"
                >
                  Cancel
                </Button>
                <Button 
                  type="submit"
                  disabled={createSubmissionMutation.isPending}
                  className="bg-[#E63946] hover:bg-[#E63946]/90 text-white px-6 py-2 font-bold"
                >
                  {createSubmissionMutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Inquiry"
                  )}
                </Button>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <Footer />
    </div>
  );
}
