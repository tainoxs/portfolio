import React from 'react';
import { Coffee, Gamepad2, BookOpen, Heart, Clock } from 'lucide-react';

const About: React.FC = () => {
  const interests = [
    // { icon: Coffee, label: 'Café', color: 'text-amber-400' },
    // { icon: BookOpen, label: 'Leitura', color: 'text-blue-400' },
    { icon: Heart, label: 'Tecnologia', color: 'text-red-400' },
    // { icon: Gamepad2, label: 'Games', color: 'text-purple-400' },
    { icon: Clock, label: 'Automação', color: 'text-purple-400' },
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
                      src="https://lh3.googleusercontent.com/fife/ALs6j_FilSewVx_woQ7xpJXy1Sx9rh6Lj7HRy8ZLDwLDVR3Pg2O4Qfpc7ZB4CqjpQ3DtPoZATh7OHV70PRZmd1JALec30-1bdJ8HEAkgqMsSujaodXu42gZRV0cbD0zRJbl20Wi0sk0z-ZGcEQONTb421F7dzZ95bTVXUb4v_0hnrzSB_USzvoHzkVz_5FOGcUGtoniu2Nj_kpBx-37OItmT0adGTeYJ3vA-TAt4mtZWaRqW4w2MocvImZXvp9TMiT3iUOlmSWd6xCeRGSGon-MPq_QyMrBa6NlgvmKA2uIaaYdMZ00Xtdo-346zYQcccU1OY1QaAY5z8i9Nmw6h9zrYqMfquafKOyLmLWhX1nTiebmsnF2-lfFXTIRsKheMdyiq74Z7OWHgdteIYEe0pl8AMkL_-Cv1bEHhqWZWOF99RYo2WTzVi_kP2rlQUaChWr0xet6l7Oo2jCl3IsCqCB0pCYGpim_1XVQ5GerJDMZclTAn52cDo17X4avSEWofohcsymgTe4De1TzianKBqu9jSEpNXg7QNQY-PmH8RSxgWCDDq_rYzVSDFNSd8Yh1YVeWDupZZcOvAv3FJO0H-nz5XBOGLelWaUiSAMfAVEZhFJJWcgs-AZ3FuZGvo7kx92x5Rq0_PKBoMJS2GXUfPHwLByUJBjy7Kgo4Xp9cQBdi_xAk0Xfe2j8djE0QWQsQQ5WKDTcPWRotKwCcpBKJJRVU32Xx17wkLJzP34EFq2fFGvUvNEXu61D2298pMi3pbQcLY-VNP6Hx9IUxsCuT2Paf7JHPXHbmsZZEpQAY2aMv3PFuEdg3QbW_ggrOOhQSoO1tr43lHqpUgtnyEkAgGyhWyDnAOamJ0lV6iK-mlc6M-hrqKZeAHYzF86wGfG7AN2j4PvVKcqq3uG657LcwMhFT8VNFS4qR5Rpljb98SgV-3k8Q4LI8Ae8PRKlZGOSarxR9i_16ZqrlgmL1-GbvhuUpr8SSHCMfbAvwXJF-dOG9hO2yTsQgczes7MGrmi-lt1b6VBVcyJvQADJ2_nEKTGIca44bDMwpwO0TBX410qP5fIakKMxlFQ1c5LWTk0Jcscp4QIzmp4OwsxADezNToCWLtw4CA0vYrzljEu5kdLASEhlBu7g-jZC7lMUiNjJoPvoGf4e7QU_F8Ffc5DE6jk3PFAbrEsTwakoRPHKljL2R54X-QFpH18qBWdQ_3I7VFaAFNP9ZS3fXs3ZnxeikUMFlSpfBgr-SdQdX1xB2uTILJao5OzfmSO5HDtnC5pbRQfRAYGgt7XaOslH5ixaQRNlAg1TEaCaRhDIDn10LJjFDalm18tFEhhmM8GlA2g-rC7Xv6YkW7_mXEmVAp_1C0Ju0Vn-o6bK3IUKbmdnxe9xXDzNZx70PJUQyTuD17ohS-3a3b3tK14bkEbdCSDp8SJElbRsizVE4tiy1-eaeprp2cVmv4RLSHGoaDQnAYl9fckdaZk37iAFLR1AkUyPvi1zOvrQ7RCR78ae3J7tywfaVUbuLGXRPzyXqDyY7P4xEhsCgyoNTj2GtdlO9jxiZ7upMbMDXCV8NgDz-F-d8oJ54uA12m5ttPntSEaeq7Zei_0UPSSfeD4b6sgltYDPGO-cVHAiTWq3vDjZRg6l0RpA5HMj5FzMXGlZTRfOABJJ_yLCKBEM56im6da0=w1919-h910?auditContext=forDisplay"
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
                  constantemente para transformar ideias complexas e sistemas robustos.
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