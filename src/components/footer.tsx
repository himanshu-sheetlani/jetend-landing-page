import { Github, Package, BookOpen, FileText } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded bg-gradient-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">J</span>
            </div>
            <span className="text-xl font-bold text-foreground">JetEnd</span>
          </div>
          
          <div className="flex items-center space-x-8">
            <a 
              href="#" 
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a 
              href="#" 
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Package className="w-5 h-5" />
              <span>NPM</span>
            </a>
            <a 
              href="#" 
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <BookOpen className="w-5 h-5" />
              <span>Docs</span>
            </a>
            <a 
              href="#" 
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <FileText className="w-5 h-5" />
              <span>License</span>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © 2024 JetEnd. Built with ❤️ for the Node.js community.
          </p>
        </div>
      </div>
    </footer>
  );
};