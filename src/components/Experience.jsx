import { useState } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Card } from './ui/Card';
import { SparkleText } from './ui/SparkleText';

const EXPERIENCES = [
    {
        org: "FPT USA Corp",
        role: "Program Coordinator/ Project Manager",
        dates: "Sep 2025 – Present",
        logo: "/images/whitefoxlogo.jpg",
        desc: [
            "I led the effort to standardize project management processes for cross-functional teams across the United States, India, and Vietnam. By streamlining how teams communicated and reported progress, I helped accelerate the delivery of two large data analytics transformation programs.",
            "Working with over 50 team members, I introduced clear frameworks that kept everyone aligned on goals, milestones, and potential risks. I also partnered closely with senior leaders to prepare status updates and release plans that supported timely and informed decisions.",
            "To strengthen adoption and collaboration, I created training materials and user guides that helped both technical and business users understand new products and best practices."
        ],
        skills: ["Project Management", "Process Standardization", "Cross-functional Leadership"],
        pastelVar: "var(--pastel-rose)",
        featured: true,
    },
    {
        org: "Northeastern Career Development",
        role: "Project Manager, Marketing Operations",
        dates: "Sep 2024 – Apr 2025",
        logo: "/images/amazonlogo.png",
        desc: [
            "My time as a Project Management & Marketing Intern with Northeastern's Seattle Career Development & Experiential Learning team was a whirlwind—in the best way possible. I helped coordinate the program for the 2024-2025 academic year, working with students, employers, and staff to bring career development initiatives to life.",
            "Over the course of my internship, I planned and executed 35+ events, projects, and workshops, from networking panels and career treks to employer speaker series. I also worked on marketing strategies to boost student engagement and make our programs more impactful.",
            "The best part? Seeing the real impact of our work—whether it was a student making a game-changing connection, an employer finding the right fit, or an event running so smoothly that no one noticed the chaos behind the scenes.",
        ],
        skills: ["Marketing Ops", "Process Improvement", "Data Analysis"],
        pastelVar: "var(--pastel-sky)",
        featured: false,
    },
    {
        org: "S3 Corp",
        role: "Technical Business Analyst & Consultant",
        dates: "Jun 2023 – Aug 2023",
        logo: "/images/mathworkslogo.jpg",
        desc: [
            "During my time at S3 Corp in Ho Chi Minh City, I worked on a B2C mobile app aimed at helping over 500,000 students aged 5-21 improve their learning experience. I helped turn user insights and business needs into product features, created wireframes and prototypes in Figma, and developed detailed user journeys for key features like habit tracking and progress dashboards.",
            "Mobile App for Student Learning & Growth: I collaborated across product, design, and engineering teams to define product requirements and develop over five core features—including interactive habit tracking, a personalized timetable manager, and a video-based learning module. I achieved an 80% stakeholder satisfaction rate and drove 75% user satisfaction during Figma prototype demos.",
        ],
        skills: ["Business Analysis", "Consulting", "Technical Spec"],
        pastelVar: "var(--pastel-mint)",
        featured: false,
    },
    {
        org: "FPT USA Corp",
        role: "Business Analyst",
        dates: "Feb 2022 – Apr 2023",
        logo: "/images/whitefoxlogo.jpg",
        desc: [
            "During my time at FPT USA, I helped build two B2C websites, working closely with teams across the US, Canada, and Vietnam. I was involved in everything from stakeholder sessions and writing user stories to sprint planning and QA testing.",
            "B2C E-Commerce Website for Camera Products: I worked with cross-functional teams to build an e-commerce platform for camera and photography products. I developed over 20 user stories, managed sprint planning in Jira, and contributed to the project being delivered 20% ahead of schedule.",
        ],
        skills: ["Requirements Gathering", "Stakeholder Management", "Scrum"],
        pastelVar: "var(--pastel-peach)",
        featured: false,
    },
    {
        org: "UConn Dean's Office (CLAS)",
        role: "Program Assistant",
        dates: "Dec 2019 – Dec 2021",
        logo: "/images/inservelogo.jpg",
        desc: [
            "The College of Liberal Arts and Sciences (CLAS) Dean's Office is UConn's core academic unit, home to over 60 departments and centers, serving thousands of students and more than 250 faculty and staff members. As a Program Assistant, I contributed to cross-functional operations and engagement initiatives.",
            "I led the coordination of academic seminars, writing workshops, and career development sessions, and crafted over 300 personalized thank-you notes per semester to reinforce long-term donor connections and ensure continued support for academic initiatives.",
        ],
        skills: ["Program Admin", "Event Coordination", "Communication"],
        pastelVar: "var(--pastel-lilac)",
        featured: false,
    },
    {
        org: "IDP (International Dairy Products)",
        role: "Product Marketing Intern",
        dates: "May 2019 – Aug 2019",
        logo: "/images/lcneuro.jpg",
        desc: [
            "From May to August 2019, I joined the product team at IDP in Ho Chi Minh City to help connect product strategy with real consumer needs. I conducted market research and user analysis across key product lines, contributing to an 8% increase in sales over the following quarter.",
            "I also designed story-driven content and video prototypes featuring IDP's brand mascots to gauge engagement and refine messaging strategy. The result: a 15% increase in Facebook followers and a validated approach to product promotion rooted in narrative and relatability.",
        ],
        skills: ["Market Research", "Campaign Strategy", "Analytics"],
        pastelVar: "var(--pastel-rose)",
        featured: false,
    },
];

export function Experience() {
    const [ref, inView] = useScrollReveal({ threshold: 0.05, rootMargin: "0px 0px -100px 0px" });
    const shouldReduceMotion = useReducedMotion();
    const [activeTab, setActiveTab] = useState(0);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
    };

    const activeExp = EXPERIENCES[activeTab];

    return (
        <section id="experience" className="py-10 md:py-12 px-6 max-w-wide mx-auto relative">
            <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={containerVariants}
                className="space-y-10"
            >
                {/* Header */}
                <motion.div variants={itemVariants}>
                    <div className="flex items-baseline gap-2 mb-2">
                        <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight bg-gradient-to-r from-accent via-pastel-rose to-pastel-sky bg-clip-text text-transparent inline-block pb-1">
                            Experience
                        </h2>
                        <SparkleText glyph="✦" size="text-xl" delay={0.5} />
                    </div>
                </motion.div>

                {/* Tabbed Interface Layout */}
                <div className="flex flex-col md:flex-row gap-8 lg:gap-12 w-full mt-8 items-start">

                    {/* Left Menu: Company List */}
                    <div className="w-full md:w-[35%] lg:w-[30%] flex flex-col gap-1.5 relative border-l border-border md:border-none pl-3 md:pl-0">
                        {/* Vertical line hint for desktop */}
                        <div className="hidden md:block absolute left-0 top-3 bottom-3 w-px bg-border/40" />

                        {EXPERIENCES.map((exp, idx) => {
                            const isActive = activeTab === idx;
                            return (
                                <motion.button
                                    key={idx}
                                    variants={itemVariants}
                                    onClick={() => setActiveTab(idx)}
                                    className={`relative text-left px-4 py-3.5 rounded-xl transition-all duration-300 flex items-center group cursor-pointer border md:border-transparent ${isActive ? 'bg-bg-secondary border-border/60 shadow-sm' : 'hover:bg-bg-secondary/50 border-transparent hover:border-border/30'}`}
                                >
                                    {/* Animated Active Indicator */}
                                    {isActive && !shouldReduceMotion && (
                                        <motion.div
                                            layoutId="activeTabIndicator"
                                            className="absolute left-[-1px] top-1/4 bottom-1/4 w-[3px] rounded-r-full"
                                            style={{ backgroundColor: exp.pastelVar }}
                                            initial={false}
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}

                                    <div className="flex items-center gap-4 w-full relative z-10">
                                        <div className={`shrink-0 w-11 h-11 bg-bg rounded-lg overflow-hidden border transition-colors flex items-center justify-center p-1.5 ${isActive ? 'border-border' : 'border-transparent group-hover:border-border/50'}`}>
                                            <img
                                                src={exp.logo}
                                                alt={exp.org}
                                                className={`w-full h-full object-contain transition-all duration-300 ${isActive ? 'scale-100 opacity-100 grayscale-0' : 'scale-95 opacity-60 grayscale-[40%] group-hover:opacity-90 group-hover:grayscale-0'}`}
                                                onError={(e) => { e.target.src = '/propic.png'; }}
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className={`font-semibold text-base truncate transition-colors ${isActive ? 'text-text-primary' : 'text-text-secondary group-hover:text-text-primary'}`}>
                                                {exp.org}
                                            </h3>
                                            <p className={`text-xs mt-0.5 font-bold transition-colors uppercase tracking-wider ${isActive ? 'text-text-secondary' : 'text-text-tertiary'}`}>
                                                {exp.dates}
                                            </p>
                                        </div>
                                    </div>
                                </motion.button>
                            );
                        })}
                    </div>

                    {/* Right Pane: Details */}
                    <div className="w-full md:w-[65%] lg:w-[70%]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
                                animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -15 }}
                                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                                className="h-full"
                            >
                                <Card
                                    as="div"
                                    className="p-6 md:p-8 flex flex-col gap-6"
                                    tilt={true}
                                    glow={true}
                                    floating={false}
                                    style={{
                                        borderTop: `4px solid ${activeExp.pastelVar}`,
                                        borderRadius: "16px",
                                    }}
                                >
                                    {/* Company & Role Header */}
                                    <div className="mb-2">
                                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                            <h3 className="text-3xl md:text-4xl font-display font-black text-text-primary leading-none tracking-tighter uppercase">
                                                {activeExp.org}
                                            </h3>
                                            {activeExp.featured && (
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1 pb-1.5 rounded-full text-xs font-semibold bg-accent-soft text-accent shrink-0 border border-accent-soft h-fit">
                                                    <SparkleText glyph="✦" size="text-[10px]" delay={0.2} />
                                                    Featured
                                                </span>
                                            )}
                                        </div>

                                        <div className="mt-6 mb-4">
                                            <h4 className="text-xl md:text-2xl font-bold text-accent leading-tight tracking-tight">
                                                {activeExp.role}
                                            </h4>
                                            <p className="text-sm font-mono font-bold text-text-tertiary mt-2 tracking-[0.1em] uppercase">
                                                {activeExp.dates}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Description Body */}
                                    {activeExp.desc && activeExp.desc.length > 0 && (
                                        <div className="space-y-4 text-base text-text-secondary leading-relaxed opacity-95">
                                            {activeExp.desc.map((para, i) => (
                                                <p key={i}>{para}</p>
                                            ))}
                                        </div>
                                    )}

                                    {/* Skill Pills */}
                                    <div className="pt-4 mt-auto border-t border-border flex flex-wrap gap-2.5">
                                        {activeExp.skills.map((skill, sIdx) => (
                                            <span
                                                key={sIdx}
                                                className="px-3 py-1.5 rounded-full text-sm font-medium text-text-primary tracking-wide shadow-sm hover:scale-[1.02] transition-transform"
                                                style={{ backgroundColor: activeExp.pastelVar }}
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </Card>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </motion.div>
        </section>
    );
}
