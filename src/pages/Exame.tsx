
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Clock, CheckCircle, AlertTriangle, Trophy, Brain, FileText } from 'lucide-react';

// Define the difficulty levels
type DifficultyLevel = 'Fácil' | 'Médio' | 'Difícil';

// Define the question types
type QuestionType = 'multiple-choice' | 'open-ended';

// Define the question structure
interface Question {
  id: number;
  text: string;
  options?: string[];
  correctAnswer?: number;
  correctAnswerText?: string;
  explanation: string;
  difficulty: DifficultyLevel;
  subject: string;
  type: QuestionType;
  keywords?: string[];
}

const Exame = () => {
  const navigate = useNavigate();
  const [started, setStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>([]);
  const [openEndedAnswers, setOpenEndedAnswers] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState(90 * 60); // 90 minutes in seconds
  const [examCompleted, setExamCompleted] = useState(false);
  const [score, setScore] = useState({ correct: 0, incorrect: 0, partialCorrect: 0 });
  const [reviewMode, setReviewMode] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const blurListenerRef = useRef<EventListener | null>(null);
  // New state for randomized questions
  const [randomizedQuestions, setRandomizedQuestions] = useState<Question[]>([]);

  // Function to shuffle array (Fisher-Yates algorithm)
  const shuffleArray = (array: any[]) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Exam questions
  const questions: Question[] = [
    {
      id: 1,
      text: "Qual é a principal função do tecido epitelial na pele?",
      options: [
        "Condução de sinais nervosos",
        "Produção de colágeno",
        "Proteção contra agentes externos",
        "Armazenamento de gordura"
      ],
      correctAnswer: 2,
      explanation: "O tecido epitelial na pele (epiderme) tem como principal função a proteção contra agentes externos, formando uma barreira física contra microorganismos, radiação UV e perda de água.",
      difficulty: "Fácil",
      subject: "Anatomia da Pele",
      type: "multiple-choice"
    },
    {
      id: 2,
      text: "Quais são as camadas principais que constituem a pele?",
      options: [
        "Epiderme e hipoderme",
        "Epiderme e derme",
        "Derme e hipoderme",
        "Epiderme, derme e hipoderme"
      ],
      correctAnswer: 1,
      explanation: "As camadas principais que constituem a pele são a epiderme e a derme. A hipoderme, embora importante, não é mais considerada parte da pele, mas sim o tecido subcutâneo que a conecta aos órgãos subjacentes.",
      difficulty: "Fácil",
      subject: "Anatomia da Pele",
      type: "multiple-choice"
    },
    {
      id: 3,
      text: "Qual é a célula mais abundante na epiderme?",
      options: [
        "Melanócito",
        "Célula de Langerhans",
        "Queratinócito",
        "Célula de Merkel"
      ],
      correctAnswer: 2,
      explanation: "Os queratinócitos são as células mais abundantes da epiderme, representando cerca de 80% da população celular. Eles são responsáveis pela produção de queratina e pela constante renovação da pele.",
      difficulty: "Fácil",
      subject: "Anatomia da Pele",
      type: "multiple-choice"
    },
    {
      id: 4,
      text: "Quais células da epiderme são responsáveis pela produção de melanina?",
      options: [
        "Queratinócitos",
        "Melanócitos",
        "Células de Langerhans",
        "Células de Merkel"
      ],
      correctAnswer: 1,
      explanation: "Os melanócitos são as células responsáveis pela produção de melanina, o pigmento que dá cor à pele e protege contra a radiação UV. Eles representam de 5% a 10% das células da epiderme.",
      difficulty: "Fácil",
      subject: "Anatomia da Pele",
      type: "multiple-choice"
    },
    {
      id: 5,
      text: "O que é a melanogênese?",
      options: [
        "O processo de renovação da pele",
        "A biossíntese da melanina",
        "A descamação da pele",
        "A formação de queratina"
      ],
      correctAnswer: 1,
      explanation: "A melanogênese é a biossíntese da melanina, uma série de reações oxidativas onde o aminoácido L-tirosina é transformado em pigmentos de diferentes cores, como preto, marrom ou avermelhado.",
      difficulty: "Médio",
      subject: "Anatomia da Pele",
      type: "multiple-choice"
    },
    {
      id: 6,
      text: "Qual enzima é crucial para o processo de melanogênese?",
      options: [
        "Lipase",
        "Tirosinase",
        "Amilase",
        "Colagenase"
      ],
      correctAnswer: 1,
      explanation: "A tirosinase é uma enzima que catalisa as reações de tirosina em di-hidroxifenilalanina (dopa) e subsequente oxidação em dopaquinona, sendo crucial para o processo de melanogênese.",
      difficulty: "Médio",
      subject: "Anatomia da Pele",
      type: "multiple-choice"
    },
    {
      id: 7,
      text: "Qual dos seguintes NÃO é um tipo de pele segundo a Sociedade Brasileira de Dermatologia?",
      options: [
        "Normal ou eudérmica",
        "Seca ou alípica",
        "Oleosa ou lipídica",
        "Sensível ou eritrósica"
      ],
      correctAnswer: 3,
      explanation: "Segundo a Sociedade Brasileira de Dermatologia, os quatro tipos principais de pele são: normal (eudérmica), seca (alípica), oleosa (lipídica) e mista. 'Sensível ou eritrósica' não é uma classificação oficial, embora a sensibilidade seja uma característica que pode estar presente em qualquer tipo de pele.",
      difficulty: "Médio",
      subject: "Tipos de Pele",
      type: "multiple-choice"
    },
    {
      id: 8,
      text: "Explique brevemente como funciona o processo de lipogênese e lipólise no corpo humano.",
      correctAnswerText: "A lipogênese é o processo de armazenamento de energia, onde o excesso de energia é convertido em triglicerídeos e armazenado nos adipócitos. A lipólise é o processo de liberação de energia, onde os triglicerídeos são quebrados em ácidos graxos e glicerol para serem utilizados como combustível por outros tecidos e órgãos do corpo.",
      explanation: "A lipogênese é o processo anabólico de armazenamento de energia, convertendo excesso calórico em triglicerídeos dentro dos adipócitos. A lipólise é o processo catabólico, onde enzimas como a lipase hormônio-sensível quebram os triglicerídeos em ácidos graxos e glicerol, que são liberados na corrente sanguínea para serem utilizados como fonte de energia por diversos tecidos.",
      difficulty: "Médio",
      subject: "Lipólise",
      type: "open-ended",
      keywords: ["lipogênese", "lipólise", "armazenamento", "energia", "triglicerídeos", "adipócitos", "quebra", "ácidos graxos", "glicerol", "combustível"]
    },
    {
      id: 9,
      text: "O que são os óstios na pele?",
      options: [
        "Pequenas feridas na pele",
        "Folículos pilosos",
        "Orifícios pilossebáceos",
        "Glândulas sudoríparas"
      ],
      correctAnswer: 2,
      explanation: "Os óstios são os orifícios pilossebáceos, ou seja, as aberturas dos folículos pilosos na superfície da pele. Sua aparência e tamanho variam de acordo com o tipo de pele.",
      difficulty: "Médio",
      subject: "Anatomia da Pele",
      type: "multiple-choice"
    },
    {
      id: 10,
      text: "Qual tipo de pele apresenta óstios dilatados e superfície untuosa e úmida?",
      options: [
        "Pele normal",
        "Pele seca",
        "Pele oleosa",
        "Pele mista"
      ],
      correctAnswer: 2,
      explanation: "A pele lipídica ou oleosa caracteriza-se pela hipersecreção sebácea, o que resulta em óstios dilatados e uma superfície untuosa e úmida. O aspecto é brilhante, com tendência a lesões como comedões, pápulas e pústulas.",
      difficulty: "Fácil",
      subject: "Tipos de Pele",
      type: "multiple-choice"
    },
    {
      id: 11,
      text: "Em qual região da pele mista ocorre um desequilíbrio com aumento da secreção sebácea?",
      options: [
        "Zona U (queixo e mandíbula)",
        "Zona T (região frontal, nariz e mento)",
        "Zona D (região dorsal)",
        "Zona C (região das bochechas)"
      ],
      correctAnswer: 1,
      explanation: "Na pele mista, ocorre um desequilíbrio na zona T (região frontal, nariz e mento), com aumento da secreção sebácea nessa região e presença de comedões. As laterais da face tendem a ser normais ou desidratadas.",
      difficulty: "Médio",
      subject: "Tipos de Pele",
      type: "multiple-choice"
    },
    {
      id: 12,
      text: "O que é a Classificação de Fitzpatrick?",
      options: [
        "Uma classificação dos tipos de melanócitos",
        "Uma classificação dos fototipos cutâneos baseada na reatividade da pele à luz solar",
        "Uma classificação das discromias cutâneas",
        "Uma classificação das doenças dermatológicas"
      ],
      correctAnswer: 1,
      explanation: "A Classificação de Fitzpatrick é a mais utilizada para o estabelecimento do fototipo cutâneo. Ela classifica a pele em seis fototipos, a partir da capacidade de cada pessoa em se bronzear, assim como a sensibilidade e vermelhidão quando exposta ao sol.",
      difficulty: "Médio",
      subject: "Classificação de Fitzpatrick",
      type: "multiple-choice"
    },
    {
      id: 13,
      text: "Quais são os dois tipos de melanina presentes na pele humana?",
      options: [
        "Eumelanina e feomelanina",
        "Melanina A e melanina B",
        "Melanina clara e melanina escura",
        "Promelanina e pós-melanina"
      ],
      correctAnswer: 0,
      explanation: "Existem dois tipos de melanina: eumelanina (presente em indivíduos brancos, amarelos, mulatos e negros) e feomelanina (presente em indivíduos com cabelo claro ou ruivo, pele branca com efélides e olhos claros).",
      difficulty: "Médio",
      subject: "Anatomia da Pele",
      type: "multiple-choice"
    },
    {
      id: 14,
      text: "Qual é a principal diferença entre os processos de lipogênese e lipólise?",
      options: [
        "Lipogênese ocorre apenas no fígado, enquanto lipólise ocorre apenas no tecido adiposo",
        "Lipogênese é o processo de armazenamento de energia, enquanto lipólise é o processo de liberação de energia",
        "Lipogênese é um processo anabólico, enquanto lipólise é um processo exclusivamente aeróbico",
        "Lipogênese requer insulina, enquanto lipólise requer apenas glucagon"
      ],
      correctAnswer: 1,
      explanation: "A lipogênese é o processo de armazenamento de energia, onde o excesso de energia é convertido em triglicerídeos e armazenado nos adipócitos. A lipólise, por outro lado, é o processo de liberação de energia, onde os triglicerídeos são quebrados em ácidos graxos e glicerol para serem utilizados como 'combustível' por outros tecidos e órgãos do corpo.",
      difficulty: "Médio",
      subject: "Lipólise",
      type: "multiple-choice"
    },
    {
      id: 15,
      text: "Qual enzima é essencial para a lipólise e sua deficiência pode estar relacionada ao acúmulo de gordura nas células?",
      options: [
        "Insulina",
        "Glucagon",
        "AMPc (adenosina monofosfato cíclico)",
        "Lipase hormônio-sensível"
      ],
      correctAnswer: 2,
      explanation: "O AMPc (adenosina monofosfato cíclico) é uma enzima essencial para a lipólise. A utilização de gorduras no organismo depende da presença dessa enzima, que é liberada na célula adiposa pela atividade mitocondrial. O acúmulo de gordura nas células pode estar relacionado à produção insuficiente de AMPc para degradar a gordura acumulada.",
      difficulty: "Difícil",
      subject: "Lipólise",
      type: "multiple-choice"
    },
    {
      id: 16,
      text: "Além da lipólise, em quais outros processos metabólicos o AMPc desempenha um papel regulador?",
      options: [
        "Apenas na síntese proteica",
        "Apenas na gliconeogênese",
        "Glicogenólise, reabsorção de água e contração muscular",
        "Apenas na produção de bile"
      ],
      correctAnswer: 2,
      explanation: "Além de influenciar a lipólise, o AMPc desempenha um papel regulador em diversos outros processos metabólicos, incluindo a glicogenólise (quebra do glicogênio), a reabsorção de água e a contração muscular.",
      difficulty: "Difícil",
      subject: "Lipólise",
      type: "multiple-choice"
    },
    {
      id: 17,
      text: "Como o sistema nervoso simpático está relacionado à lipólise?",
      options: [
        "Ele inibe a lipólise através da ação de receptores α-adrenérgicos",
        "Ele estimula a lipólise através da ação de receptores β-adrenérgicos",
        "Ele não tem relação direta com a lipólise",
        "Ele apenas regula a temperatura corporal, não afetando o metabolismo"
      ],
      correctAnswer: 1,
      explanation: "O sistema nervoso simpático, ao ser ativado, estimula a lipólise através da ação de receptores β-adrenérgicos, que por sua vez induzem a ação da enzima lipase hormônio-sensível (LHS).",
      difficulty: "Difícil",
      subject: "Lipólise",
      type: "multiple-choice"
    },
    {
      id: 18,
      text: "Qual é a principal função dos linfonodos no sistema linfático?",
      options: [
        "Produção de linfa",
        "Armazenamento de gordura",
        "Filtração da linfa e remoção de detritos e patógenos",
        "Produção de células sanguíneas"
      ],
      correctAnswer: 2,
      explanation: "A principal função dos linfonodos é filtrar a linfa, removendo detritos e patógenos. Eles atuam como filtros de água que eliminam impurezas como bactérias, vírus, células danificadas e outros resíduos.",
      difficulty: "Fácil",
      subject: "Sistema Linfático",
      type: "multiple-choice"
    },
    {
      id: 19,
      text: "Aproximadamente quantos linfonodos existem no corpo humano e em qual região há maior concentração?",
      options: [
        "Cerca de 100 linfonodos, com maior concentração na região abdominal",
        "Cerca de 200 linfonodos, com maior concentração na região pélvica",
        "Cerca de 400 linfonodos, com maior concentração na região do pescoço",
        "Cerca de 600 linfonodos, com maior concentração na região torácica"
      ],
      correctAnswer: 2,
      explanation: "Existem cerca de 400 linfonodos no corpo humano, com uma concentração maior na região do pescoço. Esse dado é importante para a prática de técnicas de drenagem linfática.",
      difficulty: "Médio",
      subject: "Sistema Linfático",
      type: "multiple-choice"
    },
    {
      id: 20,
      text: "Quais são os dois principais ductos que retornam a linfa à circulação sanguínea?",
      options: [
        "Ducto torácico e ducto linfático direito",
        "Ducto linfático superior e ducto linfático inferior",
        "Ducto aferente e ducto eferente",
        "Ducto venoso e ducto arterial"
      ],
      correctAnswer: 0,
      explanation: "Toda linfa do organismo acaba retornando ao sistema vascular sanguíneo através de dois grandes troncos: o ducto torácico e o ducto linfático direito.",
      difficulty: "Médio",
      subject: "Sistema Linfático",
      type: "multiple-choice"
    },
    {
      id: 21,
      text: "Quais regiões do corpo são drenadas pelo ducto linfático direito?",
      options: [
        "Todo o lado direito do corpo",
        "Lado direito da cabeça, pescoço e tórax, membro superior direito, pulmão direito, lado direito do coração e face diafragmática do fígado",
        "Apenas o membro superior direito",
        "Todo o hemicorpo direito e o membro inferior esquerdo"
      ],
      correctAnswer: 1,
      explanation: "O ducto linfático direito conduz a linfa para a circulação sanguínea nas seguintes regiões do corpo: lado direito da cabeça, pescoço e tórax, membro superior direito, pulmão direito, lado direito do coração e face diafragmática do fígado.",
      difficulty: "Difícil",
      subject: "Sistema Linfático",
      type: "multiple-choice"
    },
    {
      id: 22,
      text: "O que explica a formação da linfa de acordo com a hipótese de Starling?",
      options: [
        "A linfa é formada exclusivamente pela secreção das células epiteliais",
        "A linfa é formada pela transformação direta do sangue em linfa",
        "A linfa é formada pelo equilíbrio entre filtração e reabsorção nas terminações capilares",
        "A linfa é formada pela transformação do líquido cerebrospinal"
      ],
      correctAnswer: 2,
      explanation: "A formação da linfa e seu transporte podem ser explicados pela hipótese de Starling sobre o equilíbrio entre filtração e reabsorção nas terminações capilares. As forças de Starling demonstram que, em situações fisiológicas, há um equilíbrio entre a filtração (dependente da pressão hidrostática) e a reabsorção (dependente da pressão oncótica).",
      difficulty: "Difícil",
      subject: "Sistema Linfático",
      type: "multiple-choice"
    },
    {
      id: 23,
      text: "Quanto líquido é filtrado e reabsorvido pelos capilares a cada minuto em condições normais?",
      options: [
        "Filtrado: 5ml, Reabsorvido: 5ml",
        "Filtrado: 10ml, Reabsorvido: 9ml",
        "Filtrado: 15ml, Reabsorvido: 10ml",
        "Filtrado: 20ml, Reabsorvido: 18ml"
      ],
      correctAnswer: 1,
      explanation: "Em condições normais, cerca de 10ml de líquido são filtrados a cada minuto (dependendo da pressão hidrostática) e aproximadamente 9ml são reabsorvidos (dependendo da pressão oncótica). O 1ml restante é drenado pelo sistema linfático.",
      difficulty: "Médio",
      subject: "Sistema Linfático",
      type: "multiple-choice"
    },
    {
      id: 24,
      text: "Qual é a principal proteína responsável pela pressão oncótica que 'puxa' o líquido de volta para os vasos sanguíneos?",
      options: [
        "Hemoglobina",
        "Albumina",
        "Fibrinogênio",
        "Globulina"
      ],
      correctAnswer: 1,
      explanation: "A principal proteína que exerce a função de pressão oncótica é a albumina. Ela 'puxa' o líquido que foi filtrado para o vaso novamente devido às suas propriedades osmóticas.",
      difficulty: "Médio",
      subject: "Sistema Linfático",
      type: "multiple-choice"
    },
    {
      id: 25,
      text: "Quais são as forças que impulsionam o fluxo linfático?",
      options: [
        "Apenas o bombeamento cardíaco",
        "Apenas a contração muscular esquelética",
        "Força da gravidade, contrações musculares, pulsação das artérias, peristaltismo visceral e movimentos respiratórios",
        "Apenas a diferença de pressão entre os vasos linfáticos"
      ],
      correctAnswer: 2,
      explanation: "As forças que impulsionam o fluxo linfático incluem a força da gravidade, as contrações musculares, a pulsação das artérias próximas aos vasos, o peristaltismo visceral e os movimentos respiratórios. A contração muscular comprime os troncos linfáticos, e o vácuo parcial na caixa torácica facilita o avanço do fluxo linfático.",
      difficulty: "Médio",
      subject: "Sistema Linfático",
      type: "multiple-choice"
    },
    {
      id: 26,
      text: "O que é o edema e como ele se forma?",
      options: [
        "É uma inflamação dos vasos linfáticos causada por infecção",
        "É um acúmulo anormal de fluido no espaço intersticial devido a um desequilíbrio entre filtração e reabsorção",
        "É uma condição genética que causa malformação dos vasos linfáticos",
        "É o endurecimento da pele devido à exposição prolongada ao sol"
      ],
      correctAnswer: 1,
      explanation: "O edema é definido como o acúmulo anormal de fluido no espaço intersticial. Ele representa um desequilíbrio entre os processos de filtração e reabsorção de líquidos nos capilares, onde a filtração excede a reabsorção e a capacidade de drenagem linfática.",
      difficulty: "Fácil",
      subject: "Sistema Linfático",
      type: "multiple-choice"
    },
    {
      id: 27,
      text: "O que é o linfedema e como ele difere de outros tipos de edema?",
      options: [
        "É um edema causado exclusivamente por infecções bacterianas",
        "É um tipo específico de edema causado por uma insuficiência do sistema linfático",
        "É um edema transitório que ocorre apenas durante o exercício físico",
        "É um edema que afeta apenas os membros superiores"
      ],
      correctAnswer: 1,
      explanation: "O linfedema é um tipo específico de edema causado por uma insuficiência do sistema linfático. Ele ocorre quando a carga linfática (a quantidade de líquido a ser drenado) ultrapassa o débito linfático (a capacidade de drenagem do sistema).",
      difficulty: "Médio",
      subject: "Sistema Linfático",
      type: "multiple-choice"
    },
    {
      id: 28,
      text: "Quais são as possíveis causas do linfedema?",
      options: [
        "Apenas traumas físicos diretos aos linfonodos",
        "Apenas infecções parasitárias como a filariose",
        "Câncer, ressecção cirúrgica de gânglios linfáticos, filariose, obesidade e hipotireoidismo grave",
        "Apenas causas genéticas"
      ],
      correctAnswer: 2,
      explanation: "As causas do linfedema incluem câncer, ressecção cirúrgica de gânglios linfáticos (linfadenectomia), filariose, obesidade e hipotireoidismo grave. Cada uma dessas condições pode comprometer a função do sistema linfático, levando ao acúmulo de líquido nos tecidos.",
      difficulty: "Médio",
      subject: "Sistema Linfático",
      type: "multiple-choice"
    },
    {
      id: 29,
      text: "Como funciona a tecnologia de Radiofrequência na fisioterapia dermatofuncional?",
      options: [
        "Emite ondas sonoras que causam vibração nos tecidos",
        "Emite ondas de energia de alta frequência que promovem movimentação das moléculas de água e geram aquecimento controlado",
        "Emite radiação ultravioleta que estimula a produção de melanina",
        "Emite pulsos elétricos que causam contração muscular involuntária"
      ],
      correctAnswer: 1,
      explanation: "A Radiofrequência emite ondas de energia de alta frequência que, ao entrarem em contato com as camadas mais profundas da pele, promovem uma rápida movimentação das moléculas de água, gerando um aquecimento controlado. Esse aquecimento provoca a contração das fibras de colágeno já existentes e estimula a neocolagênese.",
      difficulty: "Médio",
      subject: "Eletroterapia",
      type: "multiple-choice"
    },
    {
      id: 30,
      text: "Qual faixa de temperatura é ideal para estimular a neocolagênese durante o tratamento com Radiofrequência?",
      options: [
        "35°C a 37°C",
        "37°C a 38°C",
        "40°C a 42°C",
        "45°C a 47°C"
      ],
      correctAnswer: 2,
      explanation: "Temperaturas mais altas (40-42°C) estimulam a síntese de colágeno (neocolagênese), sendo ideais para tratamentos de flacidez. Essa faixa de temperatura desencadeia uma série de reações fisiológicas que levam à vasodilatação e estimulam a formação de novo colágeno.",
      difficulty: "Médio",
      subject: "Eletroterapia",
      type: "multiple-choice"
    },
    {
      id: 31,
      text: "Qual a diferença entre aplicadores monopolar e bipolar na Radiofrequência?",
      options: [
        "Monopolar atinge apenas a epiderme, bipolar atinge a derme",
        "Monopolar atinge profundidades maiores (até 6mm), bipolar atinge profundidades menores (até 2mm)",
        "Monopolar é mais doloroso, bipolar é completamente indolor",
        "Monopolar requer o uso de gel condutor, bipolar dispensa o uso de gel"
      ],
      correctAnswer: 1,
      explanation: "O aplicador monopolar atinge profundidades maiores (até 6mm), sendo ideal para tratar áreas com maior concentração de gordura. Já o aplicador bipolar atinge profundidades menores (até 2mm), sendo mais indicado para tecidos mais superficiais.",
      difficulty: "Difícil",
      subject: "Eletroterapia",
      type: "multiple-choice"
    },
    {
      id: 32,
      text: "Qual afirmação sobre a Eletrolipólise está INCORRETA?",
      options: [
        "Utiliza agulhas finas associadas a uma corrente de baixa frequência",
        "Promove a lipólise por estímulo das terminações nervosas simpáticas",
        "É contraindicada para pacientes com marcapasso",
        "Deve ser utilizada com frequência de 100 Hz para resultados ideais"
      ],
      correctAnswer: 3,
      explanation: "A frequência utilizada na Eletrolipólise varia de 25 Hz a 50 Hz, não 100 Hz. Na Medicina Tradicional Chinesa, utiliza-se uma frequência de 300 Hz, mas não para a eletrolipólise convencional.",
      difficulty: "Difícil",
      subject: "Eletroterapia",
      type: "multiple-choice"
    },
    {
      id: 33,
      text: "O que é a Corrente Russa e qual sua principal característica?",
      options: [
        "Uma corrente de baixa frequência que estimula a lipólise",
        "Uma corrente alternada simétrica, sinusoidal, com frequência de 2500 Hz, utilizada para fins excitatórios na musculatura",
        "Uma corrente direta que promove a vasodilatação",
        "Uma corrente infravermelho que aquece os tecidos profundos"
      ],
      correctAnswer: 1,
      explanation: "A Corrente Russa é uma corrente alternada simétrica, sinusoidal, com frequência de 2500 Hz, utilizada para fins excitatórios na musculatura. Ela estimula o neurônio motor, produzindo contrações musculares controladas.",
      difficulty: "Médio",
      subject: "Eletroterapia",
      type: "multiple-choice"
    },
    {
      id: 34,
      text: "Qual relação ideal entre o tempo ON e o tempo OFF na aplicação da Corrente Russa para evitar fadiga muscular?",
      options: [
        "Tempo ON igual ao tempo OFF",
        "Tempo ON duas vezes maior que o tempo OFF",
        "Tempo ON metade do tempo OFF (1:2)",
        "Não importa a relação, desde que a intensidade seja baixa"
      ],
      correctAnswer: 2,
      explanation: "O ideal é que a relação tempo ON/tempo OFF seja de 1s/2s para evitar a fadiga muscular. Se o músculo contrair por 3 segundos, ele deve descansar por 6 segundos. O tempo OFF deve ser o dobro do tempo ON.",
      difficulty: "Médio",
      subject: "Eletroterapia",
      type: "multiple-choice"
    },
    {
      id: 35,
      text: "Qual a diferença entre fibras musculares Tipo I (vermelhas) e Tipo II (brancas) em relação à frequência ideal de estimulação na Corrente Russa?",
      options: [
        "Tipo I: 20-30 Hz, Tipo II: 80 Hz (ideal)",
        "Tipo I: 80 Hz, Tipo II: 20-30 Hz",
        "Tipo I e II: ambas 50 Hz",
        "Tipo I: 10 Hz, Tipo II: 200 Hz"
      ],
      correctAnswer: 0,
      explanation: "As fibras Tipo I (vermelhas ou tônicas) respondem melhor a frequências mais baixas (20-30 Hz), enquanto as fibras Tipo II (brancas ou fásicas) respondem melhor a frequências mais altas, sendo 80 Hz a frequência ideal (podendo variar de 40 a 150 Hz).",
      difficulty: "Difícil",
      subject: "Eletroterapia",
      type: "multiple-choice"
    },
    {
      id: 36,
      text: "Qual a pressão negativa adequada para o tratamento de estrias na Vacuoterapia?",
      options: [
        "-100 mmHg a -200 mmHg",
        "-200 mmHg a -300 mmHg",
        "-300 mmHg a -600 mmHg",
        "-600 mmHg a -900 mmHg"
      ],
      correctAnswer: 2,
      explanation: "Para o tratamento de estrias com Vacuoterapia, a pressão negativa adequada varia de -300 mmHg a -600 mmHg.",
      difficulty: "Médio",
      subject: "Eletroterapia",
      type: "multiple-choice"
    },
    {
      id: 37,
      text: "O que é o Peeling de Diamante e como ele funciona?",
      options: [
        "Um tratamento químico que remove as camadas superiores da pele",
        "Uma técnica que utiliza microdermoabrasão com ponteiras diamantadas e pressão negativa",
        "Um tratamento a laser que vaporiza as células mortas da pele",
        "Uma técnica manual que utiliza cristais de diamante para esfoliar a pele"
      ],
      correctAnswer: 1,
      explanation: "O Peeling de Diamante realiza uma microdermoabrasão por meio de diferentes ponteiras diamantadas de granulometrias. Com uma pressão negativa, a pele é sugada e o terapeuta realiza movimentos com a manopla acoplada à pele, para promover o lixamento dela.",
      difficulty: "Médio",
      subject: "Eletroterapia",
      type: "multiple-choice"
    },
    {
      id: 38,
      text: "Quais são os tipos de camadas na epiderme, do mais superficial para o mais profundo?",
      options: [
        "Córnea, granulosa, espinhosa, lúcida, basal",
        "Córnea, lúcida, granulosa, espinhosa, basal",
        "Basal, espinhosa, granulosa, lúcida, córnea",
        "Basal, espinhosa, granulosa, córnea, lúcida"
      ],
      correctAnswer: 1,
      explanation: "As camadas da epiderme, do mais superficial para o mais profundo, são: camada córnea, camada lúcida (presente apenas em áreas de pele espessa), camada granulosa, camada espinhosa e camada basal.",
      difficulty: "Difícil",
      subject: "Anatomia da Pele",
      type: "multiple-choice"
    },
    {
      id: 39,
      text: "Qual processo está associado à descamação e renovação da pele?",
      options: [
        "Melanogênese",
        "Lipogênese",
        "Queratinização",
        "Angiogênese"
      ],
      correctAnswer: 2,
      explanation: "O processo de queratinização está associado à descamação e renovação da pele. Ele envolve a proliferação de queratinócitos no estrato basal, a diferenciação dessas células à medida que migram para a superfície, e a descamação das células mortas e queratinizadas da superfície da pele.",
      difficulty: "Médio",
      subject: "Anatomia da Pele",
      type: "multiple-choice"
    },
    {
      id: 40,
      text: "Qual componente da derme é responsável por conferir elasticidade à pele?",
      options: [
        "Colágeno",
        "Elastina",
        "Ácido hialurônico",
        "Fibronectina"
      ],
      correctAnswer: 1,
      explanation: "A elastina é o componente da derme responsável por conferir elasticidade à pele, permitindo que ela volte à sua forma original após ser esticada.",
      difficulty: "Médio",
      subject: "Anatomia da Pele",
      type: "multiple-choice"
    },
    {
      id: 41,
      text: "Qual é a composição do manto hidrolipídico e qual sua função?",
      options: [
        "Água e proteínas; proteger contra infecções",
        "Água e sebo; hidratar a pele e proteger contra bactérias",
        "Melanina e água; proteger contra radiação UV",
        "Colágeno e elastina; manter a firmeza da pele"
      ],
      correctAnswer: 1,
      explanation: "O manto hidrolipídico é composto por água e sebo (secreções sebáceas). Sua função é hidratar a pele e formar uma barreira protetora contra a entrada de bactérias e outros microorganismos, além de impedir a perda excessiva de água.",
      difficulty: "Médio",
      subject: "Anatomia da Pele",
      type: "multiple-choice"
    },
    {
      id: 42,
      text: "Quais fatores podem afetar a saúde da pele?",
      options: [
        "Apenas fatores genéticos",
        "Apenas fatores ambientais",
        "Apenas hábitos alimentares",
        "Clima, envelhecimento, hormônios, alimentação, sol, estresse, alterações digestivas e uso indevido de cosméticos"
      ],
      correctAnswer: 3,
      explanation: "Diversos fatores podem afetar a saúde da pele, como clima, envelhecimento, hormônios, alimentação, sol, estresse, alterações digestivas e uso indevido de cosméticos. Todos esses fatores podem influenciar o equilíbrio e a aparência da pele.",
      difficulty: "Fácil",
      subject: "Anatomia da Pele",
      type: "multiple-choice"
    },
    {
      id: 43,
      text: "O que são discromias?",
      options: [
        "Alterações na textura da pele",
        "Alterações na espessura da pele",
        "Modificações da cor natural da pele",
        "Alterações na elasticidade da pele"
      ],
      correctAnswer: 2,
      explanation: "Discromias são modificações da cor natural da pele. Elas compreendem um grupo variado de dermopatias, de origem endógena ou exógena, e podem ser classificadas como hipercromias/hipermelanose, hipocromias/hipomelanose e acromias.",
      difficulty: "Fácil",
      subject: "Discromias",
      type: "multiple-choice"
    },
    {
      id: 44,
      text: "Em qual camada da pele os melanócitos são encontrados?",
      options: [
        "Camada córnea",
        "Camada granulosa",
        "Camada basal",
        "Derme papilar"
      ],
      correctAnswer: 2,
      explanation: "Os melanócitos são encontrados principalmente na camada basal da epiderme, que é a camada mais profunda da epiderme. Eles também podem ser encontrados na camada espinhosa ou abaixo da camada basal.",
      difficulty: "Médio",
      subject: "Anatomia da Pele",
      type: "multiple-choice"
    },
    {
      id: 45,
      text: "Qual a diferença entre hipoderme e derme?",
      options: [
        "Não há diferença, são sinônimos",
        "A derme contém fibras de colágeno, a hipoderme não",
        "A hipoderme é mais superficial que a derme",
        "A hipoderme contém células adiposas e não é considerada parte da pele, enquanto a derme é a camada profunda da pele"
      ],
      correctAnswer: 3,
      explanation: "A hipoderme, também conhecida como tela subcutânea, não é mais considerada parte da pele. Ela une a derme aos tecidos e órgãos subjacentes e é composta por células adiposas. A derme, por outro lado, é a camada profunda da pele, composta por tecido conjuntivo, vasos sanguíneos, nervos e anexos cutâneos.",
      difficulty: "Fácil",
      subject: "Anatomia da Pele",
      type: "multiple-choice"
    },
    {
      id: 46,
      text: "Como o tecido adiposo da hipoderme funciona no corpo?",
      options: [
        "Apenas como reserva energética",
        "Apenas como isolante térmico",
        "Como isolante térmico, reserva energética e amortecedor contra choques mecânicos",
        "Apenas como proteção contra a radiação solar"
      ],
      correctAnswer: 2,
      explanation: "O tecido adiposo da hipoderme funciona como isolante térmico, reserva energética e amortecedor contra choques mecânicos. A quantidade de tecido adiposo na hipoderme pode variar dependendo da região do corpo, da idade e do sexo.",
      difficulty: "Médio",
      subject: "Anatomia da Pele",
      type: "multiple-choice"
    },
    {
      id: 47,
      text: "Qual a função principal das glândulas sebáceas na pele?",
      options: [
        "Produzir suor para regular a temperatura corporal",
        "Produzir sebo para lubrificar a pele e os pelos",
        "Produzir hormônios que regulam o crescimento da pele",
        "Produzir enzimas digestivas"
      ],
      correctAnswer: 1,
      explanation: "As glândulas sebáceas produzem sebo, uma substância oleosa que lubrifica a pele e os pelos, mantendo-os macios e impermeáveis à água. O sebo também contém substâncias antimicrobianas que protegem a pele contra infecções.",
      difficulty: "Fácil",
      subject: "Anatomia da Pele",
      type: "multiple-choice"
    },
    {
      id: 48,
      text: "Qual a causa da desidratação da pele oleosa?",
      options: [
        "Excesso de produção de sebo",
        "Uso de sabões ou sabonetes fortes e o uso excessivo de adstringentes",
        "Exposição excessiva ao sol",
        "Baixa umidade do ar"
      ],
      correctAnswer: 1,
      explanation: "A pele oleosa torna-se desidratada pelo uso de sabões ou sabonetes fortes e o uso excessivo de adstringentes, que removem o excesso de oleosidade mas também podem prejudicar a barreira natural da pele, levando à desidratação.",
      difficulty: "Médio",
      subject: "Anatomia da Pele",
      type: "multiple-choice"
    },
    {
      id: 49,
      text: "Como os pigmentos contribuem para a cor da pele?",
      options: [
        "Apenas a melanina determina a cor da pele",
        "A cor da pele é determinada principalmente pela espessura da epiderme",
        "A cor da pele se deve à ação de quatro pigmentos: melanina, carotenos, hemoglobinas oxigenadas e hemoglobinas reduzidas",
        "A cor da pele é determinada apenas pela exposição solar"
      ],
      correctAnswer: 2,
      explanation: "A cor da pele se deve à ação de quatro pigmentos: melanina (marrom), carotenos (amarela), hemoglobinas oxigenadas presentes nos capilares (vermelha) e hemoglobinas reduzidas presentes nas vênulas (azulada).",
      difficulty: "Difícil",
      subject: "Discromias",
      type: "multiple-choice"
    },
    {
      id: 50,
      text: "Qual a relação entre as células de Langerhans e o sistema imunológico da pele?",
      options: [
        "Células de Langerhans produzem queratina para proteger a pele",
        "Células de Langerhans são células dendríticas que atuam como sentinelas, monitorando a presença de antígenos",
        "Células de Langerhans produzem melanina para proteger contra radiação UV",
        "Células de Langerhans são responsáveis pela renovação da pele"
      ],
      correctAnswer: 1,
      explanation: "As células de Langerhans são células dendríticas que atuam como sentinelas do sistema imunológico na pele, monitorando a presença de antígenos e desencadeando respostas imunológicas quando necessário.",
      difficulty: "Difícil",
      subject: "Anatomia da Pele",
      type: "multiple-choice"
    },
    {
      id: 51,
      text: "Como funciona a termorregulação na pele?",
      options: [
        "Apenas através da vasoconstrição em ambientes frios",
        "Apenas através da vasodilatação em ambientes quentes",
        "Através das glândulas sebáceas que produzem sebo para aquecer a pele",
        "Através da vasodilatação/vasoconstrição dos vasos sanguíneos e da produção de suor pelas glândulas sudoríparas"
      ],
      correctAnswer: 3,
      explanation: "A termorregulação na pele ocorre através da vasodilatação/vasoconstrição dos vasos sanguíneos (para liberar ou conservar calor) e da produção de suor pelas glândulas sudoríparas (para reduzir a temperatura através da evaporação).",
      difficulty: "Médio",
      subject: "Anatomia da Pele",
      type: "multiple-choice"
    },
    {
      id: 52,
      text: "Quais são os dois tipos principais de envelhecimento cutâneo?",
      options: [
        "Exógeno e endógeno",
        "Intrínseco e extrínseco",
        "Primário e secundário",
        "Cronológico e patológico"
      ],
      correctAnswer: 1,
      explanation: "Existem dois tipos principais de envelhecimento cutâneo: o intrínseco, que é comum aos órgãos e causado pela idade, sendo mais suave, lento e gradual; e o extrínseco ou fotoenvelhecimento, que ocorre devido aos danos causados pela radiação ultravioleta e outros fatores ambientais.",
      difficulty: "Fácil",
      subject: "Envelhecimento",
      type: "multiple-choice"
    },
    {
      id: 53,
      text: "Quais alterações ocorrem nas fibras colágenas durante o envelhecimento cutâneo?",
      options: [
        "Aumento da elasticidade",
        "Diminuição da quantidade",
        "Engrossamento e redução da flexibilidade",
        "Aumento da capacidade de regeneração"
      ],
      correctAnswer: 2,
      explanation: "No processo de senescência, observa-se engrossamento das fibras colágenas, tornando-as menos flexíveis. Isso contribui para a perda de elasticidade e o aparecimento de rugas na pele envelhecida.",
      difficulty: "Médio",
      subject: "Envelhecimento",
      type: "multiple-choice"
    },
    {
      id: 54,
      text: "Qual dos seguintes NÃO é um fator que acelera o envelhecimento cutâneo?",
      options: [
        "Radiação UV",
        "Tabagismo",
        "Estresse oxidativo",
        "Hidratação adequada"
      ],
      correctAnswer: 3,
      explanation: "A hidratação adequada é um fator que ajuda a prevenir o envelhecimento cutâneo, não a acelerá-lo. Os outros fatores mencionados (radiação UV, tabagismo e estresse oxidativo) são conhecidos por acelerar o processo de envelhecimento da pele.",
      difficulty: "Fácil",
      subject: "Envelhecimento",
      type: "multiple-choice"
    },
    {
      id: 55,
      text: "O que é sarcopenia?",
      options: [
        "Acúmulo excessivo de gordura no tecido muscular",
        "Perda progressiva de massa, força e função muscular relacionada à idade",
        "Inflamação crônica dos tecidos musculares",
        "Aumento anormal do volume muscular"
      ],
      correctAnswer: 1,
      explanation: "A sarcopenia é definida como a perda progressiva de massa, força e função muscular relacionada à idade. É um componente importante do envelhecimento muscular e está associada a uma redução da capacidade funcional e independência.",
      difficulty: "Médio",
      subject: "Envelhecimento",
      type: "multiple-choice"
    },
    {
      id: 56,
      text: "O que são radicais livres e qual sua relação com o envelhecimento?",
      options: [
        "Moléculas estáveis que protegem as células do envelhecimento",
        "Moléculas instáveis com elétrons desemparelhados que podem causar danos celulares e acelerar o envelhecimento",
        "Proteínas que regulam o ciclo celular e previnem o envelhecimento",
        "Enzimas que degradam o colágeno como parte normal do envelhecimento"
      ],
      correctAnswer: 1,
      explanation: "Radicais livres são moléculas instáveis que contêm elétrons desemparelhados, tornando-os altamente reativos. Em excesso, os radicais livres causam estresse oxidativo, que pode levar a danos celulares significativos, incluindo danos ao DNA, degradação de proteínas como colágeno e elastina, e peroxidação lipídica, acelerando assim o processo de envelhecimento.",
      difficulty: "Médio",
      subject: "Envelhecimento",
      type: "multiple-choice"
    },
    {
      id: 57,
      text: "Qual das seguintes não é uma ação da radiofrequência no tratamento do envelhecimento cutâneo?",
      options: [
        "Estimulação da contração das fibras de colágeno existentes",
        "Estímulo à neocolagênese",
        "Aumento da vascularização local",
        "Indução da melanogênese"
      ],
      correctAnswer: 3,
      explanation: "A radiofrequência não induz a melanogênese (produção de melanina). Seus principais efeitos no tratamento do envelhecimento cutâneo incluem a estimulação da contração das fibras de colágeno existentes, o estímulo à produção de novo colágeno (neocolagênese) e o aumento da vascularização local, que favorece a nutrição e oxigenação dos tecidos.",
      difficulty: "Difícil",
      subject: "Envelhecimento",
      type: "multiple-choice"
    },
    {
      id: 58,
      text: "Qual temperatura deve ser atingida durante o tratamento com radiofrequência para estimular a neocolagênese e tratar a flacidez?",
      options: [
        "32°C a 35°C",
        "37°C",
        "40°C",
        "45°C a 47°C"
      ],
      correctAnswer: 2,
      explanation: "Para estimular a neocolagênese e tratar a flacidez, a temperatura ideal durante o tratamento com radiofrequência é de 40°C. Esta temperatura estimula a proteína HSP 47, que por sua vez estimula a produção de colágeno, tonificando a pele.",
      difficulty: "Médio",
      subject: "Envelhecimento",
      type: "multiple-choice"
    },
    {
      id: 59,
      text: "O que é a microcorrente e como ela atua no envelhecimento cutâneo?",
      options: [
        "Uma corrente de alta frequência que causa aquecimento profundo e estimula o colágeno",
        "Uma corrente elétrica de baixa frequência e intensidade que aumenta a produção de ATP e a síntese proteica",
        "Uma corrente que causa contração muscular para fortalecer os músculos faciais",
        "Uma corrente que remove as células mortas da superfície da pele"
      ],
      correctAnswer: 1,
      explanation: "A microcorrente é uma corrente elétrica de baixa frequência e intensidade em miliamperes. Sua principal ação é promover o aumento da produção de ATP (adenosina trifosfato) e, indiretamente, aumentar a síntese proteica devido ao aumento do transporte de aminoácidos. Correntes entre 100 μA e 500 μA podem aumentar o ATP em até 500%, ativando o metabolismo celular e melhorando a tonicidade dos tecidos.",
      difficulty: "Difícil",
      subject: "Envelhecimento",
      type: "multiple-choice"
    },
    {
      id: 60,
      text: "Qual nutriente é um precursor da colina e pode estimular os músculos, melhorando o tônus da pele?",
      options: [
        "Vitamina E",
        "Coenzima Q10",
        "DMAE (dimetilaminoetanol acetamidobenzoato)",
        "Ginkgo Biloba"
      ],
      correctAnswer: 2,
      explanation: "O DMAE (dimetilaminoetanol acetamidobenzoato) é um nutriente natural encontrado em peixes marinhos que pode agir como precursor da colina, aumentando a síntese do neurotransmissor acetilcolina. Isso estimula os músculos, melhorando o tônus da pele, além de apresentar ação antioxidante.",
      difficulty: "Médio",
      subject: "Envelhecimento",
      type: "multiple-choice"
    },
    {
      id: 61,
      text: "Quais são os quatro pigmentos que contribuem para a coloração da pele?",
      correctAnswerText: "Melanina, carotenos, hemoglobinas oxigenadas e hemoglobinas reduzidas",
      explanation: "A coloração da pele é resultado da interação de quatro pigmentos naturais: melanina (marrom), carotenos (amarelo), hemoglobinas oxigenadas presentes nos capilares (vermelha) e hemoglobinas reduzidas presentes nas vênulas (azulada).",
      difficulty: "Médio",
      subject: "Discromias",
      type: "open-ended",
      keywords: ["melanina", "carotenos", "hemoglobinas oxigenadas", "hemoglobinas reduzidas", "pigmentos", "marrom", "amarelo", "vermelha", "azulada"]
    },
    {
      id: 62,
      text: "Quais são os três tipos principais de discromias?",
      options: [
        "Hipertensão, hipotensão e normotensão",
        "Hipercromias, hipocromias e acromias",
        "Epiderme, derme e hipoderme",
        "Melanoma, carcinoma e sarcoma"
      ],
      correctAnswer: 1,
      explanation: "Existem três tipos principais de discromias: hipercromias/hipermelanose (aumento da pigmentação), hipocromias/hipomelanose (diminuição da pigmentação) e acromias (ausência de pigmentação).",
      difficulty: "Fácil",
      subject: "Discromias",
      type: "multiple-choice"
    },
    {
      id: 63,
      text: "O que é melasma?",
      options: [
        "Uma infecção fúngica da pele",
        "Uma mancha hiperpigmentada na face relacionada a alterações hormonais",
        "Uma forma de câncer de pele",
        "Uma reação alérgica a cosméticos"
      ],
      correctAnswer: 1,
      explanation: "O melasma é um tipo de hipercromia caracterizada por manchas marrons na face, relacionadas a alterações hormonais. Quando ocorre durante a gravidez, é chamado de cloasma.",
      difficulty: "Fácil",
      subject: "Discromias",
      type: "multiple-choice"
    },
    {
      id: 64,
      text: "Qual a função da enzima tirosinase na pigmentação da pele?",
      options: [
        "Degradar a melanina existente",
        "Transportar a melanina para os queratinócitos",
        "Catalisar a transformação da tirosina em melanina",
        "Proteger a pele contra os danos da radiação UV"
      ],
      correctAnswer: 2,
      explanation: "A tirosinase é a enzima que catalisa a transformação da tirosina em dopa e, subsequentemente, em dopaquinona. Após a perda de dióxido de carbono, a quinona é convertida em melanina. Portanto, a tirosinase é fundamental para o processo de melanogênese.",
      difficulty: "Médio",
      subject: "Discromias",
      type: "multiple-choice"
    },
    {
      id: 65,
      text: "Qual dos seguintes ativos despigmentantes atua inibindo a tirosinase sem causar fotossensibilização?",
      options: [
        "Hidroquinona",
        "Ácido glicólico",
        "Ácido kójico",
        "Ácido retinoico"
      ],
      correctAnswer: 2,
      explanation: "O ácido kójico inibe a tirosinase, hidrata a pele e não causa fotossensibilização, tornando-o uma opção segura para o tratamento de hiperpigmentações sem o risco aumentado de sensibilidade ao sol.",
      difficulty: "Difícil",
      subject: "Discromias",
      type: "multiple-choice"
    },
    {
      id: 66,
      text: "Por que o uso de fotoproteção é fundamental durante e após tratamentos despigmentantes?",
      options: [
        "Para evitar a desidratação da pele",
        "Para aumentar a eficácia dos ácidos despigmentantes",
        "Para prevenir a recorrência da pigmentação",
        "Para neutralizar o pH da pele"
      ],
      correctAnswer: 2,
      explanation: "O uso de fotoproteção é fundamental durante e após tratamentos despigmentantes para evitar a recorrência da pigmentação. A exposição solar estimula a produção de melanina, podendo anular os resultados do tratamento ou até mesmo piorar a condição inicial.",
      difficulty: "Médio",
      subject: "Discromias",
      type: "multiple-choice"
    },
    {
      id: 67,
      text: "Como a niacinamida (vitamina B3) atua no tratamento das discromias?",
      options: [
        "Destruindo os melanócitos",
        "Inibindo a enzima tirosinase",
        "Inibindo a transferência de melanina dos melanócitos para as células de superfície",
        "Aumentando a descamação da pele"
      ],
      correctAnswer: 2,
      explanation: "A niacinamida (vitamina B3) atua inibindo a transferência de melanina dos melanócitos para as células de superfície (queratinócitos), reduzindo assim a hiperpigmentação visível na pele.",
      difficulty: "Médio",
      subject: "Discromias",
      type: "multiple-choice"
    },
    {
      id: 68,
      text: "Quais fototipos têm maior tendência a desenvolver hiperpigmentação pós-inflamatória?",
      options: [
        "Fototipos I e II (pele muito clara)",
        "Fototipos III e IV (pele morena clara)",
        "Fototipos V e VI (pele morena escura e negra)",
        "Todos os fototipos têm a mesma tendência"
      ],
      correctAnswer: 2,
      explanation: "Fototipos mais escuros (V e VI) têm alta possibilidade de apresentar manchas hiperpigmentadas em áreas expostas e maior tendência a desenvolver hiperpigmentação pós-inflamatória. Isso ocorre devido à maior quantidade e atividade dos melanócitos nessas peles.",
      difficulty: "Difícil",
      subject: "Discromias",
      type: "multiple-choice"
    },
    {
      id: 69,
      text: "O que é a Classificação de Fitzpatrick e qual sua importância na abordagem das discromias?",
      correctAnswerText: "A Classificação de Fitzpatrick é um sistema que classifica a pele em seis fototipos com base na reatividade à luz solar. É importante no tratamento das discromias porque permite personalizar o tratamento conforme a sensibilidade e risco de hiperpigmentação de cada tipo de pele.",
      explanation: "A Classificação de Fitzpatrick é um sistema que categoriza a pele em seis fototipos (I a VI) de acordo com sua reatividade à luz solar e formação de eritema. Esta classificação é fundamental no tratamento das discromias, pois permite adaptar o protocolo de tratamento às necessidades específicas de cada tipo de pele, considerando fatores como risco de hiperpigmentação pós-inflamatória e sensibilidade a diferentes ativos despigmentantes.",
      difficulty: "Difícil",
      subject: "Discromias",
      type: "open-ended",
      keywords: ["classificação", "fitzpatrick", "fototipos", "reatividade", "luz solar", "tratamento", "personalizado", "hiperpigmentação", "sensibilidade", "eritema"]
    },
    {
      id: 70,
      text: "Qual é a importância da hidratação no tratamento das discromias?",
      options: [
        "Apenas para melhorar o conforto do paciente",
        "Para aumentar a penetração dos ativos despigmentantes",
        "Para manter a barreira cutânea saudável e evitar novas alterações de pigmentação",
        "Para estimular a descamação da pele"
      ],
      correctAnswer: 2,
      explanation: "A hidratação é fundamental no tratamento das discromias porque mantém a barreira cutânea saudável, o que ajuda a prevenir novas alterações de pigmentação. Uma pele bem hidratada também responde melhor aos tratamentos despigmentantes, pois facilita a penetração dos ativos e reduz o risco de irritação.",
      difficulty: "Médio",
      subject: "Discromias",
      type: "multiple-choice"
    }
  ];

  // Set up the visibility detector to prevent tab switching/cheating
  useEffect(() => {
    if (started && !examCompleted) {
      const handleVisibilityChange = () => {
        if (document.hidden) {
          toast({
            title: "Atenção!",
            description: "Você saiu da página do exame. O exame foi encerrado.",
            variant: "destructive",
          });
          setExamCompleted(true);
          calculateScore();
        }
      };

      document.addEventListener('visibilitychange', handleVisibilityChange);
      blurListenerRef.current = handleVisibilityChange;

      return () => {
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      };
    }
  }, [started, examCompleted]);

  // Set up the timer
  useEffect(() => {
    if (started && !examCompleted && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            setExamCompleted(true);
            calculateScore();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => {
        if (timerRef.current) {
          clearInterval(timerRef.current);
        }
      };
    }
  }, [started, examCompleted, timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const handleStartExam = () => {
    // Initialize answers array
    const initialAnswers = Array(questions.length).fill(null);
    setSelectedAnswers(initialAnswers);
    const initialOpenEndedAnswers = Array(questions.length).fill("");
    setOpenEndedAnswers(initialOpenEndedAnswers);
    setStarted(true);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleOpenEndedAnswerChange = (answer: string) => {
    const newAnswers = [...openEndedAnswers];
    newAnswers[currentQuestionIndex] = answer;
    setOpenEndedAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
    
    // If it's a multiple-choice question, check if an answer is selected
    if (currentQuestion.type === 'multiple-choice' && selectedAnswers[currentQuestionIndex] === null) {
      toast({
        title: "Atenção!",
        description: "Por favor, selecione uma resposta antes de prosseguir.",
        variant: "destructive",
      });
      return;
    }
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleFinishExam = () => {
    const currentQuestion = questions[currentQuestionIndex];
    
    // If it's a multiple-choice question, check if an answer is selected
    if (currentQuestion.type === 'multiple-choice' && selectedAnswers[currentQuestionIndex] === null) {
      toast({
        title: "Atenção!",
        description: "Por favor, selecione uma resposta para esta questão antes de finalizar.",
        variant: "destructive",
      });
      return;
    }
    
    setExamCompleted(true);
    calculateScore();
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const evaluateOpenEndedAnswer = (userAnswer: string, question: Question): 'correct' | 'partial' | 'incorrect' => {
    if (!userAnswer.trim()) return 'incorrect';
    
    const keywords = question.keywords || [];
    const userAnswerLower = userAnswer.toLowerCase();
    
    let matchCount = 0;
    for (const keyword of keywords) {
      if (userAnswerLower.includes(keyword.toLowerCase())) {
        matchCount++;
      }
    }
    
    const matchRatio = matchCount / keywords.length;
    
    if (matchRatio >= 0.7) return 'correct';
    if (matchRatio >= 0.3) return 'partial';
    return 'incorrect';
  };

  const calculateScore = () => {
    let correct = 0;
    let incorrect = 0;
    let partialCorrect = 0;

    questions.forEach((question, index) => {
      if (question.type === 'multiple-choice') {
        if (selectedAnswers[index] === question.correctAnswer) {
          correct++;
        } else if (selectedAnswers[index] !== null) {
          incorrect++;
        }
      } else if (question.type === 'open-ended') {
        const result = evaluateOpenEndedAnswer(openEndedAnswers[index], question);
        if (result === 'correct') correct++;
        else if (result === 'partial') partialCorrect++;
        else if (openEndedAnswers[index].trim() !== '') incorrect++;
      }
    });

    setScore({ correct, incorrect, partialCorrect });
  };

  const handleReviewExam = () => {
    setReviewMode(true);
    setCurrentQuestionIndex(0);
  };

  const handleRestartExam = () => {
    setStarted(false);
    setExamCompleted(false);
    setReviewMode(false);
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setOpenEndedAnswers([]);
    setTimeLeft(90 * 60);
    setScore({ correct: 0, incorrect: 0, partialCorrect: 0 });
  };

  const getDifficultyColor = (difficulty: DifficultyLevel) => {
    switch(difficulty) {
      case 'Fácil':
        return 'text-green-600';
      case 'Médio':
        return 'text-yellow-600';
      case 'Difícil':
        return 'text-red-600';
      default:
        return '';
    }
  };

  const getScorePercentage = () => {
    const total = questions.length;
    const weightedScore = score.correct + (score.partialCorrect * 0.5);
    return Math.round((weightedScore / total) * 100);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {!started ? (
          <Card className="max-w-4xl mx-auto p-8 shadow-lg border-primary/10">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-serif">Prova Online de Fisioterapia Dermatofuncional</h1>
              <p className="text-gray-600 mb-2">Teste seus conhecimentos em Anatomia da Pele, Lipólise, Sistema Linfático, Eletroterapia, Envelhecimento e Discromias</p>
              <p className="text-gray-600">70 questões | 90 minutos | Diferentes níveis de dificuldade</p>
            </div>

            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-md border border-blue-200">
                <h2 className="flex items-center font-semibold text-blue-800 mb-3 text-lg">
                  <FileText size={20} className="mr-2" />
                  Instruções:
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-blue-800">
                  <li>O exame consiste em 70 questões, incluindo questões de múltipla escolha e questões abertas.</li>
                  <li>Você terá 90 minutos para completar o exame.</li>
                  <li>Você não pode sair da página durante o exame - isso encerrará a prova automaticamente.</li>
                  <li>É necessário responder cada questão de múltipla escolha antes de avançar para a próxima.</li>
                  <li>Ao final, você poderá revisar suas respostas e ver as explicações das questões.</li>
                  <li>Este material é complementar e não substitui o material passado em aula.</li>
                </ul>
              </div>

              <div className="flex justify-center">
                <Button
                  size="lg"
                  onClick={handleStartExam}
                  className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 text-lg transition-transform hover:scale-105"
                >
                  <Brain size={20} className="mr-2" />
                  Iniciar Prova
                </Button>
              </div>
            </div>
          </Card>
        ) : (
          <div className="max-w-4xl mx-auto">
            {!examCompleted ? (
              <>
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <span className="font-semibold">Questão {currentQuestionIndex + 1} de {questions.length}</span>
                      <span className={`ml-4 text-sm font-medium ${getDifficultyColor(currentQuestion.difficulty)}`}>
                        {currentQuestion.difficulty}
                      </span>
                      <span className="ml-4 text-sm font-medium text-gray-600">
                        {currentQuestion.subject}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-red-600 font-semibold bg-red-50 px-3 py-1 rounded-full border border-red-100">
                      <Clock size={18} className="animate-pulse" />
                      <span>{formatTime(timeLeft)}</span>
                    </div>
                  </div>

                  <Progress value={(currentQuestionIndex + 1) / questions.length * 100} className="mb-6 h-2" />

                  <Card className="p-6 mb-6 shadow-sm border-primary/10">
                    <h2 className="text-xl font-semibold mb-6 text-gray-800">{currentQuestion.text}</h2>
                    
                    {currentQuestion.type === 'multiple-choice' && currentQuestion.options ? (
                      <RadioGroup
                        value={selectedAnswers[currentQuestionIndex]?.toString() || ""}
                        onValueChange={(value) => handleAnswerSelect(parseInt(value))}
                        className="space-y-3"
                      >
                        {currentQuestion.options.map((option, index) => (
                          <div key={index} className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200">
                            <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                            <Label htmlFor={`option-${index}`} className="flex-grow cursor-pointer">{option}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    ) : (
                      <div className="space-y-3">
                        <p className="text-sm text-gray-500 mb-2">Digite sua resposta na área abaixo. Tente incluir os principais conceitos relacionados à questão.</p>
                        <Textarea 
                          value={openEndedAnswers[currentQuestionIndex] || ''} 
                          onChange={(e) => handleOpenEndedAnswerChange(e.target.value)}
                          placeholder="Digite sua resposta aqui..."
                          className="min-h-[120px] resize-y"
                        />
                      </div>
                    )}
                  </Card>

                  <div className="flex justify-between">
                    <Button
                      onClick={handlePreviousQuestion}
                      disabled={currentQuestionIndex === 0}
                      variant="outline"
                      className="transition-colors hover:bg-primary/10"
                    >
                      Anterior
                    </Button>

                    <div className="flex gap-2">
                      {currentQuestionIndex === questions.length - 1 ? (
                        <Button onClick={handleFinishExam} className="bg-primary hover:bg-primary/90 transition-transform hover:scale-105">
                          Finalizar Prova
                        </Button>
                      ) : (
                        <Button onClick={handleNextQuestion} className="bg-primary hover:bg-primary/90 transition-transform hover:scale-105">
                          Próxima
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                  <h3 className="text-lg font-semibold mb-4 text-gray-700">Navegação Rápida</h3>
                  <div className="grid grid-cols-10 gap-2">
                    {questions.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentQuestionIndex(index)}
                        className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors
                          ${index === currentQuestionIndex ? 'bg-primary text-white' : 
                            questions[index].type === 'multiple-choice' ? 
                              (selectedAnswers[index] !== null ? 'bg-primary/20 text-primary' : 'bg-gray-200 text-gray-700') :
                              (openEndedAnswers[index] ? 'bg-primary/20 text-primary' : 'bg-gray-200 text-gray-700')}`}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <Card className="p-8 shadow-lg border-primary/10">
                {!reviewMode ? (
                  <div className="text-center">
                    <div className="mb-8 flex flex-col items-center">
                      <Trophy size={60} className="text-yellow-500 mb-4" />
                      <h2 className="text-3xl font-bold text-primary mb-4 font-serif">Prova Concluída!</h2>
                      <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-bold text-lg">
                        <span>Sua pontuação: </span>
                        <span className="ml-2 text-2xl text-primary">{getScorePercentage()}%</span>
                      </div>
                    </div>
                    
                    <div className="mb-10 max-w-md mx-auto">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-green-600 font-semibold flex items-center">
                          <CheckCircle size={20} className="mr-2" />
                          Corretas:
                        </span>
                        <span className="text-xl font-bold">{score.correct}</span>
                      </div>
                      <Progress value={(score.correct / questions.length) * 100} className="h-3 mb-4 bg-gray-200" />

                      <div className="flex justify-between items-center mb-2">
                        <span className="text-yellow-600 font-semibold flex items-center">
                          <CheckCircle size={20} className="mr-2" />
                          Parcialmente corretas:
                        </span>
                        <span className="text-xl font-bold">{score.partialCorrect}</span>
                      </div>
                      <Progress value={(score.partialCorrect / questions.length) * 100} className="h-3 mb-4 bg-gray-200" />

                      <div className="flex justify-between items-center mb-2">
                        <span className="text-red-600 font-semibold flex items-center">
                          <AlertTriangle size={20} className="mr-2" />
                          Incorretas:
                        </span>
                        <span className="text-xl font-bold">{score.incorrect}</span>
                      </div>
                      <Progress value={(score.incorrect / questions.length) * 100} className="h-3 mb-4 bg-gray-200" />

                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600 font-semibold">Não respondidas:</span>
                        <span className="text-xl font-bold">{questions.length - score.correct - score.incorrect - score.partialCorrect}</span>
                      </div>
                      <Progress 
                        value={((questions.length - score.correct - score.incorrect - score.partialCorrect) / questions.length) * 100} 
                        className="h-3 bg-gray-200" 
                      />
                    </div>

                    <div className="flex justify-center gap-4">
                      <Button onClick={handleReviewExam} className="bg-primary hover:bg-primary/90 transition-transform hover:scale-105">
                        Revisar Questões
                      </Button>
                      <Button onClick={handleRestartExam} variant="outline" className="transition-colors hover:bg-primary/10">
                        Reiniciar Prova
                      </Button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">Questão {currentQuestionIndex + 1}: Revisão</h2>
                        <div className="flex gap-2">
                          <span className={getDifficultyColor(currentQuestion.difficulty)}>
                            {currentQuestion.difficulty}
                          </span>
                          <span className="text-gray-600">|</span>
                          <span className="text-gray-600">{currentQuestion.subject}</span>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h3 className="font-medium text-lg mb-3">{currentQuestion.text}</h3>
                        
                        {currentQuestion.type === 'multiple-choice' && currentQuestion.options ? (
                          <div className="space-y-2">
                            {currentQuestion.options.map((option, index) => (
                              <div 
                                key={index}
                                className={`p-3 rounded-md ${
                                  index === currentQuestion.correctAnswer 
                                    ? 'bg-green-100 border-green-300 border' 
                                    : selectedAnswers[currentQuestionIndex] === index && selectedAnswers[currentQuestionIndex] !== currentQuestion.correctAnswer
                                      ? 'bg-red-100 border-red-300 border'
                                      : 'bg-gray-50'
                                }`}
                              >
                                {option}
                                {index === currentQuestion.correctAnswer && (
                                  <span className="ml-2 text-green-600 font-medium">(Resposta correta)</span>
                                )}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="mb-4 space-y-4">
                            <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                              <h4 className="font-semibold mb-2">Sua resposta:</h4>
                              <p className="text-gray-700">{openEndedAnswers[currentQuestionIndex] || "Sem resposta"}</p>
                            </div>
                            
                            <div className="bg-green-50 p-4 rounded-md border border-green-200">
                              <h4 className="font-semibold text-green-700 mb-2">Resposta ideal:</h4>
                              <p className="text-green-700">{currentQuestion.correctAnswerText}</p>
                            </div>
                            
                            <div className="bg-blue-50 p-4 rounded-md border border-blue-200">
                              <h4 className="font-semibold text-blue-700 mb-2">Avaliação:</h4>
                              {openEndedAnswers[currentQuestionIndex] ? (
                                <p className="text-blue-700">
                                  {evaluateOpenEndedAnswer(openEndedAnswers[currentQuestionIndex], currentQuestion) === 'correct' 
                                    ? 'Resposta correta! Você incluiu a maioria dos conceitos-chave.' 
                                    : evaluateOpenEndedAnswer(openEndedAnswers[currentQuestionIndex], currentQuestion) === 'partial'
                                      ? 'Resposta parcialmente correta. Você mencionou alguns conceitos importantes, mas faltaram outros.'
                                      : 'Resposta incorreta. Sua resposta não incluiu os conceitos-chave necessários.'}
                                </p>
                              ) : (
                                <p className="text-blue-700">Questão não respondida.</p>
                              )}
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-200">
                        <h4 className="font-semibold text-blue-800 mb-1">Explicação:</h4>
                        <p className="text-blue-800">{currentQuestion.explanation}</p>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button
                        onClick={handlePreviousQuestion}
                        disabled={currentQuestionIndex === 0}
                        variant="outline"
                      >
                        Anterior
                      </Button>

                      <Button
                        onClick={handleRestartExam}
                        variant="outline"
                      >
                        Voltar à Página Inicial
                      </Button>

                      <Button
                        onClick={handleNextQuestion}
                        disabled={currentQuestionIndex === questions.length - 1}
                        className="bg-primary"
                      >
                        Próxima
                      </Button>
                    </div>

                    <div className="mt-8 grid grid-cols-10 gap-2">
                      {questions.map((question, index) => {
                        let bgColor = "bg-gray-200 text-gray-700"; // Default for unanswered
                        
                        if (question.type === 'multiple-choice') {
                          if (selectedAnswers[index] === question.correctAnswer) {
                            bgColor = "bg-green-500 text-white"; // Correct
                          } else if (selectedAnswers[index] !== null) {
                            bgColor = "bg-red-500 text-white"; // Wrong
                          }
                        } else if (question.type === 'open-ended') {
                          const result = evaluateOpenEndedAnswer(openEndedAnswers[index], question);
                          if (result === 'correct') {
                            bgColor = "bg-green-500 text-white"; // Correct
                          } else if (result === 'partial') {
                            bgColor = "bg-yellow-500 text-white"; // Partially correct
                          } else if (openEndedAnswers[index].trim() !== '') {
                            bgColor = "bg-red-500 text-white"; // Wrong
                          }
                        }
                        
                        if (index === currentQuestionIndex) {
                          bgColor = "bg-primary text-white"; // Current question
                        }
                        
                        return (
                          <button
                            key={index}
                            onClick={() => setCurrentQuestionIndex(index)}
                            className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium ${bgColor}`}
                          >
                            {index + 1}
                          </button>
                        );
                      })}
                    </div>
                  </>
                )}
              </Card>
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Exame;
