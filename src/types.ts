import {
  Node,
} from "vis-network/standalone/esm/vis-network";

interface Skill {
    name: string;
}

type Level = "basic" | "intermediate" | "advanced";
type Status = "inProgress" | "finished";

export interface Category {
    id: number;
    name: string;
}

export interface Project {
    title: string;
    description: string;
    skills: Skill[];
    level: Level;
    startDate: Date;
    endDate: Date;
    status: Status
}

export interface Person {
    name: string;
    skills: Skill[];
    level: Level;
}

export interface NodeData extends Node {
    project?: Project;
    skill?: Skill;
    person?: Person;
}