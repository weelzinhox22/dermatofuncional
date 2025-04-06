
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContentSection from '@/components/ContentSection';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Eletroterapia = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="bg-gradient-to-b from-accent/50 to-white py-12 md:py-24">
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
                Eletroterapia
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-700 animate-fade-in">
                Técnicas e princípios da aplicação terapêutica de correntes elétricas
              </p>
            </div>
          </div>
        </div>
      </div>

      <ContentSection id="radiofrequencia" title="Radiofrequência">
        <p>
          A Radiofrequência é uma tecnologia originalmente desenvolvida nos Estados Unidos para tratar a flacidez 
          facial sem a necessidade de intervenção cirúrgica. O equipamento emite ondas de energia de alta frequência 
          que, ao entrarem em contato com as camadas mais profundas da pele, promovem uma rápida movimentação das moléculas 
          de água, gerando um aquecimento controlado.
        </p>

        <p>
          Esse aquecimento provoca a contração das fibras de colágeno já existentes. O tratamento é considerado indolor, 
          não invasivo e não causa ablação, podendo ser realizado em qualquer época do ano e em todos os tipos de pele.
        </p>

        <div className="my-6 bg-secondary/70 p-5 rounded-lg">
          <h4 className="font-semibold text-lg mb-2">Efeitos Fisiológicos:</h4>
          <p>
            Quando elevamos a temperatura do tecido local entre 40°C e 43°C, desencadeamos uma série de reações fisiológicas 
            que levam à vasodilatação e estimulam a neocolagênese, ou seja, a formação de novo colágeno.
          </p>
        </div>

        <h3>Tipos de Aplicadores</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <Card className="p-5 hover:shadow-md transition-shadow">
            <h4 className="font-serif font-semibold text-primary text-xl mb-3">Monopolar</h4>
            <p className="mb-3">
              Atinge profundidades maiores, sendo ideal para tratar áreas com maior concentração de gordura. Utiliza um 
              eletrodo dispersivo (placa) e um eletrodo ativo (manopla). A corrente elétrica penetra na pele através da 
              manopla e retorna ao equipamento através da placa, posicionada em uma área distante da região de tratamento. 
              A profundidade de alcance pode chegar a 6mm.
            </p>
          </Card>

          <Card className="p-5 hover:shadow-md transition-shadow">
            <h4 className="font-serif font-semibold text-primary text-xl mb-3">Bipolar e Tripolar</h4>
            <p className="mb-3">
              Mais indicados para tecidos mais superficiais. O aplicador bipolar possui os dois eletrodos (saída e retorno) 
              no próprio cabeçote, atingindo uma profundidade de até 2mm. O tripolar possui três eletrodos no mesmo cabeçote, 
              com a energia sendo distribuída entre eles.
            </p>
          </Card>
        </div>

        <p>
          A frequência da radiofrequência influencia a profundidade de ação: frequências mais baixas penetram mais profundamente. 
          Por exemplo, 2.4 MHz é usada para tratamentos superficiais como flacidez e estrias, 1.2 MHz para celulite ou gordura, 
          e 0.8 MHz para áreas com mais gordura.
        </p>

        <h3>Tipos de Manoplas</h3>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Monopolar:</strong> Utilizada para tratamentos profundos, como flacidez e gordura localizada.</li>
          <li><strong>Bipolar:</strong> Mais adequada para tratamentos superficiais, como rugas e flacidez leve.</li>
          <li><strong>Tripolar:</strong> Distribui a energia de forma menos homogênea.</li>
          <li><strong>Hexapolar:</strong> Proporciona maior homogeneidade na passagem de energia e cobre uma área maior de tratamento.</li>
        </ul>

        <h3>Temperatura e Aplicação</h3>
        <p>
          A temperatura é um fator importante: temperaturas mais baixas (37-38°C) são usadas para tratar fibroses, cicatrizes 
          e celulite inflamatória, enquanto temperaturas mais altas (40-42°C) estimulam a síntese de colágeno, sendo ideais 
          para flacidez. No passado, temperaturas ainda mais altas (42-45°C) eram utilizadas para gordura localizada, mas 
          estudos recentes indicam que 38°C pode ser mais adequado.
        </p>

        <div className="my-8 bg-accent/20 p-6 rounded-lg border border-accent/30">
          <h3 className="text-xl font-semibold text-primary mb-3">Procedimento de Aplicação:</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Ligue o aparelho e selecione a ponteira apropriada</li>
            <li>Aplique gel ou glicerina na área limpa</li>
            <li>Divida a área em quadrantes</li>
            <li>Realize movimentos lineares ou circulares</li>
            <li>Ao atingir a temperatura ideal, reduza a intensidade</li>
            <li>Mantenha por cerca de 5 minutos na área tratada</li>
          </ol>
        </div>

        <h3>Contraindicações</h3>
        <p>
          É importante estar ciente das contraindicações da radiofrequência, que incluem gestação, uso de marcapasso, 
          câncer ou metástase, radioterapia prévia, artrite e pacientes imunodeprimidos. Próteses metálicas, áreas 
          cirúrgicas sem cicatrização completa e doenças dermatológicas também são contraindicações.
        </p>
      </ContentSection>

      <Separator className="max-w-4xl mx-auto" />

      <ContentSection id="eletrolipolise" title="Eletrolipólise (Baixa Frequência)">
        <p>
          A eletrolipólise é uma técnica que utiliza agulhas finas associadas a uma corrente de baixa frequência para 
          formar um campo elétrico. Esse estímulo elétrico aumenta a circulação sanguínea, despolariza a membrana celular 
          e promove a lipólise, resultando na diminuição do tecido adiposo abdominal e auxiliando na prevenção ou reversão 
          de problemas cardiovasculares relacionados ao acúmulo de gordura.
        </p>

        <div className="my-6 p-5 bg-primary/10 rounded-lg">
          <h4 className="font-semibold text-lg mb-2">Efeitos Fisiológicos:</h4>
          <ul className="list-disc pl-6">
            <li>Vasodilatação e aumento do fluxo sanguíneo local</li>
            <li>Ativação da microcirculação</li>
            <li>Modificação da permeabilidade da membrana celular</li>
            <li>Estimulação do sistema nervoso simpático</li>
          </ul>
        </div>

        <h3>Efeitos Principais</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <Card className="p-5 hover:shadow-md transition-shadow bg-gradient-to-b from-white to-secondary/20">
            <h4 className="font-serif font-semibold text-primary text-xl mb-3">Estímulo Circulatório</h4>
            <p>
              Produzido pela corrente, auxilia na drenagem da área tratada.
            </p>
          </Card>

          <Card className="p-5 hover:shadow-md transition-shadow bg-gradient-to-b from-white to-secondary/20">
            <h4 className="font-serif font-semibold text-primary text-xl mb-3">Estímulo da Lipólise</h4>
            <p>
              Ocorre direta ou indiretamente pela excitação das terminações nervosas simpáticas e liberação de catecolaminas, 
              que atuam sobre os receptores dos adipócitos e estimulam a enzima que potencializa a lipólise dos triglicerídeos 
              em glicerol e ácidos graxos.
            </p>
          </Card>
        </div>

        <h3>Parâmetros da Eletrolipólise</h3>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Frequência:</strong> 25 Hz a 50 Hz</li>
          <li><strong>Onda:</strong> Contínua</li>
          <li><strong>Tempo:</strong> 30 a 60 minutos</li>
          <li><strong>Intensidade:</strong> Ajustada de acordo com o limiar de dor do paciente, evitando acomodação</li>
        </ul>

        <p>
          As agulhas devem ser inseridas em nível hipodérmico e distribuídas aos pares na região desejada.
        </p>

        <p>
          Na Medicina Tradicional Chinesa (MTC), utiliza-se uma frequência de 300 Hz.
        </p>

        <h3>Equipamentos para Eletrolipólise</h3>
        <p>
          Neurodyn (Aussie), Sikuro, Tens Burst, MES.
        </p>

        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Frequência portadora:</strong> 4000 Hz ou 4 kHz</li>
          <li><strong>Agulhas de acupuntura:</strong> 0,25 x 50 ou 0,25 x 60</li>
        </ul>
      </ContentSection>

      <Separator className="max-w-4xl mx-auto" />

      <ContentSection id="corrente-russa" title="Corrente Russa (Média Frequência)">
        <p>
          A Corrente Russa é uma corrente alternada simétrica, sinusoidal, com frequência de 2500 Hz, utilizada para fins 
          excitatórios na musculatura. Ela estimula o neurônio motor, produzindo contrações musculares controladas. A corrente 
          ativa promove a contração, enquanto a corrente inativa promove o relaxamento muscular, controlados pelos tempos "on" 
          e "off" definidos.
        </p>

        <p>
          A Corrente Russa promove o aumento da força muscular, reduzindo a flacidez. O fortalecimento muscular preenche os 
          espaços de pele relaxados, melhorando a aparência.
        </p>

        <div className="my-8 bg-secondary p-6 rounded-lg border border-primary/20">
          <h3 className="text-xl font-semibold text-primary mb-3">Parâmetros de Aplicação:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Modo Sincrônico:</strong> Todos os canais contraem ao mesmo tempo</li>
            <li><strong>Frequência Modulada:</strong> Depende da camada de gordura; frequências mais altas são mais superficiais (30 a 40 Hz)</li>
            <li><strong>Potência:</strong> 1 a 3</li>
            <li><strong>Tempo:</strong> 15 a 20 minutos</li>
            <li><strong>Isotonia:</strong> Realizar o movimento junto com o aparelho</li>
          </ul>
        </div>

        <h3>Tempos de Aplicação</h3>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Rampa de subida (RISE) e descida (DECAY):</strong> 2 a 5 segundos (devem ser iguais)</li>
          <li><strong>Sustentação ou ON:</strong> Tempo que a corrente está passando – metade do tempo OFF (2 segundos ou mais)</li>
          <li><strong>Repouso ou OFF:</strong> Tempo sem corrente – 3 segundos ou mais, dependendo do tempo ON</li>
          <li><strong>Intensidade:</strong> Contração visível e sensação do paciente</li>
        </ul>

        <p>
          O ideal é que a relação tempo ON/tempo OFF seja de 1s/2s para evitar a fadiga muscular. Se o músculo contrair por 
          3 segundos, ele deve descansar por 6 segundos. O tempo OFF deve ser o dobro do tempo ON.
        </p>

        <h3>Tipos de Fibras Musculares</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <Card className="p-5 hover:shadow-md transition-shadow">
            <h4 className="font-serif font-semibold text-primary text-xl mb-3">Fibras Tônicas (Tipo I ou Vermelhas)</h4>
            <p>
              Produzem contrações de maior duração e menor amplitude, com maior resistência. Frequência ideal: 20 a 30 Hz.
            </p>
          </Card>

          <Card className="p-5 hover:shadow-md transition-shadow">
            <h4 className="font-serif font-semibold text-primary text-xl mb-3">Fibras Fásicas (Tipo II ou Brancas)</h4>
            <p>
              Produzem contrações de curta duração e amplitude máxima, com maior velocidade. São as principais responsáveis 
              pela flacidez e perda de tônus, cansando-se facilmente e não tolerando contrações prolongadas. Frequência 
              ideal: 80 Hz (40 a 150 Hz).
            </p>
          </Card>
        </div>

        <p>
          A contração muscular elétrica causa maior fadiga comparada à contração muscular voluntária.
        </p>

        <h3>Parâmetros por Perfil do Paciente</h3>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Sedentários:</strong> Tempo de contração menor que o tempo de relaxamento, frequência entre 70 e 80 Hz</li>
          <li><strong>Treinados:</strong> Frequência maior, tempo ON igual ao tempo OFF, frequência acima de 90 Hz</li>
          <li><strong>Duração:</strong> Em média 30 minutos. Para sedentários, iniciar com 10 minutos na primeira sessão</li>
        </ul>

        <h3>Contraindicações</h3>
        <p>
          Cardiopatias congestivas, portadores de marca-passo, patologias circulatórias (flebites, embolias, varizes, 
          tromboflebites), gestantes, hipertensos e hipotensos descompensados, processos infecciosos e inflamatórios, 
          neoplasias, problemas renais crônicos, patologias pulmonares (enfisema pulmonar), epilepsia, regiões com dermatites 
          ou dermatoses, lesões musculares, próteses metálicas.
        </p>
      </ContentSection>

      <Separator className="max-w-4xl mx-auto" />

      <ContentSection id="vacuoterapia" title="Vacuoterapia e Peeling de Diamante">
        <div className="my-6 p-5 bg-accent/30 rounded-lg">
          <h4 className="font-semibold text-lg mb-2">Pressões na Vacuoterapia:</h4>
          <ul className="list-disc pl-6">
            <li><strong>Estrias:</strong> -300 mmHg a -600 mmHg</li>
            <li><strong>Celulite Fibrótica:</strong> -200 mmHg</li>
            <li>Não é muito indicada para celulite inflamatória</li>
          </ul>
        </div>

        <p>
          As manobras devem ser realizadas de forma lenta, no sentido das fibras musculares ou linhas de tensão da pele, 
          para evitar a flacidez.
        </p>

        <h3>Peeling de Diamante</h3>
        <p>
          O Peeling de Diamante realiza uma microdermoabrasão por meio de diferentes ponteiras diamantadas de granulometrias. 
          Com uma pressão negativa, a pele é sugada e o terapeuta realiza movimentos com a manopla acoplada à pele, para 
          promover o lixamento dela.
        </p>

        <p>
          No peeling de diamante, a pressão de vácuo é crucial para a eficácia e segurança do procedimento, devendo ser 
          ajustada de acordo com o tipo de pele, sensibilidade e fototipo do cliente, geralmente entre 50-75 mmHg.
        </p>
      </ContentSection>

      <Footer />
    </div>
  );
};

export default Eletroterapia;
