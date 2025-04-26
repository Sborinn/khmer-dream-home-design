
import { useState, useEffect } from "react";
import { Menu, X, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const navLinks = [
    { name: "ទំព័រដើម", id: "home" },
    { name: "អំពីយើង", id: "about" },
    { name: "សេវាកម្ម", id: "services" },
    { name: "សមិទ្ធិផល", id: "portfolio" },
    { name: "ទីបន្ទាល់", id: "testimonials" },
    { name: "ទំនាក់ទំនង", id: "contact" }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80; // Height of the navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-16 md:h-20">
          <a href="#" className="flex items-center space-x-2" onClick={() => scrollToSection("home")}>
            <div className="w-10 h-10 bg-saffron rounded-md flex items-center justify-center">
              <Home className="text-white" size={24} />
            </div>
            <span className="text-lg md:text-xl font-bold">ខ្មែរឌ្រីមហោមឌីហ្សាញ</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navLinks.map((link) => (
              <Button
                key={link.id}
                variant="ghost"
                className="font-medium hover:text-saffron"
                onClick={() => scrollToSection(link.id)}
              >
                {link.name}
              </Button>
            ))}
            <ThemeToggle />
          </div>
          
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "បិទម៉ឺនុយ" : "បើកម៉ឺនុយ"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 top-16 bg-background/95 backdrop-blur-sm z-50 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}
      >
        <nav className="h-full flex flex-col p-6">
          {navLinks.map((link) => (
            <Button
              key={link.id}
              variant="ghost"
              className="justify-start py-4 text-xl font-medium hover:text-saffron"
              onClick={() => scrollToSection(link.id)}
            >
              {link.name}
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
}
