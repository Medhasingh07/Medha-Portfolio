import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MoveRight, Download, Github, Linkedin } from 'lucide-react';
import { aboutMeImage, contact } from '@/lib/data';

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-4xl font-headline font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Developer
            </h1>
            <p className="mt-4 text-lg font-medium text-muted-foreground sm:text-xl md:text-2xl">
              Hey, I'm <span className="text-primary">Medha Singh</span>, Aspiring Web Developer
            </p>
            <p className="mt-6 max-w-xl text-base text-muted-foreground/80">
              I am a student from India, currently pursuing a degree in Computer Science and Engineering while learning web development. I enjoy building simple and useful websites, turning ideas into real projects, and improving my skills step by step.
            </p>
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              <Button asChild size="lg" className="gradient-button">
                <Link href="#contact">
                  Let's Talk
                </Link>
              </Button>
               <Button asChild size="lg" variant="outline">
                <Link href="#projects">
                  View My Work
                  <MoveRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="w-full max-w-sm p-6 bg-secondary/50 border border-border rounded-xl backdrop-blur-sm">
                <div className="flex flex-col items-center space-y-4">
                    <div className="relative w-32 h-32">
                        <Image
                            src={aboutMeImage.imageUrl}
                            alt="Abstract code image"
                            width={128}
                            height={128}
                            data-ai-hint={aboutMeImage.imageHint}
                            className="rounded-full object-cover border-4 border-primary"
                        />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Medha Singh</h2>
                    <p className="text-muted-foreground">@medha-singh</p>
                    <div className="flex gap-4">
                        <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Github /></a>
                        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Linkedin /></a>
                    </div>
                    <Button asChild className="w-full gradient-button">
                        <a href="/resume.pdf" download>
                            <Download className="mr-2 h-4 w-4" /> Download CV
                        </a>
                    </Button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
