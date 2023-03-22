import { object, string } from "yup";

export const userSchema = object({
  email: 
    string()
    .email("Must be valid email format")
    .lowercase()
    .max(254, "Maximum 254 characters")
    .required("Required")
    .trim(),
  password:
    string().min(8, "Minimum 8 characters")
    .max(72, "Maximum of 72 characters")
    .required("Required"),
  username: 
    string()
    .lowercase()
    .min(3, "Minimum 3 characters")
    .max(50, "Maximum of 50 characters")
    .required("Required")
    .trim()
});