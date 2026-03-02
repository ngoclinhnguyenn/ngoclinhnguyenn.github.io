import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SparkleText } from './ui/SparkleText';
import { Card } from './ui/Card';

const PROJECTS = [
    {
        name: 'Big Iron App',
        type: 'Innovative Product Project',
        desc: 'A comprehensive fitness tracker application designed to help users optimize their workout routines with precise data analytics.',
        longDesc: 'I came up with the idea for the Big Iron App as a solution to a problem I experienced firsthand—keeping track of my workouts, staying motivated, and making consistent progress in the gym without wasting time or second-guessing my training. Big Iron is a fitness tracking app designed to help gym-goers log their workouts, explore new exercises, and monitor progress seamlessly. With features like easy workout logging, a built-in exercise library, custom workout templates, and progress analytics, the app makes training more efficient and goal-oriented. It eliminates guesswork, boosts motivation with real-time insights, and saves time by making fitness routines smarter and more personalized.',
        image: '/images/snake.png',
        link: 'https://docs.google.com/presentation/d/1O5Vn_f_m8v8eX36IeS2R9yQz8c_H2M9R/edit?usp=sharing&ouid=106727289569614480572&rtpof=true&sd=true',
        detailsLinks: [
            { label: 'App Prototype', url: 'https://drive.google.com/drive/folders/1IDVk5KP1HLzWUJXnKXAM5FgXsvNLmpTv?usp=drive_link' },
            { label: 'Project Vision', url: 'https://drive.google.com/drive/folders/1fHWwf4jKuQadJK7-IBMCKqnkkYiMGDSU?usp=drive_link' }
        ],
        tagColor: 'var(--pastel-sky)',
        tagText: '#009BE8',
    },
    {
        name: 'Diversity Connected',
        type: 'Capstone Project',
        desc: 'A specialized CRM implementation tailored for a DEI consulting firm to streamline their client engagements and track impact.',
        longDesc: 'As part of the project team supporting DiversityConnected, a DEI consulting firm, I contributed to the evaluation and scoping of a CRM solution to improve lead tracking, outreach, and sales funnel visibility. The focus of the project was to assess CRM tools that aligned with the organization’s evolving needs amidst staff reductions and shifting strategic priorities. My role involved gathering business requirements, conducting stakeholder interviews, and supporting the scope definition process through MoSCoW prioritization and gap analysis. I gained hands-on experience in stakeholder management by facilitating discussions, aligning expectations, and ensuring timely progress toward key milestones. I also developed documentation including the project scope statement, success criteria, and business objectives—ensuring clarity between project goals and technical feasibility. This project strengthened my ability to translate strategic needs into actionable requirements, manage timelines effectively, and support data-informed decision-making in a consulting context.',
        image: '/images/LVFusebox.png',
        link: 'https://docs.google.com/presentation/d/12r0oW-2p84yeybX-I16Z8T5x9q6n6dF1/edit?usp=sharing&ouid=106727289569614480572&rtpof=true&sd=true',
        detailsLinks: [
            { label: 'Project Documentation', url: 'https://drive.google.com/drive/folders/1oqYUIUB7IuijL0Q0dVpxbCQGdLXXse2r?usp=drive_link' }
        ],
        tagColor: 'var(--pastel-rose)',
        tagText: '#B05070',
    },
    {
        name: 'Student Success Story Website',
        type: 'Internship Personal Project',
        desc: 'An inspiring interactive storytelling platform for Northeastern Seattle showcasing outstanding student achievements.',
        longDesc: 'Co-op and internship experiences are often seen as stepping stones to a career—but what’s missing is the space for reflection, storytelling, and inspiration. I identified a critical gap: while students gain invaluable skills during their co-ops, these experiences are rarely captured beyond resumes or LinkedIn updates. To shift the perception from transactional to transformational, I envisioned and led the creation of Experiential Learning: Success Stories—a dynamic storytelling platform on the Northeastern Seattle Career Services website. This initiative amplifies student voices, showcases diverse career journeys, and highlights the personal and professional growth that happens behind the scenes. The project blends storytelling with strategy. I conducted student interviews, gathered insights, and designed an interactive experience that includes a global footprint map showcasing where co-op students have worked across industries and countries. Each featured story invites the Northeastern community to reflect, connect, and celebrate the impact of experiential learning. This isn’t just a webpage—it’s a narrative archive that transforms data into meaning, and moments into momentum.',
        image: '/images/fsaecar.png',
        link: 'https://seattle.northeastern.edu/co-op-internships/student-stories/',
        detailsLinks: [
            { label: 'Published Website', url: 'https://studentlifeseattle.sites.northeastern.edu/career-development-and-experiential-learning/success-stories/' }
        ],
        tagColor: 'var(--pastel-mint)',
        tagText: '#2A7A52',
    },
];

export function Projects() {
    const [ref, inView] = useScrollReveal({ threshold: 0.1, rootMargin: '0px 0px -100px 0px' });
    const shouldReduceMotion = useReducedMotion();
    const [expandedId, setExpandedId] = useState(null);

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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
                    {PROJECTS.map((project, index) => {
                        const isExpanded = expandedId === index;

                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                layout
                                className={`flex flex-col h-fit transition-all duration-500`}
                            >
                                <Card
                                    tilt={!isExpanded}
                                    glow={true}
                                    floating={false}
                                    hoverEffect={!isExpanded}
                                    className={`group flex flex-col cursor-default border border-border bg-bg-secondary rounded-card overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ${isExpanded ? 'ring-2 ring-accent/20' : ''}`}
                                >
                                    {/* Image Container */}
                                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-bg-tertiary">
                                        <img
                                            src={project.image}
                                            alt={project.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                                            onError={(e) => {
                                                e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="%23A39E9A" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>';
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-5 flex flex-col flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-accent/10 text-accent">
                                                {project.type}
                                            </span>
                                            {isExpanded && <SparkleText glyph="✦" size="text-[10px]" />}
                                        </div>

                                        <h3 className="text-lg font-display font-bold text-text-primary mb-2">
                                            {project.name}
                                        </h3>

                                        <p className="text-sm text-text-secondary leading-relaxed mb-4">
                                            {project.desc}
                                        </p>

                                        {/* Toggle Button */}
                                        <button
                                            onClick={() => setExpandedId(isExpanded ? null : index)}
                                            className="group/btn flex items-center gap-2 text-xs font-bold text-accent hover:text-accent-hover transition-colors mt-auto w-fit"
                                        >
                                            {isExpanded ? 'Hide Story' : 'Read Story'}
                                            <motion.span
                                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                                className="inline-block"
                                            >
                                                ↓
                                            </motion.span>
                                        </button>

                                        {/* Expandable Story Section */}
                                        <AnimatePresence>
                                            {isExpanded && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="pt-6 mt-6 border-t border-border">
                                                        <div className="space-y-4 text-[14px] leading-[1.7] text-text-secondary font-medium">
                                                            <p className="whitespace-pre-wrap">
                                                                {project.longDesc}
                                                            </p>
                                                        </div>

                                                        <div className="mt-6 flex flex-wrap gap-2">
                                                            {project.detailsLinks?.map((link, idx) => (
                                                                <a
                                                                    key={idx}
                                                                    href={link.url}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-bg-tertiary hover:bg-border text-[11px] font-bold text-text-primary transition-colors border border-border"
                                                                >
                                                                    {link.label}
                                                                    <span className="text-[9px]">↗</span>
                                                                </a>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
}
