'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { services } from '@/data/content';

const Services = () => {
    return (
        <section id="services" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-gold font-bold text-sm uppercase tracking-widest mb-2">High Quality Services</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-navy mb-4">What We Offer</h3>
                        <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
                        <p className="mt-6 text-navy/60 max-w-2xl mx-auto">
                            K-MERTZ Travel and Tours provides a comprehensive range of travel solutions
                            to make your journey seamless and unforgettable.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-8 rounded-2xl bg-white border border-navy/5 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5 transition-all duration-300"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-navy/5 flex items-center justify-center text-navy mb-6 group-hover:bg-gold group-hover:text-navy transition-colors duration-300">
                                <service.icon size={32} />
                            </div>
                            <h4 className="text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">{service.name}</h4>
                            <p className="text-navy/60 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
