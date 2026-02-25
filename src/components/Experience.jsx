import { useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Card } from './ui/Card';

const EXPERIENCES = [
    {
        org: 'Northeastern University',
        role: 'MS in Project Management · GPA 3.9/4.0',
        dates: 'Graduated July 2025',
        logo: '/images/cornelllogo.png',
        desc: [],
        skills: ['Project Management', 'Agile', 'Leadership'],
        color: 'var(--pastel-rose)',
    },
    {
        org: 'Northeastern Career Development',
        role: 'Project Manager, Marketing Operations',
        dates: 'Sep 2024 – Apr 2025',
        logo: '/images/amazonlogo.png',
        desc: [
            'My time as a Project Management & Marketing Intern with Northeastern’s Seattle Career Development & Experiential Learning team was a whirlwind—in the best way possible. I helped coordinate the program for the 2024-2025 academic year, working with students, employers, and staff to bring career development initiatives to life.',
            'Over the course of my internship, I planned and executed 35+ events, projects, and workshops, from networking panels and career treks to employer speaker series. I also worked on marketing strategies to boost student engagement and make our programs more impactful. Along the way, I sharpened my skills in project management, event coordination, and stakeholder communication, all while collaborating with an incredible team.',
            'The best part? Seeing the real impact of our work—whether it was a student making a game-changing connection, an employer finding the right fit, or an event running so smoothly that no one even noticed the chaos behind the scenes.'
        ],
        skills: ['Marketing Ops', 'Process Improvement', 'Data Analysis'],
        color: 'var(--pastel-sky)',
    },
    {
        org: 'S3 Corp',
        role: 'Technical Business Analyst & Consultant',
        dates: 'Jun 2023 – Aug 2023',
        logo: '/images/mathworkslogo.jpg',
        desc: [
            'During my time at S3 Corp in Ho Chi Minh City, I worked on a B2C mobile app aimed at helping over 500,000 students aged 5–21 improve their learning experience. I helped turn user insights and business needs into product features, created wireframes and prototypes in Figma, and developed detailed user journeys for key features like habit tracking and progress dashboards. It was incredibly rewarding to contribute to a platform focused on accessible education—and to see how thoughtful design and clear communication could drive real impact for students.',
            'Mobile App for Student Learning & Growth: To support personalized learning at scale, I worked on a B2C mobile app serving over 500,000 students aged 5–21. My focus was on translating real user needs into actionable features and functional design. I collaborated across product, design, and engineering teams to define product requirements and develop over five core features—including interactive habit tracking, a personalized timetable manager, and a video-based learning module. I also defined key dashboard metrics like total study hours and improvement trends, helping students visualize their progress over time. To align stakeholders, I created functional proposals and detailed use cases, achieving an 80% satisfaction rate. I also designed intuitive wireframes and Figma prototypes, which drove 75% user satisfaction during demos.'
        ],
        skills: ['Business Analysis', 'Consulting', 'Technical Spec'],
        color: 'var(--pastel-mint)',
    },
    {
        org: 'FPT USA Corp',
        role: 'Business Analyst',
        dates: 'Feb 2022 – Apr 2023',
        logo: '/images/whitefoxlogo.jpg',
        desc: [
            'During my time at FPT USA, I helped build two B2C websites, working closely with teams across the US, Canada, and Vietnam. I was involved in everything from stakeholder sessions and writing user stories to sprint planning and QA testing. I really enjoyed the collaborative, fast-paced environment—it was rewarding to see how cross-functional teamwork brought these projects to life!',
            'B2C E-Commerce Website for Camera Products: For this project, I worked closely with cross-functional teams across the US, Canada, and Vietnam to build an e-commerce platform for camera and photography products. I helped translate business requirements into technical specifications, developed over 20 user stories, and documented the user manual for the platform. I also managed sprint planning in Jira, implemented KPI tracking to boost team efficiency, and contributed to the project being delivered 20% ahead of schedule. Additionally, I supported QA by creating test cases and conducting functional testing using SQL and Postman, ensuring a smooth, defect-free launch.'
        ],
        skills: ['Requirements Gathering', 'Stakeholder Management', 'Scrum'],
        color: 'var(--pastel-peach)',
    },
    {
        org: 'UConn Dean\'s Office (CLAS)',
        role: 'Program Assistant',
        dates: 'Dec 2019 – Dec 2021',
        logo: '/images/inservelogo.jpg',
        desc: [
            'The College of Liberal Arts and Sciences (CLAS) Dean\'s Office is UConn’s core academic unit, home to over 60 departments and centers, serving thousands of students and more than 250 faculty and staff members. As a Program Assistant, I contributed to cross-functional operations and engagement initiatives across this diverse academic ecosystem.',
            'I was responsible for managing financial budgets and processing expense reports, ensuring fiscal accuracy and compliance with university policies. Additionally, I led the coordination of academic seminars, writing workshops, and career development sessions, creating opportunities for internal and external stakeholders—including guest speakers, alumni, and faculty—to engage, collaborate, and foster learning and networking among students and staff.',
            'I also played a role in cultivating donor relationships by maintaining consistent communication and creating engagement opportunities. This included crafting over 300 personalized thank-you notes per semester to express appreciation and reinforce long-term connections, ensuring continued support for the university’s academic initiatives.'
        ],
        skills: ['Program Admin', 'Event Coordination', 'Communication'],
        color: 'var(--pastel-lilac)',
    },
    {
        org: 'IDP (International Dairy Products)',
        role: 'Product Marketing Intern',
        dates: 'May 2019 – Aug 2019',
        logo: '/images/lcneuro.jpg',
        desc: [
            'From May to August 2019, I joined the product team at IDP in Ho Chi Minh City to help connect product strategy with real consumer needs. I conducted market research and user analysis to better understand customer preferences across key product lines. The insights helped inform roadmap decisions and contributed to an 8% increase in sales over the following quarter.',
            'I also had the chance to work on creative testing—designing story-driven content and video prototypes featuring IDP’s brand mascots. These prototypes were used to gauge engagement and refine our messaging strategy. The result? A 15% increase in Facebook followers and a validated approach to product promotion rooted in narrative and relatability.'
        ],
        skills: ['Market Research', 'Campaign Strategy', 'Analytics'],
        color: 'var(--pastel-rose)',
    },
];

export function Experience() {
    const [ref, inView] = useScrollReveal({ threshold: 0.05, rootMargin: '0px 0px -100px 0px' });
    const shouldReduceMotion = useReducedMotion();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
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
        <section id="experience" className="py-16 md:py-24 px-6 max-w-reading mx-auto relative">
            <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={containerVariants}
                className="space-y-12"
            >
                <motion.div variants={itemVariants}>
                    <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight mb-2 bg-gradient-to-r from-accent to-pastel-sky bg-clip-text text-transparent inline-block pb-1">
                        Experience
                    </h2>
                    <p className="text-text-secondary text-base">
                        My professional journey blending business analysis, project management, and product strategy.
                    </p>
                </motion.div>

                <div className="relative space-y-6">
                    {/* Connector Line (Desktop Only) */}
                    <div className="hidden md:block absolute left-9 top-6 bottom-6 w-px bg-border z-0" />

                    {EXPERIENCES.map((exp, index) => (
                        <Card
                            key={index}
                            as="div"
                            className="relative z-10 p-6 flex flex-col md:flex-row gap-5"
                            tilt={true}
                            glow={true}
                        >
                            <div className="shrink-0 z-10 w-12 h-12 bg-bg rounded-lg overflow-hidden border border-border shadow-sm flex items-center justify-center p-1">
                                <img
                                    src={exp.logo}
                                    alt={exp.org}
                                    className="w-full h-full object-contain"
                                    onError={(e) => { e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="%23A39E9A" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>' }}
                                />
                            </div>

                            <div className="flex-1 space-y-3 z-10">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                                    <div>
                                        <h3 className="text-[1.125rem] font-semibold text-text-primary mb-1">
                                            {exp.org}
                                        </h3>
                                        <p className="text-[1.05rem] text-text-secondary leading-snug font-medium">
                                            {exp.role}
                                        </p>
                                        {exp.desc && exp.desc.length > 0 && (
                                            <div className="mt-4 space-y-3 text-sm md:text-[0.95rem] text-text-secondary leading-relaxed opacity-90">
                                                {exp.desc.map((para, i) => (
                                                    <p key={i}>{para}</p>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    <span className="text-sm font-mono tracking-wide text-text-tertiary mt-1 md:mt-0 pt-0.5 whitespace-nowrap">
                                        {exp.dates}
                                    </span>
                                </div>

                                <div className="flex flex-wrap gap-2 pt-2">
                                    {exp.skills.map((skill, sIdx) => (
                                        <motion.span
                                            key={sIdx}
                                            className="px-2.5 py-1 rounded-full text-xs font-medium text-text-primary"
                                            style={{ backgroundColor: exp.color }}
                                            initial={shouldReduceMotion ? { scale: 1 } : { scale: 0.95 }}
                                            whileInView={shouldReduceMotion ? undefined : { scale: [0.95, 1.02, 1] }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: sIdx * 0.05 }}
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
