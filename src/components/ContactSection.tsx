import { TerminalCard } from './TerminalCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-primary">
            $ init contact_protocol
          </h2>
          <div className="w-24 h-0.5 bg-primary mx-auto shadow-glow-sm"></div>
          <p className="font-mono text-muted-foreground">
            Ready to collaborate? Let's build something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <TerminalCard title="contact_info.json" className="animate-fade-in-up">
            <div className="space-y-6">
              <div className="space-y-4 font-mono text-sm">
                <div className="text-primary">// Get In Touch</div>
                <p className="text-foreground leading-relaxed">
                  Currently seeking full-time opportunities in data science and software development. 
                  Open to internships, collaborations, and interesting projects.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 group cursor-pointer hover:text-primary transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="font-mono text-sm">your.email@illinois.edu</span>
                </div>
                <div className="flex items-center space-x-3 group cursor-pointer hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5 text-primary" />
                  <span className="font-mono text-sm">linkedin.com/in/yourprofile</span>
                </div>
                <div className="flex items-center space-x-3 group cursor-pointer hover:text-primary transition-colors">
                  <Github className="w-5 h-5 text-primary" />
                  <span className="font-mono text-sm">github.com/yourusername</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="font-mono text-sm">Urbana-Champaign, IL</span>
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <div className="font-mono text-sm text-primary">// Quick Connect</div>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full font-mono hover:shadow-glow-sm">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                  <Button variant="outline" className="w-full font-mono hover:shadow-glow-sm">
                    <Linkedin className="w-4 h-4 mr-2" />
                    Connect on LinkedIn
                  </Button>
                </div>
              </div>

              <div className="space-y-2 pt-4">
                <div className="font-mono text-xs text-muted-foreground">
                  Response time: Usually within 24 hours
                </div>
                <div className="font-mono text-xs text-muted-foreground">
                  Best time to reach: 9 AM - 6 PM CST
                </div>
              </div>
            </div>
          </TerminalCard>

          {/* Contact Form */}
          <TerminalCard title="send_message.py" className="animate-fade-in-up">
            <div className="space-y-6">
              <div className="font-mono text-sm text-primary">
                # Send a message directly
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="font-mono text-sm text-foreground">Name</label>
                  <Input 
                    placeholder="your_name"
                    className="font-mono bg-secondary/30 border-border focus:border-primary focus:shadow-glow-sm transition-all"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="font-mono text-sm text-foreground">Email</label>
                  <Input 
                    type="email"
                    placeholder="email@domain.com"
                    className="font-mono bg-secondary/30 border-border focus:border-primary focus:shadow-glow-sm transition-all"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="font-mono text-sm text-foreground">Subject</label>
                  <Input 
                    placeholder="Let's collaborate!"
                    className="font-mono bg-secondary/30 border-border focus:border-primary focus:shadow-glow-sm transition-all"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="font-mono text-sm text-foreground">Message</label>
                  <Textarea 
                    placeholder="def message():&#10;    return 'Your message here...'"
                    rows={5}
                    className="font-mono bg-secondary/30 border-border focus:border-primary focus:shadow-glow-sm transition-all resize-none"
                  />
                </div>
                
                <Button className="w-full font-mono shadow-glow-sm hover:shadow-glow">
                  <Send className="w-4 h-4 mr-2" />
                  Execute send_message()
                </Button>
              </div>

              <div className="font-mono text-xs text-muted-foreground space-y-1">
                <div>// This form is secured with industry-standard encryption</div>
                <div>// Your data is never stored or shared with third parties</div>
              </div>
            </div>
          </TerminalCard>
        </div>

        {/* Footer */}
        <div className="text-center pt-12">
          <TerminalCard className="inline-block">
            <div className="font-mono text-sm space-y-2">
              <div className="text-primary">
                $ echo "Thanks for visiting my portfolio!"
              </div>
              <div className="text-muted-foreground">
                Built with React, TypeScript, and lots of ☕
              </div>
              <div className="text-xs text-muted-foreground">
                © 2024 • Designed with a hacker aesthetic in mind
              </div>
            </div>
          </TerminalCard>
        </div>
      </div>
    </section>
  );
};