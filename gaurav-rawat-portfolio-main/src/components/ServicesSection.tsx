import { Globe, Bot, Lightbulb, Palette } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description:
      'Modern, responsive websites and web applications using Angular, React, HTML, CSS, and SCSS. Focus on performance, accessibility, and seamless user experience.',
    features: ['Responsive Design', 'Modern Frameworks', 'Performance Optimized'],
  },
  {
    icon: Bot,
    title: 'AI Solutions & Automation',
    description:
      'AI-powered virtual assistants, GPT integration, voice recognition systems, and intelligent automation solutions that streamline workflows and enhance productivity.',
    features: ['Virtual Assistants', 'GPT Integration', 'System Automation'],
  },
  {
    icon: Lightbulb,
    title: 'Consulting & Problem Solving',
    description:
      'Technical guidance, project planning, and strategic consulting. I help you make informed decisions about technology choices and coding best practices.',
    features: ['Technical Strategy', 'Code Reviews', 'Project Planning'],
  },
  {
    icon: Palette,
    title: 'UI/UX Design Support',
    description:
      'User-friendly interface design with focus on intuitive navigation, visual hierarchy, and creating optimal experiences that users love.',
    features: ['User Research', 'Interface Design', 'Usability Testing'],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
            What I Offer
          </p>
          <h2 className="section-title">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Comprehensive solutions tailored to your digital needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 card-hover relative overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-heading font-bold text-2xl mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/50 text-secondary-foreground border border-border"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
