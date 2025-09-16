
import React, { useEffect } from 'react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[99] flex items-center justify-center transition-opacity duration-300"
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <div
                className="bg-brand-gray border border-brand-light-gray rounded-2xl shadow-2xl p-8 relative w-full max-w-md mx-4 transform transition-transform duration-300 scale-95 animate-scale-in"
                onClick={(e) => e.stopPropagation()}
            >
                <style>{`
                    @keyframes scale-in {
                        from { transform: scale(0.95); opacity: 0; }
                        to { transform: scale(1); opacity: 1; }
                    }
                    .animate-scale-in { animation: scale-in 0.2s ease-out forwards; }
                `}</style>
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
                    aria-label="Close contact form"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold tracking-tight text-white">
                        Na Kontaktoni
                    </h2>
                    <p className="mt-2 text-gray-400">
                        Dërgojeni një mesazh dhe do t'ju përgjigjemi së shpejti.
                    </p>
                </div>
                
                <form className="space-y-4">
                    <div>
                        <label htmlFor="modal-name" className="sr-only">Emri</label>
                        <input
                            type="text"
                            name="name"
                            id="modal-name"
                            placeholder="Emri juaj"
                            className="w-full bg-brand-light-gray border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-accent"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="modal-email" className="sr-only">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="modal-email"
                            placeholder="Email adresa juaj"
                            className="w-full bg-brand-light-gray border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-accent"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="modal-phone" className="sr-only">Numri i telefonit</label>
                        <input
                            type="tel"
                            name="phone"
                            id="modal-phone"
                            placeholder="Numri i telefonit (Opsional)"
                            className="w-full bg-brand-light-gray border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-accent"
                        />
                    </div>
                    <div>
                        <label htmlFor="modal-message" className="sr-only">Mesazhi</label>
                        <textarea
                            name="message"
                            id="modal-message"
                            rows={4}
                            placeholder="Mesazhi juaj"
                            className="w-full bg-brand-light-gray border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-accent resize-none"
                            required
                        ></textarea>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-brand-accent text-black font-semibold px-6 py-3 rounded-lg hover:bg-lime-400 transition-colors"
                        >
                            Dërgo Mesazhin
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactModal;
