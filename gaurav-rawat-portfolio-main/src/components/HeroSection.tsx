import { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Code2, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';
import profilePhoto from '@/assets/profile-photo.png';

const roles = [
  'Software Developer',
  'AI Solutions Specialist',
  'Web Developer',
  'Problem Solver',
];

const FloatingIcon = ({ 
  icon: Icon, 
  className, 
  delay = 0 
}: { 
  icon: React.ElementType; 
  className: string; 
  delay?: number;
}) => (
  <div 
    className={`absolute ${className} animate-float opacity-20`}
    style={{ animationDelay: `${delay}s` }}
  >
    <Icon className="w-8 h-8 text-primary" />
  </div>
);

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(role.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with enhanced overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-glow-secondary/5" />
      </div>

      {/* Animated grid background */}
      <div className="absolute inset-0 z-[1] opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--primary) / 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--primary) / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Floating decorative icons */}
      <FloatingIcon icon={Code2} className="top-1/4 left-[10%] hidden lg:block" delay={0} />
      <FloatingIcon icon={Cpu} className="top-1/3 right-[15%] hidden lg:block" delay={1} />
      <FloatingIcon icon={Sparkles} className="bottom-1/3 left-[15%] hidden lg:block" delay={2} />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow z-[1]" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-glow-secondary/20 rounded-full blur-[100px] animate-pulse-glow z-[1]" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Photo with enhanced styling */}
          <div className="animate-fade-in opacity-0 delay-100" style={{ animationFillMode: 'forwards' }}>
            <div className="relative group">
              {/* Outer rotating ring */}
              <div className="absolute inset-0 -m-6 rounded-full border-2 border-dashed border-primary/30 animate-[spin_20s_linear_infinite]" />
              
              {/* Main photo container */}
              <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden animate-float">
                {/* Gradient border */}
                <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-br from-primary via-glow-secondary to-primary">
                  <div className="w-full h-full rounded-full overflow-hidden bg-background">
                    <img
                      src={profilePhoto}
                      alt="Gaurav Rawat"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
                
                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              </div>
              
              {/* Status badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-card border border-primary/50 shadow-lg shadow-primary/20">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-medium whitespace-nowrap">Available for work</span>
                </div>
              </div>

              {/* Decorative dots */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left flex-1 max-w-2xl">
            {/* Badge */}
            <div className="animate-fade-in opacity-0 delay-200 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6" style={{ animationFillMode: 'forwards' }}>
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Welcome to my portfolio</span>
            </div>

            <h1 className="animate-fade-in opacity-0 delay-300 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold mb-4 leading-tight" style={{ animationFillMode: 'forwards' }}>
              Hi, I'm{' '}
              <span className="gradient-text glow-text">Gaurav Rawat</span>
            </h1>

            {/* Typing effect role */}
            <div className="animate-fade-in opacity-0 delay-400 h-10 md:h-12 mb-6" style={{ animationFillMode: 'forwards' }}>
              <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light">
                <span className="text-primary font-medium">{displayText}</span>
                <span className="animate-pulse ml-0.5 text-primary">|</span>
              </p>
            </div>

            <div className="animate-fade-in opacity-0 delay-400" style={{ animationFillMode: 'forwards' }}>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
                BCA student passionate about creating innovative web applications and AI-powered solutions. 
                Turning complex problems into elegant, user-friendly experiences.
              </p>
            </div>

            {/* Stats row */}
            <div className="animate-fade-in opacity-0 delay-500 flex flex-wrap justify-center lg:justify-start gap-8 mb-8" style={{ animationFillMode: 'forwards' }}>
              {[
                { value: '3+', label: 'Projects' },
                { value: '5+', label: 'Technologies' },
                { value: '2026', label: 'Graduating' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl md:text-3xl font-heading font-bold gradient-text">{stat.value}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="animate-fade-in opacity-0 delay-500 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8" style={{ animationFillMode: 'forwards' }}>
              <Button
                variant="hero"
                size="xl"
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group"
              >
                <span>View My Work</span>
                <ArrowDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="xl"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="backdrop-blur-sm"
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="animate-fade-in opacity-0 delay-500 flex gap-4 justify-center lg:justify-start" style={{ animationFillMode: 'forwards' }}>
              <span className="text-sm text-muted-foreground self-center mr-2">Find me on</span>
              {[
                { icon: Github, href: 'https://github.com', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/gaurav-rawat-699907347', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:gauravrawat2005172@gmail.com', label: 'Email' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group relative w-12 h-12 rounded-xl bg-secondary/50 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 overflow-hidden"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-glow-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center p-2">
              <div className="w-1 h-2 rounded-full bg-current animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
