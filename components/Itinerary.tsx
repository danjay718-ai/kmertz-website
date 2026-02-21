'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cruiseItinerary } from '@/data/content';
import { MapPin, Calendar, Ship } from 'lucide-react';
import { cn } from '@/lib/utils';

const Itinerary = () => {
    const [activeDay, setActiveDay] = useState(1);

    return (
        <section id="itinerary" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-12 gap-12 items-start">

                    {/* Left Column: Title & Day Navigation */}
                    <div className="lg:col-span-4">
                        <h2 className="text-gold font-bold text-sm uppercase tracking-widest mb-2">The Journey</h2>
                        <h3 className="text-4xl font-bold text-navy mb-8">8-Day Japan & Taiwan Cruise Itinerary</h3>

                        <div className="space-y-2">
                            {cruiseItinerary.map((item) => (
                                <button
                                    key={item.day}
                                    onClick={() => setActiveDay(item.day)}
                                    className={cn(
                                        "w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 text-left border-2",
                                        activeDay === item.day
                                            ? "bg-navy border-navy text-white shadow-lg translate-x-2"
                                            : "bg-white border-transparent text-navy/60 hover:bg-navy/5 hover:border-navy/10"
                                    )}
                                >
                                    <span className={cn(
                                        "w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0",
                                        activeDay === item.day ? "bg-gold text-navy" : "bg-navy/10 text-navy"
                                    )}>
                                        {item.day}
                                    </span>
                                    <div>
                                        <p className="font-bold text-sm leading-tight">{item.title}</p>
                                        <p className={cn(
                                            "text-[10px] uppercase font-bold tracking-widest mt-1",
                                            activeDay === item.day ? "text-gold/80" : "text-navy/40"
                                        )}>Day {item.day}</p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Day Detail */}
                    <div className="lg:col-span-8 sticky top-24">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeDay}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="bg-navy rounded-[2rem] p-8 md:p-12 text-white relative h-full min-h-[500px] flex flex-col justify-center"
                            >
                                {/* Background Decoration */}
                                <div className="absolute top-10 right-10 opacity-10 pointer-events-none">
                                    <Ship size={200} />
                                </div>

                                <div className="relative z-10">
                                    <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-2 rounded-full mb-8">
                                        <Calendar size={18} />
                                        <span className="font-bold text-sm tracking-wide">DAY {activeDay} PLAN</span>
                                    </div>

                                    <h4 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                                        {cruiseItinerary.find(d => d.day === activeDay)?.title}
                                    </h4>

                                    <div className="flex items-start gap-4 mb-8">
                                        <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0 mt-1">
                                            <MapPin size={20} />
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-gold text-lg mb-1">Destination Activities</h5>
                                            <p className="text-white/80 text-xl leading-relaxed">
                                                {cruiseItinerary.find(d => d.day === activeDay)?.activity}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="pt-8 border-t border-white/10 mt-auto">
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                            <div>
                                                <p className="text-white/40 text-xs font-bold uppercase mb-1">Accommodation</p>
                                                <p className="text-white font-medium">Stateroom Suite</p>
                                            </div>
                                            <div>
                                                <p className="text-white/40 text-xs font-bold uppercase mb-1">Meals</p>
                                                <p className="text-white font-medium">Breakfast, Lunch, Dinner</p>
                                            </div>
                                            <div className="hidden md:block">
                                                <p className="text-white/40 text-xs font-bold uppercase mb-1">Ship Status</p>
                                                <p className="text-white font-medium">Docked / At Sea</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Itinerary;
