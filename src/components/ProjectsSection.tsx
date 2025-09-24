import { TerminalCard } from './TerminalCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Play } from 'lucide-react';

export const ProjectsSection = () => {
  const projects = [
    {
      title: 'Agricultural Data Pipeline',
      type: 'data_science',
      description: 'Built end-to-end data pipeline processing 10M+ agricultural sensor readings. Implemented ML models for crop yield prediction with 85% accuracy.',
      tech: ['Python', 'TensorFlow', 'Apache Airflow', 'PostgreSQL', 'AWS'],
      status: 'production',
      category: 'Data Science'
    },
    {
      title: 'Competitive Programming Solutions',
      type: 'algorithms',
      description: 'Collection of optimized algorithms and data structures. Solutions to 200+ LeetCode problems with detailed explanations and complexity analysis.',
      tech: ['Java', 'Python', 'Dynamic Programming', 'Graph Theory'],
      status: 'active',
      category: 'Algorithms'
    },
    {
      title: 'Real-time Stock Analysis Dashboard',
      type: 'web_app',
      description: 'React dashboard with live stock data visualization. Features technical indicators, portfolio tracking, and ML-based price prediction models.',
      tech: ['React', 'TypeScript', 'Python', 'Flask', 'Chart.js'],
      status: 'demo',
      category: 'Web Development'
    },
    {
      title: 'Autonomous Robot Navigation',
      type: 'robotics',
      description: 'Pathfinding algorithm for FRC robot. Implemented A* with dynamic obstacle avoidance, reducing navigation time by 40%.',
      tech: ['Java', 'OpenCV', 'PID Control', 'Computer Vision'],
      status: 'competition',
      category: 'Robotics'
    },
    {
      title: 'Statistical Learning Models',
      type: 'research',
      description: 'Comparative analysis of ML algorithms on healthcare datasets. Research project exploring bias in medical AI with published findings.',
      tech: ['R', 'Python', 'Scikit-learn', 'Statistical Analysis'],
      status: 'published',
      category: 'Research'
    },
    {
      title: 'Web Scraping & Analysis Tool',
      type: 'automation',
      description: 'Automated data collection from e-commerce sites. Built ETL pipeline processing 50K+ products daily with price trend analysis.',
      tech: ['Python', 'Selenium', 'Beautiful Soup', 'MongoDB'],
      status: 'active',
      category: 'Automation'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'production': return 'bg-primary/20 text-primary border-primary/30';
      case 'active': return 'bg-accent/20 text-accent border-accent/30';
      case 'demo': return 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30';
      case 'competition': return 'bg-blue-500/20 text-blue-500 border-blue-500/30';
      case 'published': return 'bg-purple-500/20 text-purple-500 border-purple-500/30';
      default: return 'bg-muted/20 text-muted-foreground border-muted/30';
    }
  };

  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-primary">
            $ ls -la projects/
          </h2>
          <div className="w-24 h-0.5 bg-primary mx-auto shadow-glow-sm"></div>
          <p className="font-mono text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing data science, web development, and algorithmic problem-solving skills.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <TerminalCard
              key={project.title}
              title={`${project.type}.py`}
              className="group hover:scale-105 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                {/* Project Header */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-mono font-semibold text-foreground text-lg">
                      {project.title}
                    </h3>
                    <Badge
                      variant="outline"
                      className={`font-mono text-xs ${getStatusColor(project.status)}`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <div className="text-xs font-mono text-primary">
                    // {project.category}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="space-y-2">
                  <div className="text-xs font-mono text-muted-foreground">
                    Tech Stack:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs font-mono bg-secondary/30 hover:bg-secondary/50 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1 font-mono text-xs hover:shadow-glow-sm">
                    <Github className="w-3 h-3 mr-1" />
                    Code
                  </Button>
                  {(project.status === 'demo' || project.status === 'production') && (
                    <Button size="sm" variant="outline" className="flex-1 font-mono text-xs hover:shadow-glow-sm">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Live
                    </Button>
                  )}
                  {project.status === 'competition' && (
                    <Button size="sm" variant="outline" className="flex-1 font-mono text-xs hover:shadow-glow-sm">
                      <Play className="w-3 h-3 mr-1" />
                      Demo
                    </Button>
                  )}
                </div>
              </div>
            </TerminalCard>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center pt-8">
          <TerminalCard className="inline-block">
            <div className="space-y-4">
              <div className="font-mono text-sm text-muted-foreground">
                $ git log --oneline | wc -l
              </div>
              <div className="font-mono text-2xl text-primary">200+ commits</div>
              <p className="text-sm text-foreground">
                View all projects and contributions on GitHub
              </p>
              <Button className="font-mono shadow-glow-sm hover:shadow-glow">
                <Github className="w-4 h-4 mr-2" />
                Visit GitHub Profile
              </Button>
            </div>
          </TerminalCard>
        </div>
      </div>
    </section>
  );
};