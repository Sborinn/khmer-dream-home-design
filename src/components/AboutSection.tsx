
import React from "react";
import { Building, Award, Users, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  const achievements = [
    { icon: <Building className="h-10 w-10 text-saffron" />, number: "១០+", label: "ឆ្នាំបទពិសោធន៍" },
    { icon: <Award className="h-10 w-10 text-saffron" />, number: "២៥០+", label: "គម្រោងសម្រេច" },
    { icon: <Users className="h-10 w-10 text-saffron" />, number: "២០០+", label: "អតិថិជនពេញចិត្ត" }
  ];
  
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 khmer-pattern opacity-5 pointer-events-none"></div>
      
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-saffron/10 text-saffron px-4 py-1.5 rounded-full text-sm font-medium mb-3">
            អំពីយើង
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">ក្រុមហ៊ុនសាងសង់ដែលអ្នកទុកចិត្ត</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg">
              ខ្មែរឌ្រីមហោមឌីហ្សាញគឺជាក្រុមហ៊ុនឈានមុខគេមួយក្នុងវិស័យរចនា និងសាងសង់នៅកម្ពុជា។ យើងបានចាប់ផ្តើមដំណើរការអាជីវកម្មរបស់យើងក្នុងឆ្នាំ២០១៣ ជាមួយនឹងចក្ខុវិស័យច្បាស់លាស់ក្នុងការផ្លាស់ប្តូរទិដ្ឋភាពនៃការរចនានិងសាងសង់នៅកម្ពុជា។
            </p>
            <p className="text-lg">
              ជាមួយនឹងបទពិសោធន៍ជាង១០ឆ្នាំ យើងបានអភិវឌ្ឍខ្លួនជាក្រុមហ៊ុនដែលផ្តល់ជូននូវសេវាកម្មរចនានិងសាងសង់ប្រកបដោយគុណភាព និងភាពច្នៃប្រឌិតខ្ពស់។
            </p>
            <div className="flex gap-3">
              <Button className="bg-saffron hover:bg-saffron/90">
                <FileText className="mr-2 h-4 w-4" /> 
                ទាញយកព័ត៌មានលម្អិត
              </Button>
              <Button 
                variant="outline" 
                className="border-saffron text-saffron hover:bg-saffron/10"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                ទំនាក់ទំនងយើងខ្ញុំ
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="relative rounded-lg overflow-hidden aspect-[3/4]">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&h=800"
                alt="អគារក្រុមហ៊ុន" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <div className="grid grid-rows-2 gap-4">
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=600"
                  alt="ការងាររចនា" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1490644658840-3f2e3f8c5625?auto=format&fit=crop&w=600"
                  alt="សំភារៈសំណង់" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <Card key={index} className="card-hover border-none shadow-lg dark:shadow-saffron/10">
              <CardContent className="p-6 text-center">
                <div className="rounded-full bg-saffron/10 p-3 mx-auto w-16 h-16 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-bold text-saffron">{item.number}</h3>
                <p className="text-muted-foreground mt-1">{item.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
