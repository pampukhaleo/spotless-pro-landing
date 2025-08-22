
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, CheckCircle } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

const BookingForm = () => {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    timeSlot: "",
    specialRequests: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { ...formData, date });
    toast({
      title: "Booking Request Submitted!",
      description: "We'll contact you within 2 hours to confirm your appointment.",
    });
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
              Choose your service, pick a date, and we'll take care of the rest
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
                      <SelectContent>
                        <SelectItem value="regular-cleaning">Regular Cleaning</SelectItem>
                        <SelectItem value="deep-cleaning">Deep Cleaning</SelectItem>
                        <SelectItem value="ironing">Ironing Service</SelectItem>
                        <SelectItem value="furniture-assembly">Furniture Assembly</SelectItem>
                        <SelectItem value="cleaning-ironing">Cleaning + Ironing</SelectItem>
                        <SelectItem value="cleaning-assembly">Cleaning + Assembly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Preferred Date *</Label>
                    <Popover>
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
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
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
                      <SelectContent>
                        <SelectItem value="9am-12pm">9:00 AM - 12:00 PM</SelectItem>
                        <SelectItem value="12pm-3pm">12:00 PM - 3:00 PM</SelectItem>
                        <SelectItem value="3pm-6pm">3:00 PM - 6:00 PM</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Service Address *</Label>
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
                  className="w-full bg-success hover:bg-success/90 text-success-foreground font-semibold py-4 text-lg"
                >
                  Submit Booking Request
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
