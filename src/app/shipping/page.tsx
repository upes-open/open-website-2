import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FiPackage, FiTruck, FiMapPin, FiClock, FiCheckCircle, FiArrowLeft } from 'react-icons/fi';
const page = () => {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-background via-background/90 to-primary/5">
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
            <FiArrowLeft size={20} />
            Back to Plans
          <div className="flex items-center justify-center gap-3 mb-4">
            <FiCheckCircle className="text-green-500" size={32} />
            <h1 className="text-4xl font-bold  bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
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
                <span className="text-primary font-mono">#SUB-2024-001</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Start Date:</span>
                <span>{new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Status:</span>
                <Badge variant="default" className="bg-green-500/10 text-green-500 border-green-500/20">
                  Activating
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Plan Amount:</span>
                <span className="text-xl font-bold text-primary">$29.99/month</span>
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
                    UPES<br />
                    Uttrakhand, Dehradun<br />
                    India
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FiClock className="text-muted-foreground mt-1" size={20} />
                <div>
                  <p className="font-medium">Subscription Period</p>
                  <p className="text-sm text-muted-foreground">
                    Yearly
                  </p>
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
                {/* Timeline */}
                <div className="relative">
                  <div className="absolute left-4 top-6 bottom-0 w-0.5 bg-border"></div>
                  
                  {/* Step 1 - Completed */}
                  <div className="relative flex items-center gap-4 pb-6">
                    <div className="relative z-10 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <FiCheckCircle size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Subscription Confirmed</p>
                      <p className="text-sm text-muted-foreground">Payment received and subscription confirmed</p>
                      <p className="text-xs text-muted-foreground">{new Date().toLocaleString()}</p>
                    </div>
                  </div>
                  
                  {/* Step 2 - Current */}
                  <div className="relative flex items-center gap-4 pb-6">
                    <div className="relative z-10 w-8 h-8 bg-primary rounded-full flex items-center justify-center animate-pulse">
                      <FiPackage size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Activating</p>
                      <p className="text-sm text-muted-foreground">Your subscription is being activated</p>
                      <p className="text-xs text-muted-foreground">In progress...</p>
                    </div>
                  </div>
                  
                  {/* Step 3 - Pending */}
                  <div className="relative flex items-center gap-4 pb-6">
                    <div className="relative z-10 w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                      <FiTruck size={16} className="text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-muted-foreground">Access Granted</p>
                      <p className="text-sm text-muted-foreground">Full access to subscription features enabled</p>
                    </div>
                  </div>
                  
                  {/* Step 4 - Pending */}
                  <div className="relative flex items-center gap-4">
                    <div className="relative z-10 w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                      <FiCheckCircle size={16} className="text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-muted-foreground">Welcome Email Sent</p>
                      <p className="text-sm text-muted-foreground">Check your inbox for getting started guide</p>
                    </div>
                  </div>
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
            <Button variant="outline" asChild>
            </Button>
            <Button asChild>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
