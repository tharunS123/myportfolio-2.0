import { TerminalCard } from './TerminalCard';
import { Button } from '@/components/ui/button';
import { Download, FileText, Eye } from 'lucide-react';

export const ResumeSection = () => {
  return (
    <section id="resume" className="py-20 px-6 max-w-4xl mx-auto">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-primary">
            $ cat resume.pdf
          </h2>
          <div className="w-24 h-0.5 bg-primary mx-auto shadow-glow-sm"></div>
        </div>

        {/* Resume Actions */}
        <div className="grid md:grid-cols-2 gap-6">
          <TerminalCard title="resume_actions.sh" className="animate-fade-in-up">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="font-mono text-sm text-primary">// Quick Actions</div>
                <div className="space-y-3">
                  <Button className="w-full font-mono shadow-glow-sm hover:shadow-glow">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF Resume
                  </Button>
                  <Button variant="outline" className="w-full font-mono hover:shadow-glow-sm">
                    <Eye className="w-4 h-4 mr-2" />
                    View Online
                  </Button>
                  <Button variant="outline" className="w-full font-mono hover:shadow-glow-sm">
                    <FileText className="w-4 h-4 mr-2" />
                    Print-Friendly Version
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <div className="font-mono text-sm text-primary">// File Info</div>
                <div className="space-y-2 font-mono text-xs text-muted-foreground">
                  <div>Last Modified: December 2024</div>
                  <div>File Size: 245 KB</div>
                  <div>Format: PDF (ATS-Friendly)</div>
                  <div>Version: v2.4.1</div>
                </div>
              </div>
            </div>
          </TerminalCard>

          <TerminalCard title="resume_highlights.txt" className="animate-fade-in-up">
            <div className="space-y-4 font-mono text-sm">
              <div className="text-primary">// Key Highlights</div>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>Data Science Co-op at Bayer (Fortune 500)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>Statistics & CS @ UIUC (Top 5 CS Program)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>4+ years programming experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>Robotics Team Software Captain</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>ML models with 85%+ accuracy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span>Full-stack web development</span>
                </li>
              </ul>
            </div>
          </TerminalCard>
        </div>

        {/* Resume Summary */}
        <TerminalCard title="career_summary.md" className="animate-fade-in-up">
          <div className="space-y-6 font-mono text-sm">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="text-primary font-semibold">Education</div>
                <div className="space-y-2 text-foreground">
                  <div>University of Illinois Urbana-Champaign</div>
                  <div className="text-muted-foreground">B.S. Statistics & Computer Science</div>
                  <div className="text-muted-foreground">Expected: May 2025</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-primary font-semibold">Experience</div>
                <div className="space-y-2 text-foreground">
                  <div>Bayer - Data Science Co-op</div>
                  <div className="text-muted-foreground">Jan 2024 - Present</div>
                  <div className="text-muted-foreground">Software Captain (Robotics)</div>
                  <div className="text-muted-foreground">2022 - 2023</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-primary font-semibold">Core Skills</div>
                <div className="space-y-1 text-foreground text-xs">
                  <div>• Data Science & ML</div>
                  <div>• Full-Stack Development</div>
                  <div>• Statistical Analysis</div>
                  <div>• Algorithm Design</div>
                  <div>• Team Leadership</div>
                  <div>• Problem Solving</div>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <div className="text-primary mb-3">Notable Achievements</div>
              <div className="grid md:grid-cols-2 gap-4 text-foreground text-xs">
                <div>
                  <span className="text-accent">•</span> Built ML models processing 10M+ data points
                </div>
                <div>
                  <span className="text-accent">•</span> Led robotics team to regional competition
                </div>
                <div>
                  <span className="text-accent">•</span> Optimized data pipelines reducing runtime by 40%
                </div>
                <div>
                  <span className="text-accent">•</span> Published research on bias in medical AI
                </div>
              </div>
            </div>
          </div>
        </TerminalCard>
      </div>
    </section>
  );
};