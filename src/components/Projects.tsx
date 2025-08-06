import React from 'react';
import { ExternalLink, Github, Calendar, Users, Zap } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Reconhecimento Facial para Presença Automática',
      description: 'Sistema de reconhecimento facial para controle de acesso em ambiente de ensino do CEUMA (Incode e ADS), com registro automático e features de gamificação pontuadas, como desafios, recompensas e rankeamento.(em desenvolvimento).',

      image: 'https://lh3.googleusercontent.com/fife/ALs6j_FMwLDPLdHrC2rO3T5c6P5QsXkZFFpt-EKw2_LQEiRiPJl8NOw3e1UazB06inkWqmRoFqdAP8ZMLr289IbMJ9P0FkrIgrP1-1FeKYuF-USG-fdhx6lv-4k4sQD-OzLdSM0uzVsc8YBBRkIr_oKQbUBjCySCQf-B8n7aFbj_3CrM3wbYvNHt_xZEswNSvB4cksZuIpwBAid0VP5TSbWdmjEtVWBMOTeIf6SAFPXzsDe_oHjEXKoGPxqv-RWusBorHaS_n5amy1XBaHx6ApssSRC_sUsjHKFe6sUx7tcAYIbnb_alDGdZ5rQ6e-PyRSIDOxe1egJN3MKRCyjOzdS4wqnb5sRlp46-vYrnbX63VZB5SNYi5ohB9xZ18d1Ik5lJKs_xMiUbpSRQtqu2Iv-7s7c9ROainGU67j-5Zrkh685MOxVUWiKF0tMB7YZ5j7lhcWaEMi9a62qNpqpntMia-Z71xhIWLwhaByM2NX3-QuMKLop6Bt52Lzuz9vZ18KNjVosxgh5AaTfGjU9bwxI4PEy0pzW-Xd_6I2NbfJGWsJxWhtAZYHtd3zCK9dDCT9Ou-FxopUcxoverUi-eMGSei8WlK7cmRQmL0qq34vx1k-YD0GW1Tlqzo6qvSM6Tk1xA7Y4isoGNMKaY480WoBojb4InmKdNPtgoZRA1sdtQUWfZbUF170u4t1oA06alrsfdFiWZy9muOonmvZeYyj0d_yCuAFNoXQl90pePG4XNEcvYHXyv_WE1LYTDKecDzG_jlEEutryVTqbqsyy0Qo7MPstB3_7SmSMhIpgMXpD1yiph4Uc2qmImzvLCodB-e8EfXdTHYKp7BY8w8nv1sgkekXrZm5EkwyjuScSHC-kAvF8jaKooAJgZTKpVGomNbLyiXLlnKEliubMNkS7EYdJdXx0c5YWA1B13N5EgmU2lMicOQG7b63ma1rjrgc8HygaCCyeO8fn1dzXxvNzS1_09GVZ9Rl2BUyl8adLOkWdGQzSxzKAkPR0eW20KIbtPfDJJCL2Q7X5il7GlRUssM8gjCTtrnnrOmi8wfQ6_r883cmeovNmS8jOEqmKCnitzz-vVso7QCUqXR_uDL38f3QMYjQuGo9g-cactHRjw9cxkGnla61wy7NWWIQHGE-M9S-NHE-lGngqYBUHJBAXgeeLTQe0KhxG5bMv1L72rz62bhxA_SCigPPadre5IivoWbhWr1w8j6Cq7aQL1ppAQBeIRGZYU2pxv95svHD8il1gc2ojJr6-I6_WHAsu7_hey85pu4cndfRDomRPRZtyzluxHX5EKMB9o-bhxtizFupuK4aJ9SUO7s2doG6fxTu85UMTkpL6ZiLNpRhJqJ17_6oS8S2K8hz1NjN3IVFhfN6ECIiitTkbE521ey37UC14eB24VahaLgcHt4ptlYGerTNlH-k6CGHdpA410ye82TaMJecw5jMtCi2yMr9HVSpMqQSVSdjRKEUCJgC6YGPsXdYLZrZQgCGxxjuJNYkSrsyII7QMiA4EM_YQv6c89P4NQo5H4hXAL0PXi4xvxRDFoeCPTdiWSs4kju48AJ2YeWir2Ayz7lign66ZvS1dqqIOyaZyZbrE5VHxTaxo_TEA5Faf9Lfki-jbGKEtRV-OSzQ=w1920-h911?auditContext=prefetch',
      technologies: ['Python', 'ArcFace', 'Milvus', 'MySQL', 'Flask'],
      features: ['Presença automárica', 'Admin Panel', 'Gamificação com pontuação'],
      liveUrl: '#',
      githubUrl: '#',
      stats: { duration: 'Em andamento(6 meses)', team: '5 pessoas', performance: '89%' }
    },
    {
      title: 'Aplicativo para AGROPEC',
      description: 'Aplicativo de mapa interativo e informações do evendo para Feira Agropecuária de Paragominas/PA',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Figma', '', 'Socket.io', 'PWA'],
      features: ['Real-time', 'Offline First', 'Team Collaboration'],
      liveUrl: '#',
      githubUrl: '#',
      stats: { duration: '2 meses', team: '2 pessoas', performance: '90.5%' }
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