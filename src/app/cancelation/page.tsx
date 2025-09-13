import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MdArrowLeft, MdRefresh, MdCreditCard, MdCalendarToday, MdWarning } from "react-icons/md";
import {
  REFUND_LAST_UPDATED,
  SUBSCRIPTION_CANCELLATION,
  REFUND_POLICY,
  HOW_TO_CANCEL,
  PROCESSING_TIMES,
  SPECIAL_CIRCUMSTANCES,
  NON_REFUNDABLE_ITEMS,
  CONTACT_INFO,
} from "@/components/constants";

export default function Page() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button variant="outline" className="flex items-center gap-2">
            <MdArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              Cancellation & Refunds
            </h1>
            <p className="text-lg text-muted-foreground">Last updated: {REFUND_LAST_UPDATED}</p>
          </div>

          <Card className="backdrop-blur-sm bg-background/95 border-primary/20">
            <CardContent className="p-8 space-y-8">
              {/* Subscription Cancellation */}
              <section>
                <div className="flex items-center gap-2">
                  <MdRefresh className="w-5 h-5 text-primary" />
                  <h2 className="text-2xl font-semibold">{SUBSCRIPTION_CANCELLATION.title}</h2>
                </div>
                <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                  {SUBSCRIPTION_CANCELLATION.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </section>

              {/* Refund Policy */}
              <section>
                <div className="flex items-center gap-2">
                  <MdCreditCard className="w-5 h-5 text-primary" />
                  <h2 className="text-2xl font-semibold">{REFUND_POLICY.title}</h2>
                </div>
                <div className="grid gap-4 md:grid-cols-2 mt-3">
                  {REFUND_POLICY.options.map((opt, i) => (
                    <div key={i} className="p-4 border border-primary/20 rounded-lg">
                      <h3 className="font-semibold text-foreground mb-2">{opt.heading}</h3>
                      <p className="text-sm">{opt.text}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* How to Cancel */}
              <section>
                <div className="flex items-center gap-2">
                  <MdCalendarToday className="w-5 h-5 text-primary" />
                  <h2 className="text-2xl font-semibold">{HOW_TO_CANCEL.title}</h2>
                </div>
                <ol className="list-decimal list-inside space-y-2 ml-4 text-muted-foreground">
                  {HOW_TO_CANCEL.steps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
                <p className="font-medium text-foreground mt-4">{HOW_TO_CANCEL.alt}</p>
              </section>

              {/* Processing Times */}
              <section>
                <div className="flex items-center gap-2">
                  <MdWarning className="w-5 h-5 text-primary" />
                  <h2 className="text-2xl font-semibold">{PROCESSING_TIMES.title}</h2>
                </div>
                <div className="grid gap-4 md:grid-cols-3 mt-3">
                  {PROCESSING_TIMES.times.map((time, i) => (
                    <div key={i} className="text-center p-4 border border-primary/20 rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-2">{time.label}</div>
                      <div className="text-sm">{time.text}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Special Circumstances */}
              <section>
                <h2 className="text-2xl font-semibold">{SPECIAL_CIRCUMSTANCES.title}</h2>
                <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                  {SPECIAL_CIRCUMSTANCES.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </section>

              {/* Non-Refundable Items */}
              <section>
                <h2 className="text-2xl font-semibold">{NON_REFUNDABLE_ITEMS.title}</h2>
                <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                  {NON_REFUNDABLE_ITEMS.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </section>

              {/* Contact Info */}
              <section>
                <h2 className="text-2xl font-semibold">{CONTACT_INFO.title}</h2>
                <div className="grid gap-4 md:grid-cols-2 mt-3 text-muted-foreground">
                  <div>
                    <p><strong>Email:</strong> {CONTACT_INFO.email}</p>
                    <p><strong>Phone:</strong> {CONTACT_INFO.phone}</p>
                  </div>
                  <div>
                    <p><strong>Business Hours:</strong> {CONTACT_INFO.hours}</p>
                    <p><strong>Response Time:</strong> {CONTACT_INFO.response}</p>
                  </div>
                </div>
              </section>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary-glow hover:to-accent/80">
              Return to Homepage
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
