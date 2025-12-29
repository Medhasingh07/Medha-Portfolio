'use server';

/**
 * @fileOverview A flow to validate project descriptions using an LLM.
 *
 * - validateProjectDescription - A function that validates a project description.
 * - ValidateProjectDescriptionInput - The input type for the validateProjectDescription function.
 * - ValidateProjectDescriptionOutput - The return type for the validateProjectDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ValidateProjectDescriptionInputSchema = z.object({
  projectTitle: z.string().describe('The title of the project.'),
  projectDescription: z.string().describe('The description of the project.'),
  techStack: z.string().describe('The tech stack used in the project (e.g., HTML, CSS, JavaScript, React, Firebase).'),
});
export type ValidateProjectDescriptionInput = z.infer<typeof ValidateProjectDescriptionInputSchema>;

const ValidateProjectDescriptionOutputSchema = z.object({
  isValid: z.boolean().describe('Whether the project description is valid (clear, concise, and accurate).'),
  feedback: z.string().describe('Feedback on the project description, if it is not valid.'),
});
export type ValidateProjectDescriptionOutput = z.infer<typeof ValidateProjectDescriptionOutputSchema>;

export async function validateProjectDescription(input: ValidateProjectDescriptionInput): Promise<ValidateProjectDescriptionOutput> {
  return validateProjectDescriptionFlow(input);
}

const validateProjectDescriptionPrompt = ai.definePrompt({
  name: 'validateProjectDescriptionPrompt',
  input: {schema: ValidateProjectDescriptionInputSchema},
  output: {schema: ValidateProjectDescriptionOutputSchema},
  prompt: `You are an expert web developer reviewing project descriptions for a student's portfolio.

  Your task is to determine if the project description is clear, concise, and accurately reflects the project's purpose and the technologies used.

  Project Title: {{{projectTitle}}}
  Project Description: {{{projectDescription}}}
  Tech Stack: {{{techStack}}}

  Respond with a JSON object that contains two fields:
  - isValid (boolean): true if the description is valid, false otherwise.
  - feedback (string): If isValid is false, provide feedback on how to improve the description.  If it's valid, leave blank.

  Example of good output:
  {
    "isValid": true,
    "feedback": ""
  }

  Example of bad output:
  {
    "isValid": false,
    "feedback": "The description is too vague. Please provide more details about the project's functionality and the specific problems it solves.  Also, clarify which technologies were used for which parts of the project."
  }

  Make sure the isValid and feedback are valid JSON field values. No code fences around the JSON.
  `,
});

const validateProjectDescriptionFlow = ai.defineFlow(
  {
    name: 'validateProjectDescriptionFlow',
    inputSchema: ValidateProjectDescriptionInputSchema,
    outputSchema: ValidateProjectDescriptionOutputSchema,
  },
  async input => {
    const {output} = await validateProjectDescriptionPrompt(input);
    return output!;
  }
);
