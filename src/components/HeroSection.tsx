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
            Diploma CSE Student | Aspiring Web Developer
          </p>
          <p className="mt-6 max-w-2xl mx-auto text-base text-muted-foreground md:text-lg">
            A passionate and motivated computer science student from India, dedicated to building beautiful and functional web applications. I am eager to learn, grow, and contribute to the world of technology.
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
