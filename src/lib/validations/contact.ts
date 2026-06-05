import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Name Is Required" }),
  email: z.string().trim().email("Email Is Required"),
  message: z
    .string()
    .trim()
    .min(10, { message: "Message Is Too Short" })
    .max(10000, { message: "Message Is Too Long" }),
});
