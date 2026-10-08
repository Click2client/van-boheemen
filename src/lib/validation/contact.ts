import { z } from "zod";

import { contactContent } from "@/content/contact";
import { locationChoices, subjectChoices } from "@/content/services";

const errors = contactContent.form.errors;

const subjects = [...subjectChoices] as [string, ...string[]];
const locations = [...locationChoices] as [string, ...string[]];

export const contactSchema = z.object({
  name: z.string().trim().min(2, errors.name).max(100, errors.nameLength),
  company: z.string().trim().max(120, errors.company),
  email: z.string().trim().email(errors.email).max(200, errors.email),
  phone: z.string().trim().max(30, errors.phone),
  location: z.enum(locations, { error: errors.location }),
  subject: z.enum(subjects, { error: errors.subject }),
  message: z.string().trim().max(5000, errors.message),
});

export type ContactInput = z.infer<typeof contactSchema>;

export type ContactField = keyof ContactInput;

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors: Partial<Record<ContactField, string>>;
  ticket: number;
};

export const initialContactState: ContactFormState = {
  status: "idle",
  message: "",
  fieldErrors: {},
  ticket: 0,
};
