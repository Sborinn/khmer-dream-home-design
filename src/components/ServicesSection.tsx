
import { Construction, PaintRoller, Ruler, Pencil, Building, Layout } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ServicesSection() {
  const services = [
    {
      icon: <Pencil className="w-8 h-8" />,
      title: "ការរចនាស្ថាបត្យកម្ម",
      description: "សេវាកម្មរចនាស្ថាបត្យកម្មដែលមានភាពច្នៃប្រឌិតខ្ពស់ និងត្រូវតាមតម្រូវការរបស់អតិថិជន​ និងការផ្គូផ្គងទៅនឹងរចនាប័ទ្មខ្មែរ។"
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "ការរចនាផ្ទៃក្នុង",
      description: "សេវាកម្មរចនាផ្ទៃក្នុងដែលបង្កើតបរិយាកាស និងសោភ័ណភាពស្រស់ស្អាត មាន​ផាសុកភាព ​និងប្រណិតភាព។"
    },
    {
      icon: <Construction className="w-8 h-8" />,
      title: "ការសាងសង់អគារ",
      description: "សេវាកម្មសាងសង់អគារប្រកបដោយគុណភាពខ្ពស់ ការគ្រប់គ្រងគម្រោងល្អឥតខ្ចោះ និងការប្រើប្រាស់សម្ភារៈដ៏ល្អប្រណិត។"
    },
    {
      icon: <PaintRoller className="w-8 h-8" />,
      title: "ការជួសជុលផ្ទះ",
      description: "សេវាកម្មជួសជុលគ្រប់ប្រភេទសម្រាប់ផ្ទះ កន្លែងការងារ ទាំងខាងក្នុង និងខាងក្រៅ ប្រកបដោយភាពជំនាញ។"
    },
    {
      icon: <Ruler className="w-8 h-8" />,
      title: "ប្លង់អគារ",
      description: "សេវាកម្មបង្កើតប្លង់អគារប្រកបដោយភាពជំនាញខ្ពស់ គិតគូរពីប្រសិទ្ធភាព ភាពងាយស្រួលប្រើប្រាស់ និងសុវត្ថិភាព។"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "ការគ្រប់គ្រងគម្រោង",
      description: "សេវាកម្មគ្រប់គ្រងគម្រោងដែលធានាបាននូវគុណភាពការងារបានល្អ អនុវត្តតាមកាលវិភាគ និងការប្រើប្រាស់ថវិកាប្រកបដោយប្រសិទ្ធភាព។"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/50 dark:bg-muted/10">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-saffron/10 text-saffron px-4 py-1.5 rounded-full text-sm font-medium mb-3">
            សេវាកម្មរបស់យើង
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">សេវាកម្មដែលយើងផ្តល់ជូន</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            យើងផ្តល់ជូននូវសេវាកម្មគ្រប់ជ្រុងជ្រោយទាក់ទងនឹងការរចនា និងសាងសង់ដើម្បីបំពេញតាមតម្រូវការរបស់អតិថិជន
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="card-hover overflow-hidden border-none shadow-lg dark:shadow-saffron/5 hover-lift"
            >
              <CardContent className="p-6">
                <div className="mb-4 rounded-lg bg-saffron/10 p-3 w-16 h-16 flex items-center justify-center">
                  <div className="text-saffron">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
                
                <div className="mt-6 flex items-center text-saffron font-medium cursor-pointer group">
                  <span>ព័ត៌មានបន្ថែម</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="ml-1 group-hover:translate-x-1 transition-transform"
                  >
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
