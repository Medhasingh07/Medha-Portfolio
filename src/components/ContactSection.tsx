import { contact } from '@/lib/data';
import { Github, Linkedin, Mail, Rocket } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold font-headline tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent pb-2">
            Let's Connect!
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Feel free to reach out for collaborations or just a friendly chat
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 [perspective:1000px]">
            <a href={`mailto:${contact.email}`} className="group">
              <Card className="bg-card/50 border-border/30 h-full text-center p-6 transition-all duration-300 hover:border-primary/50 hover:bg-card/80 group-hover:[transform:rotateY(-15deg)]">
                <CardContent className="flex flex-col items-center justify-center gap-4">
                  <div className="p-4 bg-gradient-to-br from-pink-500 to-red-500 rounded-lg">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Email</h3>
                  <p className="text-muted-foreground break-all">{contact.email}</p>
                </CardContent>
              </Card>
            </a>
            
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="group">
              <Card className="bg-card/50 border-border/30 h-full text-center p-6 transition-all duration-300 hover:border-primary/50 hover:bg-card/80 group-hover:[transform:rotateY(-15deg)]">
                <CardContent className="flex flex-col items-center justify-center gap-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <Github className="h-8 w-8 text-foreground" />
                  </div>
                  <h3 className="text-xl font-bold">GitHub</h3>
                  <p className="text-muted-foreground">{contact.github.replace('https://', '')}</p>
                </CardContent>
              </Card>
            </a>
            
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="group">
              <Card className="bg-card/50 border-border/30 h-full text-center p-6 transition-all duration-300 hover:border-primary/50 hover:bg-card/80 group-hover:[transform:rotateY(-15deg)]">
                <CardContent className="flex flex-col items-center justify-center gap-4">
                  <div className="p-4 bg-gradient-to-br from-teal-400 to-blue-500 rounded-lg">
                    <Linkedin className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">LinkedIn</h3>
                  <p className="text-muted-foreground">{contact.linkedin.replace('https://www.linkedin.com/in/', 'linkedin.com/in/...')}</p>
                </CardContent>
              </Card>
            </a>
          </div>

          <div className="mt-16 flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-full bg-card/80 border border-border/50 px-6 py-3 text-base text-muted-foreground shadow-sm">
              Open to opportunities and collaborations
              <Rocket className="h-5 w-5 text-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
