import type { z } from 'zod';
import type { LoginSchema } from './validations';

export type TLogin = z.infer<typeof LoginSchema>;
