
import React from 'react';
import { BookOpen } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-serif font-semibold">StudyWel</span>
            </div>
            <p className="mt-2 text-sm text-gray-600 max-w-md">
              Material educacional sobre fisioterapia dermatofuncional para estudantes e profissionais da área da saúde.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Conteúdo</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#introducao" className="text-gray-600 hover:text-primary text-sm">
                    Introdução
                  </a>
                </li>
                <li>
                  <a href="#anatomia" className="text-gray-600 hover:text-primary text-sm">
                    Anatomia da Pele
                  </a>
                </li>
                <li>
                  <a href="#tipos-pele" className="text-gray-600 hover:text-primary text-sm">
                    Tipos de Pele
                  </a>
                </li>
                <li>
                  <a href="#fitzpatrick" className="text-gray-600 hover:text-primary text-sm">
                    Classificação de Fitzpatrick
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Recursos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-primary text-sm">
                    Galeria de Imagens
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-primary text-sm">
                    Referências Bibliográficas
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-primary text-sm">
                    Glossário
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Contato</h3>
              <ul className="space-y-2">
                <li className="text-gray-600 text-sm">
                  Email: weelzinhox22@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} StudyWel. Todos os direitos reservados.
          </div>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-primary text-sm">
              Política de Privacidade
            </a>
            <span className="mx-2 text-gray-400">|</span>
            <a href="#" className="text-gray-500 hover:text-primary text-sm">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
