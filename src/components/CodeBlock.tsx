import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  code: string;
  comment?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, comment }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code.replace(/^\$ /, "")); // Remove bash prefix if present
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="my-4 overflow-hidden rounded-lg border border-slate-800 bg-[#0d1117] shadow-xl">
      {/* CodeBlock Header */}
      <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/50 px-4 py-2">
        <div className="flex items-center space-x-2">
          <span className="h-3 w-3 rounded-full bg-red-500/80"></span>
          <span className="h-3 w-3 rounded-full bg-yellow-500/80"></span>
          <span className="h-3 w-3 rounded-full bg-green-500/80"></span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded bg-slate-800/80 px-2 py-1 text-xs font-medium text-slate-400 hover:bg-slate-800 hover:text-white transition-all duration-200"
          title="Copy to clipboard"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-400 animate-scale" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Content */}
      <div className="p-4 overflow-x-auto font-mono text-sm leading-relaxed text-slate-200">
        {comment && (
          <div className="mb-2 text-slate-500 select-none">// {comment}</div>
        )}
        <pre className="m-0 select-all selection:bg-cyan-500/30 selection:text-white">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};
