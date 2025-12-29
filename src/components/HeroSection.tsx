'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const headingText = 'Medha Singh';
const typedText = 'Web Developer | Learning & Building Projects';

export default function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= typedText.length) {
        setDisplayText(typedText.substring(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 100);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  return (
    <section id="home" className="relative w-full min-h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent/20 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-primary/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center">
                <h1 className="text-6xl md:text-8xl font-bold font-headline bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary pb-4">
                    {headingText}
                </h1>
                <p className="mt-2 text-lg font-medium text-muted-foreground sm:text-xl md:text-2xl min-h-[3rem]">
                    {displayText}
                    {isTyping && <span className="animate-blink text-primary">|</span>}
                </p>
                <p className="mt-6 max-w-2xl text-base text-muted-foreground/80">
                    I am a student learning web development and building projects step by step. I enjoy creating simple and useful websites and want to grow as a skilled developer by working on real projects.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <Button asChild size="lg" className="gradient-button">
                        <Link href="#latest-projects">
                            View Projects
                        </Link>
                    </Button>
                    <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                        <Link href="#contact">
                            Get in Touch
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    </section>
  );
}
