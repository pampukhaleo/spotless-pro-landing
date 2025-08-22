
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const BeforeAfterSection = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const beforeAfterImages = [
    {
      before: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      after: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Living Room Deep Clean"
    },
    {
      before: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      after: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Kitchen Transformation"
    },
    {
      before: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      after: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Bathroom Refresh"
    }
  ];

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">See the Difference</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our professional cleaning transforms your space. See the incredible before and after results 
            from our satisfied customers across England.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {beforeAfterImages.map((item, index) => (
            <Card key={index} className="overflow-hidden shadow-2xl border-0">
              <CardContent className="p-0">
                <div 
                  className="before-after-container relative h-64 cursor-ew-resize"
                  onMouseMove={handleSliderMove}
                >
                  {/* After image (background) */}
                  <img
                    src={item.after}
                    alt={`${item.title} - After`}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Before image (clipped) */}
                  <img
                    src={item.before}
                    alt={`${item.title} - Before`}
                    className="absolute top-0 left-0 w-full h-full object-cover before-image"
                    style={{
                      clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
                    }}
                  />
                  
                  {/* Slider line */}
                  <div 
                    className="before-after-slider"
                    style={{ left: `${sliderPosition}%` }}
                  />
                  
                  {/* Labels */}
                  <div className="absolute top-4 left-4 bg-destructive/90 text-destructive-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Before
                  </div>
                  <div className="absolute top-4 right-4 bg-success/90 text-success-foreground px-3 py-1 rounded-full text-sm font-medium">
                    After
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground text-center">{item.title}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-card p-6 rounded-2xl shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success">2,340+</div>
              <div className="text-sm text-muted-foreground">Homes Cleaned</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-trust">5 Star</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
