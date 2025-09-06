import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const About = () => {
  return <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display text-scholarly mb-6">Mark F. Davidson, MA (Oxon)</h1>
            <div className="w-24 h-px bg-classical-gold mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">τὰ πάντα ἐν αὐτῷ συνέστηκεν</p>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-display text-scholarly mb-6">Faith</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Mark F. Davidson's intellectual journey spans continents and disciplines, from the hallowed halls of Oxford 
                  University to the vibrant academic communities of New England. With dual Master's degrees—one in Philosophy, 
                  Politics, and Economics from Oxford and another in Theology from Sewanee: The University of the South—Mark 
                  brings a rare depth of interdisciplinary scholarship to his work.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  His academic foundation, built at Calvin College with majors in Philosophy and English, was further strengthened 
                  through specialized studies at Oxford's Centre for Medieval Studies, where he served as Junior Dean, immersing 
                  himself in the rich traditions of classical thought.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-display text-scholarly mb-6">Reason</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Reason
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  At St. John's Preparatory School, he developed innovative courses in Ethics, Relational Dynamics, 
                  and Early Church History, always seeking to make complex ideas accessible and relevant to young minds 
                  eager to understand their place in the world.
                </p>
              </div>
            </div>

            <div className="bg-secondary/50 rounded-lg p-8 mb-16">
              <h2 className="text-2xl font-display text-scholarly mb-6 text-center">Faith & Community</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-center max-w-3xl mx-auto">
                Beyond the academy, Mark has been a dedicated servant of the Episcopal Church, serving in various 
                lay ministries from Boston to Los Angeles. As a lector, vestry member, and coordinator of "Theology on Tap," 
                he has consistently worked to make theological discourse accessible and engaging for contemporary audiences.
              </p>
              <p className="text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
                His commitment to community extends from organizing monthly Evening Prayer services at nursing centers 
                to leading educational pilgrimages to the Holy Land, always seeking to build bridges between 
                ancient wisdom and modern life.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-classical-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-classical-gold">🎓</span>
                </div>
                <h3 className="text-lg font-display text-scholarly mb-2">Oxford Scholar</h3>
                <p className="text-sm text-muted-foreground">
                  M.A. in Philosophy, Politics & Economics with additional Diploma in Theology
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-classical-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-classical-gold">📚</span>
                </div>
                <h3 className="text-lg font-display text-scholarly mb-2">Dedicated Educator</h3>
                <p className="text-sm text-muted-foreground">
                  Teaching philosophy and theology at university and preparatory school levels
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-classical-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-classical-gold">⛪</span>
                </div>
                <h3 className="text-lg font-display text-scholarly mb-2">Community Leader</h3>
                <p className="text-sm text-muted-foreground">
                  Active in lay ministry and theological education across multiple parishes
                </p>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-display text-scholarly mb-6">A Life of Inquiry</h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
                Whether exploring the intersection of Anselmian and Abelardian thought in his master's thesis, 
                facilitating discussions on Christian moral reasoning, or engaging with the great questions that 
                have shaped human understanding for millennia, Mark brings both scholarly rigor and pastoral 
                sensitivity to his work.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
                Currently based in Los Angeles, he continues to pursue his calling as a bridge-builder between 
                the ivory tower and the village square, always seeking to make the profound insights of our 
                greatest thinkers accessible to those who hunger for wisdom and understanding.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/contact">Get In Touch</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://linkedin.com/in/markfieldsdavidson" target="_blank" rel="noopener noreferrer">
                    View Professional Background
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default About;