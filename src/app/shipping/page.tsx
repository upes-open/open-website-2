import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  FiPackage, FiTruck, FiMapPin, 
  FiClock, FiCheckCircle, FiArrowLeft 
} from 'react-icons/fi';

import { SUBSCRIPTION_DETAILS, ACTIVATION_STEPS } from '@/components/constants';

export default function Page() {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-background via-background/90 to-primary/5">
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <FiArrowLeft size={20} />
            <span>Back to Plans</span>
          </div>
          <div className="flex items-center justify-center gap-3 mb-4">
            <FiCheckCircle className="text-green-500" size={32} />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Subscription Confirmed
            </h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Thank you for subscribing! Your subscription is being activated.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
          {/* Order Summary */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FiPackage className="text-primary" size={24} />
                Subscription Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium">Subscription ID:</span>
                <span className="text-primary font-mono">{SUBSCRIPTION_DETAILS.id}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Start Date:</span>
                <span>{SUBSCRIPTION_DETAILS.startDate}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Status:</span>
                <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                  {SUBSCRIPTION_DETAILS.status}
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Plan Amount:</span>
                <span className="text-xl font-bold text-primary">
                  {SUBSCRIPTION_DETAILS.amount}
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Billing Information */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FiTruck className="text-primary" size={24} />
                Billing Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <FiMapPin className="text-muted-foreground mt-1" size={20} />
                <div>
                  <p className="font-medium">Billing Address</p>
                  <p className="text-sm text-muted-foreground">
                    {SUBSCRIPTION_DETAILS.billingAddress.line1}<br />
                    {SUBSCRIPTION_DETAILS.billingAddress.line2}<br />
                    {SUBSCRIPTION_DETAILS.billingAddress.country}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FiClock className="text-muted-foreground mt-1" size={20} />
                <div>
                  <p className="font-medium">Subscription Period</p>
                  <p className="text-sm text-muted-foreground">{SUBSCRIPTION_DETAILS.period}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Activation Status */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 md:col-span-2">
            <CardHeader>
              <CardTitle>Activation Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="relative">
                  <div className="absolute left-4 top-6 bottom-0 w-0.5 bg-border"></div>
                  {ACTIVATION_STEPS.map((step, index) => (
                    <div key={index} className="relative flex items-center gap-4 pb-6">
                      <div
                        className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center ${
                          step.status === "completed"
                            ? "bg-green-500"
                            : step.status === "current"
                            ? "bg-primary animate-pulse"
                            : "bg-muted"
                        }`}
                      >
                        {index === 0 || index === 3 ? (
                          <FiCheckCircle
                            size={16}
                            className={step.status === "pending" ? "text-muted-foreground" : "text-white"}
                          />
                        ) : index === 1 ? (
                          <FiPackage size={16} className="text-white" />
                        ) : (
                          <FiTruck size={16} className={step.status === "pending" ? "text-muted-foreground" : "text-white"} />
                        )}
                      </div>
                      <div>
                        <p className={`font-medium ${step.status === "pending" ? "text-muted-foreground" : ""}`}>
                          {step.title}
                        </p>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                        {step.timestamp && (
                          <p className="text-xs text-muted-foreground">{step.timestamp}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Actions */}
        <div className="text-center mt-12 space-y-4">
          <p className="text-muted-foreground">
            We&apos;ll send you email updates about your subscription status.
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="outline">Back to Plans</Button>
            <Button>Go to Dashboard</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
