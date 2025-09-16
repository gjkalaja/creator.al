import React, { useState } from 'react';
import { faqItems } from '../constants';
import type { FAQItem } from '../types';

const FAQItemComponent: React.FC<{ item: FAQItem; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => {
    const itemClasses = `
        bg-brand-gray border border-brand-light-gray 
        rounded-2xl transition-all duration-300 mb-4
        ${isOpen ? 'border-brand-accent/50 bg-[#1A2E00]' : 'hover:border-brand-accent'}
    `;

    return (
        <div className={itemClasses}>
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center text-left text-lg font-medium text-white p-6 focus:outline-none"
            >
                <span className="flex-1 pr-4">{item.question}</span>
                <div className="text-2xl text-gray-400">
                    {isOpen ? '−' : '+'}
                </div>
            </button>
            <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}
            >
                <div className="px-6 pb-6">
                    <p className="text-gray-300">
                        {item.answer}
                    </p>
                </div>
            </div>
        </div>
    );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default first item to be open

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 lg:py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Mësoni rreth teknologjisë sonë
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Gjenerimi i zërit AI & Teknologjia e shndërrimit të tekstit në të folur
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        {faqItems.map((item, index) => (
          <FAQItemComponent
            key={index}
            item={item}
            isOpen={openIndex === index}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;