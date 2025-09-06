import heroImage from "@/assets/hero-classical-arts.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative w-full">
      <div className="container mx-auto px-6 py-16 pb-4">
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <img 
            src={heroImage}
            alt="Classical painting depicting the Seven Liberal Arts - Geometria, Musica, Astro, Logia, Logica, Rethorica, and Grammatica"
            className="w-full h-auto object-cover"
          />
        </div>
        
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <blockquote className="text-2xl md:text-3xl font-display leading-relaxed text-quote italic">
            "Oscar said, 'I take that to mean the ability to play gracefully with ideas.' I think that's disappearing from our culture."
          </blockquote>
          <cite className="block mt-6 text-lg font-medium text-scholarly not-italic">
            — Stephen Fry
          </cite>
          
          <div className="mt-8">
            <Button asChild variant="outline">
              <Link to="/about-draft">View About Page (Draft)</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;