
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
      className="rounded-full"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
      {isMobile && <span className="ml-2">{theme === "light" ? "បិទពន្លឺ" : "បើកពន្លឺ"}</span>}
    </Button>
  );
}
