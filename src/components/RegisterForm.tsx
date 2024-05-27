import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CustomAlert from "@/components/CustomAlert";

const FormSchema = z.object({
  email: z.string().email({ message: "Invalid email format" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

type FormSchemaType = z.infer<typeof FormSchema>;

const RegisterForm: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (data: FormSchemaType) => {
    try {
      const response = await axios.post("/api/users/register", data);
      const responseData = response.data;

      // Handle successful registration response
      console.log("Registration successful:", responseData);
      setError(null); // Clear any previous errors
    } catch (err) {
      if (axios.isAxiosError(err)) {
        // Axios error
        setError(err.response?.data?.message || "An error occurred");
      } else {
        // Other errors
        setError("An unknown error occurred");
      }
    }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Email" {...field} />
                </FormControl>
                <FormDescription>Enter your email address.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormDescription>Enter your password.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Register</Button>
          {error && (
            <CustomAlert
              title="Registration Error"
              description={error}
              variant="error"
            />
          )}
        </form>
      </Form>
    </div>
  );
};

export default RegisterForm;