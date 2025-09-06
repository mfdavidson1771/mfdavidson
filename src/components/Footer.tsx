import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="w-full bg-secondary border-t border-border mt-16">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="flex items-center space-x-6">
            <Button 
              variant="ghost" 
              size="sm"
              className="text-muted-foreground hover:text-foreground"
              asChild
            >
              <a href="#" aria-label="Twitter">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm"
              className="text-muted-foreground hover:text-foreground"
              asChild
            >
              <a href="#" aria-label="YouTube">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm"
              className="text-muted-foreground hover:text-foreground"
              asChild
            >
              <a href="#" aria-label="Instagram">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988c6.62 0 11.987-5.367 11.987-11.988C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297a4.533 4.533 0 0 1-1.297-3.323c0-1.297.49-2.448 1.297-3.323a4.533 4.533 0 0 1 3.323-1.297c1.297 0 2.448.49 3.323 1.297a4.533 4.533 0 0 1 1.297 3.323c0 1.297-.49 2.448-1.297 3.323a4.533 4.533 0 0 1-3.323 1.297zm7.798-6.989h-2.099c.18-.557.283-1.144.283-1.754 0-3.07-2.5-5.57-5.57-5.57s-5.57 2.5-5.57 5.57c0 .61.103 1.197.283 1.754H1.475c-.822 0-1.488.667-1.488 1.488v6.5c0 .821.666 1.488 1.488 1.488h14.772c.822 0 1.488-.667 1.488-1.488v-6.5c0-.821-.666-1.488-1.488-1.488z"/>
                </svg>
              </a>
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm"
              className="text-muted-foreground hover:text-foreground"
              asChild
            >
              <a href="#" aria-label="Facebook">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </Button>
          </div>
          
          <div className="text-sm text-muted-foreground space-y-2">
            <p>© 2025 M. F. Davidson</p>
            <p>All rights Reserved.</p>
            <Button 
              variant="link" 
              size="sm"
              className="text-muted-foreground hover:text-foreground p-0 h-auto"
              asChild
            >
              <a href="/privacy">Privacy Policy</a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;