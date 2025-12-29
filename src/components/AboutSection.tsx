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
              Hello! I'm Medha, and I am currently in the process of becoming a web developer. My interest in technology and how it solves real-world problems led me to pursue a degree in Computer Science and Engineering.
            </p>
            <p className="text-muted-foreground md:text-lg">
              I am passionate about building things for the web and enjoy the entire process, from coming up with an idea to seeing it work in the browser. I focus on writing clean and efficient code to create user-friendly and reliable digital experiences.
            </p>
            <p className="text-muted-foreground md:text-lg">
              My goal is to continue learning and growing as a developer. I am always open to new challenges and opportunities that can help me build a strong foundation for a career in technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
