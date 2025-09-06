import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { User, Mail, Phone, Globe, Star, TrendingUp, AlertTriangle } from 'lucide-react';

// Mock data for demonstration
const mockResumeData = {
  personalDetails: {
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 123-4567",
    portfolio: "sarahjohnson.dev"
  },
  summary: "Experienced Full Stack Developer with 5+ years in React, Node.js, and cloud technologies. Passionate about building scalable web applications and mentoring junior developers.",
  experience: [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Inc.",
      duration: "2022 - Present",
      description: "Led development of microservices architecture serving 1M+ users"
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      duration: "2020 - 2022",
      description: "Built customer-facing web applications using React and Node.js"
    }
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Technology",
      year: "2020"
    }
  ],
  technicalSkills: ["React", "Node.js", "TypeScript", "Python", "AWS", "Docker", "PostgreSQL"],
  softSkills: ["Leadership", "Communication", "Problem Solving", "Team Collaboration"],
  aiAnalysis: {
    overallScore: 85,
    strengths: [
      "Strong technical skill set",
      "Clear career progression",
      "Quantified achievements"
    ],
    improvements: [
      "Add more specific metrics",
      "Include recent certifications",
      "Expand project descriptions"
    ],
    skillsToLearn: ["Machine Learning", "Kubernetes", "GraphQL"]
  }
};

const ResumeDisplay = () => {
  return (
    <div className="space-y-6">
      {/* Overall Score Card */}
      <Card className="bg-gradient-secondary border-0 shadow-medium">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="w-5 h-5 text-primary" />
            Resume Score
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <div className="text-4xl font-bold text-primary">
              {mockResumeData.aiAnalysis.overallScore}
            </div>
            <div className="flex-1">
              <Progress value={mockResumeData.aiAnalysis.overallScore} className="h-3" />
              <p className="text-sm text-muted-foreground mt-1">out of 100</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Personal Details */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="w-5 h-5" />
            Personal Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-muted-foreground" />
            <span className="font-medium">{mockResumeData.personalDetails.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-muted-foreground" />
            <span>{mockResumeData.personalDetails.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-muted-foreground" />
            <span>{mockResumeData.personalDetails.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-muted-foreground" />
            <span>{mockResumeData.personalDetails.portfolio}</span>
          </div>
        </CardContent>
      </Card>

      {/* Skills */}
      <Card>
        <CardHeader>
          <CardTitle>Skills Analysis</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Technical Skills</h4>
            <div className="flex flex-wrap gap-2">
              {mockResumeData.technicalSkills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <Separator />
          <div>
            <h4 className="font-medium mb-2">Soft Skills</h4>
            <div className="flex flex-wrap gap-2">
              {mockResumeData.softSkills.map((skill) => (
                <Badge key={skill} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI Feedback */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            AI Feedback
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-medium text-success mb-2 flex items-center gap-2">
              <Star className="w-4 h-4" />
              Strengths
            </h4>
            <ul className="space-y-1">
              {mockResumeData.aiAnalysis.strengths.map((strength, index) => (
                <li key={index} className="text-sm text-muted-foreground">
                  • {strength}
                </li>
              ))}
            </ul>
          </div>
          
          <Separator />
          
          <div>
            <h4 className="font-medium text-warning mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Areas for Improvement
            </h4>
            <ul className="space-y-1">
              {mockResumeData.aiAnalysis.improvements.map((improvement, index) => (
                <li key={index} className="text-sm text-muted-foreground">
                  • {improvement}
                </li>
              ))}
            </ul>
          </div>
          
          <Separator />
          
          <div>
            <h4 className="font-medium text-primary mb-2">Suggested Skills to Learn</h4>
            <div className="flex flex-wrap gap-2">
              {mockResumeData.aiAnalysis.skillsToLearn.map((skill) => (
                <Badge key={skill} variant="default">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export { ResumeDisplay };