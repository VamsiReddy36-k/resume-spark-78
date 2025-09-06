import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { FileUpload } from '@/components/FileUpload';
import { ResumeDisplay } from '@/components/ResumeDisplay';
import { HistoryViewer } from '@/components/HistoryViewer';
import { Upload, FileText, Clock, TrendingUp } from 'lucide-react';

const ResumeAnalyzer = () => {
  const [activeTab, setActiveTab] = useState('analyze');

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-soft">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                Resume Analyzer
              </h1>
              <p className="text-muted-foreground mt-1">
                AI-powered resume analysis and insights
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="px-3 py-1">
                <TrendingUp className="w-4 h-4 mr-1" />
                Beta
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
            <TabsTrigger value="analyze" className="flex items-center gap-2">
              <Upload className="w-4 h-4" />
              Live Analysis
            </TabsTrigger>
            <TabsTrigger value="history" className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              History
            </TabsTrigger>
          </TabsList>

          <TabsContent value="analyze" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold mb-2">Analyze Your Resume</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Upload your resume in PDF format and get instant AI-powered feedback, 
                skill analysis, and improvement suggestions.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <FileUpload />
              <ResumeDisplay />
            </div>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold mb-2">Analysis History</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                View all your previously analyzed resumes and their insights.
              </p>
            </div>
            
            <HistoryViewer />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default ResumeAnalyzer;