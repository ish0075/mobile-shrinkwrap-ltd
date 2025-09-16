import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, ExternalLink } from 'lucide-react';

const GoogleReviews = () => {
  const reviews = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "Excellent service! They wrapped our boat perfectly for winter storage. Professional team and great communication throughout the process.",
      date: "2 weeks ago"
    },
    {
      name: "Mike R.", 
      rating: 5,
      text: "Used Mobile Shrink Wrap for our construction site containment. Fast, reliable, and the quality was outstanding. Highly recommend!",
      date: "1 month ago"
    },
    {
      name: "Jennifer L.",
      rating: 5,
      text: "Great experience with pool winterization. They arrived on time, worked efficiently, and our pool was perfectly protected all winter.",
      date: "3 months ago"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex space-x-1">
              {renderStars(5)}
            </div>
            <span className="text-lg font-semibold text-foreground">5.0</span>
            <span className="text-muted-foreground">• Based on Google Reviews</span>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See why Ontario homeowners and businesses trust Mobile Shrink Wrap LTD 
            for their protection needs.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-medium transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-1">
                    {renderStars(review.rating)}
                  </div>
                  <span className="text-sm text-muted-foreground">{review.date}</span>
                </div>
                
                <Quote className="w-6 h-6 text-primary/30 mb-3" />
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  "{review.text}"
                </p>
                
                <div className="font-semibold text-foreground">
                  {review.name}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-background rounded-lg p-8 shadow-soft">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Experienced Our Service?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We&apos;d love to hear about your experience! Your feedback helps us improve 
            and helps other customers make informed decisions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <a 
                href="https://g.page/r/CRG5TjyaoBvpEAE/review" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Star className="w-5 h-5 mr-2" />
                Leave a Google Review
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
            
            <Button variant="outline" size="lg" asChild>
              <a 
                href="https://g.page/r/CRG5TjyaoBvpEAE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                View All Reviews
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
          
          <div className="mt-6 p-4 bg-primary/5 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Need help?</strong> Contact us at{' '}
              <a href="tel:+1-905-328-1271" className="text-primary hover:underline">
                (905) 328-1271
              </a>{' '}
              or{' '}
              <a href="mailto:mobileshrinkwrapltd@gmail.com" className="text-primary hover:underline">
                mobileshrinkwrapltd@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;