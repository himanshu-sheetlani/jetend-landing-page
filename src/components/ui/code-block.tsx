import { motion } from "framer-motion";

interface CodeBlockProps {
  code: string;
  className?: string;
}

export const CodeBlock = ({ code, className = "" }: CodeBlockProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`relative overflow-hidden rounded-lg bg-code-bg p-6 ${className}`}
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <pre className="font-mono text-sm text-code-text overflow-x-auto">
        <code>{code}</code>
      </pre>
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/5 to-brand-secondary/5 pointer-events-none"></div>
    </motion.div>
  );
};