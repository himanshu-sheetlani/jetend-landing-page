import { motion } from "framer-motion";

export const CodeBlock = ({ code, title, className = "" }) => {
  // Syntax highlighting for JavaScript
  const highlightCode = (code) => {
    return code
      .replace(/(import|from|const|let|var|function|export|default|return)/g, '<span class="text-code-keyword">$1</span>')
      .replace(/(".*?")/g, '<span class="text-code-string">$1</span>')
      .replace(/(\/\/.*)/g, '<span class="text-code-comment">$1</span>')
      .replace(/(get|post|patch|delete|req|res)/g, '<span class="text-code-accent">$1</span>');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`relative overflow-hidden rounded-xl bg-code-bg border border-border/50 ${className}`}
    >
      <div className="flex items-center justify-between p-4 border-b border-border/50">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        {title && <span className="text-sm text-muted-foreground font-mono">{title}</span>}
      </div>
      <div className="p-6">
        <pre className="font-mono text-sm text-code-text overflow-x-auto">
          <code dangerouslySetInnerHTML={{ __html: highlightCode(code) }} />
        </pre>
      </div>
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/5 to-brand-secondary/5 pointer-events-none"></div>
    </motion.div>
  );
};