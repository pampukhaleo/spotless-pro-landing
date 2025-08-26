import { Card, CardContent } from "@/components/ui/card";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

const BeforeAfterSection = () => {

  const beforeAfterImages = [
    {
      before: 'anton-SnKfmC1I9fU-unsplash.jpg',
      after:  'towfiqu-barbhuiya-ho-p7qLBewk-unsplash.jpg',
      title: "Living Room Deep Clean",
    },
    {
      before: "anton-SnKfmC1I9fU-unsplash.jpg",
      after:  "towfiqu-barbhuiya-ho-p7qLBewk-unsplash.jpg",
      title: "Kitchen Transformation",
    },
    {
      before: "towfiqu-barbhuiya-ho-p7qLBewk-unsplash.jpg",
      after:  "anton-SnKfmC1I9fU-unsplash.jpg",
      title: "Bathroom Refresh",
    },
  ];


  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">See the Difference</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our professional cleaning transforms your space. See the incredible before and after results
            from our satisfied customers across England.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {beforeAfterImages.map((item, index) => {
            const FIRST_IMAGE = { imageUrl: item.before };
            const SECOND_IMAGE = { imageUrl: item.after };

            return (
              <Card key={ index } className="overflow-hidden shadow-2xl border-0">
                <CardContent className="p-0">
                  <div className="before-after-wrap relative w-full overflow-hidden rounded-xl h-[260px]">
                    <ReactBeforeSliderComponent
                      firstImage={ FIRST_IMAGE }
                      secondImage={ SECOND_IMAGE }
                      currentPercentPosition={ 50 }
                      delimiterColor="#217074"
                    />
                    <div
                      className="pointer-events-none absolute top-4 left-4 bg-destructive/90 text-destructive-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Before
                    </div>
                    <div
                      className="pointer-events-none absolute top-4 right-4 bg-success/90 text-success-foreground px-3 py-1 rounded-full text-sm font-medium">
                      After
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-foreground text-center">{ item.title }</h3>
                  </div>
                </CardContent>
              </Card>

            );
          }) }
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
