'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, ArrowRight } from 'lucide-react';

const LeadMagnet = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show popup after 5 seconds
        const timer = setTimeout(() => {
            const dismissed = localStorage.getItem('leadMagnetDismissed');
            if (!dismissed) {
                setIsVisible(true);
            }
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const dismiss = () => {
        setIsVisible(false);
        localStorage.setItem('leadMagnetDismissed', 'true');
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: 100 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: 100 }}
                    className="fixed bottom-8 right-8 z-[60] w-[350px] max-w-[calc(100vw-2rem)]"
                >
                    <div className="bg-navy rounded-3xl p-8 shadow-2xl border border-gold/30 relative overflow-hidden group">
                        {/* Background Glow */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl group-hover:bg-gold/20 transition-all" />

                        <button
                            onClick={dismiss}
                            className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
                        >
                            <X size={20} />
                        </button>

                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-gold rounded-2xl flex items-center justify-center text-navy mb-6 shadow-xl shadow-gold/20 rotate-3 group-hover:rotate-0 transition-transform">
                                <Gift size={28} />
                            </div>

                            <h4 className="text-2xl font-bold text-white mb-3 leading-tight">
                                Ready for your <span className="text-gold">Next Adventure?</span> 🌊
                            </h4>

                            <p className="text-white/70 text-sm mb-8 leading-relaxed">
                                Get a <span className="text-white font-bold">FREE personalized quote</span> for your dream vacation today! Our experts are ready to help.
                            </p>

                            <a
                                href="#contact"
                                onClick={dismiss}
                                className="flex items-center justify-between w-full bg-gold hover:bg-gold-dark text-navy font-black px-6 py-4 rounded-xl transition-all group/btn"
                            >
                                Claim Free Quote
                                <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LeadMagnet;
