import React from 'react';
import { ExternalLink, Github, Calendar, Users, Zap } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Reconhecimento Facial para Presença Automática',
      description: 'Plataforma completa de e-commerce com painel administrativo, sistema de pagamentos e gerenciamento de estoque. Construída com arquitetura microserviços para alta escalabilidade.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      features: ['Pagamentos', 'Admin Panel', 'Microserviços'],
      liveUrl: '#',
      githubUrl: '#',
      stats: { duration: '3 meses', team: '4 pessoas', performance: '99.9%' }
    },
    {
      title: 'Task Management App',
      description: 'Aplicativo de gerenciamento de tarefas em tempo real com colaboração em equipe, notificações push e sincronização offline. Interface intuitiva com drag & drop.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Vue.js', 'FastAPI', 'MongoDB', 'Socket.io', 'PWA'],
      features: ['Real-time', 'Offline First', 'Team Collaboration'],
      liveUrl: '#',
      githubUrl: '#',
      stats: { duration: '2 meses', team: 'Solo', performance: '98.5%' }
    },
    {
      title: 'Analytics Dashboard',
      description: 'Dashboard avançado de analytics com visualizações interativas, relatórios automatizados e integração com múltiplas fontes de dados. Processamento de big data em tempo real.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Next.js', 'Python', 'Redis', 'Docker', 'Chart.js'],
      features: ['Big Data', 'Real-time Analytics', 'Automated Reports'],
      liveUrl: '#',
      githubUrl: '#',
      stats: { duration: '4 meses', team: '6 pessoas', performance: '99.2%' }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="gradient-text">Projetos em Destaque</span>
          </h2>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Project Image */}
                <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-3">
                        <a
                          href={project.liveUrl}
                          className="flex items-center space-x-2 bg-primary-blue text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Ver ao Vivo</span>
                        </a>
                        <a
                          href={project.githubUrl}
                          className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                        >
                          <Github className="w-4 h-4" />
                          <span>Código</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                      <Calendar className="w-5 h-5 text-primary-blue mx-auto mb-1" />
                      <div className="text-xs text-gray-400">Duração</div>
                      <div className="text-sm font-semibold text-white">{project.stats.duration}</div>
                    </div>
                    <div className="text-center p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                      <Users className="w-5 h-5 text-primary-green mx-auto mb-1" />
                      <div className="text-xs text-gray-400">Equipe</div>
                      <div className="text-sm font-semibold text-white">{project.stats.team}</div>
                    </div>
                    <div className="text-center p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                      <Zap className="w-5 h-5 text-yellow-400 mx-auto mb-1" />
                      <div className="text-xs text-gray-400">Uptime</div>
                      <div className="text-sm font-semibold text-white">{project.stats.performance}</div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                      Tecnologias Utilizadas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary-blue/10 text-primary-blue border border-primary-blue/30 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                      Principais Features
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-3 py-1 bg-primary-green/10 text-primary-green border border-primary-green/30 rounded-full text-sm font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4 pt-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center space-x-2 bg-gradient-to-r from-primary-blue to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-primary-blue/20 transition-all duration-300 transform hover:scale-105"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span className="font-semibold">Ver Projeto</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center space-x-2 bg-gray-800 text-white px-6 py-3 rounded-lg border border-gray-600 hover:border-gray-500 hover:bg-gray-700 transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                      <span className="font-semibold">Código</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;