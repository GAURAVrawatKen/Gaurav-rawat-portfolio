import { ExternalLink, Github, Bot, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'AI-Powered Virtual Assistant',
    description:
      'A sophisticated voice-activated virtual assistant built with Python, featuring GPT integration for natural conversations, voice recognition, system automation capabilities, and persistent memory storage using SQLite.',
    tags: ['Python', 'GPT', 'Voice Recognition', 'SQLite', 'AI/ML'],
    icon: Bot,
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'Modern Portfolio Dashboard',
    description:
      'A responsive web application showcasing modern frontend development skills. Built with Angular and TypeScript, featuring smooth animations, user authentication, dynamic routing, and a sleek dark theme.',
    tags: ['Angular', 'TypeScript', 'SCSS', 'Responsive Design'],
    icon: Globe,
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    title: 'Advanced Web Applications',
    description:
      'Collection of web projects demonstrating expertise in modern frontend frameworks, including search functionality, filtering systems, and responsive layouts optimized for all devices.',
    tags: ['React', 'HTML/CSS', 'JavaScript', 'UI/UX'],
    icon: Globe,
    gradient: 'from-emerald-500 to-teal-600',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-surface-elevated relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-glow-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
            My Work
          </p>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A showcase of my technical projects demonstrating expertise in AI, web development, and modern technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-card rounded-2xl border border-border overflow-hidden card-hover"
            >
              {/* Project Header with Icon */}
              <div className={`h-40 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <project.icon className="w-16 h-16 text-white/80" />
                </div>
                {/* Decorative elements */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-card to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button variant="glow" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
