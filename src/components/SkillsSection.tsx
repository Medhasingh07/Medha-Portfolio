import { skills } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export default function SkillsSection() {
  const bgColors = [
    'bg-blue-100 dark:bg-blue-900/20',
    'bg-green-100 dark:bg-green-900/20',
    'bg-pink-100 dark:bg-pink-900/20',
    'bg-yellow-100 dark:bg-yellow-900/20',
    'bg-purple-100 dark:bg-purple-900/20',
    'bg-indigo-100 dark:bg-indigo-900/20',
  ];
  const textColors = [
    'text-blue-600 dark:text-blue-400',
    'text-green-600 dark:text-green-400',
    'text-pink-600 dark:text-pink-400',
    'text-yellow-600 dark:text-yellow-400',
    'text-purple-600 dark:text-purple-400',
    'text-indigo-600 dark:text-indigo-400',
  ];


  return (
    <section id="skills" className="w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">My Technical Skills</h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            I have been building my skills in various frontend and backend technologies. Here's what I bring to the table.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <Card key={skill.name} className={cn('overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105', bgColors[index % bgColors.length])}>
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <skill.icon className={cn("h-12 w-12 mb-4", textColors[index % textColors.length])} />
                <p className={cn("font-bold text-lg", textColors[index % textColors.length])}>{skill.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
