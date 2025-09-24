
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Amy Pemberton",
      rating: 5,
      text: "Highly recommend Yeva. Her ironing skills are fabulous – she did a great job, was very communicative and quick and great value. ⭐⭐⭐⭐⭐ Will definitely use her ironing skills regularly!",
      avatar: "AP",
    },
    {
      name: "Jordan Karma",
      rating: 5,
      text: "Highly recommend Yeva." +
        "She is professional, efficient and so friendly. Her cleans are always to the best standard and her communication and time keeping is spot on.\n" +
        "We have her with us weekly, and I’d not be without her now.",
      avatar: "JK",
    },
    {
      name: "Nicola Silvester Hall",
      rating: 5,
      text: "I cannot recommend Yeva highly enough! Her cleaning is excellent and her ironing skills superb. She is very communicative and her attention to detail is exceptional. I will definitely be using her cleaning services regularly 😁⭐⭐⭐⭐⭐💕",
      avatar: "NS",
    },
    {
      name: "amna noor a.",
      rating: 5,
      text: "Vova did an amazing job setting up our bed and cupboard! Very efficiently done!",
      avatar: "AN",
    },
    {
      name: "Maria H.",
      rating: 5,
      text: "Vova did an amazing job building a large climbing frame in our garden. He was very professional, neat, quick and efficient, I highly recommended his services",
      avatar: "MH",
    },
    {
      name: "Muhammad Q.",
      rating: 5,
      text: "Vova would be your excellent choice for any kind of carpentry work. He is punctual efficient and get the job done. Highly recommended",
      avatar: "MQ",
    },
    {
      name: "Anastasia F.",
      rating: 5,
      text: "Vova was fantastic - punctual, polite and very efficient. He constructed a king size bed by himself in well under 2 hrs. We'll continue to utilize his services whenever possible. Thank you Vova!",
      avatar: "AF",
    },
    {
      name: "Derek W.",
      rating: 5,
      text: "Excellent work at building a child's toy kitchen",
      avatar: "DW",
    },
    {
      name: "Mohammad I.",
      rating: 5,
      text: "Exceptional service from start to finish. Easy booking, transparent pricing, and outstanding results. The team even helped reorganize my kitchen cupboards!",
      avatar: "JM",
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">What Our Customers Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here's what families across England think about SpotlessPro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="border-0 shadow-lg bg-card hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-accent" />
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
                <Star key={i} className="w-6 h-6 text-accent fill-accent" />
              ))}
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">4.9/5</div>
              <div className="text-sm text-muted-foreground">Based on 211+ reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
