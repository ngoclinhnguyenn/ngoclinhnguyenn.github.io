import { MagneticButton } from './ui/MagneticButton';
import { SectionDivider } from './ui/SectionDivider';
import { Linkedin, Mail, FileText } from 'lucide-react';

export function Footer() {
    return (
        <footer className="w-full relative mt-20">
            <SectionDivider />

            <div className="max-w-reading mx-auto px-6 pb-12 pt-4 flex flex-col items-center text-center space-y-6">
                <div className="flex gap-4">
                    <MagneticButton
                        href="https://www.linkedin.com/in/ngoclinhnguyenn/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-bg-secondary border border-border text-text-secondary hover:text-accent hover:border-accent-soft shadow-sm"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={18} />
                    </MagneticButton>

                    <MagneticButton
                        href="mailto:ngoclinhnguyenk3@gmail.com"
                        className="w-10 h-10 rounded-full bg-bg-secondary border border-border text-text-secondary hover:text-accent hover:border-accent-soft shadow-sm"
                        aria-label="Email"
                    >
                        <Mail size={18} />
                    </MagneticButton>

                    <MagneticButton
                        href="https://docs.google.com/document/d/1vZ02x0VWySrJvV_b7jdkwknSxZpkGIuWmgZ2rtwJbcs/edit?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-bg-secondary border border-border text-text-secondary hover:text-accent hover:border-accent-soft shadow-sm"
                        aria-label="Resume"
                    >
                        <FileText size={18} />
                    </MagneticButton>
                </div>

                <div className="space-y-1">
                    <p className="text-sm font-medium text-text-primary">
                        Linh Nguyen &middot; {new Date().getFullYear()}
                    </p>
                    <p className="text-xs text-text-tertiary tracking-wide uppercase">
                        Built with care
                    </p>
                </div>
            </div>
        </footer>
    );
}
