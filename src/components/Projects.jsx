import { motion, useReducedMotion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Card } from './ui/Card';

const PROJECTS = [
    {
        name: 'Big Iron App',
        type: 'Innovative Product Project',
        desc: 'A comprehensive fitness tracker application designed to help users optimize their workout routines with precise data analytics.',
        image: '/images/snake.png',
        link: 'https://docs.google.com/presentation/d/1O5Vn_f_m8v8eX36IeS2R9yQz8c_H2M9R/edit?usp=sharing&ouid=106727289569614480572&rtpof=true&sd=true',
    },
    {
        name: 'Diversity Connected',
        type: 'Capstone Project',
        desc: 'A specialized CRM implementation tailored for a DEI consulting firm to streamline their client engagements and track impact.',
        image: '/images/LVFusebox.png',
        link: 'https://docs.google.com/presentation/d/12r0oW-2p84yeybX-I16Z8T5x9q6n6dF1/edit?usp=sharing&ouid=106727289569614480572&rtpof=true&sd=true',
    },
    {
        name: 'Student Success Story Website',
        type: 'Internship Personal Project',
        desc: 'An inspiring interactive storytelling platform created for Northeastern Seattle to showcase outstanding student achievements.',
        image: '/images/fsaecar.png',
        link: 'https://seattle.northeastern.edu/co-op-internships/student-stories/',
    },
];

export function Projects() {
    const [ref, inView] = useScrollReveal({ threshold: 0.1, rootMargin: '0px 0px -100px 0px' });
    const shouldReduceMotion = useReducedMotion();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
        },
    };

    return (
        <section id="projects" className="py-16 md:py-24 px-6 max-w-wide mx-auto relative">
            <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={containerVariants}
                className="space-y-12"
            >
                <motion.div variants={itemVariants} className="max-w-reading mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-2 bg-gradient-to-r from-accent to-pastel-sky bg-clip-text text-transparent inline-block pb-1">
                        Projects
                    </h2>
                    <p className="text-text-secondary text-base">
                        A selection of my recent work focusing on product innovation, user experience, and process efficiency.
                    </p>
                </motion.div>

                {/* Masonry-inspired Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {PROJECTS.map((project, index) => (
                        <Card
                            key={index}
                            as="article"
                            tilt={true}
                            glow={true}
                            className={`flex flex-col group ${index === 2 ? 'md:col-span-2 md:w-2/3 md:mx-auto' : ''}`}
                        >
                            <motion.div
                                className="w-full h-64 overflow-hidden bg-bg-tertiary relative rounded-t-card"
                                variants={itemVariants}
                                whileHover={shouldReduceMotion ? undefined : {
                                    transition: { duration: 0.4 }
                                }}
                            >
                                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                    onError={(e) => { e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="%23A39E9A" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>' }}
                                />
                            </motion.div>

                            <div className="p-6 md:p-8 flex flex-col flex-grow z-10 relative">
                                <span className="text-xs font-mono uppercase tracking-wider text-text-tertiary mb-2">
                                    {project.type}
                                </span>
                                <h3 className="text-xl font-semibold text-text-primary mb-3">
                                    {project.name}
                                </h3>
                                <p className="text-base text-text-secondary mb-6 flex-grow">
                                    {project.desc}
                                </p>
                                <div className="mt-auto">
                                    <a
                                        href={project.link}
                                        className="inline-flex items-center text-sm font-medium text-accent hover:text-accent-hover transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:origin-center after:transition-transform after:duration-300"
                                    >
                                        View Details <span className="ml-1 text-xs">→</span>
                                    </a>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
