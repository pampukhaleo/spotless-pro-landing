
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      location: "Kensington, London",
      rating: 5,
      text: "Absolutely brilliant service! The team arrives on time, works efficiently, and leaves my home sparkling. The ironing service is a game-changer for my busy lifestyle.",
      avatar: "SJ",
      service: "Regular Cleaning + Ironing"
    },
    {
      name: "Michael Chen",
      location: "Brighton",
      rating: 5,
      text: "Had SpotlessPro assemble our entire IKEA order and do a deep clean before we moved in. Professional, reliable, and excellent value for money. Highly recommended!",
      avatar: "MC",
      service: "Deep Cleaning + Furniture Assembly"
    },
    {
      name: "Emma Williams",
      location: "Manchester",
      rating: 5,
      text: "I've been using SpotlessPro for 6 months now. They're consistent, trustworthy, and go above and beyond. My house has never looked better!",
      avatar: "EW",
      service: "Regular Cleaning"
    },
    {
      name: "David Thompson",
      location: "Birmingham",
      rating: 5,
      text: "The deep cleaning service was phenomenal. They tackled areas I didn't even think to clean. Great communication and the team was friendly and professional.",
      avatar: "DT",
      service: "Deep Cleaning"
    },
    {
      name: "Lisa Parker",
      location: "Bristol",
      rating: 5,
      text: "Best decision ever! The ironing service saves me hours every week. Clothes come back perfectly pressed and on time. The cleaning service is top-notch too.",
      avatar: "LP",
      service: "Ironing + Regular Cleaning"
    },
    {
      name: "James Mitchell",
      location: "Leeds",
      rating: 5,
      text: "Exceptional service from start to finish. Easy booking, transparent pricing, and outstanding results. The team even helped reorganize my kitchen cupboards!",
      avatar: "JM",
      service: "Deep Cleaning"
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">What Our Customers Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what families across England think about SpotlessPro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="border-0 shadow-lg bg-card hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{review.text}"
                </p>
                
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                      {review.avatar}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="font-semibold text-foreground">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.location}</div>
                    <div className="text-xs text-primary font-medium mt-1">{review.service}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-card p-6 rounded-xl shadow-lg">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">4.9/5</div>
              <div className="text-sm text-muted-foreground">Based on 2,340+ reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
