import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import HostGate from "@/components/HostGate";
import NotFound from "./NotFound";
const AboutContent = () => {
  return <div className="min-h-screen bg-background">
      <SEO 
        title="About Mark F. Davidson, MA (Oxon) - Scholar & Writer"
        description="Learn about Mark F. Davidson, Oxford-educated scholar exploring the intersection of faith and reason. Biography, credentials, and philosophical approach."
        keywords="Mark F Davidson, Oxford scholar, MA Oxon, philosophy, theology, faith and reason, classical education"
        type="article"
      />
      <Header />
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display text-scholarly mb-6">Mark F. Davidson, MA (Oxon)</h1>
            <div className="w-24 h-px bg-classical-gold mx-auto mb-8"></div>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto text-2xl italic">τὰ πάντα ἐν αὐτῷ συνέστηκεν
          </p>
          </div>

          {/* New Section */}
          <div className="bg-secondary/50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-display text-scholarly mb-6 text-center">Section Title</h2>
            <p className="text-muted-foreground leading-relaxed mb-4 text-center max-w-3xl mx-auto">
              Add your content here
            </p>
            <p className="text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
              Additional content
            </p>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-display text-scholarly mb-6">Faith</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">Faith</p>
                
              </div>
              
              <div>
                <h2 className="text-2xl font-display text-scholarly mb-6">Reason</h2>
                
                <p className="text-muted-foreground leading-relaxed">Text</p>
              </div>
            </div>

            <div className="bg-secondary/50 rounded-lg p-8 mb-16">
              <h2 className="text-2xl font-display text-scholarly mb-6 text-center italic">Fides quaerens intellectum</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-center max-w-3xl mx-auto">
            </p>
              <p className="text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
            </p>
            </div>

            

            
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
const About = () => <HostGate allow={['mfdavidson.lovable.app', 'mfdavidson.com', 'www.mfdavidson.com']} fallback={<NotFound />}>
    <AboutContent />
  </HostGate>;
export default About;