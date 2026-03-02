import { motion, useReducedMotion } from 'framer-motion';
import { MagneticButton } from './ui/MagneticButton';
import { SectionDivider } from './ui/SectionDivider';
import { SparkleText } from './ui/SparkleText';
import { Linkedin, Mail, FileText } from 'lucide-react';

export function Footer() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <footer className="w-full relative mt-10">
            {/* Aurora background strip */}
            <div
                className="absolute inset-0 -z-10 opacity-40"
                style={{
                    background: 'var(--gradient-hero)',
                    filter: 'blur(60px)',
                    transform: 'scaleY(0.5) translateY(-30%)',
                }}
                aria-hidden="true"
            />

            <SectionDivider />

            <div className="max-w-reading mx-auto px-6 pb-14 pt-6 flex flex-col items-center text-center space-y-7">
                {/* Display heading */}
                <motion.div
                    initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-1"
                >
                    <div className="flex items-center justify-center gap-3">
                        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-shimmer leading-tight">
                            Connect With Me!
                        </h2>
                        <SparkleText glyph="✦" size="text-2xl" delay={0.4} />
                    </div>
                </motion.div>

                {/* Social buttons */}
                <div className="flex gap-3.5">
                    <MagneticButton
                        href="https://www.linkedin.com/in/ngoclinhnguyenn/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 rounded-full bg-bg-secondary border border-border text-text-secondary hover:text-accent hover:border-accent-soft shadow-sm transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={18} />
                    </MagneticButton>

                    <MagneticButton
                        href="mailto:ngoclinhnguyenk3@gmail.com"
                        className="w-11 h-11 rounded-full bg-bg-secondary border border-border text-text-secondary hover:text-accent hover:border-accent-soft shadow-sm transition-colors"
                        aria-label="Email"
                    >
                        <Mail size={18} />
                    </MagneticButton>

                    <MagneticButton
                        href="https://docs.google.com/document/d/1vZ02x0VWySrJvV_b7jdkwknSxZpkGIuWmgZ2rtwJbcs/edit?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 rounded-full bg-bg-secondary border border-border text-text-secondary hover:text-accent hover:border-accent-soft shadow-sm transition-colors"
                        aria-label="Resume"
                    >
                        <FileText size={18} />
                    </MagneticButton>
                </div>

                {/* Sign-off */}
                <div className="space-y-1 pt-2">
                    <p className="text-sm font-medium text-text-secondary">
                        Linh Nguyen &middot; {new Date().getFullYear()}
                    </p>
                    <p className="text-xs text-text-tertiary tracking-wide uppercase font-mono">
                        Built with care ✦
                    </p>
                </div>
            </div>
        </footer>
    );
}
