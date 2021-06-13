import { z } from "zod";
import { WeatherSchema } from '../schemas/weather';

export type Weather = z.infer<typeof WeatherSchema>;
