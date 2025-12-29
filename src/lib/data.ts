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

export const skills: { name: string; icon: LucideIcon }[] = [
  { name: 'HTML', icon: Code },
  { name: 'CSS', icon: Palette },
  { name: 'JavaScript', icon: Code },
  { name: 'TypeScript', icon: Type },
  { name: 'React', icon: Code },
  { name: 'Next.js', icon: Box },
  { name: 'Firebase', icon: Database },
  { name: 'MongoDB', icon: Server },
  { name: 'Git & GitHub', icon: GitBranch },
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
