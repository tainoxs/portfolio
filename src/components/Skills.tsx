import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', logo: '⚛️', level: 60 },
        { name: 'TypeScript', logo: '🔷', level: 50 },
        //{ name: 'Next.js', logo: '▲', level: 60 },
        //{ name: 'Tailwind CSS', logo: '🎨', level: 40 },
        // { name: 'Vue.js', logo: '💚', level: 80 },
        { name: 'HTML', logo: '🌐', level: 90 },
        { name: 'CSS', logo: '🎨', level: 90 }, 
        { name: 'JavaScript', logo: '🟨', level: 90 },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', logo: '🟢', level: 50 },
        { name: 'Python', logo: '🐍', level: 80 },
        { name: 'Java', logo: '☕', level: 80 },
        // { name: 'Express.js', logo: '🚂', level: 90 },
        // { name: 'FastAPI', logo: '⚡', level: 80 },
        // { name: 'GraphQL', logo: '🔗', level: 75 },
        // { name: 'REST APIs', logo: '🌐', level: 95 },
      ]
    },
    {
      title: 'Database & Cloud',
      skills: [
        // { name: 'PostgreSQL', logo: '🐘', level: 90 },
        // { name: 'MongoDB', logo: '🍃', level: 85 },
        // { name: 'AWS', logo: '☁️', level: 80 },
        { name: 'Docker', logo: '🐳', level: 40 },  
        { name: 'MySQL', logo: '🐬', level: 70 },
        // { name: 'Redis', logo: '🔴', level: 75 },
        // { name: 'Firebase', logo: '🔥', level: 80 },
      ]
    },
    {
      title: 'Ferramentas',
      skills: [
        // { name: 'PostgreSQL', logo: '🐘', level: 90 },
        // { name: 'MongoDB', logo: '🍃', level: 85 },
        // { name: 'AWS', logo: '☁️', level: 80 },
        { name: 'Figma', logo: '𝐅', level: 90 },  
        { name: 'Google', logo: '🐬', level: 70 },
        // { name: 'Redis', logo: '🔴', level: 75 },
        // { name: 'Firebase', logo: '🔥', level: 80 },
      ]
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="gradient-text">Habilidades Técnicas</span>
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-gray-850 rounded-2xl p-6 border border-gray-700 hover:border-primary-blue/50 transition-all duration-300 group"
              >
                <h3 className="text-xl font-semibold mb-6 text-center group-hover:text-primary-blue transition-colors duration-300">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group/skill hover:bg-gray-800 p-3 rounded-lg transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{skill.logo}</span>
                          <span className="font-medium text-gray-300 group-hover/skill:text-white transition-colors duration-200">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm text-gray-400 font-mono">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-primary-blue to-primary-green h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional skills tags */}
          <div className="mt-12 text-center">
            <h3 className="text-lg font-semibold mb-6 text-gray-400">Outras Tecnologias</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Git', 'GitHub Actions', 'Figma', 'Linux', 'Adobe After Effects', 'Adobe Illustrator', 'Google App Script'].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700 hover:border-primary-green hover:text-primary-green transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;