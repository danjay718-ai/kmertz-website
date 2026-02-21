'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Star, Shield, Zap } from 'lucide-react';

const WhyChooseUs = () => {
    const features = [
        {
            title: '20% Downpayment',
            desc: 'Lock in your dream cruise with just a partial payment. Flexible options for everyone.',
            icon: CheckCircle2,
        },
        {
            title: 'Visa-Free Travel',
            desc: 'Explore Japan and Taiwan without the hassle of long visa applications.',
            icon: Star,
        },
        {
            title: 'Expert Assistance',
            desc: 'Our professional team guides you through every step of your travel planning.',
            icon: Shield,
        },
        {
            title: 'Reliable Support',
            desc: '24/7 support during your travels to ensure a smooth and safe journey.',
            icon: Zap,
        },
    ];

    return (
        <section className="py-24 bg-navy relative overflow-hidden">
            {/* Decorative patterns */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full -mr-48 -mt-48 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full -ml-48 -mb-48 blur-3xl" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-gold font-bold text-sm uppercase tracking-widest mb-2 text-center md:text-left">Your Trusted Partner</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight text-center md:text-left">Why Choose K-MERTZ Travel?</h3>
                        <p className="text-white/70 text-lg mb-10 leading-relaxed text-center md:text-left">
                            We understand that travel is about creating memories. That’s why we focus on making the process as
                            simple and trustworthy as possible.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex flex-col items-center md:items-start">
                                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-gold mb-4">
                                        <feature.icon size={24} />
                                    </div>
                                    <h4 className="text-white font-bold mb-2">{feature.title}</h4>
                                    <p className="text-white/60 text-sm text-center md:text-left">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-navy/50 aspect-[4/5] sm:aspect-square">
                            <img
                                src="https://images.unsplash.com/photo-1599640842225-85d111c60e6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Luxury Cruise Ship"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                            <div className="absolute bottom-10 left-10 right-10">
                                <blockquote className="text-white italic text-lg font-medium leading-normal mb-4">
                                    "The most seamless booking experience I've ever had. Their attention to detail is unmatched."
                                </blockquote>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center font-bold text-navy">M</div>
                                    <div>
                                        <cite className="text-white font-bold not-italic">Maria Santos</cite>
                                        <p className="text-gold text-xs">Satisfied Client</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating badge */}
                        <div className="absolute -bottom-6 -right-6 bg-gold p-6 rounded-2xl shadow-xl hidden md:block z-20">
                            <p className="text-navy font-black text-4xl mb-1 italic tracking-tighter line-clamp-1">10,000+</p>
                            <p className="text-navy/70 text-xs font-bold uppercase tracking-wider">Happy Travelers</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
