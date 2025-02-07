import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface TestimonialProps {
  testimonials?: Array<{
    name: string;
    image: string;
    quote: string;
    location: string;
  }>;
}

const TestimonialSection = ({ testimonials }: TestimonialProps) => {
  const defaultTestimonials = [
    {
      name: "Sarah Chen",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      quote:
        "I met some of my closest friends through these dinner gatherings. The experience was magical!",
      location: "San Francisco, CA",
    },
    {
      name: "James Wilson",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      quote:
        "The conversations were as amazing as the food. Can't wait for my next dinner!",
      location: "New York, NY",
    },
    {
      name: "Maria Rodriguez",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      quote:
        "Such a wonderful way to explore new cuisines and meet interesting people.",
      location: "Chicago, IL",
    },
  ];

  const displayTestimonials = testimonials || defaultTestimonials;

  return (
    <section className="py-16 px-4 bg-[#FFEDD5]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D3047] mb-4 font-mono">
            What Our Diners Say
          </h2>
          <p className="text-lg text-[#2D3047] max-w-2xl mx-auto font-medium">
            Real stories from our community of social diners
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {displayTestimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4"
                >
                  <Card className="p-6 bg-white border-4 border-[#2D3047] shadow-[4px_4px_0px_0px_rgba(45,48,71,1)] hover:shadow-[8px_8px_0px_0px_rgba(45,48,71,1)] transition-all duration-300">
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-[#2D3047]">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <blockquote className="text-[#2D3047] font-medium italic">
                        "{testimonial.quote}"
                      </blockquote>
                      <div>
                        <h4 className="font-bold text-[#2D3047] font-mono">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-[#2D3047]/70">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-4 border-[#2D3047] bg-[#F72585] hover:bg-[#B5179E] text-white" />
          <CarouselNext className="border-4 border-[#2D3047] bg-[#F72585] hover:bg-[#B5179E] text-white" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialSection;
