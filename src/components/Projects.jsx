import { motion, useReducedMotion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SparkleText } from './ui/SparkleText';

const PROJECTS = [
    {
        name: 'Big Iron App',
        type: 'Innovative Product Project',
        desc: 'A comprehensive fitness tracker application designed to help users optimize their workout routines with precise data analytics.',
        image: '/images/snake.png',
        link: 'https://docs.google.com/presentation/d/1O5Vn_f_m8v8eX36IeS2R9yQz8c_H2M9R/edit?usp=sharing&ouid=106727289569614480572&rtpof=true&sd=true',
        tagColor: 'var(--pastel-sky)',
        tagText: '#009BE8',
    },
    {
        name: 'Diversity Connected',
        type: 'Capstone Project',
        desc: 'A specialized CRM implementation tailored for a DEI consulting firm to streamline their client engagements and track impact.',
        image: '/images/LVFusebox.png',
        link: 'https://docs.google.com/presentation/d/12r0oW-2p84yeybX-I16Z8T5x9q6n6dF1/edit?usp=sharing&ouid=106727289569614480572&rtpof=true&sd=true',
        tagColor: 'var(--pastel-rose)',
        tagText: '#B05070',
    },
    {
        name: 'Student Success Story Website',
        type: 'Internship Personal Project',
        desc: 'An inspiring interactive storytelling platform for Northeastern Seattle showcasing outstanding student achievements.',
        image: '/images/fsaecar.png',
        link: 'https://seattle.northeastern.edu/co-op-internships/student-stories/',
        tagColor: 'var(--pastel-mint)',
        tagText: '#2A7A52',
    },
];

export function Projects() {
    const [ref, inView] = useScrollReveal({ threshold: 0.1, rootMargin: '0px 0px -100px 0px' });
    const shouldReduceMotion = useReducedMotion();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    const itemVariants = {
        hidden: { y: 24, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
    };

    return (
        <section id="projects" className="py-10 md:py-12 px-6 max-w-wide mx-auto relative">
            <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={containerVariants}
                className="space-y-12"
            >
                {/* Section header */}
                <motion.div variants={itemVariants}>
                    <div className="flex items-baseline gap-2 mb-2">
                        <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight bg-gradient-to-r from-accent via-pastel-rose to-pastel-sky bg-clip-text text-transparent inline-block pb-1">
                            Projects
                        </h2>
                        <SparkleText glyph="✦" size="text-xl" delay={0.3} />
                    </div>
                    <p className="text-text-secondary text-base">
                        A selection of my recent work in product innovation, user experience, and process strategy.
                    </p>
                </motion.div>

                {/* Portrait card grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={shouldReduceMotion ? undefined : { y: -6, transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] } }}
                        >
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block h-full rounded-card overflow-hidden border border-border bg-bg-secondary relative shadow-sm hover:shadow-lg hover:shadow-black/5 hover:border-border-hover transition-all duration-300"
                                aria-label={`View ${project.name}`}
                            >
                                {/* Image — portrait format */}
                                <div className="relative w-full aspect-[4/5] overflow-hidden bg-bg-tertiary">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                                        onError={(e) => {
                                            e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="%23A39E9A" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>';
                                        }}
                                    />

                                    {/* Category badge */}
                                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-pill text-[10px] font-semibold"
                                        style={{ background: `color-mix(in srgb, ${project.tagColor} 90%, transparent)`, color: 'var(--text-primary)' }}>
                                        {project.type}
                                    </div>

                                    {/* Hover overlay — slides up from bottom */}
                                    <div className="absolute inset-0 flex flex-col justify-end translate-y-full group-hover:translate-y-0 transition-transform duration-350 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                                        style={{ background: 'linear-gradient(to top, rgba(26,23,31,0.96) 0%, rgba(26,23,31,0.7) 60%, transparent 100%)' }}>
                                        <div className="p-5">
                                            <p className="text-xs font-mono text-white/60 mb-1 uppercase tracking-widest">{project.type}</p>
                                            <h3 className="text-lg font-display font-bold text-white mb-2 leading-tight">{project.name}</h3>
                                            <p className="text-xs text-white/75 leading-relaxed mb-4">{project.desc}</p>
                                            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-pill text-white border border-white/25 hover:bg-white/10 transition-colors">
                                                View Project <span className="text-[10px]">→</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Card footer */}
                                <div className="p-4">
                                    <h3 className="text-sm font-semibold text-text-primary">{project.name}</h3>
                                    <p className="text-xs text-text-tertiary mt-0.5 font-mono">{project.type}</p>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
