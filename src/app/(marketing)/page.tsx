"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, ShieldCheck, Stethoscope, User, Calendar } from "lucide-react";

export default function LandingPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6 md:px-12 lg:px-24 bg-[var(--color-background)]">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[var(--color-primary)] mb-6">
                        Eliminate Paperwork. <br />
                        <span className="text-[var(--color-text)]">Secure Medicine Integrity.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-600 mb-10 max-w-2xl mx-auto">
                        MediNexus AI is the intelligent healthcare platform for Somaliland, designed to streamline clinic operations and ensure Ministry of Health compliance.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/dashboard" className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-[var(--color-cta)] rounded-lg hover:opacity-90 transition-all shadow-md">
                            Get Started <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                        <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-[var(--color-primary)] border-2 border-[var(--color-primary)] rounded-lg hover:bg-cyan-50 transition-all">
                            Request Demo
                        </Link>
                    </div>
                </div>
            </section>

            {/* Trust Barometer */}
            <section className="py-12 bg-white border-y border-zinc-100">
                <div className="max-w-6xl mx-auto px-6">
                    <p className="text-center text-sm font-semibold text-zinc-400 mb-8 uppercase tracking-wider">Trusted Integration Partners</p>
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        {/* Placeholders for partner logos - using text for now as per instructions to use SVGs/Lucide but these are brands */}
                        <div className="flex items-center gap-2 font-bold text-xl"><span className="text-green-600">ZAAD</span> Service</div>
                        <div className="flex items-center gap-2 font-bold text-xl"><span className="text-yellow-500">eDahab</span></div>
                        <div className="flex items-center gap-2 font-bold text-xl">MoHD Compliant</div>
                    </div>
                </div>
            </section>

            {/* Core Modules */}
            <section className="py-20 px-6 bg-[var(--color-background)]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text)] mb-16">
                        AI-Powered Healthcare Modules
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Module 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-zinc-100">
                            <div className="h-12 w-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-6">
                                <Stethoscope className="h-6 w-6 text-[var(--color-primary)]" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-[var(--color-text)]">Doctor's Copilot</h3>
                            <p className="text-zinc-600">
                                AI-assisted SOAP notes and diagnostic support to reduce documentation time by 40%.
                            </p>
                        </div>
                        {/* Module 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-zinc-100">
                            <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                                <Calendar className="h-6 w-6 text-[var(--color-cta)]" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-[var(--color-text)]">AI Receptionist</h3>
                            <p className="text-zinc-600">
                                Automated scheduling via WhatsApp and Web, syncing directly with doctor availability.
                            </p>
                        </div>
                        {/* Module 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-zinc-100">
                            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                <ShieldCheck className="h-6 w-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-[var(--color-text)]">Drug Verification</h3>
                            <p className="text-zinc-600">
                                Multi-layer AI fake drug detection using computer vision to ensure patient safety.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text)] mb-12">
                        Simple, Transparent Pricing
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Individual */}
                        <div className="p-8 rounded-3xl border border-zinc-200 hover:border-[var(--color-primary)] transition-colors relative overflow-hidden group">
                            <h3 className="text-2xl font-bold text-[var(--color-text)]">Individual</h3>
                            <p className="text-zinc-500 mt-2">For private clinics</p>
                            <div className="my-6">
                                <span className="text-4xl font-bold">$29</span><span className="text-zinc-500">/mo</span>
                            </div>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-zinc-600">
                                    <CheckCircle className="h-5 w-5 text-[var(--color-cta)]" /> 1 Doctor Profile
                                </li>
                                <li className="flex items-center gap-3 text-zinc-600">
                                    <CheckCircle className="h-5 w-5 text-[var(--color-cta)]" /> Basic AI Copilot
                                </li>
                                <li className="flex items-center gap-3 text-zinc-600">
                                    <CheckCircle className="h-5 w-5 text-[var(--color-cta)]" /> Patient Records
                                </li>
                            </ul>
                            <button className="w-full py-3 rounded-xl border border-[var(--color-primary)] text-[var(--color-primary)] font-semibold group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all">
                                Start Free Trial
                            </button>
                        </div>

                        {/* Hospital */}
                        <div className="p-8 rounded-3xl bg-[var(--color-text)] text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-[var(--color-cta)] text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wide">
                                Popular
                            </div>
                            <h3 className="text-2xl font-bold">Hospital</h3>
                            <p className="text-cyan-200 mt-2">For multi-department facilities</p>
                            <div className="my-6">
                                <span className="text-4xl font-bold">$199</span><span className="text-cyan-200">/mo</span>
                            </div>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-cyan-50">
                                    <CheckCircle className="h-5 w-5 text-[var(--color-cta)]" /> Unlimited Doctors
                                </li>
                                <li className="flex items-center gap-3 text-cyan-50">
                                    <CheckCircle className="h-5 w-5 text-[var(--color-cta)]" /> Advanced AI Analytics
                                </li>
                                <li className="flex items-center gap-3 text-cyan-50">
                                    <CheckCircle className="h-5 w-5 text-[var(--color-cta)]" /> Drug Verification
                                </li>
                                <li className="flex items-center gap-3 text-cyan-50">
                                    <CheckCircle className="h-5 w-5 text-[var(--color-cta)]" /> MoHD Export
                                </li>
                            </ul>
                            <button className="w-full py-3 rounded-xl bg-[var(--color-cta)] text-white font-semibold hover:opacity-90 transition-opacity">
                                Contact Sales
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-zinc-50 border-t border-zinc-200 py-12 px-6">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <span className="text-xl font-bold text-[var(--color-primary)]">MediNexus AI</span>
                        <p className="text-sm text-zinc-500 mt-1">© 2026 MediNexus AI. Somaliland.</p>
                    </div>
                    <div className="flex gap-6">
                        <Link href="#" className="text-zinc-500 hover:text-[var(--color-primary)]">Privacy</Link>
                        <Link href="#" className="text-zinc-500 hover:text-[var(--color-primary)]">Terms</Link>
                        <Link href="#" className="text-zinc-500 hover:text-[var(--color-primary)]">Support</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
