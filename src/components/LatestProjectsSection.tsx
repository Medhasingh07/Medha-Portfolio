'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/lib/data';
import { Github, Link as LinkIcon, PlusCircle, BrainCircuit } from 'lucide-react';
import { ProjectValidationForm } from './ProjectValidationForm';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

export default function LatestProjectsSection() {
  return (
    <section id="latest-projects" className="w-full py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl text-primary">Latest Projects</h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Here are some of the projects I've worked on. They demonstrate my skills in turning ideas into functional applications.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {projects.map((project, index) => (
            <div key={project.title} className="transition-transform duration-300 ease-in-out hover:scale-105">
              <Card className="flex flex-col overflow-hidden h-full bg-card border-border">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image.imageUrl}
                    alt={project.image.description}
                    fill
                    data-ai-hint={project.image.imageHint}
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                   <CardTitle className="pt-2">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-start gap-4 pt-6">
                  <Button asChild variant="outline">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <LinkIcon className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                  <Button asChild className="gradient-button">
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" variant="outline">
                    <PlusCircle className="mr-2 h-5 w-5" />
                    Add & Validate a Project Idea
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                      <DialogTitle className="flex items-center gap-2">
                        <BrainCircuit className="h-6 w-6 text-primary" />
                        AI-Powered Project Validation
                      </DialogTitle>
                      <DialogDescription>
                        Use our AI assistant to check if your project description is clear, concise, and professional.
                      </DialogDescription>
                  </DialogHeader>
                  <ProjectValidationForm />
              </DialogContent>
            </Dialog>
        </div>

      </div>
    </section>
  );
}
