
import React from 'react';
import { pricingPlans } from '../constants';
import { CheckIcon } from '../constants';
import type { PricingPlan } from '../types';

const PricingCard: React.FC<{ plan: PricingPlan; onContactOpen: () => void; }> = ({ plan, onContactOpen }) => {
    const cardClasses = `
        bg-brand-gray border border-brand-light-gray rounded-2xl p-8 flex flex-col h-full
        transition-all duration-300 transform hover:-translate-y-2
        ${plan.isPopular ? 'border-brand-accent shadow-2xl shadow-brand-accent/10' : 'hover:border-white/50'}
    `;

    const buttonClasses = `
        w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors
        ${plan.isPopular 
            ? 'bg-brand-accent text-black hover:bg-lime-400' 
            : 'bg-white text-black hover:bg-gray-200'
        }
    `;

    const isCustom = plan.price === 'Custom';

    return (
        <div className={cardClasses}>
            {plan.isPopular && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                    <span className="bg-brand-accent text-black text-xs font-bold px-3 py-1 rounded-full uppercase">
                        Më i preferuari
                    </span>
                </div>
            )}
            <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
            <p className="text-gray-400 mb-6 flex-grow">{plan.description}</p>
            
            <div className="mb-8">
                {isCustom ? (
                    <span className="text-4xl font-black text-white">I personalizuar</span>
                ) : (
                    <>
                        <span className="text-5xl font-black text-white">€{plan.price}</span>
                        <span className="text-gray-400"> / muaj</span>
                    </>
                )}
            </div>

            <ul className="space-y-4 mb-8 text-gray-300">
                {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                        <CheckIcon />
                        <span className="ml-3">{feature}</span>
                    </li>
                ))}
            </ul>

            <div className="mt-auto">
                {isCustom ? (
                   <button onClick={onContactOpen} className={buttonClasses}>
                       {plan.ctaText}
                   </button>
                ) : (
                    <a href={plan.ctaHref} className={buttonClasses}>
                        {plan.ctaText}
                    </a>
                )}
            </div>
        </div>
    );
};


const Pricing: React.FC<{ onContactOpen: () => void }> = ({ onContactOpen }) => {
  return (
    <section id="pricing" className="py-12 lg:py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight">
          Çmime transparente dhe fleksibël
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          Zgjidhni planin që i përshtatet më së miri nevojave tuaja. Pa kontrata afatgjata.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="relative">
            <PricingCard plan={plan} onContactOpen={onContactOpen} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;