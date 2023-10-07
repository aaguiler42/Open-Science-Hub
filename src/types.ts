import { Node } from "vis-network/standalone/esm/vis-network";
import levels from "./data/levels";

export interface Skill {
  id: string
  name: string;
}

type Level = typeof levels[keyof typeof levels]

export interface Category {
  id: string;
  name: string;
  color: string
}

export interface Project {
  id: number;
  title: string;
  description: string;
  skills: Skill[];
  category: Category;
  level: Level;
  startDate: Date;
  endDate: Date;
  image?: string;
}

export interface Person {
  id: string;
  name: string;
  description: string;
  skills: Skill[];
  projects: Project[];
  level: Level;
  image?: string;
}

export interface NodeData extends Node {
  project?: Project;
  skill?: Skill;
  person?: Person;
}
