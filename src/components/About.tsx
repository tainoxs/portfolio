import React from 'react';
import { Coffee, Gamepad2, BookOpen, Heart, Clock, Workflow} from 'lucide-react';
import eu from '../assets/img/eu.png';


const About: React.FC = () => {
  const interests = [
    // { icon: Coffee, label: 'Café', color: 'text-amber-400' },
    // { icon: BookOpen, label: 'Leitura', color: 'text-blue-400' },
    { icon: Heart, label: 'Tecnologia', color: 'text-red-400' },
    { icon: Gamepad2, label: 'Games', color: 'text-purple-400' },
    { icon: Workflow, label: 'Automação', color: 'text-purple-400' }
    
  ];

  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="gradient-text">Sobre Mim</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <div className="w-64 h-64 mx-auto md:mx-0 mb-8 relative">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-blue to-primary-green p-1">
                  <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                    <img
                      src={eu}
                      alt="Taino Samuel"
                      className="w-56 h-56 rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                <p>
                  Sou um desenvolvedor apaixonado por criar soluções digitais que combinam 
                  <span className="text-primary-blue font-semibold"> performance</span>, 
                  <span className="text-primary-green font-semibold"> usabilidade</span> e 
                  <span className="text-primary-blue font-semibold"> inovação</span>.
                </p>
                
                <p>
                  Com mais de 2 anos de experiência, especializo-me em desenvolvimento Full-Stack.
                </p>

                <p>
                  Acredito que a tecnologia deve simplificar a vida das pessoas, e trabalho 
                  constantemente para transformar ideias complexas em sistemas robustos.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary-blue">Meus Interesses</h3>
                <div className="flex flex-wrap gap-4">
                  {interests.map((interest, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full border border-gray-700 hover:border-primary-blue transition-colors duration-300"
                    >
                      <interest.icon className={`w-5 h-5 ${interest.color}`} />
                      <span className="text-gray-300">{interest.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;