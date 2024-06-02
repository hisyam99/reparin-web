import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { useLocale, useTranslations } from "next-intl";
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { PasswordField } from "@/components/PasswordField";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

type FormSchemaType = z.infer<typeof FormSchema>;

interface LoginFormProps {
  onSubmitSuccess: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmitSuccess }) => {
  const locale = useLocale();
  const t = useTranslations("Login");
  const [error, setError] = useState<string>();
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (formData: FormSchemaType) => {
    try {
      const result = await signIn("credentials", {
        username: formData.username,
        password: formData.password,
        redirect: false,
      });

      if (result?.error) {
        setError(result.error);
      } else {
        onSubmitSuccess();
      }
    } catch (err) {
      setError((err as Error).message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signIn("google", { redirect: false });

      if (result?.error) {
        setError(result.error);
      } else {
        onSubmitSuccess();
      }
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Username" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormItem>
            <FormLabel>Password</FormLabel>
            <PasswordField
              name="password"
              placeholder="Password"
              description="Enter your password here."
            />
          </FormItem>

          <div>
            <Button type="submit" className="mr-4">
              Submit
            </Button>
            <Button type="button" onClick={handleGoogleSignIn}>
              Sign in with Google
            </Button>
          </div>

          {/* Use Alert component for error message */}
          {error && (
            <Alert>
              <Terminal className="h-4 w-4" />
              <AlertTitle>Error!</AlertTitle>
              <AlertDescription>{t("error", { error })}</AlertDescription>
            </Alert>
          )}
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
