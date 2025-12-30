import { Briefcase, CheckCircle2, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from './ui/separator';

const EducationAndExperienceSection = () => {
  return (
    <section id="education-experience" className="w-full py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Education Card */}
          <div className="flex flex-col gap-8">
            <div className="mx-auto max-w-4xl text-center lg:text-left">
              <h2 className="text-4xl font-bold font-headline tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent pb-2">
                Education
              </h2>
            </div>
            <Card className="bg-card/50 border-border/30 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg h-full">
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

          {/* Experience Card */}
          <div className="flex flex-col gap-8">
            <div className="mx-auto max-w-4xl text-center lg:text-left">
              <h2 className="text-4xl font-bold font-headline tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent pb-2">
                Experience
              </h2>
            </div>
            <Card className="bg-card/50 border-border/30 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-accent/10 rounded-full">
                    <Briefcase className="h-6 w-6 text-accent" />
                  </div>
                  <span className="text-2xl font-bold">Internships</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-foreground">Full Stack Developer Intern</h3>
                  <p className="text-muted-foreground">Revlabz.ai (6 Months)</p>
                  <ul className="mt-2 space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span>Worked on full-stack web applications using React, JavaScript, and modern UI frameworks.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span>Integrated APIs and improved application performance.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span>Collaborated with team members to deliver scalable and maintainable features.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-foreground">Full Stack Developer Intern</h3>
                  <p className="text-muted-foreground">Hanumant Technology Pvt. Ltd. (1 Year)</p>
                  <ul className="mt-2 space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span>Designed and deployed 3+ applications using React & Spring Boot.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span>Improved API performance by 25%.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span>Built responsive UI components and optimized backend services.</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationAndExperienceSection;
