import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MdArrowLeft } from "react-icons/md";
import { PRIVACY_POLICY } from "@/components/constants";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(var(--primary))_0%,transparent_50%),radial-gradient(circle_at_80%_20%,hsl(var(--accent))_0%,transparent_50%)] opacity-20 animate-pulse" />
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Button variant="ghost" className="mb-6">
              <MdArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-lg">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          {/* Privacy Content */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-8 space-y-8">
              {PRIVACY_POLICY.map(section => (
                <section key={section.id}>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {section.content}
                  </p>

                  {section.list && (
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      {section.list.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {section.contact && (
                    <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                      <p className="text-foreground font-medium">Email: {section.contact.email}</p>
                      <p className="text-foreground font-medium">Phone: {section.contact.phone}</p>
                      <p className="text-foreground font-medium">Address: {section.contact.address}</p>
                    </div>
                  )}
                </section>
              ))}
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary-glow hover:to-accent/90 text-primary-foreground">
              Return to Homepage
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
