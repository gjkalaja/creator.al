import React from 'react';
import { partnerLogos } from '../constants';

const Partners: React.FC = () => {
  return (
    <div className="py-8 text-center">
        <h2 className="text-sm font-medium text-gray-400 mb-8 tracking-wider uppercase">
            Media që përdorin mjetet tona
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center md:flex-wrap gap-y-8 md:gap-y-4 gap-x-12 sm:gap-x-16 md:gap-x-20 lg:gap-x-24 px-4">
            {partnerLogos.map((logo, index) => (
                <div key={index}>
                    <img
                        src={logo.src}
                        alt={logo.alt}
                        className="h-8 filter grayscale opacity-60 hover:opacity-100 transition-opacity duration-300"
                    />
                </div>
            ))}
        </div>
    </div>
  );
};

export default Partners;