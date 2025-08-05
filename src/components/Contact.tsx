import React, { useState } from 'react';
import { Mail, Send, Linkedin, Github, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'tainoxslr@gmail.com',
      href: 'mailto:tainoxslr@gmail.com'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/joaosilva',
      href: 'https://www.linkedin.com/in/taino-samuel-674a80305/'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/tainoxs',
      href: 'https://github.com/tainoxs'
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'São Luís - MA, Brasil',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Vamos Conversar!</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tenho uma ideia interessante? Vamos trabalhar juntos e criar algo incrível.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">Entre em Contato</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Estou sempre aberto a discutir novos projetos, oportunidades criativas 
                  ou simplesmente trocar uma ideia sobre tecnologia e desenvolvimento.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-primary-blue/50 hover:bg-gray-800 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-blue to-primary-green rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 font-medium">{info.label}</div>
                      <div className="text-white font-semibold">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h4 className="text-lg font-semibold mb-4 text-white">Redes Sociais</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: Linkedin, href: 'https://www.linkedin.com/in/taino-samuel-674a80305/', color: 'hover:text-blue-400' },
                    { icon: Github, href: 'https://github.com/tainoxs', color: 'hover:text-gray-300' },
                    { icon: Mail, href: 'mailto:tainoxslr@gmail.com', color: 'hover:text-primary-green' },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-gray-700`}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-colors duration-200"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-colors duration-200"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Assunto *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-colors duration-200"
                    placeholder="Assunto do contato"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-colors duration-200 resize-none"
                    placeholder="Conte-me sobre seu projeto ou ideia..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary-blue to-primary-green text-white font-semibold py-4 px-6 rounded-lg hover:shadow-lg hover:shadow-primary-blue/20 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Enviando...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <Send className="w-5 h-5" />
                      <span>Enviar Mensagem</span>
                    </div>
                  )}
                </button>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-center">
                    ✅ Mensagem enviada com sucesso! Retornarei em breve.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-center">
                    ❌ Erro ao enviar mensagem. Tente novamente.
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-16 pt-8 border-t border-gray-700">
            <p className="text-gray-400">
              © 2025 Taino Samuel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;