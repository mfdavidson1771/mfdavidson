import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b border-border">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center">
          <a href="/" className="text-xl font-display font-semibold text-foreground hover:text-primary transition-colors">
            M. F. Davidson
          </a>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="https://drive.google.com/file/d/1QzhDCYZe24YIdsRYns5-Ba2smpISF896/view" 
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
      </div>
    </header>
  );
};

export default Header;