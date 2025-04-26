
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  rating: number;
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "សុវណ្ណ មករា",
      role: "ម្ចាស់វីឡា",
      avatar: "https://i.pravatar.cc/150?img=32",
      quote: "ខ្ញុំពិតជាពេញចិត្តនឹងការរចនា និងសាងសង់របស់ក្រុមហ៊ុនជាខ្លាំង។ គុណភាពការងារល្អឥតខ្ចោះ និងការយកចិត្តទុកដាក់លើគ្រប់ពត៌មានលម្អិត។ ក្រុមការងារមានវិជ្ជាជីវៈខ្ពស់ និងងាយស្រួលក្នុងការទំនាក់ទំនង។",
      rating: 5
    },
    {
      id: 2,
      name: "ផល្លា សុជាតា",
      role: "ម្ចាស់អាជីវកម្ម",
      avatar: "https://i.pravatar.cc/150?img=44",
      quote: "ការរចនាអគារការិយាល័យរបស់ក្រុមហ៊ុនខ្ញុំដោយខ្មែរឌ្រីមហោមឌីហ្សាញ គឺពិតជាស្រស់ស្អាត និងមានភាពទាក់ទាញខ្លាំង។ វាបានជួយលើកកម្ពស់ភាពជឿជាក់របស់អតិថិជនមកលើក្រុមហ៊ុនខ្ញុំផងដែរ។",
      rating: 5
    },
    {
      id: 3,
      name: "វិសាល វិចិត្រ",
      role: "ម្ចាស់ហាងកាហ្វេ",
      avatar: "https://i.pravatar.cc/150?img=68",
      quote: "ក្រុមហ៊ុនបានជួយកែលម្អហាងកាហ្វេរបស់ខ្ញុំឱ្យក្លាយជាកន្លែងដែលទាក់ទាញភ្ញៀវបានច្រើន។ ការរចនាមានលក្ខណៈប្លែកពីគេ និងឆ្លុះបញ្ចាំងពីបុគ្គលិកលក្ខណៈរបស់ហាង។ អតិថិជនរបស់ខ្ញុំពេញចិត្តនឹងបរិយាកាសថ្មីនេះខ្លាំងណាស់។",
      rating: 4
    },
    {
      id: 4,
      name: "ចាន់ដារា សុភ័គ្រ",
      role: "ម្ចាស់ផ្ទះល្វែង",
      avatar: "https://i.pravatar.cc/150?img=11",
      quote: "សេវាកម្មរចនា និងសាងសង់របស់ក្រុមហ៊ុនគឺពិតជាល្អប្រពៃ។ ផ្ទះល្វែងរបស់ខ្ញុំត្រូវបានសាងសង់យ៉ាងរឹងមាំ និងមានគុណភាពខ្ពស់។ ខ្ញុំសូមថ្លែងអំណរគុណយ៉ាងជ្រាលជ្រៅ និងសូមណែនាំសេវាកម្មនេះដល់មិត្តភក្តិ និងសាច់ញាតិ។",
      rating: 5
    },
    {
      id: 5,
      name: "សុខ ចន្ទ្រា",
      role: "ម្ចាស់ក្រុមហ៊ុន",
      avatar: "https://i.pravatar.cc/150?img=36",
      quote: "ការតុបតែងសួនច្បារក្រុមហ៊ុនរបស់ខ្ញុំដោយក្រុមហ៊ុននេះ បានផ្លាស់ប្តូរបរិយាកាសនៃការងារទាំងស្រុង។ បុគ្គលិកមានការពេញចិត្ត និងមានអារម្មណ៍ធូរស្រាលនៅពេលសម្រាក។ សូមអរគុណចំពោះការងារដ៏អស្ចារ្យ!",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleTestimonials, setVisibleTestimonials] = useState<Testimonial[]>([]);

  // Determine how many testimonials to display based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // Desktop: show 3
        setVisibleTestimonials(getVisibleItems(3));
      } else if (window.innerWidth >= 768) {
        // Tablet: show 2
        setVisibleTestimonials(getVisibleItems(2));
      } else {
        // Mobile: show 1
        setVisibleTestimonials(getVisibleItems(1));
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex, testimonials.length]);

  const getVisibleItems = (count: number) => {
    const result = [];
    for (let i = 0; i < count; i++) {
      const idx = (currentIndex + i) % testimonials.length;
      result.push(testimonials[idx]);
    }
    return result;
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-muted/30 dark:bg-muted/5">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-saffron/10 text-saffron px-4 py-1.5 rounded-full text-sm font-medium mb-3">
            អ្វីដែលអតិថិជននិយាយ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">ទីបន្ទាល់ពីអតិថិជន</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            សូមស្តាប់មតិរបស់អតិថិជនដែលបានប្រើសេវាកម្មរបស់យើង
          </p>
        </div>

        <div className="relative">
          <div className="flex flex-wrap gap-6 justify-center">
            {visibleTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="flex-1 min-w-[280px] max-w-md border-none shadow-lg dark:shadow-saffron/10 hover-lift card-hover">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 overflow-hidden rounded-full">
                        <img 
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex text-saffron">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < testimonial.rating ? "fill-saffron" : ""}`} 
                        />
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="border-l-2 border-saffron pl-4 italic mb-4">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-saffron bg-background/50 hover:bg-background/80 backdrop-blur-sm rounded-full shadow-lg dark:bg-background/30 dark:hover:bg-background/50"
            onClick={prevSlide}
          >
            <ArrowLeft size={20} />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-saffron bg-background/50 hover:bg-background/80 backdrop-blur-sm rounded-full shadow-lg dark:bg-background/30 dark:hover:bg-background/50"
            onClick={nextSlide}
          >
            <ArrowRight size={20} />
          </Button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                idx === currentIndex ? "bg-saffron" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
