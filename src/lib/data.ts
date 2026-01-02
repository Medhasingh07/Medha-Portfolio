
import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';
import { Code, Palette, Zap, GitBranch, Type, Box, Database, Flame, Server } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Education & Experience', href: '#education-experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Services', href: '#services' },
  { name: 'Latest Projects', href: '#latest-projects' },
  { name: 'Contact', href: '#contact' },
];

export const skills: { name: string; icon: LucideIcon; color: string }[] = [
  { name: 'HTML', icon: Code, color: 'linear-gradient(to right, #ff6b6b, #f06595)' },
  { name: 'CSS', icon: Palette, color: 'linear-gradient(to right, #364fc7, #4dabf7)' },
  { name: 'JavaScript', icon: Zap, color: 'linear-gradient(to right, #fcc419, #ff922b)' },
  { name: 'React', icon: Code, color: 'linear-gradient(to right, #20c997, #96f2d7)' },
  { name: 'Next.js', icon: Box, color: 'linear-gradient(to right, #63e6be, #38d9a9)' },
  { name: 'TypeScript', icon: Type, color: 'linear-gradient(to right, #4c6ef5, #228be6)' },
  { name: 'Java', icon: Code, color: 'linear-gradient(to right, #f76707, #d9480f)' },
  { name: 'Python', icon: Code, color: 'linear-gradient(to right, #15aabf, #1098ad)' },
  { name: 'Firebase', icon: Flame, color: 'linear-gradient(to right, #ff922b, #fd7e14)' },
  { name: 'MongoDB', icon: Database, color: 'linear-gradient(to right, #82c91e, #5c940d)' },
  { name: 'PostgreSQL', icon: Database, color: 'linear-gradient(to right, #228be6, #1c7ed6)' },
  { name: 'Git & GitHub', icon: GitBranch, color: 'linear-gradient(to right, #e64980, #c2255c)' },
];

const findImage = (id: string): ImagePlaceholder => {
    const image = PlaceHolderImages.find(img => img.id === id);
    if (!image) {
        return {
            id: 'fallback',
            description: 'Fallback image',
            imageUrl: 'https://picsum.photos/seed/fallback/600/400',
            imageHint: 'placeholder'
        };
    }
    return image;
};

export const projects = [
  {
    title: 'Personal Portfolio Website',
    description: 'A responsive personal portfolio to showcase my skills and projects to potential employers and collaborators. Built with modern web technologies.',
    tech: ['React', 'Next.js', 'Tailwind CSS'],
    liveUrl: '#',
    repoUrl: 'https://github.com/Medhasingh07/Medha-Portfolio',
    image: findImage('project-portfolio'),
  },
  {
    title: 'Govt. Scheme Eligibility Checker',
    description: 'A user-friendly tool to help citizens check their eligibility for various government schemes based on their profile, simplifying access to public services.',
    tech: ['Next.js', 'React', 'Tailwind CSS'],
    liveUrl: 'https://sarkari-suvidha-phi.vercel.app/',
    repoUrl: 'https://github.com/Medhasingh07/Sarkari-Suvidha.git',
    image: findImage('project-gov-scheme'),
  },
  {
    title: 'Healthy - Fitness Website',
    description: 'A website focused on health and fitness, providing resources and information to users. Built with JavaScript.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://healthy-livid.vercel.app/',
    repoUrl: 'https://github.com/Medhasingh07/healthy.git',
    image: findImage('project-healthy'),
  },
];

export const aboutMeImage = findImage('about-me');

export const contact = {
  email: 'medhasingh1350@gmail.com',
  github: 'https://github.com/medhasingh07',
  linkedin: 'https://www.linkedin.com/in/medhasingh10/',
};
