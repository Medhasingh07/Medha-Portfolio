import { skills } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl" style={{color: 'hsl(var(--primary))'}}>Skills & Technologies</h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Technologies I'm learning and building projects with
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {skills.map((skill) => (
            <Card key={skill.name} className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors duration-300">
              <CardContent className="flex flex-col items-center justify-center p-6 text-center space-y-4">
                <div 
                  className="w-16 h-16 rounded-lg flex items-center justify-center"
                  style={{ background: skill.color }}
                >
                  <skill.icon className="h-8 w-8 text-white" />
                </div>
                <p className="font-semibold text-base text-foreground">{skill.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
