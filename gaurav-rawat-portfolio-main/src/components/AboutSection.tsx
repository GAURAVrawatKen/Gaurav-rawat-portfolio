import { GraduationCap, Target, Lightbulb, Code2 } from 'lucide-react';

const highlights = [
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'BCA from ITS, Ghaziabad (Expected 2026)',
  },
  {
    icon: Target,
    title: 'Focus',
    description: 'Full-Stack Web Development & AI Integration',
  },
  {
    icon: Lightbulb,
    title: 'Passion',
    description: 'Innovative Solutions & Problem Solving',
  },
  {
    icon: Code2,
    title: 'Approach',
    description: 'Clean Code & User-Centric Design',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-glow-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
            Get to know me
          </p>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A passionate developer dedicated to crafting exceptional digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm Gaurav Rawat, a BCA student at ITS, Ghaziabad, with a deep passion for technology 
              and software development. My journey in programming began with curiosity about how 
              digital solutions can solve real-world problems, and it has evolved into a dedicated 
              pursuit of excellence in web development and artificial intelligence.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I specialize in building modern web applications using cutting-edge technologies like 
              Angular, React, and TypeScript. My experience extends to developing AI-powered solutions, 
              including virtual assistants with voice recognition and GPT integration, demonstrating 
              my ability to work with complex, innovative technologies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              What sets me apart is my blend of technical proficiency and creative thinking. I believe 
              that great software isn't just about writing code—it's about understanding user needs, 
              solving problems elegantly, and creating experiences that make a difference.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
