
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "បានផ្ញើសារដោយជោគជ័យ",
        description: "យើងនឹងទាក់ទងអ្នកវិញក្នុងពេលឆាប់ៗនេះ។",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "ទូរស័ព្ទ",
      details: ["(+855) 10 123 456", "(+855) 96 123 456"]
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "អ៊ីមែល",
      details: ["info@khmerdreamhome.com", "support@khmerdreamhome.com"]
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "អាសយដ្ឋាន",
      details: ["អគារលេខ ១២៣, ផ្លូវ ២៧១", "សង្កាត់បឹងកក់២, ខណ្ឌទួលគោក", "រាជធានីភ្នំពេញ"]
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 khmer-pattern opacity-5 pointer-events-none"></div>
      
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-saffron/10 text-saffron px-4 py-1.5 rounded-full text-sm font-medium mb-3">
            ទំនាក់ទំនង
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">ទាក់ទងមកយើងខ្ញុំ</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            សូមផ្ញើសំណួរ ឬសំណើរបស់អ្នកមកកាន់យើងខ្ញុំ និងយើងខ្ញុំនឹងឆ្លើយតបវិញក្នុងរយៈពេល២៤ម៉ោង
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((item, index) => (
              <Card key={index} className="border-none shadow-lg dark:shadow-saffron/10 hover-lift card-hover">
                <CardContent className="flex p-6">
                  <div className="mr-4 rounded-full bg-saffron/10 p-3 text-saffron">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Social Media Links */}
            <div className="flex items-center justify-start space-x-4 mt-6">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-saffron/10 text-saffron hover:bg-saffron hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-saffron/10 text-saffron hover:bg-saffron hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.058 1.805.249 2.227.418.562.218.96.477 1.382.896.418.42.677.819.896 1.381.164.422.36 1.057.413 2.227.058 1.265.07 1.644.07 4.85s-.012 3.584-.07 4.85c-.058 1.17-.249 1.805-.418 2.227-.218.562-.477.96-.896 1.382-.42.418-.819.677-1.381.896-.422.164-1.057.36-2.227.413-1.265.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.058-1.805-.249-2.227-.418-.562-.218-.96-.477-1.382-.896-.42-.42-.677-.819-.896-1.381-.164-.422-.36-1.057-.413-2.227-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.058-1.17.249-1.805.418-2.227.218-.562.477-.96.896-1.382.42-.418.819-.677 1.381-.896.422-.164 1.057-.36 2.227-.413 1.265-.058 1.644-.07 4.85-.07zm0 2.122c-3.149 0-3.502.013-4.731.069-1.14.052-1.761.242-2.174.402-.547.21-.937.46-1.347.872-.412.41-.661.8-.871 1.347-.16.413-.35 1.033-.403 2.174-.056 1.228-.069 1.582-.069 4.731s.013 3.502.069 4.731c.052 1.14.242 1.761.402 2.174.21.547.46.937.872 1.347.41.412.8.661 1.347.871.413.16 1.033.35 2.174.403 1.228.056 1.582.069 4.731.069s3.502-.013 4.731-.069c1.14-.052 1.761-.242 2.174-.402.547-.21.937-.46 1.347-.872.412-.41.661-.8.871-1.347.16-.413.35-1.033.403-2.174.056-1.228.069-1.582.069-4.731s-.013-3.502-.069-4.731c-.052-1.14-.242-1.761-.402-2.174-.21-.547-.46-.937-.872-1.347-.41-.412-.8-.661-1.347-.871-.413-.16-1.033-.35-2.174-.403-1.228-.056-1.582-.069-4.731-.069zm0 3.572c3.311 0 5.989 2.678 5.989 5.989s-2.678 5.989-5.989 5.989-5.989-2.678-5.989-5.989 2.678-5.989 5.989-5.989zm0 9.879c2.15 0 3.891-1.741 3.891-3.891s-1.741-3.891-3.891-3.891-3.891 1.741-3.891 3.891 1.741 3.891 3.891 3.891zm7.63-10.112c0 .775-.627 1.402-1.402 1.402-.775 0-1.402-.627-1.402-1.402 0-.775.627-1.402 1.402-1.402.775 0 1.402.627 1.402 1.402z"></path>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-saffron/10 text-saffron hover:bg-saffron hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-saffron/10 text-saffron hover:bg-saffron hover:text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    ឈ្មោះរបស់អ្នក
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="បញ្ចូលឈ្មោះរបស់អ្នក"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    អ៊ីមែល
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="បញ្ចូលអ៊ីមែលរបស់អ្នក"
                    className="w-full"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  លេខទូរស័ព្ទ
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="បញ្ចូលលេខទូរស័ព្ទរបស់អ្នក"
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  សារ
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="សរសេរសារដែលអ្នកចង់ផ្ញើមកកាន់យើងខ្ញុំ"
                  className="w-full"
                  rows={5}
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-saffron hover:bg-saffron/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "កំពុងផ្ញើសារ..." : "ផ្ញើសារ"}
              </Button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 aspect-video rounded-lg overflow-hidden shadow-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62714.53940676785!2d104.85651487526877!3d11.562330212302892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513dc76a6be3%3A0x9c010ee85ab525bb!2sPhnomPenh!5e0!3m2!1sen!2s!4v1618229992112!5m2!1sen!2s"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false}
            loading="lazy" 
            title="Google Map - Company Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
