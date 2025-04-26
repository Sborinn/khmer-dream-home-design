
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  location: string;
  size: string;
  year: string;
  images: string[];
  description: string;
}

export default function PortfolioSection() {
  const [filter, setFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects: Project[] = [
    {
      id: 1,
      title: "វីឡាទំនើបស្រស់ស្អាត",
      category: "residential",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800",
      location: "បឹងកេងកង, ភ្នំពេញ",
      size: "៣៥០ ម២",
      year: "២០២៣",
      images: [
        "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200",
        "https://images.unsplash.com/photo-1600047509807-f8261a3f7038?auto=format&fit=crop&w=1200",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200"
      ],
      description: "វីឡាទំនើបដែលរចនាឡើងយ៉ាងល្អិតល្អន់ ដោយផ្សំនូវរចនាប័ទ្មទំនើប និងខ្មែរ បង្កើតបាននូវលំនៅឋានដ៏ស្រស់ស្អាត ទាន់សម័យ និងមានផាសុខភាព។ វីឡានេះមានបន្ទប់គេង៤ បន្ទប់ទឹក៥ បន្ទប់ទទួលភ្ញៀវធំទូលាយ និងសួនច្បារដ៏ស្រស់ស្អាត។"
    },
    {
      id: 2,
      title: "អគារពាណិជ្ជកម្មទំនើប",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800",
      location: "មហាវិថីព្រះមុនីវង្ស, ភ្នំពេញ",
      size: "១៥០០ ម២",
      year: "២០២២",
      images: [
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200",
        "https://images.unsplash.com/photo-1481487196290-c152efe083f5?auto=format&fit=crop&w=1200",
        "https://images.unsplash.com/photo-1554435493-93422e8d1c46?auto=format&fit=crop&w=1200"
      ],
      description: "អគារពាណិជ្ជកម្មទំនើបនេះត្រូវបានរចនាឡើងដើម្បីបំពេញតម្រូវការក្រុមហ៊ុនធំៗ ដែលត្រូវការកន្លែងធ្វើការប្រកបដោយផាសុខភាព។ ការរចនាអគារនេះបានផ្សំនឹងរចនាប័ទ្មទំនើប និងការប្រើប្រាស់ថាមពលប្រកបដោយប្រសិទ្ធភាព។"
    },
    {
      id: 3,
      title: "ផ្ទះល្វែងកម្ពស់ពីរជាន់",
      category: "residential",
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800",
      location: "សែនសុខ, ភ្នំពេញ",
      size: "២០០ ម២",
      year: "២០២៣",
      images: [
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200",
        "https://images.unsplash.com/photo-1622866306584-660f4bca4100?auto=format&fit=crop&w=1200",
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200"
      ],
      description: "ផ្ទះល្វែងទំនើបនេះមានចំនួន២ជាន់ រចនាឡើងដើម្បីបង្កើនពន្លឺធម្មជាតិ និងខ្យល់ចេញចូល។ បន្ទប់គេងចំនួន៣ បន្ទប់ទឹកចំនួន៣ និងទីធ្លាផ្ទៃក្នុងទូលាយទាំងជាន់ក្រោម និងជាន់លើ។"
    },
    {
      id: 4,
      title: "សួនច្បារក្រុមហ៊ុន",
      category: "landscape",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800",
      location: "ចាក់អង្រែលើ, ភ្នំពេញ",
      size: "៨០០ ម២",
      year: "២០២១",
      images: [
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200",
        "https://images.unsplash.com/photo-1456894332557-0c42a275cc38?auto=format&fit=crop&w=1200",
        "https://images.unsplash.com/photo-1558980664-3a031f2f1e1f?auto=format&fit=crop&w=1200"
      ],
      description: "សួនច្បារដែលត្រូវបានរចនាឡើងសម្រាប់ក្រុមហ៊ុនធំមួយ ដើម្បីបង្កើតបរិយាកាសធម្មជាតិដ៏ស្រស់ស្អាត និងជាកន្លែងសម្រាកលំហែកាយ និងចិត្តសម្រាប់បុគ្គលិក។ សួនច្បារនេះមានប្រព័ន្ធស្រោចស្រពស្វ័យប្រវត្តិ និងប្រើប្រាស់រុក្ខជាតិដែលងាយថែទាំ។"
    },
    {
      id: 5,
      title: "ការកែលម្អហាងកាហ្វេ",
      category: "renovation",
      image: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=800",
      location: "ផ្សារថ្មី, ភ្នំពេញ",
      size: "១២០ ម២",
      year: "២០២២",
      images: [
        "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1200",
        "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200",
        "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=1200"
      ],
      description: "ការកែលម្អហាងកាហ្វេនេះបានផ្លាស់ប្តូររូបរាងចាស់ទៅជាហាងកាហ្វេទំនើប ដែលមានបរិយាកាសស្រស់ស្រាយ ផាសុខភាព និងទាក់ទាញភ្ញៀវ។ ការតុបតែងដោយប្រើសម្ភារៈធម្មជាតិ និងពណ៌អប់អរបានបង្កើតនូវបរិយាកាសកក់ក្តៅ។"
    },
    {
      id: 6,
      title: "អគារការិយាល័យទំនើប",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=800",
      location: "កំបូល, ភ្នំពេញ",
      size: "១២០០ ម២",
      year: "២០២១",
      images: [
        "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=1200",
        "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?auto=format&fit=crop&w=1200",
        "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1200"
      ],
      description: "អគារការិយាល័យទំនើបនេះត្រូវបានរចនាឡើងដើម្បីបង្កើនផលិតភាពការងារ និងផាសុខភាពរបស់និយោជិត។ ជាមួយនឹងការរចនាបែបបើកចំហ និងការប្រើប្រាស់ពន្លឺធម្មជាតិ អគារនេះបានកាត់បន្ថយការប្រើប្រាស់ថាមពលយ៉ាងច្រើន។"
    },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  const categories = [
    { id: "all", label: "ទាំងអស់" },
    { id: "residential", label: "លំនៅឋាន" },
    { id: "commercial", label: "ពាណិជ្ជកម្ម" },
    { id: "landscape", label: "សួនច្បារ" },
    { id: "renovation", label: "ការកែលម្អ" }
  ];

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-saffron/10 text-saffron px-4 py-1.5 rounded-full text-sm font-medium mb-3">
            សមិទ្ធិផលរបស់យើង
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">គម្រោងដែលយើងបានសម្រេច</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            សូមទស្សនាគម្រោងសាងសង់ និងរចនាដែលយើងបានសម្រេចជូនអតិថិជន
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(category => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              className={filter === category.id 
                ? "bg-saffron hover:bg-saffron/90" 
                : "border-saffron text-saffron hover:bg-saffron/10"
              }
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg hover-lift"
              onClick={() => handleOpenProject(project)}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/80 mb-4">{project.category === "residential" ? "លំនៅឋាន" : 
                   project.category === "commercial" ? "ពាណិជ្ជកម្ម" :
                   project.category === "landscape" ? "សួនច្បារ" : "ការកែលម្អ"}</p>
                <Button className="w-full bg-saffron hover:bg-saffron/90">មើលព័ត៌មានលម្អិត</Button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <Dialog open={!!selectedProject} onOpenChange={handleCloseProject}>
          {selectedProject && (
            <DialogContent className="max-w-4xl w-full p-0">
              <DialogHeader className="p-6">
                <DialogTitle className="text-2xl font-bold">{selectedProject.title}</DialogTitle>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-4 top-4"
                  onClick={handleCloseProject}
                >
                  <X className="h-4 w-4" />
                </Button>
              </DialogHeader>

              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={selectedProject.images[currentImageIndex]} 
                  alt={`${selectedProject.title} image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 rounded-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                >
                  <ArrowLeft size={20} />
                </Button>
                
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 rounded-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                >
                  <ArrowRight size={20} />
                </Button>
                
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {selectedProject.images.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        index === currentImageIndex ? "bg-saffron" : "bg-white/50 hover:bg-white"
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(index);
                      }}
                    />
                  ))}
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">ទីតាំង</h4>
                    <p>{selectedProject.location}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">ទំហំ</h4>
                    <p>{selectedProject.size}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">ឆ្នាំសាងសង់</h4>
                    <p>{selectedProject.year}</p>
                  </div>
                </div>
                
                <h4 className="text-sm font-medium text-muted-foreground mb-2">ការពិពណ៌នា</h4>
                <p className="text-muted-foreground">{selectedProject.description}</p>
                
                <Button className="mt-6 bg-saffron hover:bg-saffron/90">
                  ទាក់ទងគម្រោងស្រដៀង
                </Button>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
      
      {/* Khmer ornamental border */}
      <div className="absolute bottom-0 left-0 w-full h-4">
        <div className="khmer-border h-full"></div>
      </div>
    </section>
  );
}
