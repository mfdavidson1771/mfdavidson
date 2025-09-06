import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b border-border">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center">
          <a href="/" className="text-xl font-display font-semibold text-foreground hover:text-primary transition-colors">
            M. F. Davidson
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="/about" 
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            About
          </a>
          <a 
            href="https://drive.google.com/file/d/1KKRomT0zu5e0agzhbcTEvvkGVm3aOi_U/view?usp=drive_link" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            CV
          </a>
          <a 
            href="/contact" 
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Contact
          </a>
          <Button 
            variant="secondary" 
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            asChild
          >
            <a href="https://mfdavidson.substack.com/" target="_blank" rel="noopener noreferrer">
              Subscribe
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
          <nav className="container mx-auto px-6 py-4 space-y-4">
            <a 
              href="/about" 
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="https://drive.google.com/file/d/1KKRomT0zu5e0agzhbcTEvvkGVm3aOi_U/view?usp=drive_link" 
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              CV
            </a>
            <a 
              href="/contact" 
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button 
              variant="secondary" 
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
              asChild
            >
              <a 
                href="https://mfdavidson.substack.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                Subscribe
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;