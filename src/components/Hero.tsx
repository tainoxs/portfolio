import React, { useState, useEffect } from 'react';
import { ChevronDown, Code2, Database, Cloud } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'Desenvolvedor Full-Stack',
    'Entusiasta de UI/UX',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden grid-pattern">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary-blue rounded-full animate-float opacity-20"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-primary-green rounded-full animate-float-delayed opacity-30"></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-primary-blue rounded-full animate-float-delayed-2 opacity-25"></div>
        <div className="absolute top-1/3 right-1/3 w-5 h-5 bg-primary-green rounded-full animate-float opacity-15"></div>
        <Code2 className="absolute top-32 right-1/4 w-6 h-6 text-primary-blue animate-float opacity-20" />
        <Database className="absolute bottom-32 right-20 w-5 h-5 text-primary-green animate-float-delayed opacity-25" />
        <Cloud className="absolute top-1/2 left-20 w-7 h-7 text-primary-blue animate-float-delayed-2 opacity-20" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="font-mono text-gray-300">Olá, eu sou</span>
            <br />
            <span className="gradient-text">Taino Samuel</span>
          </h1>
          
          <div className="text-xl md:text-2xl lg:text-3xl mb-8 h-16 flex items-center justify-center">
            <span className="font-mono text-gray-400 mr-2">{'>'}</span>
            <span className="text-primary-blue font-medium typing-animation">
              {roles[currentRole]}
            </span>
          </div>

          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Transformo ideias em código e construo experiências digitais que fazem a diferença. 
            Especializado em desenvolvimento Full-Stack com paixão por tecnologias modernas.
          </p>

          <button
            onClick={scrollToProjects}
            className="group bg-gradient-to-r from-primary-blue to-primary-green text-primary-dark font-semibold px-8 py-4 rounded-full hover:shadow-lg hover:shadow-primary-blue/20 transition-all duration-300 transform hover:scale-105"
          >
            Ver Meus Projetos
            <ChevronDown className="inline-block ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-primary-blue" />
      </div>
    </section>
  );
};

export default Hero;