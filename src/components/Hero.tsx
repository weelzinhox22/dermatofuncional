
import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-secondary to-white py-12 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-primary animate-fade-in">
            Fisioterapia Dermatofuncional
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-700 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Estudo da anatomia e fisiologia da pele, suas camadas, funções e características para a prática da fisioterapia dermatofuncional.
          </p>
          <p className="mt-4 text-sm text-gray-600 italic animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Este material é apenas complementar e não substitui o material passado pela professora em aula.
             
          </p>
          <h2 className="mt-4 text-sm text-black-600 font-bold animate-fade-in" style={{ animationDelay: '0.4s' }}>
          O site e as questões foram feitas para atuar em conjunto com o material da professora, não utilize apenas o site.
          </h2>
          <h2 className="mt-4 text-sm text-black-600 font-bold animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Recomendo que passe por todas as aulas e depois prossiga para a prova.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a 
              href="#introducao" 
              className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors shadow-sm"
            >
              Iniciar o estudo
            </a>
            <a 
              href="#anatomia" 
              className="px-6 py-3 bg-white text-primary font-medium rounded-md border border-primary hover:bg-secondary transition-colors shadow-sm"
            >
              Explorar anatomia
            </a>
            <Link 
              to="/lipolise" 
              className="px-6 py-3 bg-primary/90 text-white font-medium rounded-md hover:bg-primary/80 transition-colors shadow-sm"
            >
              Lipólise
            </Link>
            <Link 
              to="/sistema-linfatico" 
              className="px-6 py-3 bg-primary/90 text-white font-medium rounded-md hover:bg-primary/80 transition-colors shadow-sm"
            >
              Sistema Linfático
            </Link>
            <Link 
              to="/eletroterapia" 
              className="px-6 py-3 bg-primary/90 text-white font-medium rounded-md hover:bg-primary/80 transition-colors shadow-sm"
            >
              Eletroterapia
            </Link>
            <Link 
              to="/envelhecimento" 
              className="px-6 py-3 bg-primary/90 text-white font-medium rounded-md hover:bg-primary/80 transition-colors shadow-sm"
            >
              Envelhecimento
            </Link>
            <Link 
              to="/discromias" 
              className="px-6 py-3 bg-primary/90 text-white font-medium rounded-md hover:bg-primary/80 transition-colors shadow-sm"
            >
              Discromias
            </Link>
            <Link 
              to="/exame" 
              className="px-6 py-3 bg-primary/90 text-white font-medium rounded-md hover:bg-primary/80 transition-colors shadow-sm"
            >
              Prova Online
            </Link>
            <Link 
              to="/atividade" 
              className="px-6 py-3 bg-primary/90 text-white font-medium rounded-md hover:bg-primary/80 transition-colors shadow-sm"
            >
              Resposta da Atividade
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="hidden md:block absolute right-0 top-0 -z-10 opacity-30">
        <div className="w-64 h-64 bg-skin-light rounded-full blur-3xl"></div>
      </div>
      <div className="hidden md:block absolute left-0 bottom-0 -z-10 opacity-20">
        <div className="w-80 h-80 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      {/* Additional decorative elements */}
      <div className="hidden md:block absolute left-1/4 top-1/4 -z-10 opacity-20">
        <div className="w-40 h-40 bg-primary/20 rounded-full blur-2xl"></div>
      </div>
      <div className="hidden md:block absolute right-1/4 bottom-1/4 -z-10 opacity-10">
        <div className="w-56 h-56 bg-blue-300/30 rounded-full blur-2xl"></div>
      </div>
    </div>
  );
};

export default Hero;
