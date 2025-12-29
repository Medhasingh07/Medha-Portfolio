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
              Hello! I'm Medha Singh, currently pursuing a Diploma in Computer Science Engineering. My journey into the world of programming started with a curiosity to understand how things work on the web, and it has since grown into a deep passion for web development.
            </p>
            <p className="text-muted-foreground md:text-lg">
              I love the process of turning ideas into tangible, real-world projects. I am constantly learning new technologies and improving my skills to build efficient, scalable, and user-friendly applications.
            </p>
            <p className="text-muted-foreground md:text-lg">
              My goal is to become a skilled full-stack developer and join a forward-thinking tech company where I can contribute to meaningful projects, collaborate with talented people, and continue my growth as a developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
