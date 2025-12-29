import Image from 'next/image';
import { aboutMeImage } from '@/lib/data';

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <div className="relative w-full max-w-sm mx-auto md:max-w-md">
            <div className="absolute -top-3 -left-3 w-full h-full bg-secondary rounded-lg transform -rotate-2 transition-transform duration-300 group-hover:rotate-0"></div>
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
            <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">
              About Me
            </h2>
            <p className="text-muted-foreground md:text-lg">
              My journey into web development started with a simple curiosity about how websites work. As a Computer Science and Engineering student, I quickly grew passionate about turning ideas into real-world applications.
            </p>
            <p className="text-muted-foreground md:text-lg">
              I enjoy the process of building projects from the ground up and am always excited to learn new technologies. My goal is to keep improving my skills and grow into a skilled developer who can create efficient and user-friendly digital experiences.
            </p>
            <p className="text-muted-foreground md:text-lg">
              I am focused on building a strong foundation in both frontend and backend development to prepare for a career where I can contribute to meaningful projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
