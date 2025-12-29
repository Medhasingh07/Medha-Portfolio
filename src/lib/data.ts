import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';
import { Code, Palette, Database, GitBranch, Type, Box, Leaf, Server } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const skills: { name: string; level: number; icon: LucideIcon }[] = [
  { name: 'HTML', level: 95, icon: Code },
  { name: 'CSS', level: 90, icon: Palette },
  { name: 'JavaScript', level: 80, icon: Code },
  { name: 'TypeScript', level: 75, icon: Type },
  { name: 'React', level: 75, icon: Code },
  { name: 'Next.js', level: 70, icon: Box },
  { name: 'Firebase', level: 70, icon: Database },
  { name: 'MongoDB', level: 65, icon: Server },
  { name: 'Git & GitHub', level: 85, icon: GitBranch },
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
    title: 'Student Management System',
    description: 'A basic CRUD application for managing student records. It allows adding, viewing, updating, and deleting student information.',
    tech: ['React', 'Firebase'],
    liveUrl: '#',
    repoUrl: 'https://github.com/medha-singh/student-management',
    image: findImage('project-student-mgmt'),
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
