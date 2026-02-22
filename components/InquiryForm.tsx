'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Smartphone, MapPin, CheckCircle } from 'lucide-react';

const InquiryForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        destination: '',
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "045b40d9-771c-4f75-8617-82c56dec26e1",
                    name: formData.name,
                    mobile: formData.mobile,
                    destination: formData.destination,
                    message: (e.target as any).message?.value || '',
                    subject: `New Inquiry from ${formData.name}`,
                    from_name: "K-MERTZ Website",
                }),
            });

            const result = await response.json();
            if (result.success) {
                setSubmitted(true);
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-24 bg-white relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-navy rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">

                        {/* Left Column: Contact Info */}
                        <div className="md:w-1/3 p-10 md:p-12 bg-navy border-r border-white/10 flex flex-col justify-center">
                            <h3 className="text-3xl font-bold text-white mb-6">Plan Your Next Trip</h3>
                            <p className="text-white/60 mb-8 leading-relaxed">
                                Fill out the form and our travel experts will get back to you within 24 hours with a custom quote.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center text-gold">
                                        <Smartphone size={20} />
                                    </div>
                                    <div>
                                        <p className="text-white/40 text-xs font-bold uppercase">Call Us</p>
                                        <p className="text-white font-medium">+63 912 345 6789</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center text-gold">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p className="text-white/40 text-xs font-bold uppercase">Visit Us</p>
                                        <p className="text-white font-medium text-sm">Main Branch, Metro Manila</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 p-6 bg-gold/10 border border-gold/20 rounded-2xl">
                                <p className="text-gold font-bold text-sm mb-1 italic">🔥 Special Offer</p>
                                <p className="text-white text-xs leading-loose">
                                    Mention "WEBSITE20" to get an additional 5% discount on your cruise booking.
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Form */}
                        <div className="md:w-2/3 p-10 md:p-12 bg-white">
                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="h-full flex flex-col items-center justify-center text-center py-12"
                                >
                                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle size={48} />
                                    </div>
                                    <h4 className="text-3xl font-bold text-navy mb-2">Inquiry Sent!</h4>
                                    <p className="text-navy/60 max-w-sm">
                                        Thank you for reaching out, {formData.name.split(' ')[0]}. One of our experts will contact you shortly.
                                    </p>
                                    <button
                                        onClick={() => {
                                            setSubmitted(false);
                                            setStatus('idle');
                                            setFormData({ name: '', mobile: '', destination: '' });
                                        }}
                                        className="mt-8 text-navy font-bold hover:underline"
                                    >
                                        Send another inquiry
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-navy font-bold text-sm flex items-center gap-2">
                                                <User size={16} /> Full Name
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                name="name"
                                                placeholder="John Doe"
                                                className="w-full px-5 py-4 bg-navy/5 border border-navy/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:bg-white transition-all text-navy"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-navy font-bold text-sm flex items-center gap-2">
                                                <Smartphone size={16} /> Mobile Number
                                            </label>
                                            <input
                                                required
                                                type="tel"
                                                name="mobile"
                                                placeholder="+63 9xx xxx xxxx"
                                                className="w-full px-5 py-4 bg-navy/5 border border-navy/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:bg-white transition-all text-navy"
                                                value={formData.mobile}
                                                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-navy font-bold text-sm flex items-center gap-2">
                                            <MapPin size={16} /> Preferred Destination
                                        </label>
                                        <div className="relative">
                                            <select
                                                required
                                                name="destination"
                                                className="w-full px-5 py-4 bg-navy/5 border border-navy/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:bg-white transition-all appearance-none text-navy"
                                                value={formData.destination}
                                                onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                                            >
                                                <option value="" className="text-navy">Select a destination</option>
                                                <option value="Japan" className="text-navy">Japan (Costa Serena)</option>
                                                <option value="Taiwan" className="text-navy">Taiwan (Costa Serena)</option>
                                                <option value="Domestic" className="text-navy">Domestic Philippines</option>
                                                <option value="International" className="text-navy">Other International</option>
                                            </select>
                                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-navy/40">
                                                <MapPin size={14} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-navy font-bold text-sm">Message (Optional)</label>
                                        <textarea
                                            rows={4}
                                            name="message"
                                            placeholder="Tell us about your travel plans..."
                                            className="w-full px-5 py-4 bg-navy/5 border border-navy/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:bg-white transition-all text-navy"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        className="w-full bg-gold hover:bg-gold-dark text-navy font-black py-5 rounded-xl transition-all flex items-center justify-center gap-3 text-lg uppercase tracking-widest shadow-xl shadow-gold/20 disabled:opacity-50"
                                    >
                                        {status === 'submitting' ? 'Sending...' : 'Send My Inquiry'}
                                        <Send size={20} />
                                    </button>

                                    {status === 'error' && (
                                        <p className="text-red-500 text-center text-xs font-bold">Failed to send inquiry. Please try again.</p>
                                    )}

                                    <p className="text-[10px] text-center text-navy/40 uppercase font-bold tracking-tighter">
                                        By submitting, you agree to our privacy policy and terms of service.
                                    </p>
                                </form>
                            )}

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default InquiryForm;
