
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const ReviewsSection = () => {
  const [visibleReviews, setVisibleReviews] = useState(6);
  const reviews = [
    {
      name: "Nicola Silvester Hall",
      rating: 5,
      text: "I cannot recommend Yeva highly enough! Her cleaning is excellent and her ironing skills superb. She is very communicative and her attention to detail is exceptional. I will definitely be using her cleaning services regularly.",
      avatar: "NS",
    },
    {
      name: "Margaret Davenport",
      rating: 5,
      text: "I called Yeva, and Vova came over a couple of days later to assemble my flatpack shelving unit. He did it efficiently, correctly and with no mess, even checked if I wanted it attached to the wall. Very happy to not have to do this myself! Definitely worth the reasonable charge.",
      avatar: "MD",
    },
    {
      name: "Nick Cobban",
      rating: 5,
      text: "On behalf of my friend, many thanks for being punctual, efficient and having high standards of cleaning. Looking forward to continued business with you.",
      avatar: "NC",
    },
    {
      name: "Debbie Thurley",
      rating: 5,
      text: "Good cleaners, very conscientious and methodical. Also friendly.",
      avatar: "DT",
    },
    {
      name: "Chris Taylor",
      rating: 5,
      text: "Zhenya has been helping out while our usual cleaner was off for a few months. She is friendly, honest, a quick learner and a thorough cleaner. She has also been doing our ironing to a good standard. I’d recommend her services.",
      avatar: "CT",
    },
    {
      name: "Jemma Taylor",
      rating: 5,
      text: "Great service! Highly recommended.",
      avatar: "JT",
    },
    {
      name: "Clare Mitchell",
      rating: 5,
      text: "I'd highly recommend Yeva for cleaning and ironing. She does a great job and is always responsive. And she's very friendly and willing to help.",
      avatar: "CM",
    },
    {
      name: "Wendy Ward",
      rating: 5,
      text: "Would gladly recommend Yeva for any of your ironing needs. Not only is the ironing perfect but the turnaround was very quick. Amazing!",
      avatar: "WW",
    },
    {
      name: "Kayla James",
      rating: 5,
      text: "Yeva provides a great ironing service, so professional and reliable. Would highly recommend.",
      avatar: "KJ",
    },
    {
      name: "André Gysler",
      rating: 5,
      text: "Yeva was able to help with a pre tenancy clean following a whole house renovation. She did this at short notice and to a high standard. She was flexible and able to work around me. I would have no hesitation in recommending her services.",
      avatar: "AG",
    },
    {
      name: "Sally Staples",
      rating: 5,
      text: "We are very confident recommending Yeva. For several years Yeva has helped us with Ironing and House Cleaning and she always works to a VERY high standard. She is totally honest and reliable and communicates clearly and in a timely manner.",
      avatar: "SS",
    },
    {
      name: "Alexander Beukelman",
      rating: 5,
      text: "Very grateful for her help getting some shirts washed and ironed last minute on multiple occasions. Quick, efficient and priced well. Thanks!",
      avatar: "AB",
    },
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
          {reviews.slice(0, visibleReviews).map((review, index) => (
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

        {visibleReviews < reviews.length && (
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              onClick={() => setVisibleReviews(prev => Math.min(prev + 6, reviews.length))}
              className="px-8 py-3"
            >
              Show More Reviews
            </Button>
          </div>
        )}

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
