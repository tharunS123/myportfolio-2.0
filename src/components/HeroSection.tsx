import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Welcome to my terminal...';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
        {/* Terminal Header */}
        <div className="font-mono text-sm text-muted-foreground mb-8">
          <div>guest@portfolio:~$ whoami</div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-mono font-bold text-primary animate-fade-in-up">
            &gt; Data Scientist
          </h1>
          <h2 className="text-3xl md:text-4xl font-mono text-foreground animate-fade-in-up">
            &amp; Software Developer
          </h2>
          
          <div className="font-mono text-xl text-muted-foreground">
            {displayText}
            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
              |
            </span>
          </div>

          <div className="max-w-2xl mx-auto space-y-4 text-left bg-card border border-border rounded-lg p-6 shadow-glow-sm">
            <div className="font-mono text-sm text-primary">
              $ cat introduction.txt
            </div>
            <div className="space-y-2 text-foreground">
              <p>
                Hi! I'm an undergraduate studying Statistics & Computer Science at the University of Illinois Urbana-Champaign. 
                Currently working as a Data Science Co-op at Bayer, where I enhance data pipelines and build ML models.
              </p>
              <p>
                4+ years of programming experience • Former Robotics Team Software Captain • 
                Passionate about solving complex problems with data and code.
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 pt-8">
          <Button variant="outline" size="sm" className="font-mono group hover:shadow-glow-sm">
            <Github className="w-4 h-4 mr-2 group-hover:text-primary transition-colors" />
            GitHub
          </Button>
          <Button variant="outline" size="sm" className="font-mono group hover:shadow-glow-sm">
            <Linkedin className="w-4 h-4 mr-2 group-hover:text-primary transition-colors" />
            LinkedIn
          </Button>
          <Button variant="outline" size="sm" className="font-mono group hover:shadow-glow-sm">
            <Mail className="w-4 h-4 mr-2 group-hover:text-primary transition-colors" />
            Email
          </Button>
          <Button variant="outline" size="sm" className="font-mono group hover:shadow-glow-sm">
            <FileText className="w-4 h-4 mr-2 group-hover:text-primary transition-colors" />
            Resume
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 font-mono text-sm text-muted-foreground animate-bounce flex flex-col items-center">
          <div className="mb-2">scroll_down()</div>
          <div className="w-px h-8 bg-primary mx-auto shadow-glow-sm"></div>
        </div>
      </div>
    </section>
  );
};