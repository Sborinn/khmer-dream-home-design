
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isMobile = useIsMobile();

  return (
    <Button 
      variant="ghost" 
      size={isMobile ? "sm" : "icon"} 
      onClick={toggleTheme}
      aria-label={theme === "light" ? "បិទពន្លឺ" : "បើកពន្លឺ"}
      className="rounded-full transition-colors duration-300"
    >
      <span className={`absolute transform transition-all duration-500 ${theme === 'light' ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'}`}>
        <Moon className="h-5 w-5" />
      </span>
      <span className={`absolute transform transition-all duration-500 ${theme === 'light' ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}>
        <Sun className="h-5 w-5" />
      </span>
      <span className="invisible">
        {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
      </span>
      {isMobile && <span className="ml-2">{theme === "light" ? "បិទពន្លឺ" : "បើកពន្លឺ"}</span>}
    </Button>
  );
}
