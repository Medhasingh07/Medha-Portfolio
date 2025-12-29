import { Card, CardContent } from '@/components/ui/card';
import { Heart, Lightbulb, Target } from 'lucide-react';

const traits = [
  {
    icon: Heart,
    label: 'Passionate Learner',
    color: 'from-pink-500 to-red-500',
  },
  {
    icon: Lightbulb,
    label: 'Creative Thinker',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    icon: Target,
    label: 'Goal Oriented',
    color: 'from-cyan-400 to-blue-500',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold font-headline tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent pb-2">
            About Me
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {traits.map((trait) => (
              <Card key={trait.label} className="bg-card/50 border-border/30">
                <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                  <div
                    className={`p-3 rounded-full bg-gradient-to-br ${trait.color}`}
                  >
                    <trait.icon className="h-6 w-6 text-white" />
                  </div>
                  <p className="font-semibold text-foreground">{trait.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 rounded-lg bg-card/80 p-8 text-left shadow-lg border border-border/30 backdrop-blur-sm">
            <p className="text-muted-foreground md:text-lg">
              As a student learning web development, I am building my skills step by step. I enjoy creating simple, clean, and useful websites that solve real problems. My focus is on continuous improvement through practical work on personal projects.
            </p>
            <p className="mt-4 text-muted-foreground md:text-lg">
              I have experience with HTML, CSS, JavaScript, and basic React. For backend features and hosting, I use Firebase. I am always excited to learn new technologies and apply them in small, manageable projects to expand my knowledge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
