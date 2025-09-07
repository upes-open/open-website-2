import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MdArrowLeft, MdRefresh, MdCreditCard, MdCalendarToday, MdWarning } from "react-icons/md";

const page = () => {
  return (
    <main className="min-h-screen relative overflow-hidden">
]      
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
            <p className="text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <Card className="backdrop-blur-sm bg-background/95 border-primary/20">
            <CardContent className="p-8 space-y-8">
              
              {/* Subscription Cancellation */}
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <MdRefresh className="w-5 h-5 text-primary" />
                  <h2 className="text-2xl font-semibold">Subscription Cancellation</h2>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    You may cancel your subscription at any time through your account dashboard or customer portal. 
                    Upon cancellation:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Your subscription will remain active until the end of your current billing period</li>
                    <li>You will continue to have access to all premium features until the subscription expires</li>
                    <li>No additional charges will be made after cancellation</li>
                    <li>You will receive a confirmation email within 24 hours</li>
                  </ul>
                </div>
              </section>

              {/* Refund Policy */}
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <MdCreditCard className="w-5 h-5 text-primary" />
                  <h2 className="text-2xl font-semibold">Refund Policy</h2>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    We offer the following refund options to ensure your satisfaction:
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-4 border border-primary/20 rounded-lg">
                      <h3 className="font-semibold text-foreground mb-2">7-Day Money Back Guarantee</h3>
                      <p className="text-sm">
                        Full refund available within 7 days of your initial subscription for first-time subscribers.
                      </p>
                    </div>
                    <div className="p-4 border border-primary/20 rounded-lg">
                      <h3 className="font-semibold text-foreground mb-2">Pro-rated Refunds</h3>
                      <p className="text-sm">
                        Unused portions of annual subscriptions may be refunded at our discretion.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* How to Cancel */}
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <MdCalendarToday className="w-5 h-5 text-primary" />
                  <h2 className="text-2xl font-semibold">How to Cancel Your Subscription</h2>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <ol className="list-decimal list-inside space-y-2 ml-4">
                    <li>Log into your account dashboard</li>
                    <li>Navigate to &quot;Subscription Settings&quot; or &quot;Billing&quot;</li>
                    <li>Click &quot;Manage Subscription&quot; to access the customer portal</li>
                    <li>Select &quot;Cancel Subscription&quot; and follow the prompts</li>
                    <li>Confirm your cancellation via the confirmation email</li>
                  </ol>
                  <p className="font-medium text-foreground mt-4">
                    Alternative: Contact our support team at support@example.com for assistance with cancellation.
                  </p>
                </div>
              </section>

              {/* Processing Times */}
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <MdWarning className="w-5 h-5 text-primary" />
                  <h2 className="text-2xl font-semibold">Processing Times</h2>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="text-center p-4 border border-primary/20 rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-2">Immediate</div>
                      <div className="text-sm">Cancellation Processing</div>
                    </div>
                    <div className="text-center p-4 border border-primary/20 rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-2">3-5 Days</div>
                      <div className="text-sm">Refund Processing</div>
                    </div>
                    <div className="text-center p-4 border border-primary/20 rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-2">5-10 Days</div>
                      <div className="text-sm">Bank Processing</div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Special Circumstances */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Special Circumstances</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    We may offer refunds outside our standard policy for:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Technical issues preventing service access for extended periods</li>
                    <li>Billing errors or unauthorized charges</li>
                    <li>Service downtime exceeding our SLA commitments</li>
                    <li>Duplicate subscriptions or payments</li>
                  </ul>
                  <p className="font-medium text-foreground mt-4">
                    Each case will be reviewed individually by our support team.
                  </p>
                </div>
              </section>

              {/* Non-Refundable Items */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Non-Refundable Items</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    The following are generally not eligible for refunds:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Partially used monthly subscriptions (beyond 7-day guarantee)</li>
                    <li>Add-on services or one-time purchases</li>
                    <li>Subscription fees for months already accessed and used</li>
                    <li>Cancellations due to violation of terms of service</li>
                  </ul>
                </div>
              </section>

              {/* Contact Information */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Need Help?</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    If you have questions about cancellation or refunds, please contact us:
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <p><strong>Email:</strong> support@example.com</p>
                      <p><strong>Phone:</strong> 1-800-SUPPORT</p>
                    </div>
                    <div>
                      <p><strong>Business Hours:</strong> Monday - Friday, 9 AM - 6 PM EST</p>
                      <p><strong>Response Time:</strong> Within 24 hours</p>
                    </div>
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
};

export default page;