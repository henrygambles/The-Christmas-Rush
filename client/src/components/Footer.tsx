/**
 * Reusable Footer component with navigation links
 * Used across all pages for consistent navigation
 */

import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const [, setLocation] = useLocation();

  return (
    <footer className="bg-[#1D3557] text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/countdown-icon.png" alt="Christmas Rush" className="w-12 h-12" />
              <h3 className="text-3xl font-bold">THE CHRISTMAS RUSH</h3>
            </div>
            <p className="text-white/70 mb-4">
              Where holiday spirit meets startup velocity ⛷️ 🎄 🚀
            </p>
            <p className="text-white/50 text-sm">
              © 2025 The Christmas Rush. All rights reserved. Built with velocity. 🏆
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                size="sm"
                className="border-white/30 text-white hover:bg-white/10"
                onClick={() => window.open('https://twitter.com', '_blank')}
              >
                Twitter
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="border-white/30 text-white hover:bg-white/10"
                onClick={() => window.open('https://linkedin.com', '_blank')}
              >
                LinkedIn
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="border-white/30 text-white hover:bg-white/10"
                onClick={() => window.open('https://instagram.com', '_blank')}
              >
                Instagram
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="border-white/30 text-white hover:bg-white/10"
                onClick={() => window.open('https://github.com', '_blank')}
              >
                GitHub
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-wrap gap-6 justify-center text-sm">
            <button 
              onClick={() => setLocation('/')}
              className="text-white/70 hover:text-[#FFB703] transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => setLocation('/about')}
              className="text-white/70 hover:text-[#FFB703] transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => setLocation('/schedule')}
              className="text-white/70 hover:text-[#FFB703] transition-colors font-medium"
            >
              Schedule
            </button>
            <button 
              onClick={() => setLocation('/sponsors')}
              className="text-white/70 hover:text-[#FFB703] transition-colors font-medium"
            >
              Sponsors
            </button>
            <button 
              onClick={() => setLocation('/contact')}
              className="text-white/70 hover:text-[#FFB703] transition-colors font-medium"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
