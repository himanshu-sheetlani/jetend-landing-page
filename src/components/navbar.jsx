import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, BookOpen, Package, Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded bg-gradient-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">J</span>
            </div>
            <span className="text-xl font-bold text-foreground">JetEnd</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#comparison" className="text-muted-foreground hover:text-foreground transition-colors">
              Comparison
            </a>
            <a href="#why" className="text-muted-foreground hover:text-foreground transition-colors">
              Why JetEnd
            </a>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <BookOpen className="w-4 h-4 mr-2" />
                Docs
              </Button>
              <Button variant="ghost" size="sm">
                <Package className="w-4 h-4 mr-2" />
                NPM
              </Button>
              <Button variant="outline" size="sm">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-4 pt-4 border-t border-border space-y-4"
          >
            <a href="#features" className="block text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#comparison" className="block text-muted-foreground hover:text-foreground transition-colors">
              Comparison
            </a>
            <a href="#why" className="block text-muted-foreground hover:text-foreground transition-colors">
              Why JetEnd
            </a>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="ghost" size="sm" className="justify-start">
                <BookOpen className="w-4 h-4 mr-2" />
                Docs
              </Button>
              <Button variant="ghost" size="sm" className="justify-start">
                <Package className="w-4 h-4 mr-2" />
                NPM
              </Button>
              <Button variant="outline" size="sm" className="justify-start">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};