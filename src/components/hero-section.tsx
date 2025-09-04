import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/ui/code-block";
import { Github, BookOpen, ArrowRight } from "lucide-react";

const sampleCode = `import { get, post } from "jetend";

get("/", (req, res) => res.send("Hello JetEnd!"));
post("/user", ({ req, res }) => res.json(req.body));`;

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl lg:text-6xl font-bold text-foreground leading-tight"
              >
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  JetEnd
                </span>{" "}
                — Build backends in seconds
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-muted-foreground leading-relaxed max-w-lg"
              >
                Utility-first toolkit for Express.js with one-liner routes, database helpers, auth, and more.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 transition-opacity group"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Get Started
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-border hover:bg-accent"
              >
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Code Block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <CodeBlock code={sampleCode} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};