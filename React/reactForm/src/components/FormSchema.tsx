import { z } from "zod";

export const formSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),

    email: z.email("Invalid email"),

    password: z
        .string()
        .min(8, "Password must be at least 8 characters"),

    country: z.string().min(1, "Please select a country"),

    gender: z.enum(["male", "female"], {
        message: "Please select gender"
    }),

    terms: z.boolean().refine(val => val === true, {
        message: "You must accept terms"
    })
});