/**
 * Velocity Slopes Design: Contact page
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Mail, MessageSquare, MapPin, Phone, Send, Loader2 } from "lucide-react";
import { useLocation } from "wouter";
import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import Footer from "@/components/Footer";

export default function Contact() {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const createSubmissionMutation = trpc.submissions.create.useMutation({
    onSuccess: () => {
      toast.success("Message sent! We'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: (error) => {
      toast.error(error.message || "Failed to send message. Please try again.");
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    await createSubmissionMutation.mutateAsync({
      type: "contact",
      name: formData.name,
      email: formData.email,
      message: `Subject: ${formData.subject}\n\n${formData.message}`
    });
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
            GET IN
            <span className="block text-[#E63946] mt-2">TOUCH</span>
          </h1>
          <p className="text-2xl text-white/80 max-w-3xl mx-auto">
            Questions? Ideas? Want to get involved? We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-bold text-[#1D3557] mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <Card className="border-2 border-[#E63946]/20 hover:border-[#E63946] transition-all">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-[#E63946] flex items-center justify-center text-white flex-shrink-0">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#1D3557] mb-1">Email</h3>
                        <p className="text-[#2B2D42]/70 mb-2">General inquiries</p>
                        <a href="mailto:hello@christmasrush.io" className="text-[#E63946] font-medium hover:underline">
                          hello@christmasrush.io
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-[#FFB703]/20 hover:border-[#FFB703] transition-all">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-[#FFB703] flex items-center justify-center text-[#2B2D42] flex-shrink-0">
                        <MessageSquare className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#1D3557] mb-1">Sponsorships</h3>
                        <p className="text-[#2B2D42]/70 mb-2">Partnership opportunities</p>
                        <a href="mailto:sponsors@christmasrush.io" className="text-[#E63946] font-medium hover:underline">
                          sponsors@christmasrush.io
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-[#1D3557]/20 hover:border-[#1D3557] transition-all">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-[#1D3557] flex items-center justify-center text-white flex-shrink-0">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#1D3557] mb-1">Location</h3>
                        <p className="text-[#2B2D42]/70">
                          Tech Innovation Center<br />
                          123 Silicon Street<br />
                          London, UK EC2A 4DN
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-[#2B2D42]/20 hover:border-[#2B2D42] transition-all">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-[#2B2D42] flex items-center justify-center text-white flex-shrink-0">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#1D3557] mb-1">Phone</h3>
                        <p className="text-[#2B2D42]/70 mb-2">Event hotline</p>
                        <a href="tel:+442071234567" className="text-[#E63946] font-medium hover:underline">
                          +44 20 7123 4567
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-[#1D3557] mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {['Twitter', 'LinkedIn', 'Instagram', 'GitHub'].map((platform, index) => (
                    <Button 
                      key={index}
                      variant="outline"
                      className="border-2 border-[#1D3557] text-[#1D3557] hover:bg-[#1D3557] hover:text-white"
                    >
                      {platform}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-2 border-[#1D3557]/20">
                <CardContent className="pt-8">
                  <h2 className="text-3xl font-bold text-[#1D3557] mb-6">Send us a message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-[#1D3557] mb-2">
                        Name *
                      </label>
                      <input 
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-[#2B2D42]/20 rounded-lg focus:border-[#E63946] focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-[#1D3557] mb-2">
                        Email *
                      </label>
                      <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-[#2B2D42]/20 rounded-lg focus:border-[#E63946] focus:outline-none transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-[#1D3557] mb-2">
                        Subject *
                      </label>
                      <select 
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-[#2B2D42]/20 rounded-lg focus:border-[#E63946] focus:outline-none transition-colors"
                      >
                        <option value="">Select a topic</option>
                        <option value="general">General Inquiry</option>
                        <option value="participant">Participant Question</option>
                        <option value="sponsor">Sponsorship Interest</option>
                        <option value="mentor">Mentor Application</option>
                        <option value="media">Media/Press</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-[#1D3557] mb-2">
                        Message *
                      </label>
                      <textarea 
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-[#2B2D42]/20 rounded-lg focus:border-[#E63946] focus:outline-none transition-colors resize-none"
                        placeholder="Tell us more..."
                      />
                    </div>

                    <Button 
                      type="submit"
                      disabled={createSubmissionMutation.isPending}
                      size="lg"
                      className="w-full bg-[#E63946] hover:bg-[#E63946]/90 text-white py-6 text-lg font-bold uppercase tracking-wider"
                    >
                      {createSubmissionMutation.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
