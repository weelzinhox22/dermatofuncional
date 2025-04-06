
import React from 'react';
import { cn } from '@/lib/utils';

interface ContentSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const ContentSection = ({ id, title, children, className }: ContentSectionProps) => {
  return (
    <section id={id} className={cn("py-12 scroll-mt-20", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-6">{title}</h2>
          <div className="content-section prose prose-lg max-w-none">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
