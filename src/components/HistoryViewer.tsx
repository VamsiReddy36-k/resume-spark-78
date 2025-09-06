import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Eye, Download, Star, Calendar } from 'lucide-react';

// Mock historical data
const mockHistoryData = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    fileName: "sarah_resume_2024.pdf",
    score: 85,
    analyzedAt: "2024-01-15",
    technicalSkills: ["React", "Node.js", "TypeScript", "AWS"],
    softSkills: ["Leadership", "Communication"],
    feedback: {
      strengths: ["Strong technical background", "Clear career progression"],
      improvements: ["Add more metrics", "Include certifications"]
    }
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "michael.chen@email.com",
    fileName: "michael_resume_v2.pdf",
    score: 78,
    analyzedAt: "2024-01-14",
    technicalSkills: ["Python", "Django", "PostgreSQL", "Docker"],
    softSkills: ["Problem Solving", "Team Work"],
    feedback: {
      strengths: ["Good technical skills", "Relevant experience"],
      improvements: ["Improve summary section", "Add more projects"]
    }
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    email: "emily.rodriguez@email.com",
    fileName: "emily_resume_final.pdf",
    score: 92,
    analyzedAt: "2024-01-13",
    technicalSkills: ["Java", "Spring Boot", "Kubernetes", "MongoDB"],
    softSkills: ["Project Management", "Mentoring"],
    feedback: {
      strengths: ["Excellent technical depth", "Strong leadership experience"],
      improvements: ["Update contact information", "Add recent achievements"]
    }
  }
];

interface ResumeDetailsProps {
  resume: typeof mockHistoryData[0];
}

const ResumeDetails: React.FC<ResumeDetailsProps> = ({ resume }) => (
  <div className="space-y-6">
    {/* Score */}
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Star className="w-5 h-5 text-primary" />
          Resume Score: {resume.score}/100
        </CardTitle>
      </CardHeader>
    </Card>

    {/* Skills */}
    <Card>
      <CardHeader>
        <CardTitle>Skills</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-medium mb-2">Technical Skills</h4>
          <div className="flex flex-wrap gap-2">
            {resume.technicalSkills.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-medium mb-2">Soft Skills</h4>
          <div className="flex flex-wrap gap-2">
            {resume.softSkills.map((skill) => (
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
        <CardTitle>AI Feedback</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-medium text-success mb-2">Strengths</h4>
          <ul className="space-y-1">
            {resume.feedback.strengths.map((strength, index) => (
              <li key={index} className="text-sm text-muted-foreground">
                • {strength}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-warning mb-2">Areas for Improvement</h4>
          <ul className="space-y-1">
            {resume.feedback.improvements.map((improvement, index) => (
              <li key={index} className="text-sm text-muted-foreground">
                • {improvement}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  </div>
);

const HistoryViewer = () => {
  const [selectedResume, setSelectedResume] = useState<typeof mockHistoryData[0] | null>(null);

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-success";
    if (score >= 75) return "text-primary";
    if (score >= 60) return "text-warning";
    return "text-destructive";
  };

  const getScoreBadge = (score: number) => {
    if (score >= 90) return "default";
    if (score >= 75) return "secondary";
    if (score >= 60) return "outline";
    return "destructive";
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Resume Analysis History</CardTitle>
          <CardDescription>
            {mockHistoryData.length} resumes analyzed
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>File Name</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockHistoryData.map((resume) => (
                <TableRow key={resume.id}>
                  <TableCell className="font-medium">{resume.name}</TableCell>
                  <TableCell>{resume.email}</TableCell>
                  <TableCell className="text-muted-foreground">{resume.fileName}</TableCell>
                  <TableCell>
                    <Badge variant={getScoreBadge(resume.score)} className={getScoreColor(resume.score)}>
                      {resume.score}/100
                    </Badge>
                  </TableCell>
                  <TableCell className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    {resume.analyzedAt}
                  </TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setSelectedResume(resume)}
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle>{resume.name} - Resume Analysis</DialogTitle>
                          <DialogDescription>
                            Analyzed on {resume.analyzedAt}
                          </DialogDescription>
                        </DialogHeader>
                        {selectedResume && <ResumeDetails resume={selectedResume} />}
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {mockHistoryData.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <div className="text-muted-foreground">
              <Calendar className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No Analysis History</h3>
              <p>Upload and analyze your first resume to get started!</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export { HistoryViewer };