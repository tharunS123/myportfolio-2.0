import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface TerminalCardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  style?: React.CSSProperties;
}

export const TerminalCard = ({ children, className, title, style }: TerminalCardProps) => {
  return (
    <div 
      className={cn(
        "bg-card border border-border rounded-lg shadow-glow-sm",
        "transition-all duration-300 hover:shadow-glow",
        className
      )}
      style={style}
    >
      {title && (
        <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-secondary/30">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-accent"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-primary"></div>
          </div>
          <span className="text-sm font-mono text-muted-foreground ml-2">{title}</span>
        </div>
      )}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};