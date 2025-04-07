import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Book,
  Activity,
  Droplets,
  Zap,
  Clock,
  Palette,
  FileText,
  PenTool,
  Heart,
  ChevronRight,
  BookOpen,
  Brain
} from 'lucide-react';

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Navigation items with their respective links and icons
  const navigationItems = [
    // Fundamentos
    { 
      name: "Iniciar o Estudo", 
      href: "#introducao", 
      icon: <Book className="h-5 w-5" />,
      color: "bg-blue-50 border-blue-200",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      description: "Comece aqui sua jornada de aprendizado"
    },
    { 
      name: "Explorar Anatomia", 
      href: "#anatomia", 
      icon: <Heart className="h-5 w-5" />,
      color: "bg-blue-50 border-blue-200",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      description: "Conheça as estruturas da pele"
    },
    
    // Técnicas
    { 
      name: "Lipólise", 
      href: "/lipolise", 
      icon: <Droplets className="h-5 w-5" />,
      color: "bg-green-50 border-green-200",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      description: "Técnicas para redução de gordura"
    },
    { 
      name: "Sistema Linfático", 
      href: "/sistema-linfatico", 
      icon: <Activity className="h-5 w-5" />,
      color: "bg-green-50 border-green-200",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      description: "Drenagem e circulação linfática"
    },
    { 
      name: "Eletroterapia", 
      href: "/eletroterapia", 
      icon: <Zap className="h-5 w-5" />,
      color: "bg-green-50 border-green-200",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      description: "Recursos elétricos em tratamentos"
    },
    
    // Condições
    { 
      name: "Envelhecimento", 
      href: "/envelhecimento", 
      icon: <Clock className="h-5 w-5" />,
      color: "bg-purple-50 border-purple-200",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      description: "Processos e tratamentos anti-idade"
    },
    { 
      name: "Discromias", 
      href: "/discromias", 
      icon: <Palette className="h-5 w-5" />,
      color: "bg-purple-50 border-purple-200",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      description: "Alterações na pigmentação da pele"
    },
    
    // Avaliação
    { 
      name: "Prova Online", 
      href: "/exame", 
      icon: <FileText className="h-5 w-5" />,
      color: "bg-amber-50 border-amber-200",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      description: "Teste seus conhecimentos"
    },
    { 
      name: "Resposta da Atividade", 
      href: "/atividade", 
      icon: <PenTool className="h-5 w-5" />,
      color: "bg-amber-50 border-amber-200",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      description: "Respostas da atividade pontuada"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="hidden md:block absolute right-0 top-0 -z-10 opacity-20">
        <div className="w-96 h-96 bg-blue-100 rounded-full blur-3xl"></div>
      </div>
      <div className="hidden md:block absolute left-0 bottom-0 -z-10 opacity-15">
        <div className="w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>
      <div className="hidden md:block absolute left-1/3 top-1/3 -z-10 opacity-10">
        <div className="w-64 h-64 bg-blue-200 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Header section */}
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-primary mb-6">
              Fisioterapia Dermatofuncional
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Estudo da anatomia e fisiologia da pele, suas camadas, funções e características para a prática da fisioterapia dermatofuncional.
            </p>
            <div className="mt-6 space-y-2 text-sm text-gray-600">
              <p className="italic">
                Este material é apenas complementar e não substitui o material passado pela professora em aula.
              </p>
              <p className="font-medium">
                O site e as questões foram feitas para atuar em conjunto com o material da professora. Recomendamos que passe por todas as aulas antes da prova.
              </p>
            </div>
          </motion.div>
          
          {/* Category headers */}
          <motion.div className="mb-8 flex flex-wrap justify-center gap-4" variants={itemVariants}>
            <div className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium flex items-center gap-2">
              <BookOpen size={16} /> Fundamentos
            </div>
            <div className="px-4 py-2 rounded-full bg-green-100 text-green-700 font-medium flex items-center gap-2">
              <Activity size={16} /> Técnicas
            </div>
            <div className="px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-medium flex items-center gap-2">
              <Brain size={16} /> Condições
            </div>
            <div className="px-4 py-2 rounded-full bg-amber-100 text-amber-700 font-medium flex items-center gap-2">
              <FileText size={16} /> Avaliação
            </div>
          </motion.div>
          
          {/* Navigation cards */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
            variants={itemVariants}
          >
            {navigationItems.map((item, index) => {
              const isLink = item.href.startsWith('/');
              const Component = isLink ? Link : 'a';
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Component
                    to={isLink ? item.href : undefined}
                    href={!isLink ? item.href : undefined}
                    className={`flex items-center p-4 rounded-lg border ${item.color} hover:shadow-md transition-all duration-300 h-full group`}
                  >
                    <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full ${item.iconBg} ${item.iconColor}`}>
                      {item.icon}
                    </div>
                    <div className="ml-4 flex-grow">
                      <h3 className="font-medium text-gray-800 group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </Component>
                </motion.div>
              );
            })}
          </motion.div>
          
          {/* Primary action button */}
          <motion.div className="mt-10 text-center" variants={itemVariants}>
            <Link 
              to="#introducao" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <Book className="h-5 w-5" />
              Iniciar o estudo completo
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
