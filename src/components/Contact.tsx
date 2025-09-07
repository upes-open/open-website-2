'use client';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MdEmail, MdPhone, MdLocationOn, MdSend } from "react-icons/md";import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast("Message Sent!", {
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
      {/* Contact Form */}
      <Card className="backdrop-blur-xl bg-card/80 border-primary/20 shadow-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Send us a Message
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="bg-secondary/50 border-primary/30 focus:border-primary"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="bg-secondary/50 border-primary/30 focus:border-primary"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can we help you?"
                className="bg-secondary/50 border-primary/30 focus:border-primary"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more about your inquiry..."
                className="min-h-[120px] bg-secondary/50 border-primary/30 focus:border-primary resize-none"
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary-glow hover:to-accent text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MdSend className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Contact Information */}
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
                  123 Business Street<br />
                  Suite 100<br />
                  City, State 12345
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-xl bg-card/80 border-primary/20 shadow-2xl">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Business Hours</h3>
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
  );
};

export default ContactForm;
