'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Anchor } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background with overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")', // Luxury cruise placeholder
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/60 to-transparent" />
                <div className="absolute inset-0 bg-navy/20" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center space-x-2 bg-gold/10 backdrop-blur-md border border-gold/30 px-4 py-2 rounded-full mb-6">
                            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                            <span className="text-gold text-xs font-bold uppercase tracking-widest">Premium Cruise Experience</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1]">
                            Cruise the <span className="text-gold">Japan & Taiwan</span> Seas with Costa Serena
                        </h1>

                        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
                            Experience unparalleled luxury and breathtaking destinations with K-MERTZ Travel and Tours.
                            No Visa required, 20% downpayment, and world-class service await you.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#contact"
                                className="group bg-gold hover:bg-gold-dark text-navy px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2"
                            >
                                Inquire Now
                                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#itinerary"
                                className="bg-navy/40 backdrop-blur-md border border-white/20 hover:bg-navy/60 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2"
                            >
                                <Anchor size={20} />
                                View Itinerary
                            </a>
                        </div>
                    </motion.div>

                    {/* Stats Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-8"
                    >
                        <div>
                            <p className="text-gold font-bold text-3xl">20%</p>
                            <p className="text-white/60 text-sm">Downpayment</p>
                        </div>
                        <div>
                            <p className="text-gold font-bold text-3xl">Visa-Free</p>
                            <p className="text-white/60 text-sm">Destinations</p>
                        </div>
                        <div>
                            <p className="text-gold font-bold text-3xl">8 Days</p>
                            <p className="text-white/60 text-sm">Luxury Travel</p>
                        </div>
                        <div>
                            <p className="text-gold font-bold text-3xl">Costa Serena</p>
                            <p className="text-white/60 text-sm">Premium Ship</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <span className="text-white/40 text-xs font-medium uppercase tracking-[0.2em]">Explore</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-gold/60 to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;
