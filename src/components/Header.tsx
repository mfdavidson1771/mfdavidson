import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center">
          <a href="/" className="text-xl font-display font-semibold text-foreground hover:text-primary transition-colors">
            M. F. Davidson
          </a>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#" 
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
          >
            Subscribe
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;