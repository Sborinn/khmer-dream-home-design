
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/5 dark:bg-secondary/20 relative">
      <div className="container px-4 md:px-6 py-16 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-saffron rounded-md flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 text-white"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <span className="text-xl font-bold">ខ្មែរឌ្រីមហោមឌីហ្សាញ</span>
            </div>
            <p className="text-muted-foreground">
              ក្រុមហ៊ុនឈានមុខគេក្នុងការរចនា និងសាងសង់ដែលផ្តល់ជូននូវសេវាកម្មដែលមានគុណភាព និងភាពជំនាញខ្ពស់។
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-saffron transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-saffron transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.058 1.805.249 2.227.418.562.218.96.477 1.382.896.418.42.677.819.896 1.381.164.422.36 1.057.413 2.227.058 1.265.07 1.644.07 4.85s-.012 3.584-.07 4.85c-.058 1.17-.249 1.805-.418 2.227-.218.562-.477.96-.896 1.382-.42.418-.819.677-1.381.896-.422.164-1.057.36-2.227.413-1.265.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.058-1.805-.249-2.227-.418-.562-.218-.96-.477-1.382-.896-.42-.42-.677-.819-.896-1.381-.164-.422-.36-1.057-.413-2.227-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.058-1.17.249-1.805.418-2.227.218-.562.477-.96.896-1.382.42-.418.819-.677 1.381-.896.422-.164 1.057-.36 2.227-.413 1.265-.058 1.644-.07 4.85-.07zm0 2.122c-3.149 0-3.502.013-4.731.069-1.14.052-1.761.242-2.174.402-.547.21-.937.46-1.347.872-.412.41-.661.8-.871 1.347-.16.413-.35 1.033-.403 2.174-.056 1.228-.069 1.582-.069 4.731s.013 3.502.069 4.731c.052 1.14.242 1.761.402 2.174.21.547.46.937.872 1.347.41.412.8.661 1.347.871.413.16 1.033.35 2.174.403 1.228.056 1.582.069 4.731.069s3.502-.013 4.731-.069c1.14-.052 1.761-.242 2.174-.402.547-.21.937-.46 1.347-.872.412-.41.661-.8.871-1.347.16-.413.35-1.033.403-2.174.056-1.228.069-1.582.069-4.731s-.013-3.502-.069-4.731c-.052-1.14-.242-1.761-.402-2.174-.21-.547-.46-.937-.872-1.347-.41-.412-.8-.661-1.347-.871-.413-.16-1.033-.35-2.174-.403-1.228-.056-1.582-.069-4.731-.069zm0 3.572c3.311 0 5.989 2.678 5.989 5.989s-2.678 5.989-5.989 5.989-5.989-2.678-5.989-5.989 2.678-5.989 5.989-5.989zm0 9.879c2.15 0 3.891-1.741 3.891-3.891s-1.741-3.891-3.891-3.891-3.891 1.741-3.891 3.891 1.741 3.891 3.891 3.891zm7.63-10.112c0 .775-.627 1.402-1.402 1.402-.775 0-1.402-.627-1.402-1.402 0-.775.627-1.402 1.402-1.402.775 0 1.402.627 1.402 1.402z"></path>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-saffron transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-saffron transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">តំណភ្ជាប់រហ័ស</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-saffron transition-colors">ទំព័រដើម</a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-saffron transition-colors">អំពីយើង</a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-saffron transition-colors">សេវាកម្ម</a>
              </li>
              <li>
                <a href="#portfolio" className="text-muted-foreground hover:text-saffron transition-colors">សមិទ្ធិផល</a>
              </li>
              <li>
                <a href="#testimonials" className="text-muted-foreground hover:text-saffron transition-colors">ទីបន្ទាល់</a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-saffron transition-colors">ទំនាក់ទំនង</a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">សេវាកម្ម</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-saffron transition-colors">ការរចនាស្ថាបត្យកម្ម</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-saffron transition-colors">ការរចនាផ្ទៃក្នុង</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-saffron transition-colors">ការសាងសង់អគារ</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-saffron transition-colors">ការជួសជុលផ្ទះ</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-saffron transition-colors">ប្លង់អគារ</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-saffron transition-colors">ការគ្រប់គ្រងគម្រោង</a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-4">ព្រឹត្តិបត្រព័ត៌មាន</h4>
            <p className="text-muted-foreground mb-4">ចុះឈ្មោះដើម្បីទទួលបានព័ត៌មានថ្មីៗ និងការផ្តល់ជូនពិសេសពីយើងខ្ញុំ</p>
            <form className="space-y-2">
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="អ៊ីមែលរបស់អ្នក" 
                  className="rounded-r-none" 
                />
                <Button 
                  type="submit" 
                  className="bg-saffron hover:bg-saffron/90 rounded-l-none"
                >
                  ចុះឈ្មោះ
                </Button>
              </div>
            </form>
          </div>
        </div>
        
        {/* Separator */}
        <div className="khmer-divider my-8"></div>
        
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            រក្សាសិទ្ធិ © {currentYear} ខ្មែរឌ្រីមហោមឌីហ្សាញ។ រក្សាសិទ្ធិគ្រប់យ៉ាង។
          </p>
          <div className="flex space-x-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-saffron transition-colors">លក្ខខណ្ឌប្រើប្រាស់</a>
            <a href="#" className="hover:text-saffron transition-colors">គោលការណ៍ឯកជនភាព</a>
            <a href="#" className="hover:text-saffron transition-colors">ហាងលក់</a>
            <a href="#" className="hover:text-saffron transition-colors">ទំនាក់ទំនង</a>
          </div>
        </div>
      </div>
      
      {/* Back to Top Button */}
      <Button 
        variant="outline"
        size="icon"
        className="fixed bottom-8 right-8 rounded-full border-saffron text-saffron hover:bg-saffron hover:text-white z-50 shadow-lg"
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </Button>
      
      {/* Khmer ornamental border */}
      <div className="absolute top-0 left-0 w-full h-4">
        <div className="khmer-border h-full"></div>
      </div>
    </footer>
  );
}

function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  );
}
