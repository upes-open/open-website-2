import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import ContactForm from "./ContactForm";
import { CONTACT_INFO, BUSINESS_HOURS } from "./constants";

export default function ContactPage() {

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
              <ContactForm />
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
                    <p className="text-muted-foreground">{CONTACT_INFO.email}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <MdPhone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-muted-foreground">{CONTACT_INFO.phone}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <MdLocationOn className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Address</h3>
                    <p className="text-muted-foreground">
                      {CONTACT_INFO.address.line1}<br />{CONTACT_INFO.address.line2}<br />{CONTACT_INFO.address.city}
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
                  {BUSINESS_HOURS.map((schedule, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-muted-foreground">{schedule.day}</span>
                      <span className="text-foreground">{schedule.hours}</span>
                    </div>
                  ))}
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
              href={`mailto:${CONTACT_INFO.email}`}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get a Quote
            </a>
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/\D/g, '')}`}
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
