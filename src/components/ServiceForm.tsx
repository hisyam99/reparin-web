import React from "react";
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
import { toast } from "@/components/ui/use-toast";
import CustomAlert from "@/components/CustomAlert";

const FormSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  description: z.string().min(1, { message: "Description is required." }),
  location: z.string().min(1, { message: "Location is required." }),
  rating: z.string().min(1, { message: "Rating is required." }),
});

type FormSchemaType = z.infer<typeof FormSchema>;

type ServiceFormProps = {
  onSubmit: (service: FormSchemaType) => Promise<void>;
};

const ServiceForm: React.FC<ServiceFormProps> = ({ onSubmit }) => {
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      description: "",
      location: "",
      rating: "",
    },
  });

  const [alert, setAlert] = React.useState<{
    title: string;
    description: string;
    variant: "default" | "success" | "error" | "warning";
  } | null>(null);

  const handleSubmit = async (data: FormSchemaType) => {
    try {
      await onSubmit(data);
      setAlert({
        title: "Success",
        description: "Form submitted successfully",
        variant: "success",
      });
      form.reset();
    } catch (err) {
      setAlert({
        title: "Submission error",
        description: (err as Error).message,
        variant: "error",
      });
    }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className=" space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Service Name" {...field} />
                </FormControl>
                <FormDescription>
                  This is the name of the service.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="Service Description" {...field} />
                </FormControl>
                <FormDescription>
                  Provide a brief description of the service.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input placeholder="Service Location" {...field} />
                </FormControl>
                <FormDescription>Where is the service located?</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="rating"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rating</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Service Rating"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Rate the service from 1 to 5.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      {alert && <CustomAlert {...alert} />}
    </div>
  );
};

export default ServiceForm;
