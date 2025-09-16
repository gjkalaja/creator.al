
import React from 'react';
import { addonFeatures } from '../constants';
import type { AddonFeature } from '../types';

const AddonCard: React.FC<{ feature: AddonFeature }> = ({ feature }) => {
    const isCustomPrice = feature.price === 'Na Kontaktoni';

    return (
        <div className="bg-brand-gray border border-brand-light-gray rounded-2xl hover:border-brand-accent transition-all duration-300 flex flex-col overflow-hidden transform hover:-translate-y-1">
            <div className="p-8 flex flex-col flex-grow">
                <div className="mb-6">
                    <img src={feature.icon} alt={`${feature.title} icon`} className="h-16 w-16" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
                
                <div className="mt-auto pt-6">
                    <p className="text-sm text-gray-400">
                        {isCustomPrice ? (
                            <span className="text-white font-semibold">{feature.price}</span>
                        ) : (
                            <>Duke filluar nga <span className="text-white font-semibold">{feature.price}</span></>
                        )}
                    </p>
                    <a href="#" className="mt-2 text-brand-accent font-medium flex items-center group">
                        {isCustomPrice ? 'Diskuto projektin' : 'Krijo llogari'}
                        <span className="ml-2 transform transition-transform group-hover:translate-x-1">&rarr;</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

const Addons: React.FC = () => {
  return (
    <section id="addons" className="py-12 lg:py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight">
          Mjete të fuqishme shtesë
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          Zgjeroni krijimtarinë tuaj me AI të trajnuar për krijuesit modernë.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {addonFeatures.map((feature, index) => (
          <AddonCard key={index} feature={feature} />
        ))}
      </div>
    </section>
  );
};

export default Addons;