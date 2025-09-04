import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Zap, 
  Database, 
  Shield, 
  CheckCircle, 
  Mail, 
  Code 
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "One-liner Routes",
    description: "Create GET, POST, PATCH, DELETE routes with simple, intuitive syntax. No boilerplate needed."
  },
  {
    icon: Database,
    title: "Plug-and-play Database",
    description: "Built-in helpers for MongoDB and SQL databases. Connect and query with minimal configuration."
  },
  {
    icon: Shield,
    title: "Auth Utilities",
    description: "JWT token management, password hashing, and authentication middleware out of the box."
  },
  {
    icon: CheckCircle,
    title: "Validators & Helpers",
    description: "Input validation, response formatting, and error handling utilities for robust APIs."
  },
  {
    icon: Mail,
    title: "Email Sender",
    description: "Simple email integration with support for multiple providers and templating."
  },
  {
    icon: Code,
    title: "TypeScript Ready",
    description: "Full TypeScript support with intelligent autocomplete and type safety."
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Everything you need to build backends
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            JetEnd provides a comprehensive toolkit that speeds up backend development 
            without sacrificing flexibility or performance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow border-border bg-card group hover:bg-gradient-to-br hover:from-card hover:to-accent/50">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};