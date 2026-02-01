/**
 * Velocity Slopes Design: Schedule page
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, MapPin, Users, Coffee, Trophy, Presentation, Code } from "lucide-react";
import { useLocation } from "wouter";
import Footer from "@/components/Footer";

export default function Schedule() {
  const [, setLocation] = useLocation();

  const schedule = [
    {
      day: "Day 1 - December 25",
      date: "Christmas Day",
      events: [
        {
          time: "9:00 AM",
          title: "Registration & Breakfast",
          description: "Check in, grab coffee and pastries, meet your fellow hackers",
          icon: Coffee,
          type: "social"
        },
        {
          time: "10:00 AM",
          title: "Opening Ceremony",
          description: "Welcome address, rules overview, and keynote from featured investor",
          icon: Trophy,
          type: "ceremony"
        },
        {
          time: "11:00 AM",
          title: "Team Formation & Ideation",
          description: "Finalize teams, brainstorm ideas, and start planning your MVP",
          icon: Users,
          type: "workshop"
        },
        {
          time: "12:00 PM",
          title: "Hacking Begins! 🚀",
          description: "72 hours on the clock - build, iterate, and ship",
          icon: Code,
          type: "hacking"
        },
        {
          time: "1:00 PM",
          title: "Lunch - Holiday Feast",
          description: "Catered holiday lunch with all the trimmings",
          icon: Coffee,
          type: "social"
        },
        {
          time: "3:00 PM",
          title: "Mentor Office Hours Begin",
          description: "1-on-1 sessions with technical mentors and industry experts",
          icon: Users,
          type: "workshop"
        },
        {
          time: "7:00 PM",
          title: "Dinner & Networking",
          description: "Evening meal with informal investor meet-and-greets",
          icon: Coffee,
          type: "social"
        },
        {
          time: "9:00 PM",
          title: "Late Night Coding Session",
          description: "Snacks, energy drinks, and focused building time",
          icon: Code,
          type: "hacking"
        }
      ]
    },
    {
      day: "Day 2 - December 26",
      date: "Boxing Day",
      events: [
        {
          time: "8:00 AM",
          title: "Breakfast",
          description: "Fuel up for another day of building",
          icon: Coffee,
          type: "social"
        },
        {
          time: "10:00 AM",
          title: "Workshop: Pitching to Investors",
          description: "Learn how to craft a compelling pitch in 3 minutes",
          icon: Presentation,
          type: "workshop"
        },
        {
          time: "12:00 PM",
          title: "Checkpoint: Progress Updates",
          description: "Quick 2-minute updates from each team on progress",
          icon: Trophy,
          type: "ceremony"
        },
        {
          time: "1:00 PM",
          title: "Lunch",
          description: "Midday break with food and refreshments",
          icon: Coffee,
          type: "social"
        },
        {
          time: "2:00 PM",
          title: "Mentor Speed Dating",
          description: "Rotate through mentors for quick feedback sessions",
          icon: Users,
          type: "workshop"
        },
        {
          time: "6:00 PM",
          title: "Dinner",
          description: "Evening meal and team bonding",
          icon: Coffee,
          type: "social"
        },
        {
          time: "8:00 PM",
          title: "Investor Panel Q&A",
          description: "Ask VCs anything about fundraising, markets, and scaling",
          icon: Presentation,
          type: "workshop"
        },
        {
          time: "10:00 PM",
          title: "Midnight Countdown",
          description: "12 hours left - final push begins!",
          icon: Clock,
          type: "hacking"
        }
      ]
    },
    {
      day: "Day 3 - December 27",
      date: "Final Day",
      events: [
        {
          time: "8:00 AM",
          title: "Breakfast & Final Sprint",
          description: "Last meal before code freeze",
          icon: Coffee,
          type: "social"
        },
        {
          time: "11:00 AM",
          title: "Code Freeze ⏰",
          description: "All development must stop - time to prepare presentations",
          icon: Clock,
          type: "ceremony"
        },
        {
          time: "12:00 PM",
          title: "Lunch & Pitch Prep",
          description: "Final meal while teams rehearse their pitches",
          icon: Coffee,
          type: "social"
        },
        {
          time: "1:00 PM",
          title: "Project Demos & Judging",
          description: "Each team presents to judges and investors (3 min pitch + 2 min Q&A)",
          icon: Presentation,
          type: "ceremony"
        },
        {
          time: "4:00 PM",
          title: "Deliberation Break",
          description: "Judges deliberate while teams network and relax",
          icon: Users,
          type: "social"
        },
        {
          time: "5:00 PM",
          title: "Awards Ceremony",
          description: "Winner announcement, prizes, and celebration!",
          icon: Trophy,
          type: "ceremony"
        },
        {
          time: "6:00 PM",
          title: "Closing Reception",
          description: "Networking reception with investors, mentors, and teams",
          icon: Users,
          type: "social"
        },
        {
          time: "8:00 PM",
          title: "Event Ends",
          description: "See you next year! 🎄",
          icon: Trophy,
          type: "ceremony"
        }
      ]
    }
  ];

  const getEventColor = (type: string) => {
    switch (type) {
      case "ceremony": return "border-[#E63946] bg-[#E63946]/5";
      case "hacking": return "border-[#FFB703] bg-[#FFB703]/5";
      case "workshop": return "border-[#1D3557] bg-[#1D3557]/5";
      default: return "border-[#2B2D42]/20 bg-white";
    }
  };

  const getEventBadge = (type: string) => {
    switch (type) {
      case "ceremony": return <Badge className="bg-[#E63946] text-white">Event</Badge>;
      case "hacking": return <Badge className="bg-[#FFB703] text-[#2B2D42]">Build</Badge>;
      case "workshop": return <Badge className="bg-[#1D3557] text-white">Learn</Badge>;
      default: return <Badge variant="outline">Social</Badge>;
    }
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
            EVENT
            <span className="block text-[#E63946] mt-2">SCHEDULE</span>
          </h1>
          <p className="text-2xl text-white/80 max-w-3xl mx-auto mb-8">
            72 hours of intense building, learning, and networking
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-lg">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#FFB703]" />
              <span>December 25-27, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#FFB703]" />
              <span>Tech Innovation Center, London</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#FFB703]" />
              <span>72 Hours Non-Stop</span>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-16">
        <div className="container max-w-5xl">
          {schedule.map((day, dayIndex) => (
            <div key={dayIndex} className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-5xl font-bold text-[#1D3557] mb-2">{day.day}</h2>
                <p className="text-xl text-[#2B2D42]/70">{day.date}</p>
              </div>

              <div className="space-y-4">
                {day.events.map((event, eventIndex) => (
                  <Card 
                    key={eventIndex} 
                    className={`border-2 ${getEventColor(event.type)} hover:shadow-lg transition-all`}
                  >
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#1D3557] to-[#2B2D42] flex items-center justify-center text-white">
                            <event.icon className="w-8 h-8" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <div className="flex items-center gap-3 mb-2">
                                <span className="text-sm font-bold text-[#E63946] uppercase tracking-wider">
                                  {event.time}
                                </span>
                                {getEventBadge(event.type)}
                              </div>
                              <h3 className="text-2xl font-bold text-[#1D3557]">{event.title}</h3>
                            </div>
                          </div>
                          <p className="text-[#2B2D42]/70">{event.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}

          {/* Important Notes */}
          <Card className="bg-[#FFB703] border-0 mt-12">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-3xl font-bold text-[#2B2D42] mb-4">Important Notes</h3>
              <ul className="space-y-2 text-[#2B2D42]">
                <li className="flex items-start gap-2">
                  <span className="text-[#E63946] font-bold">•</span>
                  <span>All meals and refreshments are provided throughout the event</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E63946] font-bold">•</span>
                  <span>Sleeping areas available for power naps (bring sleeping bag!)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E63946] font-bold">•</span>
                  <span>Mentors available 24/7 via Slack for technical questions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E63946] font-bold">•</span>
                  <span>Showers and hygiene facilities on-site</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E63946] font-bold">•</span>
                  <span>Schedule subject to minor adjustments - check Slack for updates</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
