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
    text-lg font-medium ${linkColor}
    transition-all duration-300
    hover:font-semibold
    hover:bg-gradient-to-r 
    hover:from-[#1C76BD] 
    hover:to-[#02A89B]
    hover:bg-clip-text 
    hover:text-transparent
`;


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
                    <Link href="/" className="flex items-center gap-4 ml-4">
                        <Image
                            src={transparent && !scrolled ? "/trimsel-logo-white.svg" : "/trimsel-logo.svg"}
                            alt="Trimsel Logo"
                            width={140}
                            height={35}
                            priority
                        />

                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center gap-8">

                        <Link href="/" className={navLinkStyle}>Home</Link>
                        <Link href="/about" className={navLinkStyle}>About Us</Link>

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
                                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-6 
                                w-[750px] bg-white shadow-2xl rounded-2xl p-8 z-50">

                                    <div className="grid grid-cols-2 gap-6">

                                        {/* 1 */}
                                        <Link href="/services/mobile-apps"
                                            className="flex items-start justify-between p-3 rounded-xl bg-blue-50 hover:shadow-md transition">

                                            <div className="flex gap-4">
                                                <Image src="/icons/service1.svg" alt="Mobile" width={32} height={32} />
                                                <div>
                                                    <h4 className="font-semibold">Mobile App Development</h4>
                                                </div>
                                            </div>
                                        </Link>

                                        {/* 2 */}
                                        <Link href="/services/devops"
                                            className="flex items-start justify-between p-3 rounded-xl bg-orange-50 hover:shadow-md transition">

                                            <div className="flex gap-4">
                                                <Image src="/icons/service4.svg" alt="DevOps" width={32} height={32} />
                                                <div>
                                                    <h4 className="font-semibold">DevOps Consulting</h4>
                                                </div>
                                            </div>
                                        </Link>

                                        {/* 3 */}
                                        <Link href="/services/web-development"
                                            className="flex items-start justify-between p-3 rounded-xl bg-purple-50 hover:shadow-md transition">

                                            <div className="flex gap-4">
                                                <Image src="/icons/service2.svg" alt="Web" width={32} height={32} />
                                                <div>
                                                    <h4 className="font-semibold">Web Development</h4>
                                                </div>
                                            </div>
                                        </Link>

                                        {/* 4 */}
                                        <Link href="/ai-development-company"
                                            className="flex items-start justify-between p-3 rounded-xl bg-pink-50 hover:shadow-md transition">

                                            <div className="flex gap-4">
                                                <Image src="/icons/service5.svg" alt="AI" width={32} height={32} />
                                                <div>
                                                    <h4 className="font-semibold">AI & ML Development</h4>
                                                </div>
                                            </div>
                                        </Link>

                                        {/* 5 */}
                                        <Link href="/services/digital-marketing"
                                            className="flex items-start justify-between p-3 rounded-xl bg-red-50 hover:shadow-md transition">

                                            <div className="flex gap-4">
                                                <Image src="/icons/service3.svg" alt="Marketing" width={32} height={32} />
                                                <div>
                                                    <h4 className="font-semibold">Digital Marketing</h4>
                                                </div>
                                            </div>
                                        </Link>

                                        {/* 6 */}
                                        <Link
                                            href="/services/cloud"
                                            className="flex items-center justify-between 
                                            p-3 rounded-xl bg-green-50 hover:shadow-md transition-all duration-300"
                                        >

                                            <div className="flex gap-4">
                                                <Image src="/icons/service6.svg" alt="Cloud" width={32} height={32} />
                                                <div>
                                                    <h4 className="font-semibold">Cloud Consulting</h4>
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
                            href="/contact"
                            className="rounded-md bg-[#27AAE1] px-4 py-2 text-lg font-medium text-white"
                        >
                            Contact Us
                        </Link>
                    </div>

                </div>
            </div>
        </header>
    );
}
