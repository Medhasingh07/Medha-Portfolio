import { Card, CardContent } from '@/components/ui/card';
import { Award, BarChart, BugOff, Rocket, Trophy, Zap } from 'lucide-react';

const achievements = [
  {
    icon: Rocket,
    text: 'Achieved 99.9% uptime on deployed full-stack applications.',
  },
  {
    icon: Zap,
    text: 'Improved API response times by 30% through query optimization.',
  },
  {
    icon: BarChart,
    text: 'Reduced page load times by 40% with code-splitting and caching.',
  },
  {
    icon: BugOff,
    text: 'Cut production bugs by 25% through rigorous testing and QA.',
  },
];

const stats = [
  {
    icon: Trophy,
    value: '10+',
    label: 'Projects Delivered',
  },
  {
    icon: Award,
    value: '95%',
    label: 'Client Satisfaction',
  },
  {
    icon: Zap,
    value: '4+',
    label: 'Certifications',
  },
  {
    icon: BarChart,
    value: '8.1/10',
    label: 'CGPA',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-bold font-headline tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent pb-2">
            About Me
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Passionate about creating impactful digital solutions.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-8 text-left">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Who I Am
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I am a Full Stack Developer specializing in building scalable, high-performance web applications. With a strong foundation in the MERN stack, Java, and Tailwind CSS, I thrive on turning complex problems into elegant solutions. My interests lie in Generative AI, process automation, and pushing the boundaries of web performance.
              </p>
            </div>
            
            <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                    Key Achievements
                </h3>
                <ul className="space-y-4">
                    {achievements.map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                        <div className="p-2 bg-primary/10 rounded-full">
                            <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <span className="flex-1 text-muted-foreground pt-1">{item.text}</span>
                    </li>
                    ))}
                </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <Card
                key={stat.label}
                className="bg-card/80 border-border/30 backdrop-blur-sm p-6 text-center transform transition-transform duration-300 hover:scale-105 hover:border-primary"
              >
                <CardContent className="flex flex-col items-center justify-center gap-4 p-0">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <stat.icon className="h-7 w-7 text-accent" />
                  </div>
                  <p className="text-4xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
