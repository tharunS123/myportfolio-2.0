import { useState } from 'react';
import { Button } from '@/components/ui/button';

const navItems = [
  { id: 'about', label: 'about_me()' },
  { id: 'projects', label: 'my_projects()' },
  { id: 'resume', label: 'resume.pdf' },
  { id: 'contact', label: 'contact()' },
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState('about');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-card/90 backdrop-blur-sm border border-border rounded-lg shadow-glow-sm px-2 py-2">
        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant={activeSection === item.id ? 'default' : 'ghost'}
              size="sm"
              onClick={() => scrollToSection(item.id)}
              className={`font-mono text-sm transition-all duration-200 ${
                activeSection === item.id 
                  ? 'bg-primary text-primary-foreground shadow-glow-sm' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
              }`}
            >
              {item.label}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};