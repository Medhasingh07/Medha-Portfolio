import { GraduationCap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from './ui/separator';

const EducationSection = () => {
  return (
    <section id="education" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="text-4xl font-bold font-headline tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent pb-2">
            Education
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            My academic journey so far.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-card/50 border-border/30 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-full">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <span className="text-2xl font-bold">My Qualifications</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-2">
                <h3 className="font-bold text-lg text-foreground">Diploma in Computer Science and Engineering</h3>
                <p className="text-muted-foreground">School of Management Sciences, Lucknow</p>
                <p className="text-sm text-muted-foreground/80">Status: Pursuing</p>
              </div>
              <Separator />
              <div className="space-y-2">
                <h3 className="font-bold text-lg text-foreground">Higher Secondary (12th Grade – PCM)</h3>
                <p className="text-muted-foreground">Year of Completion: 2023</p>
              </div>
              <Separator />
              <div className="space-y-2">
                <h3 className="font-bold text-lg text-foreground">Secondary School (10th Grade)</h3>
                <p className="text-muted-foreground">Year of Completion: 2021</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
