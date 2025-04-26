
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface SlideProps {
  image: string;
  title: string;
}

export default function HeroSection() {
  const slides: SlideProps[] = [
    {
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2000",
      title: "វីឡាទំនើបទាន់សម័យ"
    },
    {
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=2000",
      title: "ផ្ទះល្វែងកម្ពស់ពីរជាន់"
    },
    {
      image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=2000",
      title: "អគារពាណិជ្ជកម្មទំនើប"
    },
    {
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=2000",
      title: "គំរោងលំនៅឋានធំទូលាយ"
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    setIsAutoPlaying(false);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    setIsAutoPlaying(false);
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container px-4 md:px-6 text-center text-white z-10 mt-16">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6 inline-block">
              <div className="px-4 py-2 border-2 border-saffron text-saffron text-sm md:text-base uppercase tracking-wider">
                ក្រុមហ៊ុនរចនា និង សាងសង់ អចលនទ្រព្យ
              </div>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              សាងសង់ផ្ទះនៃក្តីសុបិនរបស់អ្នក
            </h1>
            
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-xl mx-auto">
              យើងផ្តល់នូវការរចនា និង សាងសង់ដែលមានគុណភាពខ្ពស់ ទាន់សម័យ និង ត្រូវតាមតម្រូវការរបស់អ្នក
            </p>
            
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center">
              <Button
                size="lg"
                className="bg-saffron hover:bg-saffron/90 text-white"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                ទាក់ទងឥឡូវនេះ
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/20"
                onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
              >
                មើលសមិទ្ធិផល
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-saffron" : "bg-white/50 hover:bg-white"
            }`}
            onClick={() => {
              setCurrentSlide(index);
              setIsAutoPlaying(false);
            }}
          />
        ))}
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 rounded-full"
        onClick={goToPrevSlide}
        aria-label="Previous slide"
      >
        <ArrowLeft size={20} />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 rounded-full"
        onClick={goToNextSlide}
        aria-label="Next slide"
      >
        <ArrowRight size={20} />
      </Button>

      {/* Khmer ornamental border */}
      <div className="absolute bottom-0 left-0 w-full h-4">
        <div className="khmer-border h-full"></div>
      </div>
    </section>
  );
}
