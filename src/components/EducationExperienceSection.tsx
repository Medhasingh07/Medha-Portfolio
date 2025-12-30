import { GraduationCap, Briefcase, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const EducationExperienceSection = () => {
  return (
    <section id="education-experience" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl text-center mb-16">
          <h2 className="text-4xl font-bold font-headline tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent pb-2">
            Education & Experience
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            A snapshot of my academic and professional journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Education Card */}
          <Card className="bg-card/50 border-border/30 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-full">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <span className="text-2xl font-bold">Education</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-bold text-lg text-foreground">Diploma in Computer Science and Engineering</h3>
                <p className="text-muted-foreground">School of Management Sciences, Lucknow</p>
                <p className="text-sm text-muted-foreground/80">Status: Pursuing</p>
              </div>
            </CardContent>
          </Card>

          {/* Experience Card */}
          <Card className="bg-card/50 border-border/30 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 bg-accent/10 rounded-full">
                  <Briefcase className="h-6 w-6 text-accent" />
                </div>
                <span className="text-2xl font-bold">Experience</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-bold text-lg text-foreground">Full Stack Developer Intern</h3>
                <p className="text-muted-foreground">Hanumant Technology Pvt. Ltd.</p>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>Designed and deployed 3+ web applications using React & Spring Boot.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>Improved API performance by 25% through optimization.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>Worked on scalable backend APIs and responsive UI components.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationExperienceSection;
