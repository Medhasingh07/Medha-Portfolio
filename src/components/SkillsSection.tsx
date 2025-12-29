import { Progress } from '@/components/ui/progress';
import { skills } from '@/lib/data';

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">My Technical Skills</h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            I have been building my skills in various frontend and backend technologies. Here's what I bring to the table.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <skill.icon className="h-6 w-6 text-primary" />
                    <p className="font-medium text-lg">{skill.name}</p>
                </div>
                <p className="text-sm text-muted-foreground">{skill.level}%</p>
              </div>
              <Progress value={skill.level} className="h-3" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
