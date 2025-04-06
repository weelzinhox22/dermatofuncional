
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ContentSection from '@/components/ContentSection';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Card } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      <ContentSection id="introducao" title="Introdução à Pele">
        <p>
          Olá a todos! Vamos iniciar nossa aula sobre a anatomia e fisiologia da pele, um sistema fascinante e complexo.
        </p>
        
        <p>
          É crucial entender que, no estudo da pele, a terminologia "tecido" muitas vezes é utilizada de forma equivocada, sendo confundida com o próprio órgão, a pele ou tegumento. Tecido, em sua essência, refere-se a um agrupamento de células semelhantes que desempenham funções específicas e coordenadas. Os tecidos podem ser divididos em quatro tipos principais: epitelial, conjuntivo, muscular e nervoso. Cada um desses tipos desempenha um papel fundamental na estrutura e função da pele e de outros órgãos do corpo.
        </p>

        <p>
          A pele, também conhecida como tegumento, é um órgão complexo, composto por um agregado de diferentes tecidos que atuam em conjunto. A epiderme e a derme são as camadas principais que constituem a pele, e juntamente com estruturas anexas como unhas, pelos e glândulas, desempenham diversas funções essenciais. Todos esses componentes formam o sistema tegumentar.
        </p>

        <div className="my-8 bg-secondary p-6 rounded-lg border border-primary/20">
          <h3 className="text-xl font-semibold text-primary mb-3">Funções principais da pele:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Barreira protetora contra o atrito</li>
            <li>Prevenção da perda de água</li>
            <li>Barreira contra a invasão de micro-organismos</li>
            <li>Proteção contra a radiação ultravioleta</li>
            <li>Termorregulação</li>
            <li>Sensação do tato</li>
            <li>Auxílio na excreção de substâncias</li>
          </ul>
        </div>
      </ContentSection>

      <Separator className="max-w-4xl mx-auto" />

      <ContentSection id="anatomia" title="Anatomia e Fisiologia da Pele">
        <h3>Células de Defesa na Epiderme</h3>
        <p>
          Na epiderme, encontramos diferentes tipos de células de defesa, cada uma com uma função específica:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <Card className="p-4 hover:shadow-md transition-shadow">
            <h4 className="font-semibold text-primary text-lg mb-2">Queratinócitos</h4>
            <p>São as células mais abundantes da epiderme e produzem queratina, uma proteína estrutural que fortalece a barreira cutânea. Além disso, desempenham um papel importante na defesa imunológica da pele.</p>
          </Card>
          <Card className="p-4 hover:shadow-md transition-shadow">
            <h4 className="font-semibold text-primary text-lg mb-2">Células de Langerhans</h4>
            <p>São células dendríticas que atuam como sentinelas, monitorando a presença de antígenos e desencadeando respostas imunológicas quando necessário.</p>
          </Card>
          <Card className="p-4 hover:shadow-md transition-shadow">
            <h4 className="font-semibold text-primary text-lg mb-2">Melanócitos</h4>
            <p>Localizados na camada basal da epiderme, os melanócitos produzem melanina, um pigmento que protege a pele contra os danos causados pela radiação UV.</p>
          </Card>
          <Card className="p-4 hover:shadow-md transition-shadow">
            <h4 className="font-semibold text-primary text-lg mb-2">Células T</h4>
            <p>Presentes na derme, as células T desempenham um papel crucial na defesa imunológica da pele, reconhecendo e eliminando patógenos e células cancerosas.</p>
          </Card>
        </div>

        <h3>Camadas da Epiderme</h3>
        <p>A epiderme é composta por camadas distintas:</p>
        
        <ol className="list-decimal pl-6 space-y-2 my-4">
          <li><strong>Camada córnea:</strong> É a camada mais externa, formada por células mortas e queratinizadas que conferem proteção à pele.</li>
          <li><strong>Camada granulosa:</strong> As células dessa camada contêm grânulos que auxiliam na formação da barreira lipídica da pele.</li>
          <li><strong>Camada espinhosa:</strong> É a camada mais espessa da epiderme, composta por queratinócitos unidos por desmossomas, que conferem resistência à pele.</li>
          <li><strong>Camada lúcida:</strong> Presente apenas em áreas de pele espessa, como as palmas das mãos e plantas dos pés.</li>
          <li><strong>Camada basal:</strong> É a camada mais profunda da epiderme, onde ocorre a produção de novas células que irão migrar para as camadas superiores.</li>
        </ol>

        <h3>Histologia da Epiderme</h3>
        <p>
          A histologia da epiderme revela a presença de diferentes tipos celulares, como queratinócitos, melanócitos, células de Langerhans e células de Merkel. O epitélio é estratificado pavimentoso queratinizado, o que significa que é composto por múltiplas camadas de células achatadas e preenchidas com queratina.
        </p>

        <div className="my-6 p-5 bg-accent/50 rounded-lg border border-accent">
          <h4 className="font-semibold text-lg mb-2">Composição Celular da Epiderme:</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Queratinócitos:</strong> 80% das células - responsáveis pela renovação da pele</li>
            <li><strong>Células de Langerhans:</strong> 2-8% das células - função imunológica</li>
            <li><strong>Células de Merkel:</strong> 3% das células - receptores táteis</li>
            <li><strong>Melanócitos:</strong> 5-10% das células - produção de pigmento protetor</li>
          </ul>
        </div>

        <h3>Funções da Epiderme</h3>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Barreira de proteção:</strong> Impede a entrada de agentes nocivos, como bactérias, vírus e radiação UV.</li>
          <li><strong>Impermeabilidade:</strong> Os lipídios e proteínas da camada córnea impedem a saída excessiva de água, mantendo a hidratação ideal da pele.</li>
          <li><strong>Síntese de vitamina D:</strong> Os melanócitos sintetizam a vitamina D a partir da exposição à radiação UV.</li>
          <li><strong>Renovação celular:</strong> Substituição constante de células mortas por novas células saudáveis.</li>
        </ul>

        <h3>Processo de Descamação e Renovação</h3>
        <p>O processo de descamação e renovação da pele envolve três etapas:</p>
        <ol className="list-decimal pl-6 space-y-2 my-4">
          <li><strong>Proliferação:</strong> No estrato basal da epiderme, as células-tronco epidérmicas se dividem continuamente, produzindo novos queratinócitos.</li>
          <li><strong>Diferenciação:</strong> À medida que as células migram em direção à superfície, elas passam por um processo de diferenciação, transformando-se em células queratinizadas.</li>
          <li><strong>Descamação:</strong> O estrato córneo é constantemente renovado pelo processo de descamação, no qual as células mortas e queratinizadas são eliminadas da superfície da pele.</li>
        </ol>

        <h3>A Derme</h3>
        <p>
          Na derme, encontramos vasos sanguíneos e linfáticos, nervos, terminações nervosas, folículos pilosos, glândulas sudoríparas e sebáceas.
        </p>
        <p>
          Os folículos pilosos são estruturas presentes na derme que abrigam os fios de cabelo e desempenham um papel importante na proteção da pele e na regulação da temperatura corporal. A derme é ricamente vascularizada, com uma rede de artérias, veias e capilares que fornecem nutrientes e oxigênio à pele, além de atuarem na regulação da temperatura corporal.
        </p>

        <h3>Glândulas da Pele</h3>
        <p>
          Existem diversas glândulas na pele, como as glândulas sebáceas e as glândulas sudoríparas, que produzem substâncias importantes para a hidratação, lubrificação e proteção da pele. A pele é altamente inervada, com uma variedade de receptores sensoriais que permitem a percepção de estímulos táteis, térmicos e dolorosos, importantes para a interação com o ambiente.
        </p>

        <h3>Histologia da Derme</h3>
        <p>
          A histologia da derme revela a presença de componentes acelulares, como a matriz extracelular, que é composta por colágeno e ácido hialurônico.
        </p>

        <div className="my-6 bg-secondary/70 p-5 rounded-lg">
          <h4 className="font-semibold text-lg mb-2">Camadas da Derme:</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Camada papilar:</strong> Localizada abaixo da epiderme, com papilas que aumentam a aderência entre a derme e a epiderme. É constituída por tecido conjuntivo frouxo.</li>
            <li><strong>Camada reticular:</strong> É uma camada mais profunda e espessa, constituída por tecido conjuntivo denso.</li>
          </ul>
        </div>

        <p>
          O suprimento vascular da pele é limitado à derme e constitui-se de um plexo profundo em conexão com um plexo superficial. Esses plexos correm paralelos à superfície cutânea e estão ligados por vasos comunicantes dispostos perpendicularmente.
        </p>

        <h3>Funções da Derme</h3>
        <ol className="list-decimal pl-6 space-y-2 my-4">
          <li><strong>Suporte estrutural:</strong> A derme, composta por tecido conjuntivo, é responsável pela resistência, elasticidade e espessura da pele, conferindo-lhe a capacidade de suportar tensões e impactos.</li>
          <li><strong>Vasos sanguíneos e nervos:</strong> A derme abriga uma extensa rede de vasos sanguíneos e terminações nervosas que fornecem nutrientes, oxigênio e sensibilidade tátil à pele.</li>
          <li><strong>Regulação térmica:</strong> As glândulas sudoríparas presentes na derme produzem o suor, que auxilia na regulação da temperatura corporal por meio da evaporação.</li>
        </ol>

        <h3>Tecido Conjuntivo Denso</h3>
        <p>
          O tecido conjuntivo denso desempenha um papel fundamental na pele:
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Fibras de colágeno:</strong> Conferem resistência e elasticidade à pele.</li>
          <li><strong>Fibras de elastina:</strong> Permitem que a pele volte à sua forma original após ser esticada.</li>
          <li><strong>Fibroblastos:</strong> Produzem e mantêm as fibras de colágeno e elastina.</li>
          <li><strong>Substância fundamental:</strong> Preenche os espaços entre as fibras, proporcionando hidratação e amortecimento.</li>
        </ul>

        <h3>Hipoderme</h3>
        <p>
          A hipoderme, também conhecida como tela subcutânea, não é mais considerada parte da pele. Ela une a derme aos tecidos e órgãos subjacentes e é composta por células adiposas, atuando como isolante térmico e amortecedor. A quantidade de tecido adiposo na hipoderme pode variar dependendo da região do corpo, da idade e do sexo.
        </p>
      </ContentSection>

      <Separator className="max-w-4xl mx-auto" />

      <ContentSection id="tipos-pele" title="Tipos de Pele">
        <p>
          Os tipos de pele são determinados por:
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>A quantidade de água (que influencia a elasticidade).</li>
          <li>A quantidade de lipídeos (que influencia a nutrição e a suavidade).</li>
          <li>O nível de sensibilidade (que influencia a resistência da pele).</li>
        </ul>
        
        <p>
          O equilíbrio entre sebo, pH e hidratação é geneticamente determinado.
        </p>

        <p>
          Diversos fatores podem afetar a saúde da pele, como clima, envelhecimento, hormônios, alimentação, sol, estresse, alterações digestivas e uso indevido de cosméticos.
        </p>

        <p>
          Segundo a Sociedade Brasileira de Dermatologia, existem quatro tipos de pele principais: normal, seca, oleosa e mista.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <Card className="p-5 hover:shadow-md transition-shadow bg-gradient-to-b from-white to-secondary/20">
            <h4 className="font-serif font-semibold text-primary text-xl mb-3">Pele Normal (Eudérmica)</h4>
            <p className="mb-3">Tem superfície lisa, flexível, lubrificada e umedecida, apresenta óstios pouco visíveis e aspecto rosado. Há um equilíbrio que resulta em uma pele sem imperfeições e com um nível adequado de sensibilidade.</p>
            <h5 className="font-medium text-primary mb-2">Características:</h5>
            <ul className="list-disc pl-6">
              <li>Óstios finos</li>
              <li>Espessura normal</li>
              <li>Coloração normal</li>
              <li>Textura normal</li>
              <li>Brilho natural</li>
              <li>Resistência a fatores climáticos</li>
              <li>Tolerância ao contato com sol, sabões e detergentes</li>
            </ul>
          </Card>

          <Card className="p-5 hover:shadow-md transition-shadow bg-gradient-to-b from-white to-secondary/20">
            <h4 className="font-serif font-semibold text-primary text-xl mb-3">Pele Seca (Alípica)</h4>
            <p className="mb-3">Apresenta espessura epidérmica diminuída e manto hidrolipídico escasso, além de ser facilmente irritável e com tendência à sensibilidade. A aparência é adelgaçada, opaca e esbranquiçada.</p>
            <h5 className="font-medium text-primary mb-2">Características:</h5>
            <ul className="list-disc pl-6">
              <li>Óstios muito finos</li>
              <li>Espessura fina</li>
              <li>Coloração normal</li>
              <li>Brilho natural com tendência ao opaco</li>
              <li>Pouca resistência a fatores climáticos</li>
              <li>Tendência à descamação</li>
              <li>Aparecimento de linhas finas</li>
            </ul>
          </Card>

          <Card className="p-5 hover:shadow-md transition-shadow bg-gradient-to-b from-white to-secondary/20">
            <h4 className="font-serif font-semibold text-primary text-xl mb-3">Pele Oleosa (Lipídica)</h4>
            <p className="mb-3">Caracteriza-se pela hipersecreção sebácea, o que confere maior espessura epidérmica. Os óstios são dilatados e a superfície fica untuosa e úmida. O aspecto é brilhante, com tendência a lesões como comedões, pápulas e pústulas.</p>
            <h5 className="font-medium text-primary mb-2">Características:</h5>
            <ul className="list-disc pl-6">
              <li>Óstios profundos e visíveis</li>
              <li>Espessura espessa</li>
              <li>Coloração normal</li>
              <li>Brilho intenso</li>
              <li>Envelhecimento mais lento</li>
              <li>Mais propensa à acne</li>
            </ul>
          </Card>

          <Card className="p-5 hover:shadow-md transition-shadow bg-gradient-to-b from-white to-secondary/20">
            <h4 className="font-serif font-semibold text-primary text-xl mb-3">Pele Mista</h4>
            <p className="mb-3">Ocorre um desequilíbrio na zona T (região frontal, nariz e mento). Há aumento da secreção sebácea nessa região e presença de comedões. As laterais da face tendem a ser normais ou desidratadas.</p>
            <h5 className="font-medium text-primary mb-2">Características:</h5>
            <ul className="list-disc pl-6">
              <li>Brilho mais intenso na zona T</li>
              <li>Óstios visíveis na zona T</li>
              <li>Espessura normal na região médio facial</li>
              <li>Espessura mais espessa na zona T</li>
              <li>Características normais no restante do rosto</li>
            </ul>
          </Card>
        </div>

        <h3>Subtipos de Pele</h3>
        <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-accent/20 rounded-lg border border-accent/30">
            <h4 className="font-medium text-primary mb-2">Subtipo acnéico</h4>
            <p>Apresenta comedões (cravos) brancos, negros e acne.</p>
          </div>
          <div className="p-4 bg-accent/20 rounded-lg border border-accent/30">
            <h4 className="font-medium text-primary mb-2">Subtipo rosácea</h4>
            <p>Apresenta rubor, vermelhidão facial e sensação de calor na face.</p>
          </div>
          <div className="p-4 bg-accent/20 rounded-lg border border-accent/30">
            <h4 className="font-medium text-primary mb-2">Subtipo irritável</h4>
            <p>Apresenta sensação de pinicar, ferroar ou queimação na pele.</p>
          </div>
          <div className="p-4 bg-accent/20 rounded-lg border border-accent/30">
            <h4 className="font-medium text-primary mb-2">Subtipo alérgico</h4>
            <p>Apresenta vermelhidão, coceira e descamação na pele.</p>
          </div>
        </div>

        <h3>Outras Condições da Pele</h3>
        <p>
          Outras condições da pele incluem desidratação, seborreia, discromias e envelhecimento.
        </p>

        <h4 className="text-xl font-medium text-primary mt-6 mb-3">Desidratação</h4>
        <p>
          A desidratação é a falta de umidade suficiente no sistema.
        </p>
        <p>
          As causas da desidratação incluem o comprometimento da permeabilidade da barreira de lipídios, rachaduras na pele devido à diminuição da maciez e flexibilidade do estrato córneo, redução do tamanho dos corneócitos achatados e menor capacidade de reter a umidade, geralmente resultado de uma redução nos níveis de glicosaminoglicanos devido ao envelhecimento da pele.
        </p>
        <p>
          A desidratação é agravada por condições atmosféricas que incluem muito sol e vento, uso inapropriado de produtos de beleza, lavagem com sabões muito fortes e água, ingestão de chá, café, refrigerante e não beber água o suficiente.
        </p>
        <p>
          A desidratação é uma das condições mais difíceis de diagnosticar, sendo facilmente confundida com ressecamento, que tecnicamente é uma falta de oleosidade. A pele seca poderá desidratar-se porque tem dificuldade em reter a umidade interna, enquanto a pele oleosa torna-se desidratada pelo uso de sabões ou sabonetes fortes e o uso excessivo de adstringentes.
        </p>
      </ContentSection>

      <Separator className="max-w-4xl mx-auto" />

      <ContentSection id="fitzpatrick" title="Classificação de Fitzpatrick">
        <p>
          A Classificação de Fitzpatrick é a mais utilizada para o estabelecimento do fototipo cutâneo. O fototipo de cada indivíduo é determinado pela reatividade da pele à luz solar. Essa classificação é baseada na resposta da pele com formação de eritema decorrente da radiação ultravioleta (UV).
        </p>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-primary text-white">
                <th className="py-3 px-4 border">Fototipo</th>
                <th className="py-3 px-4 border">Aparência da pele</th>
                <th className="py-3 px-4 border">Reação à exposição solar</th>
                <th className="py-3 px-4 border">Pigmentação</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="py-3 px-4 border font-medium">I</td>
                <td className="py-3 px-4 border">Muito clara, cabelos ruivos, olhos claros, sardas</td>
                <td className="py-3 px-4 border">Sempre queima, nunca bronzeia</td>
                <td className="py-3 px-4 border">Eritema intenso, descamação dolorosa</td>
              </tr>
              <tr className="bg-secondary/30">
                <td className="py-3 px-4 border font-medium">II</td>
                <td className="py-3 px-4 border">Clara, cabelos loiros ou castanho claro, olhos claros</td>
                <td className="py-3 px-4 border">Queima facilmente, bronzeia pouco</td>
                <td className="py-3 px-4 border">Eritema, descamação, bronzeamento mínimo</td>
              </tr>
              <tr className="bg-white">
                <td className="py-3 px-4 border font-medium">III</td>
                <td className="py-3 px-4 border">Morena clara, cabelos castanhos</td>
                <td className="py-3 px-4 border">Queima moderadamente, bronzeia gradualmente</td>
                <td className="py-3 px-4 border">Eritema moderado, bronzeamento gradual</td>
              </tr>
              <tr className="bg-secondary/30">
                <td className="py-3 px-4 border font-medium">IV</td>
                <td className="py-3 px-4 border">Morena moderada, cabelos castanhos ou pretos</td>
                <td className="py-3 px-4 border">Queima minimamente, bronzeia facilmente</td>
                <td className="py-3 px-4 border">Eritema mínimo, bronzeamento fácil</td>
              </tr>
              <tr className="bg-white">
                <td className="py-3 px-4 border font-medium">V</td>
                <td className="py-3 px-4 border">Morena escura, cabelos pretos</td>
                <td className="py-3 px-4 border">Raramente queima, bronzeia intensamente</td>
                <td className="py-3 px-4 border">Raramente eritema, bronzeamento intenso</td>
              </tr>
              <tr className="bg-secondary/30">
                <td className="py-3 px-4 border font-medium">VI</td>
                <td className="py-3 px-4 border">Negra, cabelos pretos</td>
                <td className="py-3 px-4 border">Nunca queima, bronzeia intensamente</td>
                <td className="py-3 px-4 border">Sem eritema, pele naturalmente negra</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          A escala de Fitzpatrick, criada em 1976 pelo médico norte-americano Thomas B. Fitzpatrick, classifica a pele em seis fototipos, a partir da capacidade de cada pessoa em se bronzear, assim como a sensibilidade e vermelhidão quando exposta ao sol.
        </p>

        <h3>Pigmentação da Pele</h3>
        <p>
          A cor da pele se deve à ação de quatro pigmentos: melanina (marrom), carotenos (amarela), hemoglobinas oxigenadas presentes nos capilares (vermelha) e hemoglobinas reduzidas presentes nas vênulas (azulada).
        </p>

        <h3>Melanócitos e Melanina</h3>
        <p>
          Os melanócitos são encontrados nas camadas basal e espinhosa, ou abaixo da camada basal da epiderme. Eles produzem melanina em resposta à exposição aos raios UV.
        </p>
        <p>
          A melanina é um pigmento natural que protege a pele contra os danos causados pelos raios solares.
        </p>

        <div className="my-6 p-5 bg-accent/30 rounded-lg">
          <h4 className="font-semibold text-lg mb-2">Tipos de Melanina:</h4>
          <ul className="list-disc pl-6">
            <li><strong>Eumelanina:</strong> Presente em indivíduos brancos, amarelos, mulatos e negros</li>
            <li><strong>Feomelanina:</strong> Presente em indivíduos com cabelo claro ou ruivo, pele branca com efélides e olhos claros</li>
          </ul>
        </div>

        <h3>Melanogênese</h3>
        <p>
          A melanogênese é a biossíntese da melanina. É uma série de reações oxidativas, onde o aminoácido L-tirosina é transformado em coloração preta, marrom, marrom-amarelado ou vermelha e marrom-avermelhado. Essa formação ocorre em organelas citoplasmáticas específicas chamadas melanossomos.
        </p>
        <p>
          O melanócito possui prolongamentos, melanina, melanossomos, núcleo, complexo de Golgi, retículo endoplasmático e mitocôndria.
        </p>
        <p>
          A tirosinase é uma enzima que catalisa as reações de tirosina em di-hidroxifenilalanina (dopa) e subsequente oxidação em dopaquinona. Após todo o processo de perda de dióxido de carbono, a quinona é convertida em melanina.
        </p>
        <p>
          Os queratinócitos fagocitam as pontas dos melanócitos dendríticos que estão repletos de melanina. Essa ação também é responsável pela pigmentação da pele, pois é dependente da quantidade de melanina transferida para os queratinócitos.
        </p>

        <h3>Discromias</h3>
        <p>
          Discromias compreendem um grupo variado de dermopatias, de origem endógena ou exógena. São modificações da cor natural da pele.
        </p>
        <p>
          Os tipos de discromias são hipercromias/hipermelanose, hipocromias/hipomelanose e acromias.
        </p>
      </ContentSection>

      <Footer />
    </div>
  );
};

export default Index;
