import React from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = 'javascript' }: CodeBlockProps) {
  return (
    <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
      <pre>{code}</pre>
    </div>
  );
} 