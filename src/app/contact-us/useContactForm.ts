import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { postApi, ApiError } from "@/lib/apiClient";

const ContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").trim(),
  email: z.string().email("Invalid email address").trim(),
  subject: z.string().min(3, "Subject must be at least 3 characters").trim(),
  message: z.string().min(10, "Message must be at least 10 characters").trim()
});

export type ContactFormData = z.infer<typeof ContactSchema>;

export const useContactForm = () => {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(ContactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await postApi<{ success: boolean }>("/api/contact", data);
      toast("Message Sent!", {
        description: "We'll get back to you within 24 hours."
      });
      form.reset();
    } catch (error) {
      if (error instanceof ApiError) {
        toast.error(`Error ${error.status}: ${error.message}`);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }
  };

  return {
    ...form,
    onSubmit: form.handleSubmit(onSubmit)
  };
};