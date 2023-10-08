import { Project } from "../types";
import skills from "./skills";
import categories from "./categories";

const levels = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
};

const projects: Project[] = [
  {
    id: 1,
    title: "Renewable Energy Feasibility Study",
    description: "Assessing the feasibility of renewable energy solutions in urban areas.",
    skills: [skills[3], skills[8], skills[9]], // Leadership, Decision Making, Critical Thinking
    category: categories[7], // Engineering
    level: levels.advanced,
    startDate: new Date("2023-11-01"),
    endDate: new Date("2024-10-31"),
    image: '/renewable.png'
  },
  {
    id: 2,
    title: "Cognitive Neuroscience Research",
    description: "Studying the brain mechanisms behind cognitive processes.",
    skills: [skills[0], skills[6], skills[9]], // Problem Solver, Analytical Thinking, Critical Thinking
    category: categories[1], // Social Sciences
    level: levels.advanced,
    startDate: new Date("2023-12-10"),
    endDate: new Date("2024-12-10"),
    image: '/cognitiveNeuroscienceResearch.jpeg'
  },
  {
    id: 3,
    title: "Wildlife Habitat Restoration",
    description: "Restoring natural habitats to support local wildlife populations.",
    skills: [skills[2], skills[5], skills[7]], // Teamwork, Creativity, Time Management
    category: categories[4], // Environmental Sciences
    level: levels.intermediate,
    startDate: new Date("2024-01-15"),
    endDate: new Date("2024-12-15"),
    image: '/agriculture.jpeg'
  },
  {
    id: 4,
    title: "Quantum Computing Research",
    description: "Exploring the potential of quantum computing for various applications.",
    skills: [skills[0], skills[7], skills[9]], // Problem Solver, Time Management, Critical Thinking
    category: categories[2], // Physics
    level: levels.advanced,
    startDate: new Date("2024-02-01"),
    endDate: new Date("2025-02-01"),
    image: '/quantum.jpg'
  },
  {
    id: 5,
    title: "Mental Health Intervention Study",
    description: "Developing and testing interventions for mental health improvement.",
    skills: [skills[1], skills[6], skills[5]], // Communication, Analytical Thinking, Creativity
    category: categories[1], // Social Sciences
    level: levels.intermediate,
    startDate: new Date("2024-03-15"),
    endDate: new Date("2025-03-15"),
    image: '/mentalHealth.jpg'
  },
  {
    id: 6,
    title: "Space Exploration Mission II",
    description: "Continuation of a mission to explore outer space, focusing on specific objectives.",
    skills: [skills[3], skills[0], skills[9]], // Leadership, Problem Solver, Critical Thinking
    category: categories[2], // Astronomy
    level: levels.advanced,
    startDate: new Date("2024-04-01"),
    endDate: new Date("2026-04-01"),
    image: '/space-exploration.png',
    stats: true
  },
  {
    id: 7,
    title: "Environmental Policy Analysis",
    description: "Analyzing and proposing policies to address environmental challenges.",
    skills: [skills[2], skills[8], skills[7]], // Teamwork, Decision Making, Time Management
    category: categories[4], // Environmental Sciences
    level: levels.intermediate,
    startDate: new Date("2024-05-10"),
    endDate: new Date("2025-05-10"),
    image: '/policyenv.png'
  },
  {
    id: 8,
    title: "Advanced Data Analytics in Healthcare",
    description: "Using data analytics for in-depth healthcare research and improvement.",
    skills: [skills[3], skills[6], skills[8]], // Leadership, Analytical Thinking, Decision Making
    category: categories[3], // Health Sciences
    level: levels.advanced,
    startDate: new Date("2024-06-01"),
    endDate: new Date("2025-06-01"),
    image: '/mentalDATA.png'
  },
  {
    id: 9,
    title: "Sustainable Agriculture Innovation",
    description: "Developing sustainable agricultural practices and technologies.",
    skills: [skills[0], skills[5], skills[7]], // Problem Solver, Creativity, Time Management
    category: categories[0], // Natural Sciences
    level: levels.intermediate,
    startDate: new Date("2024-07-15"),
    endDate: new Date("2025-07-15"),
    image: '/agriculture.png'
  },
  {
    id: 10,
    title: "AI-Powered Language Translation",
    description: "Creating advanced AI models for language translation and understanding.",
    skills: [skills[3], skills[5], skills[8]], // Leadership, Creativity, Decision Making
    category: categories[6], // Computer Science
    level: levels.advanced,
    startDate: new Date("2024-08-01"),
    endDate: new Date("2025-08-01"),
    image: '/words.png'
  },
];

// Ahora tienes una lista de 10 proyectos ficticios con niveles de dificultad asignados.


export default projects;