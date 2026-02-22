'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-navy text-white pt-24 pb-12 border-t border-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Info */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <img
                                src="/logo-horizontal.svg"
                                alt="K-MERTZ Travel & Tours"
                                className="h-14 w-auto"
                            />
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                            Your gateway to unforgettable adventures. We specialize in luxury cruises,
                            international tours, and seamless travel documentation assistance.
                        </p>
                        <div className="flex items-center gap-4">
                            <Link href="#" className="w-10 h-10 bg-white/5 hover:bg-gold hover:text-navy rounded-full flex items-center justify-center transition-all">
                                <Facebook size={18} />
                            </Link>
                            <Link href="#" className="w-10 h-10 bg-white/5 hover:bg-gold hover:text-navy rounded-full flex items-center justify-center transition-all">
                                <Instagram size={18} />
                            </Link>
                            <Link href="#" className="w-10 h-10 bg-white/5 hover:bg-gold hover:text-navy rounded-full flex items-center justify-center transition-all">
                                <Twitter size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-gold font-bold uppercase tracking-widest text-xs mb-8">Navigation</h4>
                        <ul className="space-y-4">
                            {['Home', 'Services', 'Cruise Deals', 'Itinerary', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-white/60 hover:text-gold transition-colors text-sm flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gold/40 scale-0 group-hover:scale-100 transition-transform" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-gold font-bold uppercase tracking-widest text-xs mb-8">Popular Services</h4>
                        <ul className="space-y-4">
                            {['Airlines & Ferry', 'Hotel Bookings', 'Visa Assistance', 'Passport Help', 'Travel Insurance'].map((item) => (
                                <li key={item}>
                                    <Link href="#services" className="text-white/60 hover:text-gold transition-colors text-sm flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gold/40 scale-0 group-hover:scale-100 transition-transform" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h4 className="text-gold font-bold uppercase tracking-widest text-xs mb-8">Get In Touch</h4>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <MapPin className="text-gold shrink-0 mt-1" size={20} />
                                <p className="text-white/60 text-sm leading-relaxed">
                                    123 Travel Tower, Makati Avenue, <br />Metro Manila, Philippines 1200
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone className="text-gold shrink-0" size={20} />
                                <p className="text-white/60 text-sm">+63 912 345 6789</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <Mail className="text-gold shrink-0" size={20} />
                                <p className="text-white/60 text-sm">info@kmertz-travel.com</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/40 text-xs text-center md:text-left">
                        © 2026 K-MERTZ Travel and Tours. All rights reserved.
                        <span className="mx-2">|</span>
                        <Link href="#" className="hover:text-gold">Privacy Policy</Link>
                        <span className="mx-2">|</span>
                        <Link href="#" className="hover:text-gold">Terms of Service</Link>
                    </p>
                    <div className="flex items-center gap-6 text-white/40 text-xs font-bold uppercase tracking-tighter">
                        <span>Premium UI Design</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
