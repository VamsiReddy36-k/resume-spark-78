import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Upload, FileText, CheckCircle, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const FileUpload = () => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
  const [progress, setProgress] = useState(0);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    // Simulate file upload process
    simulateUpload();
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      simulateUpload();
    }
  };

  const simulateUpload = () => {
    setUploadStatus('uploading');
    setProgress(0);

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploadStatus('success');
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const resetUpload = () => {
    setUploadStatus('idle');
    setProgress(0);
  };

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Upload className="w-5 h-5" />
          Upload Resume
        </CardTitle>
        <CardDescription>
          Upload your resume in PDF format for AI analysis
        </CardDescription>
      </CardHeader>
      <CardContent>
        {uploadStatus === 'idle' && (
          <div
            className={cn(
              "border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer",
              isDragOver ? "border-primary bg-primary/5" : "border-muted-foreground/25 hover:border-primary/50"
            )}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => document.getElementById('file-input')?.click()}
          >
            <FileText className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-lg font-medium mb-2">Drop your resume here</h3>
            <p className="text-muted-foreground mb-4">or click to browse files</p>
            <Button variant="professional">
              Choose File
            </Button>
            <input
              id="file-input"
              type="file"
              accept=".pdf"
              className="hidden"
              onChange={handleFileSelect}
            />
            <p className="text-xs text-muted-foreground mt-4">
              Supports PDF files up to 10MB
            </p>
          </div>
        )}

        {uploadStatus === 'uploading' && (
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
              <FileText className="w-8 h-8 text-primary-foreground animate-pulse" />
            </div>
            <h3 className="text-lg font-medium mb-2">Analyzing Resume...</h3>
            <p className="text-muted-foreground mb-4">Please wait while we process your file</p>
            <Progress value={progress} className="w-full max-w-xs mx-auto" />
            <p className="text-sm text-muted-foreground mt-2">{progress}% complete</p>
          </div>
        )}

        {uploadStatus === 'success' && (
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 mx-auto mb-4 text-success" />
            <h3 className="text-lg font-medium mb-2">Analysis Complete!</h3>
            <p className="text-muted-foreground mb-4">Your resume has been successfully analyzed</p>
            <Button variant="ghost" onClick={resetUpload}>
              Upload Another Resume
            </Button>
          </div>
        )}

        {uploadStatus === 'error' && (
          <div className="text-center py-8">
            <AlertCircle className="w-16 h-16 mx-auto mb-4 text-destructive" />
            <h3 className="text-lg font-medium mb-2">Upload Failed</h3>
            <p className="text-muted-foreground mb-4">There was an error processing your file</p>
            <Button variant="outline" onClick={resetUpload}>
              Try Again
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export { FileUpload };