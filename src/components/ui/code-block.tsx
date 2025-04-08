interface CodeBlockProps {
  code: string;
}

export function CodeBlock({ code }: CodeBlockProps) {
  return (
    <div className="bg-zinc-800 text-zinc-200 p-4 rounded-md font-mono text-sm">
      <pre>{code}</pre>
    </div>
  );
} 