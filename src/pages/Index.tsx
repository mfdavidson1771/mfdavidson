import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  // Structured data for person/author
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "M F Davidson",
    "alternateName": "Mark F. Davidson",
    "description": "Scholar, writer, and essayist exploring faith and reason through classical liberal arts",
    "url": "https://mfdavidson.com",
    "sameAs": [
      "https://twitter.com/mfdavidson",
      "https://www.instagram.com/mfdavidson/"
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="M F Davidson - Essays, Notes, and Reflections"
        description="Essays, notes, and reflections by M F Davidson exploring faith, reason, and the classical liberal arts. Scholar and writer based in Los Angeles."
        keywords="M F Davidson, Mark Davidson, essays, philosophy, theology, faith and reason, classical liberal arts, Oxford scholar"
        type="profile"
      />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
