import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-display text-scholarly mb-4">404</h1>
            <div className="w-16 h-px bg-classical-gold mx-auto mb-8"></div>
          </div>
          
          <div className="space-y-6 mb-12">
            <h2 className="text-2xl md:text-3xl font-display text-scholarly">
              Page Not Found
            </h2>
          </div>

          <div className="space-y-4">
            <Button asChild size="lg" className="font-medium">
              <Link to="/">Return Home</Link>
            </Button>
            <div className="text-sm text-muted-foreground">
              or <Link to="/contact" className="text-scholarly hover:text-classical-gold transition-colors underline">get in touch</Link> if you believe this is an error
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
