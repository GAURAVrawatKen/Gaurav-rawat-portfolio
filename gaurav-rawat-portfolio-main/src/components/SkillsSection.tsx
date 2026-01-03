const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'SCSS', level: 85 },
    ],
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'Angular', level: 85 },
      { name: 'React', level: 80 },
      { name: 'Responsive Design', level: 90 },
      { name: 'UI/UX Principles', level: 85 },
      { name: 'REST APIs', level: 80 },
    ],
  },
  {
    title: 'AI & Automation',
    skills: [
      { name: 'GPT Integration', level: 85 },
      { name: 'Voice Recognition', level: 80 },
      { name: 'System Automation', level: 75 },
      { name: 'Virtual Assistants', level: 85 },
    ],
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { name: 'Git/GitHub', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'SQLite', level: 75 },
      { name: 'Debugging', level: 85 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-surface-elevated relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-glow-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
            My Expertise
          </p>
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A comprehensive overview of my technical proficiencies and expertise areas
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl bg-card border border-border"
            >
              <h3 className="font-heading font-semibold text-xl mb-6 text-primary">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-glow-secondary rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 p-6 rounded-2xl bg-card border border-border">
          <h3 className="font-heading font-semibold text-xl mb-6 text-center">
            Soft Skills & Qualities
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Problem Solving',
              'Logical Thinking',
              'Project Planning',
              'Team Collaboration',
              'Communication',
              'Quick Learner',
              'Attention to Detail',
              'Creative Thinking',
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-sm font-medium hover:bg-primary/20 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
