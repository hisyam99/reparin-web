import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { PasswordField } from "@/components/layout/PasswordField";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import axios from "axios";

const FormSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  name: z
    .string()
    .min(2, { message: "Username must be at least 2 characters" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
  otp: z.string().length(6, { message: "OTP must be 6 digits" }).optional(),
});

type FormSchemaType = z.infer<typeof FormSchema>;

const RegisterForm: React.FC = () => {
  const router = useRouter();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [otpSent, setOtpSent] = useState<boolean>(false);
  const [showOtpAlert, setShowOtpAlert] = useState<boolean>(false); // State untuk menampilkan alert OTP

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });

  const onSubmit = async (formData: FormSchemaType) => {
    setIsLoading(true);
    setError(undefined);

    if (!executeRecaptcha) {
      setError("Recaptcha not available. Please try again later.");
      setIsLoading(false);
      return;
    }

    try {
      const gRecaptchaToken = await executeRecaptcha("registerSubmit");
      const recaptchaResponse = await axios.post("/api/recaptchaSubmit", {
        gRecaptchaToken,
      });

      if (!recaptchaResponse.data.success) {
        setError("Failed to verify recaptcha! You must be a robot!");
        setIsLoading(false);
        return;
      }

      if (!otpSent) {
        // Register user and send OTP
        const response = await axios.post("/api/auth/register", {
          email: formData.email,
          name: formData.name,
          password: formData.password,
        });

        if (response.status === 200) {
          setOtpSent(true);
          setShowOtpAlert(true); // Tampilkan alert untuk memeriksa email
        } else {
          setError(response.data.message);
        }
      } else {
        // Verify OTP
        const response = await axios.post("/api/auth/verify-otp", {
          email: formData.email,
          otp: formData.otp,
        });

        if (response.status === 200) {
          router.push("/login");
        } else {
          setError(response.data.message);
        }
      }
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data.message);
      } else {
        setError((err as Error).message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setError(undefined);

    try {
      const result = await signIn("google", { redirect: false });

      if (result?.error) {
        setError(result.error);
      } else {
        router.push("/"); // Redirect to the home page or dashboard after successful login
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Username" {...field} disabled={otpSent} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} disabled={otpSent} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {!otpSent && (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <PasswordField name="password" placeholder="Password" />
            </FormItem>
          )}
          {otpSent && (
            <FormField
              control={form.control}
              name="otp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>OTP</FormLabel>
                  <FormControl>
                    <Input placeholder="OTP" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          {showOtpAlert && (
            <Alert>
              <AlertTitle>Success!</AlertTitle>
              <AlertDescription>
                Please check your email for the OTP code.
              </AlertDescription>
            </Alert>
          )}
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Loading..." : otpSent ? "Verify OTP" : "Register"}
          </Button>
          <p className="px-8 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/login"
              className="underline underline-offset-4 hover:text-primary"
            >
              Click here to login.
            </Link>
          </p>
          <div className="relative flex items-center">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4 text-gray-400">or</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <Button
            type="button"
            variant="outline"
            onClick={handleGoogleSignIn}
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <div className="flex items-center">
                <Image
                  src="/icon/google-icon.svg"
                  alt="Google Logo"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                <span>Continue with Google</span>
              </div>
            )}
          </Button>
          {error && (
            <Alert>
              <AlertTitle>Error!</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </form>
      </Form>
    </div>
  );
};

export default RegisterForm;
