import { motion } from "framer-motion";
import { Rocket, Clock, Puzzle } from "lucide-react";

const reasons = [
  {
    icon: Rocket,
    title: "Speed",
    description: "Get from idea to deployed backend in minutes, not hours. JetEnd eliminates repetitive setup tasks."
  },
  {
    icon: Puzzle,
    title: "Simplicity", 
    description: "Clean, intuitive API that feels natural to Express.js developers. No steep learning curve."
  },
  {
    icon: Clock,
    title: "Productivity",
    description: "Focus on building features, not configuring infrastructure. More shipped products, less boilerplate."
  }
];

export const WhySection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-accent/20 to-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Why JetEnd?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built by developers, for developers who want to ship faster without compromising on code quality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto">
                <reason.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};