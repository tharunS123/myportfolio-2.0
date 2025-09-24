import { TerminalCard } from './TerminalCard';
import { Badge } from '@/components/ui/badge';

export const AboutSection = () => {
  const skills = {
    languages: ['Java', 'Python', 'JavaScript', 'TypeScript', 'R', 'SQL', 'HTML/CSS'],
    frameworks: ['React', 'Node.js', 'Spring Boot', 'TensorFlow', 'Pandas', 'NumPy'],
    tools: ['Git', 'Docker', 'AWS', 'PostgreSQL', 'MongoDB', 'Jupyter'],
    specialties: ['Data Science', 'Machine Learning', 'Web Development', 'Data Pipelines']
  };

  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-primary">
            $ cat about_me.json
          </h2>
          <div className="w-24 h-0.5 bg-primary mx-auto shadow-glow-sm"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* About Text */}
          <TerminalCard title="personal_info.txt" className="animate-fade-in-up">
            <div className="space-y-4 font-mono text-sm">
              <div className="text-primary">// Background</div>
              <p className="text-foreground leading-relaxed">
                Statistics & Computer Science student at UIUC with a passion for turning 
                data into actionable insights. Started my programming journey in high school 
                on the robotics team, where I served as Software Captain and developed 
                competition-level automation systems.
              </p>
              
              <div className="text-primary mt-6">// Current Role</div>
              <p className="text-foreground leading-relaxed">
                Currently working as a Data Science Co-op at Bayer, where I enhance data 
                analysis workflows, build machine learning models, and optimize data pipelines. 
                I enjoy the challenge of solving complex problems and thinking of algorithms 
                like chess strategies.
              </p>

              <div className="text-primary mt-6">// Interests</div>
              <p className="text-foreground leading-relaxed">
                When I'm not coding, you'll find me solving puzzles, exploring new datasets, 
                or diving deep into the latest developments in AI and data science. I believe 
                in the power of clean code and elegant solutions.
              </p>
            </div>
          </TerminalCard>

          {/* Skills */}
          <TerminalCard title="skills.config" className="animate-fade-in-up">
            <div className="space-y-6 font-mono text-sm">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="space-y-3">
                  <div className="text-primary">
                    // {category.charAt(0).toUpperCase() + category.slice(1)}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="font-mono text-xs bg-secondary/50 hover:bg-secondary hover:shadow-glow-sm transition-all duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TerminalCard>
        </div>

        {/* Experience Timeline */}
        <TerminalCard title="timeline.log" className="animate-fade-in-up">
          <div className="space-y-6 font-mono text-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="text-primary">[2024] Data Science Co-op @ Bayer</div>
                <p className="text-foreground pl-4 border-l-2 border-primary/30">
                  Enhancing data analysis, building ML models, optimizing data pipelines. 
                  Working with large-scale agricultural and pharmaceutical datasets.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="text-primary">[2023] Software Captain @ Robotics Team</div>
                <p className="text-foreground pl-4 border-l-2 border-primary/30">
                  Led software development for competition robots. Programmed autonomous 
                  systems and coordinated with hardware teams for optimal performance.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="text-primary">[2022] Started at UIUC</div>
                <p className="text-foreground pl-4 border-l-2 border-primary/30">
                  Began dual degree in Statistics & Computer Science. Focused on machine 
                  learning, statistical analysis, and software engineering principles.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="text-primary">[2020] First Line of Code</div>
                <p className="text-foreground pl-4 border-l-2 border-primary/30">
                  Started programming with HTML/CSS for robotics team website. 
                  Quickly expanded to Java, Python, and web development.
                </p>
              </div>
            </div>
          </div>
        </TerminalCard>
      </div>
    </section>
  );
};