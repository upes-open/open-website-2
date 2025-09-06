import LightRays from '@/components/LightRays';
import ContactForm from '@/components/Contact';

export default function Page() {
  return (
    <div className="relative w-full min-h-[600px]">
      <div className='absolute inset-0 -z-10 overflow-hidden'>
        <LightRays />
      </div>
      
      
      {/* Header */}
      <div className="relative text-center py-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent animate-float">
          Contact Us
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto px-4">
          We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
        </p>
      </div>

      {/* Contact Form Section */}
      <div className="relative z-10 px-4 pb-20">
        <ContactForm />
      </div>

      {/* CTA Section */}
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
