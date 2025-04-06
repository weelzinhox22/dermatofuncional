
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContentSection from '@/components/ContentSection';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Envelhecimento = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <Navbar />
      
      <main className="container mx-auto px-4 py-6 md:py-12">
        <div className="flex justify-start mb-6">
          <Link to="/">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft size={18} />
              Voltar para a página inicial
            </Button>
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold text-primary mb-8 font-serif">Envelhecimento Cutâneo e Muscular</h1>
        
        <div className="bg-white shadow-md rounded-lg p-6 md:p-8 mb-8">
          <ContentSection className="content-section prose max-w-none">
            <h2>Compreendendo o Envelhecimento</h2>
            <p>O envelhecimento cutâneo é um fenômeno natural, fisiológico, progressivo e irreversível que se inicia desde o nascimento e deve ser encarado como um processo natural. Assim como outros órgãos, a pele sofre alterações ao longo do tempo.</p>
            
            <p>No processo de senescência, observa-se alterações morfológicas como a diminuição da substância fundamental (proteínas), engrossamento das fibras colágenas (tornando-as menos flexíveis) e alterações nas fibras elásticas, além de atrofia do tecido adiposo cutâneo.</p>
            
            <p>Há uma diminuição do número e da função das glândulas sebáceas, a camada córnea torna-se mais permeável e ocorre atrofia dos melanócitos.</p>
            
            <p>Com o envelhecimento, a multiplicação celular diminui, os fibroblastos reduzem sua função, causando desorganização da matriz extracelular e comprometendo a síntese de proteínas importantes como elastina e colágeno, que garantem a elasticidade e resistência da pele.</p>
            
            <h2>Tipos de Envelhecimento Cutâneo</h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 shadow-sm">
                <h3 className="text-xl font-semibold text-primary mb-3">Envelhecimento Intrínseco</h3>
                <p>Comum aos órgãos e causado pela idade, sendo mais suave, lento e gradual.</p>
                <ul className="list-disc ml-5 mt-3 space-y-1">
                  <li>Apresenta palidez e ressecamento</li>
                  <li>Rugas finas</li>
                  <li>Certo grau de flacidez</li>
                  <li>Tumores benignos</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg border border-orange-100 shadow-sm">
                <h3 className="text-xl font-semibold text-primary mb-3">Envelhecimento Extrínseco</h3>
                <p>Também chamado de fotoenvelhecimento, ocorre devido aos danos causados pela radiação ultravioleta.</p>
                <ul className="list-disc ml-5 mt-3 space-y-1">
                  <li>Influenciado por fatores alimentares</li>
                  <li>Consumo de álcool</li>
                  <li>Exposição a produtos químicos e toxinas</li>
                  <li>Principalmente pela irradiação solar</li>
                </ul>
              </div>
            </div>
            
            <h2>Fatores que Aceleram o Envelhecimento</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-primary mb-2">Radiação UV</h3>
                <p>Causa formação de radicais livres, mutações na estrutura do DNA, diminuição na produção de melanina e danos no colágeno e elastina.</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-primary mb-2">Tabagismo</h3>
                <p>Causa vasoconstrição dos vasos sanguíneos, lesão das fibras elásticas, diminuição da síntese de colágeno e formação de radicais livres.</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-primary mb-2">Poluição</h3>
                <p>Estimula lesões pigmentares (melanoses) e alterações na barreira cutânea, desencadeando dermatite atópica.</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-primary mb-2">Estresse</h3>
                <p>Causa formação de radicais livres, danos ao DNA e perda das funções do colágeno e elastina.</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-primary mb-2">Álcool</h3>
                <p>Altera a produção de enzimas e estimula a formação de radicais livres.</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-primary mb-2">Má Alimentação</h3>
                <p>Favorece a oxidação intensa e o acúmulo de radicais livres, proporcionando pigmentação da pele, acúmulo de líquido e aparecimento de rugas precoces.</p>
              </div>
            </div>
            
            <h2>Envelhecimento Muscular</h2>
            <p>O envelhecimento muscular envolve diversos processos fisiológicos:</p>
            
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li><strong>Sarcopenia:</strong> Perda progressiva de massa, força e função muscular relacionada à idade</li>
              <li><strong>Redução da síntese proteica:</strong> Afeta a regeneração muscular</li>
              <li><strong>Alterações hormonais:</strong> Diminuição de hormônios anabólicos como GH, testosterona e estrogênio</li>
              <li><strong>Diminuição do número e tamanho das fibras musculares</strong></li>
              <li><strong>Redução da capacidade de regeneração muscular</strong></li>
              <li><strong>Perda da capacidade contrátil e redução da resistência à fadiga</strong></li>
            </ul>
            
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 my-8">
              <h2 className="text-xl font-semibold mb-4">Radicais Livres e Estresse Oxidativo</h2>
              <p>Radicais livres são moléculas instáveis que contêm elétrons desemparelhados, tornando-os altamente reativos. Em quantidades ideais, desempenham funções essenciais no organismo, como atuação no sistema imunológico.</p>
              
              <p className="mt-3">Em excesso, os radicais livres causam estresse oxidativo, que pode levar a danos celulares significativos, acelerando o envelhecimento. Suas principais ações deletérias incluem:</p>
              
              <ul className="list-disc pl-6 space-y-1 mt-3">
                <li>Degradação do colágeno e elastina, resultando em perda da firmeza e elasticidade da pele</li>
                <li>Oxidação de lipídios da membrana celular, levando à morte celular e disfunção tecidual</li>
                <li>Alterações no DNA, aumentando o risco de mutações e doenças degenerativas</li>
                <li>Redução da capacidade antioxidante do organismo, contribuindo para o envelhecimento precoce</li>
              </ul>
            </div>
            
            <h2>Tratamentos para o Envelhecimento</h2>
            
            <h3>Antioxidantes</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
              <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                <h4 className="font-semibold text-primary">DMAE</h4>
                <p className="text-sm">Dimetilaminoetanol acetamidobenzoato, nutriente natural encontrado em peixes marinhos, estimula músculos e melhora o tônus da pele.</p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                <h4 className="font-semibold text-primary">Coenzima Q10</h4>
                <p className="text-sm">Capta os radicais livres e estimula o sistema imunológico. Fontes: sardinha e amendoim.</p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                <h4 className="font-semibold text-primary">Ginkgo Biloba</h4>
                <p className="text-sm">Antioxidante obtido da folha da planta, atua no sistema circulatório e metabolismo celular.</p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                <h4 className="font-semibold text-primary">Extrato de Chá Verde</h4>
                <p className="text-sm">Antioxidante com ação anti-inflamatória que protege a pele contra a ação carcinogênica do UVB.</p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                <h4 className="font-semibold text-primary">Vitamina C</h4>
                <p className="text-sm">Neutraliza os radicais livres, ajuda a conservar a vitamina E e estimula a produção de colágeno.</p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                <h4 className="font-semibold text-primary">Ácido Hialurônico</h4>
                <p className="text-sm">Retém água na derme, proporcionando preenchimento e hidratação.</p>
              </div>
            </div>
            
            <h3>Eletroterapia para Envelhecimento</h3>
            
            <div className="space-y-6 my-8">
              <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
                <h4 className="text-xl font-semibold text-primary mb-2">Radiofrequência</h4>
                <p>A radiofrequência corrige sinais de envelhecimento, melhorando a flacidez da pele. Pode ser associada a outros recursos terapêuticos.</p>
                <p className="mt-2">O tempo de aplicação varia, buscando obter hiperemia local, geralmente entre 2 a 4 minutos em cada área dividida por quadrantes.</p>
                <p className="mt-2">A temperatura para cada alteração é: 37°C para fibrose (relaxa o colágeno) e 40°C para flacidez (estimula a proteína HSP 47, que estimula o colágeno, tonificando a pele).</p>
              </div>
              
              <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
                <h4 className="text-xl font-semibold text-primary mb-2">Microcorrente</h4>
                <p>Corrente elétrica de baixa frequência e intensidade em miliamperes, utilizando uma corrente galvânica de baixa frequência que não ativa fibras nervosas subcutâneas.</p>
                <p className="mt-2">A principal ação da MENS é promover o aumento da produção de ATP e, com isso, aumentar a síntese proteica. Correntes entre 100 μA e 500 μA aumentam o ATP em até 500%.</p>
                <p className="mt-2">Utilizada para analgesia, reparação tecidual e reparo ósseo. Em disfunções estéticas, ativa o metabolismo e melhora a tonicidade dos tecidos e dos músculos.</p>
              </div>
              
              <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
                <h4 className="text-xl font-semibold text-primary mb-2">Microagulhamento</h4>
                <p>Terapia de Indução de Colágeno, técnica promissora com excelentes resultados em cicatrizes de acne, flacidez cutânea, estrias, rugas, manchas e sequelas de queimadura.</p>
              </div>
              
              <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
                <h4 className="text-xl font-semibold text-primary mb-2">Eletroestimulação Muscular</h4>
                <p>Utiliza a corrente russa, uma corrente alternada simétrica, sinusoidal e com frequência de 2500 Hz, usada para fins excitomotores na musculatura.</p>
                <p className="mt-2">Estimula o neurônio motor que comanda a contração do músculo. Ativa as fibras vermelhas (20-50 Hz) e as brancas (80-120 Hz).</p>
              </div>
              
              <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
                <h4 className="text-xl font-semibold text-primary mb-2">Plataforma Vibratória</h4>
                <p>Atua por estímulo repetido dos músculos, tendões e ligamentos sem gerar sobrecargas, ativando 100% da musculatura.</p>
                <p className="mt-2">A ação na musculatura resulta no aumento da circulação linfática e sanguínea, aumento da densidade óssea e melhora do tônus e da força muscular.</p>
              </div>
            </div>
          </ContentSection>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Envelhecimento;
