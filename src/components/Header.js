"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-white border-b">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-24 items-center justify-between">

                    {/* Logo as Image */}
                    <Link href="/" className="flex items-center gap-4">
                        <Image
                            src="/trimsel-logo.svg"     // 👈 your logo path
                            alt="Trimsel Logo"
                            width={140}
                            height={40}
                            priority
                            className="h-auto w-auto"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="/" className="text-md font-medium hover:text-gray-600 text-black">
                            Home
                        </Link>
                        <Link href="/about" className="text-md font-medium hover:text-gray-600 text-black">
                            About Us
                        </Link>
                        <Link href="/services" className="text-md font-medium hover:text-gray-600 text-black">
                            Services
                        </Link>
                        <Link href="/portfolio" className="text-md font-medium hover:text-gray-600 text-black">
                            Portfolio
                        </Link>
                        <Link href="/blog" className="text-md font-medium hover:text-gray-600 text-black">
                            Blog
                        </Link>
                    </nav>

                    {/* Desktop Button */}
                    <div className="hidden md:block">
                        <Link
                            href="/contact"
                            className="rounded-md bg-[#01AAEC] px-4 py-2 text-md font-medium text-white hover:bg-gray-800"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100"
                        aria-label="Toggle Menu"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            {open ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden border-t bg-white">
                    <div className="space-y-2 px-4 py-4">
                        <Link onClick={() => setOpen(false)} href="/" className="block py-2">
                            Home
                        </Link>
                        <Link onClick={() => setOpen(false)} href="/aboutus" className="block py-2">
                            About Us
                        </Link>
                        <Link onClick={() => setOpen(false)} href="/services" className="block py-2">
                            Services
                        </Link>
                        <Link onClick={() => setOpen(false)} href="/portfolio" className="block py-2">
                            Portfolio
                        </Link>
                        <Link onClick={() => setOpen(false)} href="/blog" className="block py-2">
                            Blog
                        </Link>

                        <Link
                            href="/contact"
                            className="mt-2 block rounded-md bg-black px-4 py-2 text-center text-white"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
