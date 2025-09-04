
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, CheckCircle, Loader2 } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const BookingForm = () => {
  const [date, setDate] = useState<Date>();
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    timeSlot: "",
    specialRequests: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date) {
      toast({
        title: "Error",
        description: "Please select a preferred date.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      console.log('Submitting booking:', { ...formData, date: format(date, "PPP") });
      
      // Call the Telegram edge function
      const { data, error } = await supabase.functions.invoke('send-booking-to-telegram', {
        body: {
          ...formData,
          date: format(date, "PPP"),
        }
      });

      console.log('Edge function response:', { data, error });

      if (error) {
        console.error('Error sending booking:', error);
        toast({
          title: "Submission Error",
          description: `There was an error sending your booking: ${error.message}. Please try again or call us directly at +44 7368 647001.`,
          variant: "destructive",
        });
        return;
      }

      // Success
      toast({
        title: "Booking Request Submitted!",
        description: "We've received your request and will contact you within 2 hours to confirm your appointment.",
      });

      // Clear the form
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        service: "",
        timeSlot: "",
        specialRequests: ""
      });
      setDate(undefined);

    } catch (error: any) {
      console.error('Unexpected error:', error);
      toast({
        title: "Submission Error",
        description: `There was an unexpected error: ${error.message}. Please try again or call us directly at +44 7368 647001.`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="booking" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Book Your Service</h2>
            <p className="text-xl text-muted-foreground">
              Choose your service, pick a date, and we’ll take care of the rest.
              Trusted Cleaning Company
              Proudly serving families in Basingstoke and surrounding areas within a 20-mile radius. Offering cleaning, ironing, and housekeeping since 2022.
            </p>
          </div>

          <Card className="shadow-2xl border-0">
            <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
              <CardTitle className="text-2xl text-center">Schedule Your Cleaning Service</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="John Smith"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="020 7123 4567"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Type *</Label>
                    <Select onValueChange={(value) => handleInputChange("service", value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-background z-50">
                        <SelectItem value="regular-cleaning">Regular Cleaning</SelectItem>
                        <SelectItem value="deep-cleaning">Deep Cleaning</SelectItem>
                        <SelectItem value="ironing">Ironing Service</SelectItem>
                        <SelectItem value="furniture-assembly">Furniture Assembly</SelectItem>
                        <SelectItem value="office-cleaning">Office Cleaning</SelectItem>
                        <SelectItem value="end-of-tenancy">End of Tenancy Cleaning</SelectItem>
                        <SelectItem value="post-party">Post-Party Cleaning</SelectItem>
                        <SelectItem value="carpet-cleaning">Carpet Cleaning</SelectItem>
                        <SelectItem value="garden-help">Garden Help</SelectItem>
                        <SelectItem value="cleaning-ironing">Cleaning + Ironing</SelectItem>
                        <SelectItem value="cleaning-assembly">Cleaning + Assembly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Preferred Date *</Label>
                    <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-background z-50" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={(selectedDate) => {
                            setDate(selectedDate);
                            setIsCalendarOpen(false); // Close calendar after selection
                          }}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeSlot">Preferred Time *</Label>
                    <Select onValueChange={(value) => handleInputChange("timeSlot", value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time slot" />
                      </SelectTrigger>
                      <SelectContent className="bg-background z-50">
                        <SelectItem value="9am-12pm">9:00 AM - 12:00 PM</SelectItem>
                        <SelectItem value="12pm-3pm">12:00 PM - 3:00 PM</SelectItem>
                        <SelectItem value="3pm-6pm">3:00 PM - 6:00 PM</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Your Address *</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    placeholder="123 High Street, London, SW1A 1AA"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specialRequests">Special Requests or Notes</Label>
                  <Textarea
                    id="specialRequests"
                    value={formData.specialRequests}
                    onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                    placeholder="Any specific requirements, access instructions, or areas of focus..."
                    rows={3}
                  />
                </div>

                <div className="bg-secondary/50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span className="font-semibold">What happens next?</span>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-7">
                    <li>• We'll contact you within 2 hours to confirm your booking</li>
                    <li>• A detailed quote will be provided based on your requirements</li>
                    <li>• Our insured team will arrive on time with all equipment</li>
                    <li>• Enjoy your spotless home with our 100% satisfaction guarantee</li>
                  </ul>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full bg-success hover:bg-success/90 text-success-foreground font-semibold py-4 text-lg disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Отправка заявки...
                    </>
                  ) : (
                    "Submit Booking Request"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
