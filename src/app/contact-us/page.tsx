'use client';

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MdEmail, MdPhone, MdLocationOn, MdSend } from "react-icons/md";
import { toast } from "sonner";

// ✅ Zod schema for validation + sanitization
const ContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").trim(),
  email: z.string().email("Invalid email address").trim(),
  subject: z.string().min(3, "Subject must be at least 3 characters").trim(),
  message: z.string().min(10, "Message must be at least 10 characters").trim()
});

type ContactFormData = z.infer<typeof ContactSchema>;

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactSchema)
  });

  // ✅ Sanitize + submit
  const onSubmit = async (data: ContactFormData) => {
    try {
      // Example: send to API (POST /api/contact)
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data) // already sanitized by zod
      });

      if (!response.ok) throw new Error("Failed to send");

      toast("Message Sent!", {
        description: "We'll get back to you within 24 hours."
      });

      reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="relative w-full min-h-[600px]">
      {/* Hero Section */}
      <div className="relative text-center py-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent animate-float">
          Contact Us
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto px-4">
          We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
        </p>
      </div>

      {/* Contact Form + Info */}
      <div className="relative z-10 px-4 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="backdrop-blur-xl bg-card/80 border-primary/20 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      className="bg-secondary/50 border-primary/30 focus:border-primary"
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500">{errors.name.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="bg-secondary/50 border-primary/30 focus:border-primary"
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="How can we help you?"
                    className="bg-secondary/50 border-primary/30 focus:border-primary"
                    {...register("subject")}
                  />
                  {errors.subject && (
                    <p className="text-sm text-red-500">{errors.subject.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    className="min-h-[120px] bg-secondary/50 border-primary/30 focus:border-primary resize-none"
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary-glow hover:to-accent text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <MdSend className="w-4 h-4 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info (unchanged) */}
          <div className="space-y-8">
            <Card className="backdrop-blur-xl bg-card/80 border-primary/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <MdEmail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">contact@company.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <MdPhone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <MdLocationOn className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Address</h3>
                    <p className="text-muted-foreground">
                      123 Business Street<br />Suite 100<br />City, State 12345
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-xl bg-card/80 border-primary/20 shadow-2xl">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-foreground">
                  Business Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="text-foreground">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="text-foreground">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-foreground">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="relative z-10 text-center pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of satisfied customers who trust us with their business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@company.com"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get a Quote
            </a>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center px-8 py-4 bg-secondary/80 text-secondary-foreground font-semibold rounded-lg border border-primary/30 backdrop-blur-sm hover:bg-secondary transition-all duration-300"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
