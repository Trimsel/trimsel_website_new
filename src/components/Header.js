"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header({ transparent = false }) {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    const servicesRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                servicesRef.current &&
                !servicesRef.current.contains(event.target)
            ) {
                setServicesOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const linkColor = transparent && !scrolled ? "text-white" : "text-black";

    const navLinkStyle = `
    text-base lg:text-lg font-medium ${linkColor}
    transition-all duration-300
    hover:font-semibold
    hover:bg-gradient-to-r 
    hover:from-[#1C76BD] 
    hover:to-[#02A89B]
    hover:bg-clip-text 
    hover:text-transparent
`;

    const mobileLinkStyle = "block rounded-md px-3 py-2 text-base font-medium text-black transition-colors hover:bg-slate-100";

    return (
        <header
            className={`fixed top-0 z-50 w-full transition-all duration-300
            ${transparent && !scrolled
                    ? "bg-transparent"
                    : "bg-white border-b shadow-sm"
                }`}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src={transparent && !scrolled ? "/trimsel-logo-white.svg" : "/trimsel-logo.svg"}
                            alt="Trimsel Logo"
                            width={140}
                            height={35}
                            priority
                        />

                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center gap-6 lg:gap-8">

                        <Link href="/" className={navLinkStyle}>Home</Link>
                        <Link href="/aboutus" className={navLinkStyle}>About Us</Link>

                        {/* ================= Services Dropdown ================= */}
                        <div ref={servicesRef} className="relative">

                            <button
                                onClick={() => setServicesOpen(!servicesOpen)}
                                className={`${navLinkStyle} flex items-center gap-2`}
                            >
                                <span className="hover:bg-gradient-to-r hover:from-[#1C76BD] hover:to-[#02A89B] hover:bg-clip-text hover:text-transparent">
                                    Services
                                </span>
                            </button>


                            {servicesOpen && (
                                <div className="absolute left-1/2 top-full z-50 mt-6 w-[min(92vw,44rem)] -translate-x-1/2 rounded-2xl bg-white p-4 shadow-2xl sm:p-6">

                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">

                                        {/* 1 */}
                                        <Link href="/mobile-app-development-chennai"
                                            className="flex items-start justify-between p-3 rounded-xl bg-blue-100 hover:shadow-md transition">

                                            <div className="flex gap-4">
                                                <Image src="/icons/service1.svg" alt="Mobile" width={32} height={32} />
                                                <div>
                                                    <h4 className="text-sm font-semibold sm:text-base">Mobile App Development</h4>
                                                </div>
                                            </div>
                                        </Link>

                                        {/* 2 */}
                                        <Link href="/web-development-company-chennai"
                                            className="flex items-start justify-between p-3 rounded-xl bg-purple-100 hover:shadow-md transition">

                                            <div className="flex gap-4">
                                                <Image src="/icons/service2.svg" alt="Web" width={32} height={32} />
                                                <div>
                                                    <h4 className="text-sm font-semibold sm:text-base">Web Development</h4>
                                                </div>
                                            </div>
                                        </Link>


                                        {/* 3 */}
                                        <Link href="/ai-development-company"
                                            className="flex items-start justify-between p-3 rounded-xl bg-pink-100 hover:shadow-md transition">

                                            <div className="flex gap-4">
                                                <Image src="/icons/service5.svg" alt="AI" width={32} height={32} />
                                                <div>
                                                    <h4 className="text-sm font-semibold sm:text-base">AI & ML Development</h4>
                                                </div>
                                            </div>
                                        </Link>

                                        {/* 4 */}
                                        <Link href="/devops-consulting-services"
                                            className="flex items-start justify-between p-3 rounded-xl bg-orange-100 hover:shadow-md transition">

                                            <div className="flex gap-4">
                                                <Image src="/icons/service4.svg" alt="DevOps" width={32} height={32} />
                                                <div>
                                                    <h4 className="text-sm font-semibold sm:text-base">DevOps Consulting</h4>
                                                </div>
                                            </div>
                                        </Link>


                                        {/* 5 */}
                                        <Link
                                            href="/cloud-consulting-services"
                                            className="flex items-center justify-between 
                                            p-3 rounded-xl bg-green-100 hover:shadow-md transition-all duration-300"
                                        >

                                            <div className="flex gap-4">
                                                <Image src="/icons/service6.svg" alt="Cloud" width={32} height={32} />
                                                <div>
                                                    <h4 className="text-sm font-semibold sm:text-base">Cloud Consulting</h4>
                                                </div>
                                            </div>
                                        </Link>


                                        {/* 6 */}
                                        <Link href="/digital-marketing-company-chennai"
                                            className="flex items-start justify-between p-3 rounded-xl bg-red-100 hover:shadow-md transition">

                                            <div className="flex gap-4">
                                                <Image src="/icons/service3.svg" alt="Marketing" width={32} height={32} />
                                                <div>
                                                    <h4 className="text-sm font-semibold sm:text-base">Digital Marketing</h4>
                                                </div>
                                            </div>
                                        </Link>


                                    </div>
                                </div>
                            )}
                        </div>

                        <Link href="/portfolio" className={navLinkStyle}>Portfolio</Link>
                        <Link href="/blog" className={navLinkStyle}>Blog</Link>

                    </nav>

                    {/* Desktop Button */}
                    <div className="hidden md:block">
                        <Link
                            href="/contact-us"
                            className="rounded-lg bg-[#27AAE1] px-4 py-2 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1896cd] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#27AAE1]/60 focus-visible:ring-offset-2"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        type="button"
                        className={`md:hidden rounded-md border px-3 py-2 text-sm font-semibold transition-colors ${transparent && !scrolled ? "border-white text-white hover:bg-white/10" : "border-slate-300 text-slate-900 hover:bg-slate-100"}`}
                        onClick={() => setOpen((prev) => !prev)}
                        aria-label="Toggle menu"
                        aria-expanded={open}
                    >
                        Menu
                    </button>

                </div>

                {/* Mobile Menu */}
                {open && (
                    <nav className="animate-fadeIn rounded-b-xl border-t border-slate-200 bg-white py-4 shadow-lg md:hidden">
                        <Link href="/" className={mobileLinkStyle} onClick={() => setOpen(false)}>Home</Link>
                        <Link href="/aboutus" className={mobileLinkStyle} onClick={() => setOpen(false)}>About Us</Link>
                        <Link href="/mobile-app-development-chennai" className={mobileLinkStyle} onClick={() => setOpen(false)}>Mobile App Development</Link>
                        <Link href="/devops-consulting-services" className={mobileLinkStyle} onClick={() => setOpen(false)}>DevOps Consulting</Link>
                        <Link href="/web-development-company-chennai" className={mobileLinkStyle} onClick={() => setOpen(false)}>Web Development</Link>
                        <Link href="/ai-development-company" className={mobileLinkStyle} onClick={() => setOpen(false)}>AI & ML Development</Link>
                        <Link href="/digital-marketing-company-chennai" className={mobileLinkStyle} onClick={() => setOpen(false)}>Digital Marketing</Link>
                        <Link href="/cloud-consulting-services" className={mobileLinkStyle} onClick={() => setOpen(false)}>Cloud Consulting</Link>
                        <Link href="/portfolio" className={mobileLinkStyle} onClick={() => setOpen(false)}>Portfolio</Link>
                        <Link href="/blog" className={mobileLinkStyle} onClick={() => setOpen(false)}>Blog</Link>
                        <Link href="/contact-us" className="mt-2 inline-block rounded-lg bg-[#27AAE1] px-4 py-2 text-base font-semibold text-white transition-all duration-300 hover:bg-[#1896cd] hover:shadow-lg" onClick={() => setOpen(false)}>
                            Contact Us
                        </Link>
                    </nav>
                )}
            </div>
        </header>
    );
}
