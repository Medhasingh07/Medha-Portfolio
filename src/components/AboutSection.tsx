import Image from 'next/image';
import { aboutMeImage } from '@/lib/data';

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <div className="relative w-full max-w-sm mx-auto md:max-w-md">
            <div className="relative w-full h-auto overflow-hidden rounded-lg shadow-lg border-2 border-border">
                <Image
                  src={aboutMeImage.imageUrl}
                  alt={aboutMeImage.description}
                  width={400}
                  height={400}
                  data-ai-hint={aboutMeImage.imageHint}
                  className="w-full h-full object-cover"
                />
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl text-primary">
              About Me
            </h2>
             <p className="text-muted-foreground md:text-lg">
              As a student learning web development, I am building my skills step by step. I enjoy creating simple, clean, and useful websites that solve real problems. My focus is on continuous improvement through practical work on personal projects.
            </p>
            <p className="text-muted-foreground md:text-lg">
              I have experience with HTML, CSS, JavaScript, and basic React. For backend features and hosting, I use Firebase. I am always excited to learn new technologies and apply them in small, manageable projects to expand my knowledge.
            </p>
            <p className="text-muted-foreground md:text-lg">
              I believe in writing clean code and continuously refining my work. My ultimate goal is to grow as a developer and contribute to building meaningful web applications that make a difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
