
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContentSection from '@/components/ContentSection';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const SistemaLinfatico = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="bg-gradient-to-b from-secondary/80 to-white py-12 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link to="/">
                <Button variant="outline" className="flex items-center space-x-2">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Voltar para a página inicial</span>
                </Button>
              </Link>
            </div>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-serif text-primary animate-fade-in">
                Sistema Linfático
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-700 animate-fade-in">
                Estrutura, funcionamento e importância do sistema linfático para o corpo humano
              </p>
            </div>
          </div>
        </div>
      </div>

      <ContentSection id="intro-linfatico" title="Introdução ao Sistema Linfático">
        <p>
          O sistema linfático é um sistema complexo e essencial para a manutenção do equilíbrio hídrico e a defesa do organismo. 
          Ele é composto por uma rede de vasos e órgãos que trabalham em conjunto para drenar o excesso de líquido dos tecidos, 
          filtrar substâncias nocivas e transportar células do sistema imunológico.
        </p>

        <div className="my-6 bg-secondary/70 p-5 rounded-lg">
          <h4 className="font-semibold text-lg mb-2">Componentes do Sistema Linfático:</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Capilares linfáticos (vasos iniciais)</li>
            <li>Vasos linfáticos (pré-coletores e coletores)</li>
            <li>Linfonodos (ou gânglios linfáticos)</li>
            <li>Baço</li>
            <li>Timo</li>
            <li>Tonsilas</li>
          </ul>
        </div>
      </ContentSection>

      <Separator className="max-w-4xl mx-auto" />

      <ContentSection id="linfonodos" title="Linfonodos: Os Filtros do Sistema">
        <p>
          Os linfonodos são pequenas estruturas ovais encontradas ao longo dos vasos linfáticos, funcionando como estações 
          de tratamento distribuídas por todo o corpo. Sua principal função é filtrar a linfa, removendo detritos e patógenos, 
          similar a filtros de água que eliminam impurezas como bactérias, vírus, células danificadas e outros resíduos.
        </p>

        <p>
          Qualquer bactéria que infecte o fluido intersticial é capturada pelos capilares linfáticos e levada para um 
          linfonodo regional. Lá, células dendríticas e macrófagos internalizam e eliminam muitos dos patógenos, removendo-os 
          do corpo. É como se os linfonodos fossem fortalezas que protegem o corpo contra invasores.
        </p>

        <div className="my-8 bg-primary/10 p-6 rounded-lg border border-primary/20">
          <h3 className="text-xl font-semibold text-primary mb-3">Estrutura do Linfonodo:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Córtex e medula</li>
            <li>Cápsulas</li>
            <li>Vasos linfáticos aferentes e eferentes</li>
            <li>Válvulas que evitam o refluxo</li>
            <li>Nódulos linfoides</li>
            <li>Artérias e veias</li>
          </ul>
        </div>

        <p>
          A função primordial do linfonodo é criar uma barreira contra a penetração de microrganismos, toxinas ou substâncias 
          estranhas na corrente sanguínea. Ele atua como um sentinela, protegendo o organismo de ameaças internas e externas.
        </p>

        <p>
          Em resposta a uma inflamação, o linfonodo pode aumentar de tamanho e tornar-se doloroso, formando o que chamamos 
          popularmente de íngua. Esse aumento é um sinal de que o sistema imunológico está combatendo uma infecção.
        </p>

        <p>
          Existem cerca de 400 linfonodos no corpo humano, com uma concentração maior na região do pescoço. Esse dado é 
          importante para a prática de técnicas de drenagem linfática.
        </p>
      </ContentSection>

      <Separator className="max-w-4xl mx-auto" />

      <ContentSection id="cadeias-linfonodos" title="Cadeias Linfáticas">
        <p>
          As principais cadeias de linfonodos que serão estimuladas nas técnicas de drenagem linfática manual são divididas 
          em linfonodos da cabeça e pescoço e linfonodos corporais. O conhecimento dessas cadeias é fundamental para direcionar 
          corretamente a drenagem.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <Card className="p-5 hover:shadow-md transition-shadow">
            <h4 className="font-serif font-semibold text-primary text-xl mb-3">Linfonodos da Cabeça e Pescoço</h4>
            <ul className="list-disc pl-6">
              <li>Auriculares</li>
              <li>Occipitais</li>
              <li>Parótidas</li>
              <li>Cervicais</li>
              <li>Submentais</li>
              <li>Submandibulares</li>
              <li>Supraclaviculares</li>
            </ul>
          </Card>

          <Card className="p-5 hover:shadow-md transition-shadow">
            <h4 className="font-serif font-semibold text-primary text-xl mb-3">Linfonodos Corporais</h4>
            <ul className="list-disc pl-6">
              <li>Cervicais</li>
              <li>Torácicos</li>
              <li>Axilares</li>
              <li>Mesentéricos</li>
              <li>Ilíacos</li>
              <li>Lombares</li>
              <li>Inguinais</li>
              <li>Poplíteos</li>
            </ul>
          </Card>
        </div>
      </ContentSection>

      <Separator className="max-w-4xl mx-auto" />

      <ContentSection id="troncos-ductos" title="Troncos Linfáticos e Ductos">
        <p>
          Os troncos linfáticos são os maiores vasos linfáticos, responsáveis por receber a linfa dos órgãos internos, 
          extremidades e porções do tronco. Eles atuam como grandes canais de escoamento.
        </p>

        <div className="my-6 p-5 bg-accent/30 rounded-lg">
          <h4 className="font-semibold text-lg mb-2">Formação dos Troncos e Ductos:</h4>
          <ul className="list-disc pl-6">
            <li>Os troncos lombares (esquerdo e direito) e o intestinal formam a cisterna do quilo</li>
            <li>O tronco subclávio direito e o jugular direito formam o ducto linfático direito</li>
          </ul>
        </div>

        <h3>Ducto Linfático Direito</h3>
        <p>
          O ducto linfático direito drena a linfa da região da cabeça e pescoço (tronco jugular), linfonodos axilares, 
          quadrante torácico superior, glândula mamária e braço (tronco subclávio), brônquios, pulmão e mediastino 
          (tronco broncomediastinal).
        </p>

        <p>
          Esse ducto corre ao longo da borda medial do músculo escaleno anterior na base do pescoço e termina na 
          junção da veia subclávia direita com a veia jugular interna direita.
        </p>

        <p>
          O ducto linfático direito conduz a linfa para a circulação sanguínea nas seguintes regiões do corpo: lado 
          direito da cabeça, pescoço e tórax, membro superior direito, pulmão direito, lado direito do coração e face 
          diafragmática do fígado.
        </p>

        <h3>Ducto Torácico</h3>
        <p>
          O ducto torácico drena a linfa de toda a metade esquerda do corpo, do membro inferior direito e metade direita 
          da região infra umbilical.
        </p>
      </ContentSection>

      <Separator className="max-w-4xl mx-auto" />

      <ContentSection id="formacao-linfa" title="Formação da Linfa">
        <p>
          A formação da linfa e seu transporte podem ser explicados pela hipótese de Starling sobre o equilíbrio entre 
          filtração e reabsorção nas terminações capilares.
        </p>

        <p>
          As forças de Starling, ou Equação de Starling, demonstram que, em situações fisiológicas, há um equilíbrio 
          entre a FILTRAÇÃO (dependente da pressão hidrostática) e a REABSORÇÃO (dependente da pressão oncótica).
        </p>

        <div className="my-8 bg-secondary p-6 rounded-lg border border-primary/20">
          <h3 className="text-xl font-semibold text-primary mb-3">Pressões Envolvidas:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Pressão hidrostática no capilar:</strong> Impulsiona o fluido para fora do capilar</li>
            <li><strong>Pressão oncótica no capilar:</strong> "Puxa" o fluido para dentro do capilar</li>
            <li><strong>Pressão hidrostática no interstício:</strong> Tende a movimentar o fluido de volta para os capilares</li>
            <li><strong>Pressão oncótica no interstício:</strong> Tende a "sugar" fluido dos capilares</li>
          </ul>
        </div>

        <h3>Filtração e Reabsorção</h3>
        <p>
          Na filtração, que ocorre pela pressão exercida no capilar (pressão hidrostática capilar), nutrientes passam 
          do sangue para o interstício. O normal é que sejam filtrados 10ml a cada minuto.
        </p>

        <p>
          Na reabsorção, ocorre o retorno de parte dos resíduos e líquidos extravasados para os vasos, pela influência da 
          pressão oncótica. A principal proteína que exerce essa função é a albumina, que "puxa" o líquido filtrado para o 
          vaso novamente. Cerca de 9ml são reabsorvidos a cada minuto.
        </p>

        <p>
          Em condições normais, há um ligeiro excesso de filtração (1ml por minuto) que é drenado pelo sistema linfático.
        </p>
      </ContentSection>

      <Separator className="max-w-4xl mx-auto" />

      <ContentSection id="drenagem-linfatica" title="Drenagem Linfática Fisiológica">
        <p>
          A linfa é um líquido transparente, esbranquiçado (algumas vezes amarelado ou rosado), alcalino e de sabor salgado, 
          derivado do líquido intersticial que flui para os vasos linfáticos.
        </p>

        <p>
          A composição da linfa é semelhante à do sangue, mas NÃO POSSUI HEMÁCIAS, apesar de conter glóbulos brancos, 
          dos quais 99% são LINFÓCITOS.
        </p>

        <h3>Processo de Formação da Linfa</h3>
        <p>
          A água, rica em elementos nutritivos, sais minerais e vitaminas, ao deixar a luz do capilar arterial, desemboca 
          no interstício, onde as células retiram os elementos necessários ao seu metabolismo e eliminam os produtos de 
          degradação celular. Em seguida, o líquido intersticial retoma a rede de capilares venosos.
        </p>

        <p>
          Quando os filamentos são tracionados, ocorre a penetração de água, partículas, pequenas células e moléculas de 
          proteínas no interior do capilar, iniciando então a formação da linfa. O refluxo linfático não ocorre devido ao 
          fechamento das microválvulas linfáticas.
        </p>

        <p>
          A linfa absorvida nos capilares linfáticos é transportada para os vasos pré-coletores, passando através de 
          vários linfonodos, sendo aí filtrada e recolocada na circulação até atingir os vasos sanguíneos. Toda linfa 
          do organismo acaba retornando ao sistema vascular sanguíneo através de dois grandes troncos: o ducto torácico 
          e o ducto linfático direito.
        </p>

        <p>
          O fluxo da linfa é lento porque, ao contrário do sistema cardiovascular, o sistema linfático depende de forças 
          externas e internas ao organismo para fluir.
        </p>

        <div className="my-8 bg-primary/10 p-6 rounded-lg border border-primary/20">
          <h3 className="text-xl font-semibold text-primary mb-3">Forças que Impulsionam o Fluxo Linfático:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Força da gravidade</li>
            <li>Contrações musculares</li>
            <li>Pulsação das artérias próximas aos vasos</li>
            <li>Peristaltismo visceral</li>
            <li>Movimentos respiratórios</li>
          </ul>
        </div>

        <p>
          A contração muscular comprime os troncos linfáticos, e o vácuo parcial na caixa torácica facilita o avanço do 
          fluxo linfático.
        </p>
      </ContentSection>

      <Separator className="max-w-4xl mx-auto" />

      <ContentSection id="edema" title="Edema e Linfedema">
        <p>
          O edema é definido como um desequilíbrio entre a filtração e a reabsorção. Quando a filtração excede a reabsorção 
          e a capacidade de drenagem linfática, ocorre o acúmulo de líquido no interstício, resultando em edema.
        </p>

        <p>
          Quando o sistema circulatório e/ou linfático não cumpre corretamente suas funções, o corpo fica sobrecarregado 
          por excesso de líquido que não consegue absorver. Isso pode levar a sintomas como celulite, retenção de líquidos, 
          peso nas pernas e linfedema.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <Card className="p-5 hover:shadow-md transition-shadow bg-gradient-to-b from-white to-secondary/20">
            <h4 className="font-serif font-semibold text-primary text-xl mb-3">Mecanismos do Edema</h4>
            <ul className="list-disc pl-6">
              <li>Aumento da permeabilidade vascular</li>
              <li>Redução da pressão oncótica</li>
              <li>Aumento da pressão hidrostática capilar</li>
              <li>Alterações no sistema linfático</li>
            </ul>
          </Card>

          <Card className="p-5 hover:shadow-md transition-shadow bg-gradient-to-b from-white to-secondary/20">
            <h4 className="font-serif font-semibold text-primary text-xl mb-3">Causas do Linfedema</h4>
            <ul className="list-disc pl-6">
              <li>Câncer</li>
              <li>Ressecção cirúrgica de gânglios linfáticos (linfadenectomia)</li>
              <li>Filariose</li>
              <li>Obesidade</li>
              <li>Hipotireoidismo grave</li>
            </ul>
          </Card>
        </div>

        <p>
          O linfedema é um tipo específico de edema causado por uma insuficiência do sistema linfático. Ele ocorre quando 
          a carga linfática (a quantidade de líquido a ser drenado) ultrapassa o débito linfático (a capacidade de drenagem do sistema).
        </p>

        <p>
          O linfedema é mais comum em mulheres e pode afetar qualquer área do corpo, embora seja mais frequente nos membros 
          inferiores e superiores. Os sinais e sintomas do linfedema incluem sensação de peso ou tensão no membro afetado, 
          dor aguda, alteração da sensibilidade, dor nas articulações, extravasamento de líquido linfático e edema no dorso das 
          mãos e pés.
        </p>
      </ContentSection>

      <Footer />
    </div>
  );
};

export default SistemaLinfatico;
