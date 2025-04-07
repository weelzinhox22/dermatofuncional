import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContentSection from '@/components/ContentSection';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronDown, ChevronUp, BookOpen, Brain, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const questions = [
    {
      id: 1,
      category: "fundamentos",
      question: "1° -O que é a dermatofuncional e qual a sua principal área de atuação?",
      answer: "A fisioterapia dermatofuncional é uma especialidade que trata das disfunções do sistema tegumentar (pele). Sua principal área de atuação envolve o tratamento de alterações estéticas e funcionais da pele, como cicatrizes, queimaduras, flacidez, celulite, estrias e lipodistrofias, utilizando recursos manuais, eletroterapêuticos e cosméticos."
    },
    {
      id: 2,
      category: "tecnicas",
      question: "2° -O que é a drenagem linfática e como ela contribui para o tratamento dermatofuncional?",
      answer: "A drenagem linfática é uma técnica de massagem que estimula o sistema linfático a trabalhar mais rapidamente, removendo o excesso de líquidos e toxinas dos tecidos corporais. Ela contribui para o tratamento dermatofuncional ao reduzir edemas, melhorar a circulação, diminuir a celulite, acelerar a cicatrização pós-operatória e melhorar a aparência e saúde da pele."
    },
    {
      id: 3,
      category: "fundamentos",
      question: "3° -Quais são as camadas da pele e suas funções principais?",
      answer: "A pele possui duas camadas principais:\n\n1. Epiderme: camada mais externa, responsável pela proteção contra agentes externos, impermeabilização e produção de melanina.\n\n2. Derme: camada intermediária, contém vasos sanguíneos, terminações nervosas, folículos pilosos e glândulas. Responsável pela nutrição da pele, elasticidade, resistência e sensibilidade.\n\nA hipoderme (tecido subcutâneo), embora não seja considerada parte da pele, está logo abaixo e funciona como reserva energética, isolante térmico e amortecedor."
    },
    {
      id: 4,
      category: "patologias",
      question: "4° -O que é a flacidez cutânea e quais são os fatores que contribuem para seu aparecimento?",
      answer: "A flacidez cutânea é a perda de elasticidade e firmeza da pele, resultando em um aspecto solto e caído. Os principais fatores que contribuem para seu aparecimento são:\n\n• Envelhecimento natural\n• Exposição solar excessiva\n• Perda de peso rápida\n• Gravidez\n• Tabagismo\n• Alimentação inadequada\n• Desidratação\n• Falta de exercícios físicos\n• Fatores genéticos\n• Alterações hormonais"
    },
    {
      id: 5,
      category: "fundamentos",
      question: "5° -Explique a função da melanina na pele e os efeitos da exposição ao sol sobre a produção desse pigmento.",
      answer: "A melanina é um pigmento produzido pelos melanócitos que dá cor à pele, cabelos e olhos. Sua principal função é proteger a pele contra os danos causados pela radiação ultravioleta (UV).\n\nQuando a pele é exposta ao sol, os melanócitos são estimulados a produzir mais melanina como mecanismo de defesa, resultando no bronzeamento. A exposição prolongada ou intensa pode levar à hiperpigmentação (manchas escuras) ou, em casos de dano severo, pode contribuir para o desenvolvimento de câncer de pele."
    },
    {
      id: 6,
      category: "fundamentos",
      question: "6° -Quais são as funções das glândulas sudoríparas e sebáceas?",
      answer: "Glândulas sudoríparas:\n• Produzem suor (água, sais minerais e resíduos)\n• Regulam a temperatura corporal através da evaporação do suor\n• Auxiliam na excreção de toxinas\n• Mantêm a hidratação da pele\n\nGlândulas sebáceas:\n• Produzem sebo (óleo natural)\n• Lubrificam e impermeabilizam a pele e os pelos\n• Formam o manto hidrolipídico que protege contra bactérias\n• Previnem o ressecamento da pele e cabelos"
    },
    {
      id: 7,
      category: "tecnicas",
      question: "7° -Quais são as principais funções do sistema linfático?",
      answer: "As principais funções do sistema linfático são:\n\n• Drenagem de fluidos: recolhe o excesso de líquido dos tecidos e o devolve à circulação sanguínea\n• Defesa imunológica: filtra e remove patógenos, células danificadas e outros detritos\n• Absorção de gorduras: transporta lipídios absorvidos no intestino\n• Manutenção do equilíbrio de fluidos corporais\n• Transporte de proteínas e outras moléculas grandes que não conseguem entrar diretamente na circulação sanguínea"
    },
    {
      id: 8,
      category: "tecnicas",
      question: "8° -Explique o processo de formação e circulação da linfa.",
      answer: "Formação da linfa:\n1. O sangue arterial libera fluido nos tecidos (filtração capilar)\n2. Parte desse fluido não retorna aos capilares venosos\n3. O excesso de fluido, proteínas e outras substâncias entram nos capilares linfáticos, formando a linfa\n\nCirculação da linfa:\n1. A linfa flui dos capilares linfáticos para vasos linfáticos maiores\n2. Passa por linfonodos, onde é filtrada\n3. Eventualmente, retorna à circulação sanguínea através do ducto torácico e ducto linfático direito\n4. O movimento da linfa ocorre por contrações musculares, pulsações arteriais, movimentos respiratórios e válvulas unidirecionais nos vasos linfáticos"
    },
    {
      id: 9,
      category: "fundamentos",
      question: "9° -O que é o tecido adiposo e qual sua principal função no corpo humano?",
      answer: "O tecido adiposo é um tipo especializado de tecido conjuntivo composto principalmente por células chamadas adipócitos, que armazenam gordura.\n\nSuas principais funções são:\n• Reserva energética: armazena energia na forma de triglicerídeos\n• Isolamento térmico: ajuda a manter a temperatura corporal\n• Proteção mecânica: amortece órgãos e estruturas contra impactos\n• Função endócrina: produz hormônios como a leptina e adiponectina\n• Preenchimento: mantém contornos corporais e preenche espaços entre órgãos"
    },
    {
      id: 10,
      category: "patologias",
      question: "10° -O que é a melanogênese e quais fatores podem influenciar a sua produção?",
      answer: "A melanogênese é o processo biológico de produção de melanina pelos melanócitos. Começa com a conversão do aminoácido tirosina em dopa e depois em dopaquinona pela enzima tirosinase, seguida por uma série de reações que resultam na formação de melanina.\n\nFatores que influenciam a melanogênese:\n• Exposição à radiação UV (principal estimulador)\n• Fatores genéticos (determinam a quantidade e tipo de melanina)\n• Hormônios (estrogênio, progesterona, MSH)\n• Inflamação (pode causar hiperpigmentação pós-inflamatória)\n• Idade (alterações na produção com o envelhecimento)\n• Medicamentos e substâncias químicas (podem estimular ou inibir)\n• Estresse (pode afetar a produção hormonal relacionada à melanogênese)"
    }
  ];

const QuestionCard = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="mb-4"
    >
      <Card className="overflow-hidden border-l-4 hover:shadow-lg transition-all duration-300"
            style={{ borderLeftColor: isOpen ? 'var(--primary)' : 'var(--muted)' }}>
        <CardContent className="p-0">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
          >
            <h3 className="text-xl font-semibold">{question}</h3>
            <div className="text-primary">
              {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
          </button>
          
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="px-6 pb-6 border-t"
              >
                <div className="pt-4 whitespace-pre-line">{answer}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Atividade = () => {
  const categories = [
    { id: "all", label: "Todas", icon: <BookOpen className="h-4 w-4" /> },
    { id: "fundamentos", label: "Fundamentos", icon: <Brain className="h-4 w-4" /> },
    { id: "tecnicas", label: "Técnicas", icon: <Activity className="h-4 w-4" /> },
    { id: "patologias", label: "Patologias", icon: <Activity className="h-4 w-4" /> }
  ];
  
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredQuestions = activeCategory === "all" 
    ? questions 
    : questions.filter(q => q.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <Navbar />
      
      <main className="container mx-auto px-4 py-6 md:py-12">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-start mb-6"
        >
          <Link to="/">
            <Button variant="outline" className="flex items-center gap-2 hover:bg-primary hover:text-white transition-colors duration-300">
              <ArrowLeft size={18} />
              Voltar para a página inicial
            </Button>
          </Link>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-bold text-primary mb-8 font-serif"
        >
          Atividade Pontuada
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white shadow-md rounded-lg overflow-hidden mb-8"
        >
          <ContentSection 
            id="atividades-pontuadas"
            className="content-section prose max-w-none"
          >
            <div className="bg-gradient-to-r from-primary/10 to-transparent p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">Perguntas e Respostas</h2>
              <p className="text-gray-700">
                Esta seção contém as respostas de uma das atividades passadas em aula pela professora.
              </p>
            </div>

            <Tabs defaultValue="all" className="w-full mb-8">
              <TabsList className="w-full justify-start mb-6 bg-muted/20 p-1 overflow-x-auto flex-nowrap">
                {categories.map(cat => (
                  <TabsTrigger 
                    key={cat.id} 
                    value={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className="flex items-center gap-2"
                  >
                    {cat.icon}
                    {cat.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              <TabsContent value={activeCategory} className="mt-0">
                <div className="space-y-4">
                  {filteredQuestions.map((q, index) => (
                    <QuestionCard 
                      key={q.id}
                      question={q.question}
                      answer={q.answer}
                      index={index}
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </ContentSection>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Atividade;
