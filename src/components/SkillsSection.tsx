import { skills } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl text-primary">My Technical Skills</h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            I have been building my skills in various frontend and backend technologies. Here's what I bring to the table.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <Card key={skill.name} className="overflow-hidden shadow-lg transition-transform duration-300 hover:scale-110 bg-card border-border hover:border-primary">
              <CardContent className="flex flex-col items-center justify-center p-6 text-center space-y-3">
                <skill.icon className="h-12 w-12 text-primary" />
                <p className="font-bold text-lg text-foreground">{skill.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
