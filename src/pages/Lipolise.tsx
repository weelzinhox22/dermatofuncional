
import React from 'react';
import Navbar from '@/components/Navbar';
import ContentSection from '@/components/ContentSection';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Lipolise = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="bg-gradient-to-b from-accent/30 to-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link to="/" className="text-primary hover:text-primary/80 transition-colors flex items-center">
              <ArrowLeft size={20} className="mr-2" />
              <span>Voltar para página inicial</span>
            </Link>
          </div>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-primary">
              Lipogênese e Lipólise
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Compreendendo os processos de armazenamento e quebra de gorduras no corpo humano
            </p>
          </div>
        </div>
      </div>

      <ContentSection id="lipogenese-lipolise" title="Lipogênese e Lipólise">
        <p>
          É fundamental compreender que as atividades metabólicas do nosso corpo podem ser amplamente categorizadas em dois processos principais: a lipogênese e a lipólise. A <strong>lipogênese</strong>, em sua essência, é o processo de armazenamento de energia. Imaginem que o corpo está construindo um "estoque" de energia para uso futuro. Esse estoque é criado através da conversão do excesso de energia em triglicerídeos (TG), que são armazenados dentro de células especializadas chamadas adipócitos, popularmente conhecidas como células de gordura.
        </p>
        
        <p className="mt-4">
          Por outro lado, a <strong>lipólise</strong> representa o processo inverso. Quando o organismo necessita de energia, ele aciona a lipólise para quebrar os triglicerídeos armazenados. Nesse processo, enzimas denominadas lipases desempenham um papel crucial. Elas catalisam a quebra dos triglicerídeos em seus componentes básicos: ácidos graxos e glicerol. Esses componentes são então liberados na corrente sanguínea, prontos para serem utilizados como "combustível" por outros tecidos e órgãos do corpo.
        </p>

        <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-5 bg-gradient-to-br from-primary/5 to-transparent border-primary/20 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-primary mb-3">Lipogênese</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Processo de armazenamento de energia</li>
              <li>Conversão do excesso de energia em triglicerídeos</li>
              <li>Armazenamento nas células adiposas (adipócitos)</li>
              <li>Pode ocorrer a partir do excesso de glicogênio</li>
            </ul>
          </Card>
          <Card className="p-5 bg-gradient-to-br from-accent/5 to-transparent border-accent/20 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-accent mb-3">Lipólise</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Processo de quebra de gorduras para liberação de energia</li>
              <li>Catalisado por enzimas chamadas lipases</li>
              <li>Quebra dos triglicerídeos em ácidos graxos e glicerol</li>
              <li>Depende da presença da enzima AMPc</li>
            </ul>
          </Card>
        </div>

        <p>
          É interessante notar que o corpo também possui outra forma de armazenar energia: o glicogênio. O glicogênio é um polímero de glicose, ou seja, uma molécula complexa formada por várias moléculas de glicose. Quando há um excesso de glicogênio no organismo, ele pode ser convertido em triglicerídeos e armazenado no tecido adiposo sob a forma de gordura.
        </p>

        <p className="mt-4">
          A metabolização da gordura envolve, portanto, dois processos distintos: a lipólise, que resulta na quebra dos triglicerídeos em 3 ácidos graxos e 1 glicerol, e a oxidação, onde o ácido graxo é utilizado no tecido muscular e nas mitocôndrias para gerar ATP, a principal fonte de energia celular.
        </p>

        <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">O papel do AMPc na Lipólise</h3>
        <p>
          Um conceito chave para entender a lipólise é a enzima AMPc (adenosina monofosfato cíclico). A utilização de gorduras no organismo depende da presença dessa enzima, que é liberada na célula adiposa pela atividade mitocondrial. Portanto, o acúmulo de gordura nas células pode estar relacionado à produção insuficiente de AMPc para degradar a gordura acumulada. Em outras palavras, se não houver AMPc suficiente, a gordura não será "queimada" eficientemente.
        </p>

        <div className="my-6 p-5 bg-secondary/40 rounded-lg">
          <h4 className="text-lg font-semibold mb-3">Importância do AMPc nos tratamentos para lipodistrofia</h4>
          <p>
            Compreendendo a importância do AMPc, os tratamentos para lipodistrofia localizada (acúmulo de gordura em áreas específicas) visam manter níveis elevados dessa enzima, a fim de aumentar a "combustão" do tecido adiposo nessas áreas.
          </p>
        </div>

        <p>
          Além de influenciar a lipólise, o AMPc desempenha um papel regulador em diversos outros processos metabólicos, incluindo a glicogenólise (quebra do glicogênio), a reabsorção de água e a contração muscular.
        </p>

        <p className="mt-4">
          Por fim, é importante mencionar a influência do sistema nervoso no metabolismo do tecido adiposo. O sistema nervoso simpático, ao ser ativado, estimula a lipólise através da ação de receptores β-adrenérgicos, que por sua vez induzem a ação da enzima lipase hormônio-sensível (LHS).
        </p>
      </ContentSection>

      <ContentSection id="sistema-linfatico" title="Sistema Linfático: Anatomia e Formação da Linfa">
        <p>
          O sistema linfático é um sistema complexo e essencial para a manutenção do equilíbrio hídrico e a defesa do organismo. Ele é composto por uma rede de vasos e órgãos que trabalham em conjunto para drenar o excesso de líquido dos tecidos, filtrar substâncias nocivas e transportar células do sistema imunológico.
        </p>

        <div className="my-6 bg-secondary/30 p-5 rounded-lg">
          <h4 className="text-lg font-semibold mb-3">Componentes do Sistema Linfático:</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Capilares linfáticos:</strong> Vasos iniciais que coletam o excesso de líquido intersticial</li>
            <li><strong>Vasos linfáticos:</strong> Pré-coletores e coletores que transportam a linfa</li>
            <li><strong>Linfonodos:</strong> Filtram a linfa e capturam substâncias nocivas</li>
            <li><strong>Baço, timo e tonsilas:</strong> Órgãos linfáticos secundários</li>
          </ul>
        </div>

        <p>
          A linfa, o líquido que circula nesse sistema, é formada a partir do fluido intersticial, o líquido que banha as células dos tecidos. A formação da linfa e seu transporte podem ser explicados pela hipótese de Starling, que descreve o equilíbrio entre os fenômenos de filtração e reabsorção que ocorrem nas terminações capilares.
        </p>

        <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Forças de Starling e Formação da Linfa</h3>
        <p>
          As forças de Starling, representadas pela Equação de Starling, mostram que, em condições fisiológicas normais, existe um equilíbrio dinâmico entre a filtração e a reabsorção nos capilares. A filtração, que depende da pressão hidrostática, é o processo de passagem de nutrientes e líquidos do sangue para o interstício. Já a reabsorção, que depende da pressão oncótica, é o retorno de parte dos resíduos e líquidos extravasados para os vasos sanguíneos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <Card className="p-5 hover:shadow-md transition-shadow bg-gradient-to-b from-white to-secondary/20">
            <h4 className="font-semibold text-primary text-lg mb-3">Filtração</h4>
            <p>A filtração ocorre devido à pressão exercida no capilar, conhecida como pressão hidrostática capilar. Em média, cerca de 10 ml de líquido são filtrados a cada minuto.</p>
          </Card>
          <Card className="p-5 hover:shadow-md transition-shadow bg-gradient-to-b from-white to-secondary/20">
            <h4 className="font-semibold text-primary text-lg mb-3">Reabsorção</h4>
            <p>A reabsorção ocorre por influência da pressão oncótica, exercida principalmente pela proteína albumina. A albumina, sendo um soluto, "puxa" o líquido que foi filtrado de volta para o vaso sanguíneo. Assim, cerca de 9 ml são reabsorvidos a cada minuto.</p>
          </Card>
        </div>

        <p>
          O sistema linfático entra em ação para garantir que a "conta feche". O excesso de líquido intersticial que não é reabsorvido pelos capilares sanguíneos é coletado pelos capilares linfáticos, tornando-se linfa. A linfa, então, percorre os vasos linfáticos, passando pelos linfonodos, onde é filtrada para remover impurezas e células danificadas. Finalmente, a linfa é devolvida à circulação sanguínea através dos ductos linfáticos, que desembocam nas veias subclávias.
        </p>

        <div className="my-6 p-5 bg-accent/20 rounded-lg">
          <h4 className="text-lg font-semibold mb-3">Etapas da Formação e Circulação da Linfa:</h4>
          <ol className="list-decimal pl-6 space-y-2">
            <li>O sangue arterial chega aos capilares com alta pressão hidrostática</li>
            <li>Parte do plasma extravasa para o meio extracelular, formando o líquido intersticial (filtração)</li>
            <li>Nos capilares venosos, parte do líquido intersticial retorna à circulação sanguínea por reabsorção</li>
            <li>O excesso de líquido intersticial é coletado pelos capilares linfáticos, tornando-se linfa</li>
            <li>A linfa percorre os vasos linfáticos, passando pelos linfonodos, onde é filtrada</li>
            <li>A linfa é devolvida à circulação sanguínea através dos ductos linfáticos</li>
          </ol>
        </div>
      </ContentSection>

      <ContentSection id="edema-linfedema" title="Edema e Linfedema">
        <p>
          O edema é definido como o acúmulo anormal de fluido no espaço intersticial. Ele representa um desequilíbrio entre os processos de filtração e reabsorção de líquidos nos capilares.
        </p>

        <h3 className="text-2xl font-semibold text-primary mt-6 mb-4">Mecanismos de Formação do Edema</h3>

        <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-5 hover:shadow-md transition-shadow">
            <h4 className="font-semibold text-primary text-lg mb-3">Aumento da Permeabilidade Vascular</h4>
            <p className="mb-3">Em processos inflamatórios, os vasos sanguíneos se tornam mais permeáveis para facilitar a chegada de células de defesa. Isso permite que mais líquido extravase para o interstício.</p>
            <h5 className="font-medium text-primary mb-2">Causas:</h5>
            <ul className="list-disc pl-5">
              <li>Sepse</li>
              <li>Grandes queimaduras</li>
              <li>Inflamações</li>
              <li>Traumas</li>
              <li>Reações alérgicas</li>
              <li>Uso de certos medicamentos</li>
              <li>Diabetes mellitus</li>
            </ul>
          </Card>

          <Card className="p-5 hover:shadow-md transition-shadow">
            <h4 className="font-semibold text-primary text-lg mb-3">Redução da Pressão Oncótica</h4>
            <p className="mb-3">A pressão oncótica é exercida pelas proteínas presentes no sangue. Se a quantidade de proteínas diminui, a reabsorção de líquidos diminui, aumentando o volume no interstício.</p>
            <h5 className="font-medium text-primary mb-2">Causas:</h5>
            <ul className="list-disc pl-5">
              <li>Cirrose e outras doenças hepáticas</li>
              <li>Síndrome nefrótica</li>
              <li>Doenças crônicas</li>
              <li>Desnutrição</li>
              <li>Hipotireoidismo</li>
            </ul>
          </Card>

          <Card className="p-5 hover:shadow-md transition-shadow">
            <h4 className="font-semibold text-primary text-lg mb-3">Aumento da Pressão Hidrostática Capilar</h4>
            <p className="mb-3">Se a pressão dentro dos capilares aumenta, o tempo de filtração se prolonga, enquanto o tempo de reabsorção se reduz, resultando em acúmulo de líquido.</p>
            <h5 className="font-medium text-primary mb-2">Causas:</h5>
            <ul className="list-disc pl-5">
              <li>Insuficiência venosa</li>
              <li>Insuficiência cardíaca</li>
              <li>Insuficiência renal</li>
              <li>Gravidez</li>
              <li>Trombose venosa</li>
              <li>Uso de certos medicamentos</li>
              <li>Estado pré-menstrual</li>
            </ul>
          </Card>

          <Card className="p-5 hover:shadow-md transition-shadow">
            <h4 className="font-semibold text-primary text-lg mb-3">Alterações no Sistema Linfático</h4>
            <p className="mb-3">A redução da drenagem linfática fisiológica impede a remoção eficiente do excesso de líquido intersticial, levando ao seu acúmulo nos tecidos.</p>
            <h5 className="font-medium text-primary mb-2">Causas do Linfedema:</h5>
            <ul className="list-disc pl-5">
              <li>Câncer</li>
              <li>Ressecção cirúrgica de gânglios linfáticos</li>
              <li>Filariose</li>
              <li>Obesidade</li>
              <li>Hipotireoidismo grave</li>
            </ul>
          </Card>
        </div>

        <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Linfedema</h3>
        <p>
          O linfedema é um tipo específico de edema causado por uma insuficiência do sistema linfático. Ele ocorre quando a carga linfática (a quantidade de líquido a ser drenado) ultrapassa o débito linfático (a capacidade de drenagem do sistema).
        </p>

        <p className="mt-4">
          O linfedema é mais comum em mulheres e pode afetar qualquer área do corpo, embora seja mais frequente nos membros inferiores e superiores.
        </p>

        <div className="my-6 p-5 bg-accent/20 rounded-lg">
          <h4 className="text-lg font-semibold mb-3">Sinais e Sintomas do Linfedema:</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Sensação de peso ou tensão no membro afetado</li>
            <li>Dor aguda</li>
            <li>Alteração da sensibilidade</li>
            <li>Dor nas articulações</li>
            <li>Extravasamento de líquido linfático</li>
            <li>Edema no dorso das mãos e pés</li>
          </ul>
        </div>
      </ContentSection>

      <Footer />
    </div>
  );
};

export default Lipolise;
