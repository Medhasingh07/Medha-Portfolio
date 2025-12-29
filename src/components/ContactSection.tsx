import { Button } from '@/components/ui/button';
import { contact } from '@/lib/data';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">Get In Touch</h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            I'm currently open to new opportunities and collaborations. My inbox is always open, whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href={`mailto:${contact.email}`}>
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </a>
            </Button>
            <div className="flex items-center gap-4">
              <Button asChild variant="outline" size="icon" className="h-12 w-12 rounded-full">
                <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-6 w-6" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon" className="h-12 w-12 rounded-full">
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
