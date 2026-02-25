import { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Section tracking
            const sections = NAV_LINKS.map((link) => link.name.toLowerCase());
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-bg/92 backdrop-blur-xl border-b border-border shadow-sm py-3'
                    : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-wide mx-auto px-6 lg:px-8 flex justify-between items-center">
                {/* Logo left-aligned */}
                <a href="#home" className="text-xl font-bold tracking-tight text-text-primary">
                    Linh Nguyen
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    <ThemeToggle />
                    <nav className="flex items-center gap-6 relative">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`relative text-sm font-medium transition-colors hover:text-text-primary py-1 ${activeSection === link.name.toLowerCase()
                                        ? 'text-text-primary'
                                        : 'text-text-secondary'
                                    }`}
                            >
                                {link.name}
                                {activeSection === link.name.toLowerCase() && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                                        initial={false}
                                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                    />
                                )}
                            </a>
                        ))}
                        <a
                            href="https://docs.google.com/document/d/1vZ02x0VWySrJvV_b7jdkwknSxZpkGIuWmgZ2rtwJbcs/edit?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-text-secondary hover:text-accent transition-colors flex items-center gap-1"
                        >
                            Resume <span className="text-xs">↗</span>
                        </a>
                    </nav>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-text-secondary hover:text-text-primary"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle Menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        {menuOpen ? (
                            <>
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </>
                        ) : (
                            <>
                                <line x1="4" x2="20" y1="12" y2="12" />
                                <line x1="4" x2="20" y1="6" y2="6" />
                                <line x1="4" x2="20" y1="18" y2="18" />
                            </>
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Panel */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden overflow-hidden bg-bg border-b border-border shadow-md"
                    >
                        <nav className="flex flex-col items-center py-6 gap-4">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className={`text-lg font-medium ${activeSection === link.name.toLowerCase()
                                            ? 'text-accent'
                                            : 'text-text-secondary'
                                        }`}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="https://docs.google.com/document/d/1vZ02x0VWySrJvV_b7jdkwknSxZpkGIuWmgZ2rtwJbcs/edit?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setMenuOpen(false)}
                                className="text-lg font-medium text-text-secondary hover:text-accent flex items-center gap-2"
                            >
                                Resume <span>↗</span>
                            </a>
                            <div className="mt-4 pt-4 border-t border-border w-1/2 flex justify-center">
                                <ThemeToggle />
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
