'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Services', href: '#services' },
        { name: 'Cruise Deals', href: '#cruises' },
        { name: 'Itinerary', href: '#itinerary' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                isScrolled ? 'bg-navy/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
            )}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center">
                        <img
                            src="/logo-horizontal.svg"
                            alt="K-MERTZ Travel & Tours"
                            className={cn(
                                "h-12 w-auto transition-all duration-300",
                                isScrolled ? "h-10" : "h-12"
                            )}
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-white/90 hover:text-gold transition-colors text-sm font-medium"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            className="bg-gold hover:bg-gold-dark text-navy px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105"
                        >
                            Book Now
                        </Link>
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white p-1"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <div
                className={cn(
                    'absolute top-full left-0 w-full bg-navy border-t border-white/10 md:hidden transition-all duration-300 overflow-hidden',
                    isOpen ? 'max-h-96 py-6' : 'max-h-0'
                )}
            >
                <div className="flex flex-col items-center space-y-4 px-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-white hover:text-gold transition-colors text-lg font-medium"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="w-full text-center bg-gold text-navy py-3 rounded-lg font-bold"
                        onClick={() => setIsOpen(false)}
                    >
                        Book Now
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
