import { motion } from "framer-motion";
import { CodeBlock } from "@/components/ui/code-block";
import { CheckCircle, X } from "lucide-react";

const traditionalCode = `const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

// Middleware setup
app.use(express.json());
app.use(cors());
app.use(helmet());

// Database connection
mongoose.connect('mongodb://localhost/myapp')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

// User schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);

// Routes
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = new User({
      email,
      password: hashedPassword
    });
    
    await user.save();
    
    const token = jwt.sign({ userId: user._id }, 'secret');
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`;

const jetendCode = `import { get, post, connectDB, hash, auth } from "jetend";

// Auto-connect database
connectDB("mongodb://localhost/myapp");

// Simple routes with built-in error handling
get("/users", async () => {
  return await User.find();
});

post("/register", async ({ body }) => {
  const user = await User.create({
    email: body.email,
    password: await hash(body.password)
  });
  
  return { token: auth.sign({ userId: user._id }) };
});

// Auto-start server
start(3000);`;

const comparisons = [
  { feature: "Lines of code", traditional: "~50 lines", jetend: "~15 lines", better: "jetend" },
  { feature: "Dependencies", traditional: "7+ packages", jetend: "1 package", better: "jetend" },
  { feature: "Setup time", traditional: "30+ minutes", jetend: "2 minutes", better: "jetend" },
  { feature: "Error handling", traditional: "Manual", jetend: "Built-in", better: "jetend" },
  { feature: "Security", traditional: "Manual setup", jetend: "Auto-configured", better: "jetend" },
  { feature: "Learning curve", traditional: "Steep", jetend: "Minimal", better: "jetend" }
];

export const ComparisonSection = () => {
  return (
    <section id="comparison" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Traditional Express.js vs JetEnd
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how JetEnd dramatically reduces boilerplate and speeds up development
          </p>
        </motion.div>

        {/* Code Comparison */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">
              <h3 className="text-2xl font-semibold text-foreground mb-2 flex items-center">
                <X className="w-6 h-6 text-red-500 mr-2" />
                Traditional Express.js
              </h3>
              <p className="text-muted-foreground">Complex setup with multiple dependencies</p>
            </div>
            <CodeBlock code={traditionalCode} title="traditional-setup.js" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">
              <h3 className="text-2xl font-semibold text-foreground mb-2 flex items-center">
                <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                With JetEnd
              </h3>
              <p className="text-muted-foreground">Clean, simple, and powerful</p>
            </div>
            <CodeBlock code={jetendCode} title="jetend-setup.js" />
          </motion.div>
        </div>

        {/* Feature Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-card rounded-xl border border-border overflow-hidden"
        >
          <div className="p-6 border-b border-border">
            <h3 className="text-2xl font-semibold text-foreground">Feature Comparison</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-4 font-semibold text-foreground">Feature</th>
                  <th className="text-left p-4 font-semibold text-foreground">Traditional Express</th>
                  <th className="text-left p-4 font-semibold text-foreground">JetEnd</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((comp, index) => (
                  <motion.tr
                    key={comp.feature}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-b border-border/50 hover:bg-muted/30"
                  >
                    <td className="p-4 font-medium text-foreground">{comp.feature}</td>
                    <td className="p-4 text-muted-foreground">{comp.traditional}</td>
                    <td className="p-4 text-brand-primary font-medium">{comp.jetend}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};