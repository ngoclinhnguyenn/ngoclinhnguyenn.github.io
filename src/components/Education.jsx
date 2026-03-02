import { motion, useReducedMotion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Card } from './ui/Card';
import { SparkleText } from './ui/SparkleText';

const EDUCATION = [
    {
        org: "Northeastern University",
        location: "Seattle, Washington",
        degree: "Masters of Science, Project Management",
        details: ["GPA: 3.9", "Concentrations: Business Analysis, Leading and Managing Technical Projects", "Dean’s Scholarship Recipient"],
        dates: "September 2023 - July 2025",
        logo: "/images/cornelllogo.png",
        pastelVar: "var(--pastel-rose)",
    },
    {
        org: "University of Connecticut (UConn)",
        location: "Storrs, Connecticut",
        degree: "Bachelor of Arts, Psychology",
        details: [],
        dates: "December 2021",
        logo: "/images/inservelogo.jpg",
        pastelVar: "var(--pastel-sky)",
    }
];

export function Education() {
    const [ref, inView] = useScrollReveal({ threshold: 0.1, rootMargin: '0px 0px -100px 0px' });
    const shouldReduceMotion = useReducedMotion();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
    };

    return (
        <section id="education" className="py-10 md:py-12 px-6 max-w-wide mx-auto relative">
            <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={containerVariants}
                className="space-y-10"
            >
                {/* Header */}
                <motion.div variants={itemVariants}>
                    <div className="flex items-baseline gap-2 mb-2">
                        <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight bg-gradient-to-r from-accent via-pastel-rose to-pastel-sky bg-clip-text text-transparent inline-block pb-1">
                            Education
                        </h2>
                        <SparkleText glyph="✦" size="text-xl" delay={0.3} />
                    </div>
                </motion.div>

                {/* Cards */}
                <div className="space-y-6">
                    {EDUCATION.map((edu, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card
                                as="div"
                                className="p-5 md:p-6 flex items-start md:items-center gap-5"
                                tilt={true}
                                glow={true}
                                floating={false}
                                style={{
                                    borderLeft: `3px solid ${edu.pastelVar}`,
                                    borderRadius: "14px",
                                }}
                            >
                                <div className="shrink-0 w-12 h-12 bg-bg rounded-xl overflow-hidden border border-border flex items-center justify-center p-1.5 shadow-sm mt-1 md:mt-0">
                                    <img
                                        src={edu.logo}
                                        alt={edu.org}
                                        className="w-full h-full object-contain"
                                        onError={(e) => {
                                            e.target.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='%23A39E9A' stroke-width='2'><path d='M22 10v6M2 10l10-5 10 5-10 5z' /><path d='M6 12v5c3 3 9 3 12 0v-5' /></svg>";
                                        }}
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                                        <div>
                                            <h3 className="text-[1.05rem] font-bold text-text-primary truncate">{edu.org}</h3>
                                            {edu.location && <p className="text-xs text-text-secondary mb-1">{edu.location}</p>}
                                            <p className="text-sm font-medium text-text-secondary">{edu.degree}</p>
                                        </div>
                                        <span className="text-xs font-mono text-text-tertiary whitespace-nowrap pt-1">
                                            {edu.dates}
                                        </span>
                                    </div>
                                    {edu.details && edu.details.length > 0 && (
                                        <div className="mt-3 flex flex-wrap gap-2">
                                            {edu.details.map((detail, dIdx) => (
                                                <span key={dIdx} className="text-xs font-semibold px-2.5 py-1 rounded-pill bg-accent-soft text-accent border border-accent-soft inline-block">
                                                    {detail}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
