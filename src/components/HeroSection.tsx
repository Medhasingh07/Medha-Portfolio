import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-headline font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Medha Singh
          </h1>
          <p className="mt-4 text-lg font-medium text-accent sm:text-xl md:text-2xl font-headline">
            Student & Web Developer
          </p>
          <p className="mt-6 max-w-2xl mx-auto text-base text-muted-foreground md:text-lg">
            I am a student from India, currently pursuing a Diploma in Computer Science and Engineering while learning web development. I enjoy building simple and useful websites, turning ideas into real projects, and improving my skills step by step.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" variant="outline">
              <Link href="#projects">
                View My Work
                <MoveRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg">
              <Link href="#contact">
                Get In Touch
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
