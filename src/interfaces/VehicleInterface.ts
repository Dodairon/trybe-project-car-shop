import { z } from 'zod';

export const VehicleSchema = z.object({
  model: z.string().min(2),
  year: z.number().min(1900).max(2022),
  color: z.string().min(3),
  buyValue: z.number().int(),
  status: z.boolean().optional(),
});

export type Vehicle = z.infer<typeof VehicleSchema>;
