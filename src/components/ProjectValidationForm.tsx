'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { validateProjectDescriptionAction } from '@/app/actions';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  projectTitle: z.string().min(5, 'Title must be at least 5 characters.'),
  projectDescription: z.string().min(20, 'Description must be at least 20 characters.'),
  techStack: z.string().min(3, 'Tech stack must be at least 3 characters.'),
});

export function ProjectValidationForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectTitle: '',
      projectDescription: '',
      techStack: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const result = await validateProjectDescriptionAction(values);

      if (result.isValid) {
        toast({
          title: '✅ Validation Successful!',
          description: "Your project description looks great.",
          className: "bg-green-100 border-green-400 text-green-800",
        });
        form.reset();
      } else {
        toast({
          title: '🤔 Needs Improvement',
          description: result.feedback,
          variant: 'destructive',
          duration: 9000,
        });
      }
    } catch (error) {
      toast({
        title: '❌ Error',
        description: 'An unexpected error occurred. Please try again.',
        variant: 'destructive',
      });
      console.error(error);
    } finally {
        setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 py-4">
        <FormField
          control={form.control}
          name="projectTitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Title</FormLabel>
              <FormControl>
                <Input placeholder="e.g., E-commerce Website" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="projectDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe the problem your project solves and its main features."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="techStack"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tech Stack</FormLabel>
              <FormControl>
                <Input placeholder="e.g., React, Next.js, Firebase" {...field} />
              </FormControl>
              <FormDescription>
                List the main technologies you used.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Validating...
            </>
          ) : (
            'Validate with AI'
          )}
        </Button>
      </form>
    </Form>
  );
}
