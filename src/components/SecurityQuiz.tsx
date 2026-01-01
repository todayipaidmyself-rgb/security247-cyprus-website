import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Home as HomeIcon,
  Building2,
  Key,
  Shield,
  Camera,
  Bell,
  Eye,
  Lock,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageCircle
} from "lucide-react";
import { Link } from "wouter";

interface QuizQuestion {
  id: string;
  question: string;
  options: {
    value: string;
    label: string;
    icon: any;
    description?: string;
  }[];
}

interface ServiceRecommendation {
  title: string;
  description: string;
  icon: any;
  link: string;
}

const questions: QuizQuestion[] = [
  {
    id: "propertyType",
    question: "What type of property do you want to secure?",
    options: [
      {
        value: "home",
        label: "Residential Home",
        icon: HomeIcon,
        description: "Villa, apartment, or house"
      },
      {
        value: "business",
        label: "Business Property",
        icon: Building2,
        description: "Office, shop, or warehouse"
      },
      {
        value: "vacation",
        label: "Vacation Property",
        icon: Key,
        description: "Holiday home or rental"
      }
    ]
  },
  {
    id: "mainConcern",
    question: "What's your main security concern?",
    options: [
      {
        value: "theft",
        label: "Theft Prevention",
        icon: Shield,
        description: "Protect against break-ins"
      },
      {
        value: "monitoring",
        label: "Remote Monitoring",
        icon: Eye,
        description: "Watch property from anywhere"
      },
      {
        value: "insurance",
        label: "Insurance Requirements",
        icon: Lock,
        description: "Meet insurance standards"
      },
      {
        value: "vacant",
        label: "Vacant Property",
        icon: Key,
        description: "Property checks and maintenance"
      }
    ]
  },
  {
    id: "currentSecurity",
    question: "What security do you currently have?",
    options: [
      {
        value: "none",
        label: "No Security System",
        icon: Bell,
        description: "Starting from scratch"
      },
      {
        value: "basic",
        label: "Basic Alarm",
        icon: Bell,
        description: "Simple alarm system"
      },
      {
        value: "upgrade",
        label: "Want to Upgrade",
        icon: Camera,
        description: "Improve existing system"
      }
    ]
  },
  {
    id: "timeline",
    question: "When do you need this installed?",
    options: [
      {
        value: "urgent",
        label: "As Soon As Possible",
        icon: ArrowRight,
        description: "Within 1-2 weeks"
      },
      {
        value: "soon",
        label: "Within a Month",
        icon: ArrowRight,
        description: "Planning ahead"
      },
      {
        value: "research",
        label: "Just Researching",
        icon: ArrowRight,
        description: "Gathering information"
      }
    ]
  }
];

export default function SecurityQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (questionId: string, value: string) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 300);
    } else {
      setTimeout(() => {
        setShowResults(true);
      }, 300);
    }
  };

  const getRecommendations = (): ServiceRecommendation[] => {
    const recommendations: ServiceRecommendation[] = [];

    // CCTV recommendation
    if (answers.mainConcern === "monitoring" || answers.mainConcern === "theft") {
      recommendations.push({
        title: "CCTV Systems",
        description: "HD cameras with remote viewing and night vision for complete property surveillance",
        icon: Camera,
        link: "/services/cctv"
      });
    }

    // Alarm systems
    if (answers.mainConcern === "theft" || answers.mainConcern === "insurance" || answers.currentSecurity === "none") {
      recommendations.push({
        title: "Wireless Alarm Systems",
        description: "Professional alarm installation with 24/7 monitoring and instant alerts",
        icon: Bell,
        link: "/services"
      });
    }

    // 24/7 Monitoring
    if (answers.propertyType === "vacation" || answers.mainConcern === "monitoring") {
      recommendations.push({
        title: "24/7 Monitoring Service",
        description: "Round-the-clock professional monitoring with rapid response team",
        icon: Eye,
        link: "/monitoring"
      });
    }

    // Property Management
    if (answers.propertyType === "vacation" || answers.mainConcern === "vacant") {
      recommendations.push({
        title: "Property Management",
        description: "Keyholding, property checks, cleaning, and maintenance services",
        icon: Key,
        link: "/property-management"
      });
    }

    // If no specific matches, show general services
    if (recommendations.length === 0) {
      recommendations.push(
        {
          title: "CCTV Systems",
          description: "HD cameras with remote viewing and night vision",
          icon: Camera,
          link: "/services/cctv"
        },
        {
          title: "Alarm Systems",
          description: "Professional wireless alarm installation",
          icon: Bell,
          link: "/services"
        }
      );
    }

    return recommendations.slice(0, 3); // Max 3 recommendations
  };

  const getUrgencyMessage = () => {
    if (answers.timeline === "urgent") {
      return "We can schedule a free security survey within 48 hours!";
    } else if (answers.timeline === "soon") {
      return "Let's plan your security installation for the coming weeks.";
    }
    return "We're here to answer all your questions and provide expert advice.";
  };

  const generateWhatsAppMessage = () => {
    const propertyTypeLabels: Record<string, string> = {
      home: "Residential Home",
      business: "Business Property",
      vacation: "Vacation Property"
    };

    const concernLabels: Record<string, string> = {
      theft: "Theft Prevention",
      monitoring: "Remote Monitoring",
      insurance: "Insurance Requirements",
      vacant: "Vacant Property Management"
    };

    const securityLabels: Record<string, string> = {
      none: "No Security System",
      basic: "Basic Alarm System",
      upgrade: "Want to Upgrade Existing System"
    };

    const timelineLabels: Record<string, string> = {
      urgent: "As Soon As Possible (1-2 weeks)",
      soon: "Within a Month",
      research: "Just Researching"
    };

    const message = `Hello! I just completed the security questionnaire on your website.\n\nHere are my requirements:\n\n🏠 Property Type: ${propertyTypeLabels[answers.propertyType] || "Not specified"}\n🔒 Main Concern: ${concernLabels[answers.mainConcern] || "Not specified"}\n🛡️ Current Security: ${securityLabels[answers.currentSecurity] || "Not specified"}\n⏰ Timeline: ${timelineLabels[answers.timeline] || "Not specified"}\n\nI would like to get a free quote and consultation for the recommended security solutions.`;

    return encodeURIComponent(message);
  };

  if (showResults) {
    const recommendations = getRecommendations();
    const urgencyMessage = getUrgencyMessage();

    return (
      <div className="w-full max-w-4xl mx-auto">
        <Card className="border-accent/20 shadow-2xl">
          <CardContent className="p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                <CheckCircle2 className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
                Your Recommended Security Solutions
              </h2>
              <p className="text-lg text-muted-foreground">
                {urgencyMessage}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {recommendations.map((rec, index) => {
                const Icon = rec.icon;
                return (
                  <Card key={index} className="border-border/50 hover:shadow-lg transition-all duration-300 hover:border-accent/30">
                    <CardContent className="p-6">
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">{rec.title}</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{rec.description}</p>
                      <Button asChild variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                        <Link href={rec.link}>Learn More</Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-4 text-center text-foreground">
                Ready to Secure Your Property?
              </h3>
              <p className="text-center text-muted-foreground mb-6">
                Get a free security survey and custom quote tailored to your needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <a href={`https://wa.me/35796804574?text=${generateWhatsAppMessage()}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Us
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="tel:26323204">
                    <Phone className="mr-2 h-5 w-5" />
                    Call 26 323204
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="border-accent/20 shadow-2xl">
        <CardContent className="p-8 md:p-12">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-muted-foreground">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-sm font-medium text-accent">
                {Math.round(progress)}%
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-foreground">
              {question.question}
            </h2>
          </div>

          {/* Answer Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {question.options.map((option) => {
              const Icon = option.icon;
              return (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(question.id, option.value)}
                  className="group relative p-6 border-2 border-border rounded-lg hover:border-accent hover:shadow-lg transition-all duration-300 text-left bg-card hover:bg-accent/5"
                >
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-accent/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold mb-1 text-foreground group-hover:text-accent transition-colors">
                    {option.label}
                  </h3>
                  {option.description && (
                    <p className="text-sm text-muted-foreground">
                      {option.description}
                    </p>
                  )}
                </button>
              );
            })}
          </div>

          {/* Back Button */}
          {currentQuestion > 0 && (
            <div className="mt-6 text-center">
              <Button
                variant="ghost"
                onClick={() => setCurrentQuestion(currentQuestion - 1)}
              >
                ← Back
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
