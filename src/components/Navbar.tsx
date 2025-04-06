
import React from 'react';
import { cn } from '@/lib/utils';
import { BookOpen, Search, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <BookOpen className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-serif font-semibold">StudyWel</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#introducao"
              className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Introdução
            </a>
            <a
              href="#anatomia"
              className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Anatomia da Pele
            </a>
            <a
              href="#tipos-pele"
              className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Tipos de Pele
            </a>
            <a
              href="#fitzpatrick"
              className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Classificação de Fitzpatrick
            </a>
            <div className="ml-4">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center"
              >
                <Search className="h-4 w-4 mr-2" />
                <span>Buscar</span>
              </Button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-inner">
          <a
            href="#introducao"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-secondary"
            onClick={toggleMenu}
          >
            Introdução
          </a>
          <a
            href="#anatomia"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-secondary"
            onClick={toggleMenu}
          >
            Anatomia da Pele
          </a>
          <a
            href="#tipos-pele"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-secondary"
            onClick={toggleMenu}
          >
            Tipos de Pele
          </a>
          <a
            href="#fitzpatrick"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-secondary"
            onClick={toggleMenu}
          >
            Classificação de Fitzpatrick
          </a>
          <div className="pt-2">
            <div className="relative">
              <div className="flex items-center border rounded-md bg-gray-50">
                <Search className="h-4 w-4 ml-3 text-gray-400" />
                <input
                  type="text"
                  className="w-full px-3 py-2 text-sm bg-transparent focus:outline-none"
                  placeholder="Buscar conteúdo..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
