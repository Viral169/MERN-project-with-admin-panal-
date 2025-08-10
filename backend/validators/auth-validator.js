const {z} = require("zod");
const signupSchema = z.object({
  username: z
    .string({require: "name must be require"})
    .trim()
    .min(3, {message: "name must be at least 3 chars"}),
  phone: z
    .string({require: "Phone must be require"})
    .trim()
    .min(10, {message: "Phone must be at least 10 chars"})
    .max(10, {message: "Phone must be at least 10 chars"}),
  email: z
    .string()
    .trim()
    .min(1, {message: "Email is required"})
    .email({message: "Invalid email format"})
    .max(255, {message: "Email must be at most 255 characters"}),
  password: z
    .string()
    .trim()
    .min(8, {message: "Password must be at least 8 characters"})
    .max(255, {message: "Password must be at most 255 characters"})
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/, {
      message:
        "Password must contain uppercase, lowercase, number, and special character",
    }),
});

const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, {message: "Email is required"})
    .email({message: "Invalid email format"})
    .max(255, {message: "Email must be at most 255 characters"}),

  password: z
    .string()
    .trim()
    .min(8, {message: "Password must be at least 8 characters"})
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/, {
      message:
        "Password must contain uppercase, lowercase, number, and special character",
    }),
});

const contactSchema = z.object({
  username: z
    .string({require: "name must be require"})
    .trim()
    .min(3, {message: "name must be at least 3 chars"}),
  email: z
    .string()
    .trim()
    .min(1, {message: "Email is required"})
    .email({message: "Invalid email format"})
    .max(255, {message: "Email must be at most 255 characters"}),
  message: z
    .string({require: "Message must be required"})
    .min(3, {message: "name must be at least 3 chars"})
    .max(255, {message: "name must be at least 255 chars"}),
});

module.exports = {signupSchema, loginSchema, contactSchema};
