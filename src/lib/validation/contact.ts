import { z } from "zod";

import { contactContent } from "@/content/contact";

const errors = contactContent.form.errors;

export const contactSchema = z.object({
  name: z.string().trim().min(2, errors.name).max(100, errors.nameLength),
  email: z.string().trim().email(errors.email).max(200, errors.email),
  phone: z.string().trim().max(30, errors.phone),
  message: z
    .string()
    .trim()
    .min(10, errors.message)
    .max(5000, errors.messageLength),
});

export type ContactInput = z.infer<typeof contactSchema>;

export type ContactField = keyof ContactInput;

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors: Partial<Record<ContactField, string>>;
};

export const initialContactState: ContactFormState = {
  status: "idle",
  message: "",
  fieldErrors: {},
};
