
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContentSection from '@/components/ContentSection';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Discromias = () => {
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
        
        <h1 className="text-4xl font-bold text-primary mb-8 font-serif">Discromias</h1>
        
        <div className="bg-white shadow-md rounded-lg p-6 md:p-8 mb-8">
          <ContentSection className="content-section prose max-w-none">
            <h2>O que são Discromias?</h2>
            <p>
              As discromias são um grupo variado de dermopatias, de origem endógena ou exógena, que modificam a cor natural da pele. Existem três tipos principais de discromias: hipercromias/hipermelanose, hipocromias/hipomelanose e acromias.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 my-8">
              <h3 className="text-xl font-semibold text-primary mb-4">Pigmentação da Pele</h3>
              <p>A coloração da pele é um resultado da interação de quatro pigmentos naturais:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <li className="bg-amber-100 p-4 rounded-lg">
                  <span className="font-semibold">Melanina:</span> Pigmento marrom
                </li>
                <li className="bg-yellow-100 p-4 rounded-lg">
                  <span className="font-semibold">Carotenos:</span> Pigmento amarelo
                </li>
                <li className="bg-red-100 p-4 rounded-lg">
                  <span className="font-semibold">Hemoglobinas oxigenadas:</span> Pigmento vermelho (nos capilares)
                </li>
                <li className="bg-blue-100 p-4 rounded-lg">
                  <span className="font-semibold">Hemoglobinas reduzidas:</span> Pigmento azulado (nas vênulas)
                </li>
              </ul>
              <p className="mt-4">A combinação destes pigmentos determina a cor da pele. A melanina não só colore a pele, os olhos e os cabelos, mas também protege contra os raios solares.</p>
            </div>
            
            <h2>Melanócitos e Melanogênese</h2>
            <div className="grid md:grid-cols-2 gap-8 my-8">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-3">Estrutura do Melanócito</h3>
                <p>O melanócito possui prolongamentos, melanossomas, núcleo, complexo de Golgi, retículo endoplasmático e mitocôndria. Os melanócitos são encontrados nas camadas basal e espinhosa da epiderme. Eles transferem melanina para os queratinócitos através de seus dendritos.</p>
                <p className="mt-2">Os prolongamentos dos melanócitos transferem a melanina para as células epiteliais. Os queratinócitos fagocitam as pontas dos melanócitos dendríticos repletos de melanina, o que contribui para a pigmentação da pele, dependendo da quantidade de melanina transferida.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-3">Melanogênese</h3>
                <p>A melanogênese é a biossíntese da melanina, uma série de reações oxidativas que transformam o aminoácido L-tirosina em pigmentos de diferentes cores. Esse processo ocorre nos melanossomos.</p>
                <p className="mt-2">A tirosinase é a enzima que catalisa a transformação da tirosina em dopa e, subsequentemente, em dopaquinona. Após a perda de dióxido de carbono, a quinona é convertida em melanina.</p>
              </div>
            </div>
            
            <h3>Tipos de Melanina</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="bg-amber-50 p-5 rounded-lg border border-amber-100">
                <h4 className="font-semibold text-primary">Eumelanina</h4>
                <p>Presente em indivíduos brancos, amarelos, mulatos e negros.</p>
              </div>
              <div className="bg-orange-50 p-5 rounded-lg border border-orange-100">
                <h4 className="font-semibold text-primary">Feomelanina</h4>
                <p>Presente em indivíduos com cabelo claro ou ruivo, pele branca com efélides e olhos claros.</p>
              </div>
            </div>
            
            <h2>Hipercromias</h2>
            <p>
              As hipercromias, também chamadas de hiperpigmentações ou hipermelanoses, são distúrbios de pigmentação causados por uma produção exagerada de melanina. As manchas hiperpigmentadas podem surgir devido ao envelhecimento, alterações hormonais, inflamações, alergias e exposição solar.
            </p>
            
            <p>
              As afecções hipercrômicas de origem epidérmica se manifestam como manchas castanhas devido ao aumento da melanina na epiderme, crescimento da atividade e número de melanócitos, e elevação do número e tamanho dos melanossomas.
            </p>
            
            <h3>Exemplos de Hipercromias</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-primary">Melanocitose Dérmica Congênita</h4>
                <p className="text-sm">Também conhecida como mancha mongólica.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-primary">Efélides</h4>
                <p className="text-sm">Conhecidas popularmente como sardas.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-primary">Lentigo Senil</h4>
                <p className="text-sm">Manchas que aparecem em áreas expostas ao sol em pessoas mais velhas.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-primary">Lentigo Solar</h4>
                <p className="text-sm">Manchas no tórax devido à exposição solar.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-primary">Melasma ou Cloasma</h4>
                <p className="text-sm">Manchas marrons na face, relacionadas a alterações hormonais. Chamado de cloasma quando ocorre na gravidez.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-primary">Hipercromias Pós-inflamatórias</h4>
                <p className="text-sm">Manchas que surgem após processos inflamatórios na pele.</p>
              </div>
            </div>
            
            <h2>Classificação de Fitzpatrick</h2>
            <p>A Classificação de Fitzpatrick é utilizada para determinar o fototipo cutâneo, baseando-se na reatividade da pele à luz solar e na formação de eritema decorrente da radiação ultravioleta (UV).</p>
            
            <div className="overflow-x-auto my-8">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="border border-gray-300 px-4 py-2">Fototipo</th>
                    <th className="border border-gray-300 px-4 py-2">Pigmentação</th>
                    <th className="border border-gray-300 px-4 py-2">Reação à Exposição Solar</th>
                    <th className="border border-gray-300 px-4 py-2">Aparência</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">I</td>
                    <td className="border border-gray-300 px-4 py-2">Pele muito clara</td>
                    <td className="border border-gray-300 px-4 py-2">Sempre queima, nunca bronzeia</td>
                    <td className="border border-gray-300 px-4 py-2">Cabelo loiro/ruivo, olhos azuis</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">II</td>
                    <td className="border border-gray-300 px-4 py-2">Pele clara</td>
                    <td className="border border-gray-300 px-4 py-2">Queima facilmente, bronzeia minimamente</td>
                    <td className="border border-gray-300 px-4 py-2">Cabelo loiro/ruivo, olhos azuis/verdes</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">III</td>
                    <td className="border border-gray-300 px-4 py-2">Pele menos clara</td>
                    <td className="border border-gray-300 px-4 py-2">Queima moderadamente, bronzeia gradualmente</td>
                    <td className="border border-gray-300 px-4 py-2">Cabelo castanho, olhos variados</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">IV</td>
                    <td className="border border-gray-300 px-4 py-2">Pele morena clara</td>
                    <td className="border border-gray-300 px-4 py-2">Queima minimamente, bronzeia facilmente</td>
                    <td className="border border-gray-300 px-4 py-2">Cabelo castanho escuro, olhos escuros</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">V</td>
                    <td className="border border-gray-300 px-4 py-2">Pele morena escura</td>
                    <td className="border border-gray-300 px-4 py-2">Raramente queima, bronzeia abundantemente</td>
                    <td className="border border-gray-300 px-4 py-2">Cabelo preto, olhos escuros</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">VI</td>
                    <td className="border border-gray-300 px-4 py-2">Pele negra</td>
                    <td className="border border-gray-300 px-4 py-2">Nunca queima, bronzeia profundamente</td>
                    <td className="border border-gray-300 px-4 py-2">Cabelo preto, olhos escuros</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h2>Tratamento das Discromias</h2>
            <p>O tratamento das discromias envolve o uso de princípios ativos despigmentantes. Ativos despigmentantes são agentes cosméticos que reduzem a hipercromia, interferindo na produção ou transferência de melanina para a epiderme.</p>
            
            <h3>Mecanismos de Ação dos Despigmentantes</h3>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Destruição seletiva dos melanócitos</li>
              <li>Inibição da formação dos melanossomas</li>
              <li>Interferência na biossíntese de melanina por meio da inibição da tirosinase</li>
              <li>Inibição da formação da melanina</li>
              <li>Interferência no transporte de melanina para as células</li>
              <li>Alteração química da melanina para torná-la mais clara</li>
              <li>Degradação de melanossomas e queratinócitos</li>
            </ul>
            
            <h3>Ácidos Despigmentantes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
              <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                <h4 className="font-semibold text-primary">Ácido Kójico</h4>
                <p className="text-sm">Inibe a tirosinase, hidrata a pele e não causa fotossensibilização.</p>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                <h4 className="font-semibold text-primary">Ácido Mandélico</h4>
                <p className="text-sm">Alfa-hidroxiácido (AHA) com efeito despigmentante e anti-inflamatório.</p>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                <h4 className="font-semibold text-primary">Ácido Fítico</h4>
                <p className="text-sm">Presente em cereais integrais, com efeito despigmentante.</p>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                <h4 className="font-semibold text-primary">Arbutin</h4>
                <p className="text-sm">Derivado da hidroquinona, inibe a tirosinase e causa menos irritação.</p>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                <h4 className="font-semibold text-primary">Ácido Glicólico</h4>
                <p className="text-sm">AHA que promove flexibilidade, hidratação, aumento de fibras colágenas e elásticas, além de descamação.</p>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                <h4 className="font-semibold text-primary">Ácido Azelaico</h4>
                <p className="text-sm">Inibidor competitivo das enzimas de oxirredução e antioxidante, eficaz no tratamento de hiperpigmentação pós-inflamatória e melasma.</p>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                <h4 className="font-semibold text-primary">Ácido Ascórbico (Vitamina C)</h4>
                <p className="text-sm">Inibe a formação de melanina, age sinergicamente com as vitaminas A e E.</p>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                <h4 className="font-semibold text-primary">Ácido Retinoico</h4>
                <p className="text-sm">Tretinoína ou vitamina A ácida, agente farmacologicamente potente para aplicação tópica na pele.</p>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                <h4 className="font-semibold text-primary">Hidroquinona</h4>
                <p className="text-sm">Age diretamente sobre os melanócitos, inibindo a oxidação da tirosina e podendo degradar os melanossomas.</p>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 my-8">
              <h3 className="text-xl font-semibold text-primary mb-4">Importante: Uso de Fotoproteção</h3>
              <p>É necessário o uso de filtros solares durante e após o tratamento para evitar a recorrência da pigmentação. A hidroquinona teve seu uso banido em alguns países devido a efeitos colaterais como ocronose exógena e associação com metais pesados.</p>
            </div>
            
            <h3>Outros Ativos Despigmentantes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-primary">Aleosina</h4>
                <p className="text-sm">Obtida da aloe vera, inibe a tirosinase.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-primary">Ácido Láctico</h4>
                <p className="text-sm">Suprime a formação da enzima tirosinase, prevenindo a formação de melanina.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-primary">Ácido Alfalipoico</h4>
                <p className="text-sm">Usado para a inibição da tirosina.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-primary">Melawhite</h4>
                <p className="text-sm">Age na tirosinase e degrada a melanina existente.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-primary">Niacinamida (B3)</h4>
                <p className="text-sm">Inibe a transferência de melanina dos melanócitos para as células de superfície.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-primary">Melfade</h4>
                <p className="text-sm">Composto por uva-ursi associada ao fosfato de ascorbil magnésio, inibe a tirosinase e degrada a melanina existente.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-primary">Melanozyme</h4>
                <p className="text-sm">Derivado de cogumelos, destrói a melanina.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-primary">Alpha Bisabolol</h4>
                <p className="text-sm">Melhora a aparência da pele desidratada ou danificada, reduz a descamação e restaura a elasticidade, além de possuir propriedades anti-irritantes, anti-inflamatórias e antimicrobianas.</p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 my-8">
              <h3 className="text-xl font-semibold text-primary mb-4">Relação entre Fototipos e Discromias</h3>
              <p>Fototipos mais claros apresentam:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Maior grau de envelhecimento cutâneo precoce</li>
                <li>Maior possibilidade de hipopigmentação</li>
                <li>Menor propensão a hiperpigmentação</li>
              </ul>
              <p className="mt-4">Fototipos escuros têm:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Alta possibilidade de apresentar manchas hiperpigmentadas em áreas expostas</li>
              </ul>
            </div>
            
            <h2>Importância da Hidratação</h2>
            <p>A hidratação é fundamental no tratamento das discromias. Uma pele bem hidratada responde melhor aos tratamentos despigmentantes e mantém sua barreira cutânea saudável, o que ajuda a prevenir novas alterações de pigmentação.</p>
          </ContentSection>
        </div>
        
      </main>
      
      <Footer />
    </div>
  );
};

export default Discromias;
