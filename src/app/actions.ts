'use server';

import {
  validateProjectDescription,
  type ValidateProjectDescriptionInput,
  type ValidateProjectDescriptionOutput,
} from '@/ai/flows/validate-project-descriptions';

export async function validateProjectDescriptionAction(
  input: ValidateProjectDescriptionInput
): Promise<ValidateProjectDescriptionOutput> {
  try {
    const output = await validateProjectDescription(input);
    return output;
  } catch (error) {
    console.error('Error validating project description:', error);
    return {
      isValid: false,
      feedback: 'An error occurred while communicating with the AI. Please try again later.',
    };
  }
}
