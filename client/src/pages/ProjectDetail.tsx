/**
 * Velocity Slopes Design: Project detail page
 * Shows comprehensive information about each hackathon project
 */

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Users, TrendingUp, Calendar, Code, Lightbulb, Target, Trophy } from "lucide-react";
import { useParams, useLocation } from "wouter";
import Footer from "@/components/Footer";

interface ProjectData {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  team: string;
  status: string;
  investment: string;
  problem: string;
  solution: string;
  technology: string[];
  marketSize: string;
  traction: string;
  nextSteps: string;
  teamMembers: Array<{ name: string; role: string }>;
}

const projectsData: Record<string, ProjectData> = {
  "sleigh-tracker-pro": {
    id: "sleigh-tracker-pro",
    title: "Sleigh Tracker Pro",
    tagline: "Never miss a delivery deadline again",
    description: "Real-time GPS tracking for holiday deliveries with AI-powered route optimization. Making sure every gift arrives on time!",
    category: "Logistics",
    team: "Team Rudolph",
    status: "🎯 Finalist",
    investment: "Seeking $500K",
    problem: "During the holiday season, delivery companies face unprecedented volume, leading to 30% late deliveries and millions in lost revenue. Traditional routing systems can't adapt to real-time traffic, weather, and demand surges.",
    solution: "Sleigh Tracker Pro uses machine learning to optimize delivery routes in real-time, considering traffic patterns, weather conditions, package priority, and driver capacity. Our AI predicts delays before they happen and automatically reroutes drivers.",
    technology: ["React Native", "TensorFlow", "Google Maps API", "Node.js", "PostgreSQL", "Redis"],
    marketSize: "$350B global logistics market, targeting $8B last-mile delivery segment",
    traction: "Pilot program with 3 regional carriers, 500+ deliveries completed with 95% on-time rate (vs. 70% industry average). 2 LOIs from national carriers.",
    nextSteps: "Expand pilot to 10 carriers, integrate with major e-commerce platforms, raise seed round to build sales team and scale infrastructure.",
    teamMembers: [
      { name: "Sarah Chen", role: "CEO - Ex-Amazon Logistics" },
      { name: "Marcus Rodriguez", role: "CTO - ML Engineer" },
      { name: "Priya Patel", role: "COO - Supply Chain Expert" }
    ]
  },
  "snowflake-analytics": {
    id: "snowflake-analytics",
    title: "Snowflake Analytics",
    tagline: "Data visualization that's actually beautiful",
    description: "Beautiful data visualization platform that turns complex datasets into stunning winter-themed dashboards.",
    category: "Data Science",
    team: "Frost Giants",
    status: "🏆 Winner",
    investment: "Series A Ready",
    problem: "Data teams spend 60% of their time creating reports that executives ignore. Traditional BI tools produce ugly, confusing dashboards that fail to communicate insights effectively.",
    solution: "Snowflake Analytics automatically generates beautiful, interactive visualizations using AI to select the best chart types and color schemes. Our winter-themed design system makes data exploration delightful, increasing engagement by 400%.",
    technology: ["D3.js", "React", "Python", "FastAPI", "Snowflake", "OpenAI GPT-4"],
    marketSize: "$30B business intelligence market, growing at 10% annually",
    traction: "12 enterprise customers including 2 Fortune 500 companies. $240K ARR with 150% net revenue retention. Featured in TechCrunch and won 'Best Design' at Data Summit 2024.",
    nextSteps: "Launch self-service tier, expand integrations to 20+ data sources, hire VP Sales, close Series A to accelerate growth to $2M ARR.",
    teamMembers: [
      { name: "Alex Winters", role: "CEO - Ex-Tableau Designer" },
      { name: "Jordan Kim", role: "CTO - Data Visualization Expert" },
      { name: "Taylor Morgan", role: "Head of Product - UX Leader" }
    ]
  },
  "cocoa-connect": {
    id: "cocoa-connect",
    title: "Cocoa Connect",
    tagline: "The Instagram of hot chocolate",
    description: "Social platform connecting hot chocolate enthusiasts worldwide. Community-driven recipe sharing with AR try-before-you-brew.",
    category: "Social",
    team: "Marshmallow Squad",
    status: "🔥 Hot Pick",
    investment: "Seeking $250K",
    problem: "The $3B premium hot chocolate market is fragmented. Enthusiasts have no dedicated community, and discovering new recipes requires trial-and-error that wastes expensive ingredients.",
    solution: "Cocoa Connect is a social platform where users share recipes, rate creations, and use AR to visualize drinks before making them. Our algorithm matches users with recipes based on taste preferences and available ingredients.",
    technology: ["React Native", "ARKit", "Firebase", "Node.js", "MongoDB", "Stripe"],
    marketSize: "$3B premium hot chocolate market + $200B social commerce opportunity",
    traction: "8,500 users in 3 months, 45% DAU/MAU ratio, 2,300 recipes shared. Partnership with Williams Sonoma for ingredient marketplace launching Q2.",
    nextSteps: "Launch marketplace with 15% take rate, add video content, expand to coffee and tea, raise seed to scale user acquisition.",
    teamMembers: [
      { name: "Emma Thompson", role: "CEO - Food Blogger (500K followers)" },
      { name: "Chris Martinez", role: "CTO - AR Developer" },
      { name: "Zoe Anderson", role: "Head of Community - Social Media Expert" }
    ]
  },
  "gift-genius-ai": {
    id: "gift-genius-ai",
    title: "Gift Genius AI",
    tagline: "The end of bad gifts",
    description: "ML-powered gift recommendation engine that analyzes personality traits and preferences to suggest the perfect present.",
    category: "AI/ML",
    team: "Santa's Helpers",
    status: "🎯 Finalist",
    investment: "Seeking $750K",
    problem: "Americans spend $18B annually on unwanted gifts that end up returned or unused. Gift-giving anxiety affects 65% of shoppers, leading to generic, disappointing presents.",
    solution: "Gift Genius AI analyzes social media, purchase history, and a brief questionnaire to create detailed personality profiles. Our ML model recommends personalized gifts with 92% satisfaction rate, and partners with retailers for seamless purchasing.",
    technology: ["Python", "TensorFlow", "NLP", "React", "AWS", "Shopify API"],
    marketSize: "$200B US gift market, targeting $30B online gift segment",
    traction: "15,000 recommendations generated, 92% satisfaction score, 35% conversion rate. Partnerships with Etsy, Amazon, and Uncommon Goods. $45K revenue in 2 months.",
    nextSteps: "Launch B2B corporate gifting tier, expand to 50+ retail partners, build Chrome extension, raise seed to scale ML team and marketing.",
    teamMembers: [
      { name: "Dr. Lisa Wang", role: "CEO - PhD in Psychology" },
      { name: "Raj Sharma", role: "CTO - ML Architect" },
      { name: "Nina Kowalski", role: "Head of Partnerships - Ex-Shopify" }
    ]
  },
  "winter-wellness": {
    id: "winter-wellness",
    title: "Winter Wellness",
    tagline: "Beat the winter blues together",
    description: "Seasonal mental health app with guided meditation, mood tracking, and community support for beating winter blues.",
    category: "Health Tech",
    team: "Evergreen Minds",
    status: "💚 Rising Star",
    investment: "Seeking $400K",
    problem: "10 million Americans suffer from Seasonal Affective Disorder (SAD), with symptoms worsening each winter. Existing mental health apps ignore seasonal patterns and lack community support.",
    solution: "Winter Wellness combines evidence-based light therapy guidance, mood tracking with seasonal insights, guided meditations, and peer support groups. Our AI coach adapts interventions based on weather, daylight, and user mood patterns.",
    technology: ["React Native", "Python", "scikit-learn", "Firebase", "Twilio", "HealthKit"],
    marketSize: "$4.5B mental health app market, growing at 23% annually",
    traction: "6,200 users, 4.8★ App Store rating, 68% retention at 30 days. Clinical study with Stanford shows 40% reduction in SAD symptoms. Covered by Aetna and Blue Cross.",
    nextSteps: "Expand insurance coverage to 10 payers, launch corporate wellness program, add therapist marketplace, raise seed to build clinical team.",
    teamMembers: [
      { name: "Dr. Michael Green", role: "CEO - Licensed Therapist" },
      { name: "Sophie Laurent", role: "CTO - Health Tech Engineer" },
      { name: "David Park", role: "Head of Clinical - Psychiatrist" }
    ]
  },
  "festive-finance": {
    id: "festive-finance",
    title: "Festive Finance",
    tagline: "Make your money jingle all the way",
    description: "Smart budgeting tool for holiday spending with gamification and savings challenges. Make your money jingle all the way!",
    category: "FinTech",
    team: "Penny Pinchers",
    status: "🎯 Finalist",
    investment: "Seeking $600K",
    problem: "Americans overspend by $1,000+ during holidays, leading to January debt hangovers. 78% have no holiday budget, and traditional finance apps don't address seasonal spending spikes.",
    solution: "Festive Finance helps users set holiday budgets, tracks spending by category, and gamifies savings with challenges and rewards. Our AI predicts spending patterns and sends proactive alerts before overspending occurs.",
    technology: ["React", "Plaid API", "Node.js", "PostgreSQL", "Stripe", "SendGrid"],
    marketSize: "$12B personal finance app market, targeting $200B holiday spending",
    traction: "11,000 users saved average $450 during 2024 holidays. $85K revenue from premium subscriptions. Partnership with 3 credit unions for white-label deployment.",
    nextSteps: "Launch B2B2C with banks and credit unions, add investment features, expand to year-round budgeting, raise seed to build sales team.",
    teamMembers: [
      { name: "Jessica Liu", role: "CEO - Ex-Mint Product Manager" },
      { name: "Tom Bradley", role: "CTO - FinTech Engineer" },
      { name: "Rachel Adams", role: "Head of Growth - Marketing Expert" }
    ]
  }
};

export default function ProjectDetail() {
  const { id } = useParams();
  const [, setLocation] = useLocation();
  
  const project = id ? projectsData[id] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8F9FA]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#1D3557] mb-4">Project Not Found</h1>
          <Button onClick={() => setLocation('/')} className="bg-[#E63946] hover:bg-[#E63946]/90">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

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
            Back to Projects
          </Button>
          <div className="flex items-center gap-3">
            <img src="/images/countdown-icon.png" alt="Christmas Rush" className="w-8 h-8" />
            <span className="text-xl font-bold">THE CHRISTMAS RUSH</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1D3557] via-[#2B2D42] to-[#1D3557] text-white py-20 w-full">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 px-6 py-2 text-base bg-[#FFB703] text-[#2B2D42] hover:bg-[#FFB703]/90 border-0">
              {project.category}
            </Badge>
            <h1 className="text-6xl md:text-7xl font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-2xl text-[#FFB703] font-medium mb-6">{project.tagline}</p>
            <p className="text-xl text-white/80 mb-8">{project.description}</p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#FFB703]" />
                <span className="font-medium">{project.team}</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-[#FFB703]" />
                <span className="font-medium">{project.status}</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#E63946]" />
                <span className="font-bold text-[#E63946]">{project.investment}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Problem */}
            <Card className="border-2 border-[#E63946]/20 hover:border-[#E63946] transition-all">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-8 h-8 text-[#E63946]" />
                  <h2 className="text-3xl font-bold text-[#1D3557]">The Problem</h2>
                </div>
                <p className="text-[#2B2D42]/80 leading-relaxed">{project.problem}</p>
              </CardContent>
            </Card>

            {/* Solution */}
            <Card className="border-2 border-[#FFB703]/20 hover:border-[#FFB703] transition-all">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb className="w-8 h-8 text-[#FFB703]" />
                  <h2 className="text-3xl font-bold text-[#1D3557]">Our Solution</h2>
                </div>
                <p className="text-[#2B2D42]/80 leading-relaxed">{project.solution}</p>
              </CardContent>
            </Card>
          </div>

          {/* Technology Stack */}
          <Card className="mb-12 border-2 border-[#1D3557]/20">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-8 h-8 text-[#1D3557]" />
                <h2 className="text-3xl font-bold text-[#1D3557]">Technology Stack</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {project.technology.map((tech, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="border-[#1D3557] text-[#1D3557] px-4 py-2 text-base"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Market & Traction */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-gradient-to-br from-[#1D3557] to-[#2B2D42] text-white">
              <CardContent className="pt-6">
                <h2 className="text-3xl font-bold mb-4">Market Opportunity</h2>
                <p className="text-white/90 leading-relaxed">{project.marketSize}</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#E63946] to-[#C52A36] text-white">
              <CardContent className="pt-6">
                <h2 className="text-3xl font-bold mb-4">Traction</h2>
                <p className="text-white/90 leading-relaxed">{project.traction}</p>
              </CardContent>
            </Card>
          </div>

          {/* Team */}
          <Card className="mb-12 border-2 border-[#FFB703]/20">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-[#FFB703]" />
                <h2 className="text-3xl font-bold text-[#1D3557]">Meet the Team</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {project.teamMembers.map((member, index) => (
                  <div key={index} className="text-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#1D3557] to-[#2B2D42] mx-auto mb-3 flex items-center justify-center text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="font-bold text-[#1D3557] mb-1">{member.name}</h3>
                    <p className="text-sm text-[#2B2D42]/70">{member.role}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card className="bg-[#FFB703] text-[#2B2D42] border-0">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-8 h-8" />
                <h2 className="text-3xl font-bold">Next Steps</h2>
              </div>
              <p className="text-lg leading-relaxed">{project.nextSteps}</p>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center mt-12">
            <h3 className="text-3xl font-bold text-[#1D3557] mb-4">Interested in investing?</h3>
            <p className="text-xl text-[#2B2D42]/70 mb-8">Connect with {project.team} to learn more</p>
            <Button 
              size="lg"
              className="bg-[#E63946] hover:bg-[#E63946]/90 text-white px-12 py-6 text-xl font-bold uppercase tracking-wider"
            >
              <TrendingUp className="mr-2 h-6 w-6" />
              Request Meeting
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
}
