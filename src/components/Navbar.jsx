import { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { SparkleText } from './ui/SparkleText';

const NAV_LINKS = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
            const scrollPosition = window.scrollY + window.innerHeight / 3;
            for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
                const el = document.getElementById(NAV_LINKS[i].name.toLowerCase());
                if (el && el.offsetTop <= scrollPosition) {
                    setActiveSection(NAV_LINKS[i].name.toLowerCase());
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
                ? 'py-3 shadow-sm border-b border-border'
                : 'py-5 bg-transparent'
                }`}
            style={isScrolled ? { background: 'var(--glass-bg)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' } : {}}
        >
            <div className="max-w-wide mx-auto px-6 lg:px-8 flex justify-between items-center">
                {/* Logo */}
                <a href="#home" className="flex items-center group" aria-label="Linh Nguyen — Home">
                    <span className="font-display font-extrabold text-2xl tracking-tight bg-gradient-to-r from-accent via-pastel-rose to-pastel-sky bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
                        LN
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-2">
                    <ThemeToggle />

                    <nav className="flex items-center gap-1 ml-2 relative" aria-label="Main navigation">
                        {NAV_LINKS.map((link) => {
                            const isActive = activeSection === link.name.toLowerCase();
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`relative px-3 py-1.5 text-sm font-medium rounded-pill transition-colors duration-200 ${isActive
                                        ? 'text-accent'
                                        : 'text-text-secondary hover:text-text-primary'
                                        }`}
                                >
                                    {/* Sliding pill indicator */}
                                    {isActive && (
                                        <motion.span
                                            layoutId="nav-pill"
                                            className="absolute inset-0 rounded-pill"
                                            style={{ background: 'var(--accent-soft)' }}
                                            initial={false}
                                            transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                                        />
                                    )}
                                    <span className="relative z-10">{link.name}</span>
                                </a>
                            );
                        })}

                        <a
                            href="https://docs.google.com/document/d/1vZ02x0VWySrJvV_b7jdkwknSxZpkGIuWmgZ2rtwJbcs/edit?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 px-3 py-1.5 text-sm font-medium rounded-pill border border-border text-text-secondary hover:text-accent hover:border-accent-soft transition-all duration-200 flex items-center gap-1"
                        >
                            Resume <span className="text-[0.65rem] leading-none">↗</span>
                        </a>
                    </nav>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg-secondary transition-colors"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle Menu"
                    aria-expanded={menuOpen}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {menuOpen ? (
                            <>
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </>
                        ) : (
                            <>
                                <line x1="4" x2="20" y1="6" y2="6" />
                                <line x1="4" x2="20" y1="12" y2="12" />
                                <line x1="4" x2="20" y1="18" y2="18" />
                            </>
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                        className="md:hidden overflow-hidden border-b border-border bg-bg"
                    >
                        <nav className="flex flex-col items-center py-6 gap-1">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className={`w-full text-center py-2.5 text-base font-medium transition-colors ${activeSection === link.name.toLowerCase()
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
                                className="mt-1 flex items-center gap-1 text-base font-medium text-text-secondary hover:text-accent transition-colors"
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

            {/* Scroll Progress Bar */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-pastel-rose to-pastel-sky origin-left z-[60]"
                style={{ scaleX }}
            />
        </header>
    );
}
