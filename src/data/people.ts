import { Person } from "../types";
import levels from "./levels";
import projects from "./projects";
import skills from "./skills";

const people: Person[] = [
  {
    id: "john-doe",
    name: "John Doe",
    description: "Experienced engineer with a passion for renewable energy solutions.",
    skills: [skills[3], skills[8], skills[9]], // Leadership, Decision Making, Critical Thinking
    projects: [projects[0], projects[5]], // Renewable Energy Study, Space Exploration Mission II
    level: levels.advanced,
  },
  {
    id: "mary-smith",
    name: "Mary Smith",
    description: "Neuroscientist dedicated to understanding the brain's cognitive mechanisms.",
    skills: [skills[0], skills[6], skills[9]], // Problem Solver, Analytical Thinking, Critical Thinking
    projects: [projects[1]], // Cognitive Neuroscience Research
    level: levels.advanced,
  },
  {
    id: "david-wilson",
    name: "David Wilson",
    description: "Passionate about wildlife conservation and habitat restoration.",
    skills: [skills[2], skills[5], skills[7]], // Teamwork, Creativity, Time Management
    projects: [projects[3]], // Wildlife Habitat Restoration
    level: levels.intermediate,
    image: "/boy.png",
  },
  {
    id: "laura-jones",
    name: "Laura Jones",
    description: "Quantum physicist exploring the potential of quantum computing.",
    skills: [skills[0], skills[7], skills[9]], // Problem Solver, Time Management, Critical Thinking
    projects: [projects[4]], // Quantum Computing Research
    level: levels.advanced,
  },
  {
    id: "alex-hernandez",
    name: "Alex Hernandez",
    description: "Dedicated to improving mental health through research and interventions.",
    skills: [skills[1], skills[6], skills[5]], // Communication, Analytical Thinking, Creativity
    projects: [projects[5]], // Mental Health Intervention Study
    level: levels.intermediate,
  },
  {
    id: "sarah-adams",
    name: "Sarah Adams",
    description: "Lead scientist on a mission to explore outer space.",
    skills: [skills[3], skills[0], skills[9]], // Leadership, Problem Solver, Critical Thinking
    projects: [projects[6]], // Space Exploration Mission II
    level: levels.advanced,
  },
  {
    id: "peter-brown",
    name: "Peter Brown",
    description: "Environmental policy analyst with a focus on sustainability.",
    skills: [skills[2], skills[8], skills[7]], // Teamwork, Decision Making, Time Management
    projects: [projects[7]], // Environmental Policy Analysis
    level: levels.intermediate,
  },
  {
    id: "emily-lee",
    name: "Emily Lee",
    description: "Data analyst specializing in healthcare research.",
    skills: [skills[3], skills[6], skills[8]], // Leadership, Analytical Thinking, Decision Making
    projects: [projects[8]], // Advanced Data Analytics in Healthcare
    level: levels.advanced,
  },
  {
    id: "michael-jackson",
    name: "Michael Jackson",
    description: "Passionate about sustainable agriculture and innovation.",
    skills: [skills[0], skills[5], skills[7]], // Problem Solver, Creativity, Time Management
    projects: [projects[9]], // Sustainable Agriculture Innovation
    level: levels.intermediate,
  },
  {
    id: "linda-smith",
    name: "Linda Smith",
    description: "AI expert working on language translation and understanding.",
    skills: [skills[3], skills[5], skills[8]], // Leadership, Creativity, Decision Making
    projects: [projects[1]], // AI-Powered Language Translation
    level: levels.advanced,
    image: "/girl.png",
  },
  {
    id: "james-anderson",
    name: "James Anderson",
    description: "Biologist studying ecosystems and biodiversity.",
    skills: [skills[0], skills[2], skills[6]], // Problem Solver, Teamwork, Analytical Thinking
    projects: [projects[1]], // Ecosystems and Biodiversity Research
    level: levels.intermediate,
  },
  {
    id: "lisa-jackson",
    name: "Lisa Jackson",
    description: "Social scientist researching human behavior and society.",
    skills: [skills[1], skills[6], skills[9]], // Communication, Analytical Thinking, Critical Thinking
    projects: [projects[5]], // Human Behavior Research
    level: levels.advanced,
  },
  {
    id: "clara-williams",
    name: "Clara Williams",
    description: "Geologist specializing in studying Earth's geological processes.",
    skills: [skills[0], skills[2], skills[7]], // Problem Solver, Teamwork, Time Management
    projects: [],
    level: levels.intermediate,
  },
]


export default people;
