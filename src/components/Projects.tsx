import React from 'react';
import { ExternalLink, Github, Calendar, Users, Zap, Award } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Reconhecimento Facial para Presença Automática',
      description: 'Sistema de reconhecimento facial para controle de acesso em ambiente de ensino do CEUMA (Incode e ADS), com registro automático e features de gamificação pontuadas, como desafios, recompensas e rankeamento.(em desenvolvimento).',

      image: 'https://lh3.googleusercontent.com/fife/ALs6j_FMwLDPLdHrC2rO3T5c6P5QsXkZFFpt-EKw2_LQEiRiPJl8NOw3e1UazB06inkWqmRoFqdAP8ZMLr289IbMJ9P0FkrIgrP1-1FeKYuF-USG-fdhx6lv-4k4sQD-OzLdSM0uzVsc8YBBRkIr_oKQbUBjCySCQf-B8n7aFbj_3CrM3wbYvNHt_xZEswNSvB4cksZuIpwBAid0VP5TSbWdmjEtVWBMOTeIf6SAFPXzsDe_oHjEXKoGPxqv-RWusBorHaS_n5amy1XBaHx6ApssSRC_sUsjHKFe6sUx7tcAYIbnb_alDGdZ5rQ6e-PyRSIDOxe1egJN3MKRCyjOzdS4wqnb5sRlp46-vYrnbX63VZB5SNYi5ohB9xZ18d1Ik5lJKs_xMiUbpSRQtqu2Iv-7s7c9ROainGU67j-5Zrkh685MOxVUWiKF0tMB7YZ5j7lhcWaEMi9a62qNpqpntMia-Z71xhIWLwhaByM2NX3-QuMKLop6Bt52Lzuz9vZ18KNjVosxgh5AaTfGjU9bwxI4PEy0pzW-Xd_6I2NbfJGWsJxWhtAZYHtd3zCK9dDCT9Ou-FxopUcxoverUi-eMGSei8WlK7cmRQmL0qq34vx1k-YD0GW1Tlqzo6qvSM6Tk1xA7Y4isoGNMKaY480WoBojb4InmKdNPtgoZRA1sdtQUWfZbUF170u4t1oA06alrsfdFiWZy9muOonmvZeYyj0d_yCuAFNoXQl90pePG4XNEcvYHXyv_WE1LYTDKecDzG_jlEEutryVTqbqsyy0Qo7MPstB3_7SmSMhIpgMXpD1yiph4Uc2qmImzvLCodB-e8EfXdTHYKp7BY8w8nv1sgkekXrZm5EkwyjuScSHC-kAvF8jaKooAJgZTKpVGomNbLyiXLlnKEliubMNkS7EYdJdXx0c5YWA1B13N5EgmU2lMicOQG7b63ma1rjrgc8HygaCCyeO8fn1dzXxvNzS1_09GVZ9Rl2BUyl8adLOkWdGQzSxzKAkPR0eW20KIbtPfDJJCL2Q7X5il7GlRUssM8gjCTtrnnrOmi8wfQ6_r883cmeovNmS8jOEqmKCnitzz-vVso7QCUqXR_uDL38f3QMYjQuGo9g-cactHRjw9cxkGnla61wy7NWWIQHGE-M9S-NHE-lGngqYBUHJBAXgeeLTQe0KhxG5bMv1L72rz62bhxA_SCigPPadre5IivoWbhWr1w8j6Cq7aQL1ppAQBeIRGZYU2pxv95svHD8il1gc2ojJr6-I6_WHAsu7_hey85pu4cndfRDomRPRZtyzluxHX5EKMB9o-bhxtizFupuK4aJ9SUO7s2doG6fxTu85UMTkpL6ZiLNpRhJqJ17_6oS8S2K8hz1NjN3IVFhfN6ECIiitTkbE521ey37UC14eB24VahaLgcHt4ptlYGerTNlH-k6CGHdpA410ye82TaMJecw5jMtCi2yMr9HVSpMqQSVSdjRKEUCJgC6YGPsXdYLZrZQgCGxxjuJNYkSrsyII7QMiA4EM_YQv6c89P4NQo5H4hXAL0PXi4xvxRDFoeCPTdiWSs4kju48AJ2YeWir2Ayz7lign66ZvS1dqqIOyaZyZbrE5VHxTaxo_TEA5Faf9Lfki-jbGKEtRV-OSzQ=w1920-h911?auditContext=prefetch',
      technologies: ['Python', 'ArcFace', 'Milvus', 'MySQL', 'Flask'],
      features: ['Presença automática', 'Admin Panel', 'Gamificação com pontuação'],
      liveUrl: '#',
      githubUrl: '#',
      certificateUrl: 'https://drive.google.com/file/d/1k8rH_2bd_8ziE9vhKhuSFwUDS_qhyQLV/view?usp=sharing', // Adicione a URL do certificado aqui
      stats: { duration: 'Em andamento(6 meses)', team: '5 pessoas', performance: '89%' }
    },
    {
      title: 'Aplicativo para AGROPEC',
      description: 'Aplicativo com mapa interativo e informações do evento para Feira Agropecuária de Paragominas/PA',
      image: 'https://lh3.googleusercontent.com/fife/ALs6j_FiflFJ5ac59gOGf5y8FY_akd5O3kpiUorX8gIIDV1iKV066v8LzMKYhMLRicB87AevF4nQ1YL0tBpZ4f6r42c0u0MTrlvGvd78ZrGu0A17_OPSouumd0OR2iVhK2y2QSSNzLFggvsaFO71tIUItVy-OTYUnrezq0FaGOX2Jbl6APs51nh9WyqHT0pDHITl4YdFyFOiETKb2QEHPfP8yy4jjFx3noJyCOkGvVr90Ku67ISvCN6n66LoERUeTT5ZBX1ZJGug1XpcKkr3DQksG8qNSFPL9kkznWDneswrPPO2BEvVLLsX98yk6j2AHkARLIrVQQ59VoEJJSjiNOYElQjQCq9hwSSYFFsVjKD34pVeV0non9vB1d1e4PR0RU4BpaUWzAptzr0fclEIpxHw7VfhmIZ2UbmJNMlgjBwqYgcCdFO8k0A31CQ46ZveIRKH1EtcUyBsNuuRsU7x1Uqp8DxJJXYzdkpR7mlXh_PCGOhF3iFPUNPGgK6lcz9LfAgsbK-LxjBvmtYMHutQUxbBJy5otAgPnFnjR4FyaE0StTZQOlxAxD-sY6Ex039WrAUDyb0Mo9Uh0XP9MLQGMSA8jFCtjj--CLmjzq0_lrD7hoKcLd5lOgJBnAkDZQrM3bbLf94cSpHARf6LSLRY_T8EJOCJSMGqT2LxOSE_jOYWdzwgemYtwAjUeD8WoofbwRGamYR8ZuuraePLbZ4IaSVbrF5NQCN-usnWAN2FpyEz27hokRGPVi4BpgRGKEUjjgPpARJz7eco9aHi8u4i5XtdCgbovNajbRka8tmh6rnTJvQa-6P3a-tLZTp9JbA7Ni6iIRdp_N51dfiVWmjKWzOYVeqaB-51QkA0jyD4pX9AmK426wwZnJ132Dc01ZyQeSFv4bCQazeclWZLFOI4onKSgLXbd3w8rgL0scWD1lZjN4LxVqtsRvauDS7LKan9hmR1FAG4oIugk4z2gUEK4vEVW04LuaNeMIE-1sObFKoHHhFXuH8RQ6AhkXsQhyeGKQN0w_-8ZuIsUylRt2chG_SIawtcphqfJLgfJsBf1rnOnUkEOhMIGsNzOgxM9pmvM6Lg_IAQyuduaKdnxidSouOlhV6wGk8V70_QHWiWcQR0qbCISXlzM2EHAbE5rb8TBCr27lZtRyxI-P4Abg7z9_CpZNok14LnQTS-lM8yFMr1n1lp-fqSE1Heq_VP1Tah9wgQ73Xy7yEQCbuMpJbHS3OEkU69VCYAWhQE_eK0zziADzt9pQtGsUoNIiDMxiQ-y3XkNRBcl2HP7Mr2qAfgVjeSX_8ytGizP6P2enULuv5eMJ6mObF2u1BnBz0igNRR9lcsLomUOwJcZI8MUJsMnbtXJ-vx-xA9DyVlDIhaFuDkaNdgY1L9rtJtIiA06gFbf_TZ_DHLs4lsL4nd-aa6TV33bMK48afmHXO56hHE4ObhanAHmqmeIz6ZIofZ5vokOblGS5jAEuNMkBY35ayKsEkh08Tdsk59SRWx9L5J4HedbW2myQ55IzfmLaJE2PgPvk1mkiOKB17pzaWfnkgVhoobXyZ7DLLGIanZUeE2v8gLzpBVsSPeX7ZN9Mn0n2pYD5eLUOWFWGS4cWvT3f7aH_UXi41ntuj72CIqxPvZyA=w998-h895?auditContext=prefetch',
      technologies: ['React', 'Figma'],
      features: ['Real-time', 'Mapa interativo', 'Notificações em tempo real'],
      liveUrl: 'https://www.figma.com/proto/lh9XAKcRdOF09mLjVBbPYW/PROT%C3%93TIPO-PARA-AGROPEC?page-id=0%3A1&node-id=1-16&viewport=263%2C580%2C0.16&t=eD127RpqSY1qQpzX-1&scaling=scale-down&content-scaling=fixed',
      githubUrl: 'https://github.com/tainoxs/AGROPEC',
      certificateUrl: 'https://drive.google.com/file/d/1kpeZzcdAjFOHBpbhGu-ZvJgKxBwLA5RV/view?usp=sharing', // Adicione a URL do certificado aqui
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
      certificateUrl: '#', // Adicione a URL do certificado aqui
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
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center space-x-2 text-white px-4 py-2 rounded-lg transition-colors duration-200 ${
                            project.liveUrl === '#'
                              ? 'bg-gray-600 cursor-not-allowed'
                              : 'bg-primary-blue hover:bg-blue-600'
                          }`}
                          aria-disabled={project.liveUrl === '#'}
                          onClick={(e) => project.liveUrl === '#' && e.preventDefault()}
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Ver ao Vivo</span>
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center space-x-2 text-white px-4 py-2 rounded-lg transition-colors duration-200 ${
                            project.githubUrl === '#'
                              ? 'bg-gray-600 cursor-not-allowed'
                              : 'bg-gray-800 hover:bg-gray-700'
                          }`}
                          aria-disabled={project.githubUrl === '#'}
                          onClick={(e) => project.githubUrl === '#' && e.preventDefault()}
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
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 text-white px-6 py-3 rounded-lg transition-all duration-300 transform ${
                        project.liveUrl === '#'
                          ? 'bg-gray-600 cursor-not-allowed'
                          : 'bg-gradient-to-r from-primary-blue to-blue-600 hover:shadow-lg hover:shadow-primary-blue/20 hover:scale-105'
                      }`}
                      aria-disabled={project.liveUrl === '#'}
                      onClick={(e) => project.liveUrl === '#' && e.preventDefault()}
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span className="font-semibold">Ver Projeto</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 text-white px-6 py-3 rounded-lg border border-gray-600 transition-all duration-300 ${
                        project.githubUrl === '#'
                          ? 'bg-gray-500 cursor-not-allowed'
                          : 'bg-gray-800 hover:border-gray-500 hover:bg-gray-700'
                      }`}
                      aria-disabled={project.githubUrl === '#'}
                      onClick={(e) => project.githubUrl === '#' && e.preventDefault()}
                    >
                      <Github className="w-5 h-5" />
                      <span className="font-semibold">Código</span>
                    </a>
                    <a
                      href={project.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 text-white px-4 py-2 rounded-lg transition-colors duration-200 ${
                        project.certificateUrl === '#'
                          ? 'bg-gray-600 cursor-not-allowed'
                          : 'bg-green-600 hover:bg-green-700'
                      }`}
                      aria-disabled={project.certificateUrl === '#'}
                      onClick={(e) => project.certificateUrl === '#' && e.preventDefault()}
                    >
                      <Award className="w-4 h-4" />
                      <span>Certificado</span>
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