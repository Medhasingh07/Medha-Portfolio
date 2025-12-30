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
  { name: 'Firebase', icon: Flame, color: 'linear-gradient(to right, #ff922b, #fd7e14)' },
  { name: 'MongoDB', icon: Database, color: 'linear-gradient(to right, #82c91e, #5c940d)' },
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
    repoUrl: 'https://github.com/medha-singh/portfolio',
    image: findImage('project-portfolio'),
  },
  {
    title: 'Govt. Scheme Eligibility Checker',
    description: 'A user-friendly tool to help citizens check their eligibility for various government schemes based on their profile, simplifying access to public services.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: '#',
    repoUrl: 'https://github.com/medha-singh/scheme-checker',
    image: findImage('project-gov-scheme'),
  },
  {
    title: 'To-Do App with Firebase',
    description: 'A simple and effective to-do list application with real-time data synchronization using Firebase Firestore, allowing users to manage their tasks from any device.',
    tech: ['JavaScript', 'Firebase'],
    liveUrl: '#',
    repoUrl: 'https://github.com/medha-singh/firebase-todo',
    image: findImage('project-todo'),
  },
];

export const aboutMeImage = findImage('about-me');

export const contact = {
  email: 'medha.singh.dev@email.com',
  github: 'https://github.com/medha-singh',
  linkedin: 'https://linkedin.com/in/medha-singh-dev',
};
