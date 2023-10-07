import { Node } from "vis-network/standalone/esm/vis-network";

interface Skill {
  id: string
  name: string;
}

type Level = "basic" | "intermediate" | "advanced";
type Status = "inProgress" | "finished";

export interface Category {
  id: string;
  name: string;
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
  status: Status;
}

export interface Person {
  id: string;
  name: string;
  description: string;
  skills: Skill[];
  level: Level;
  image?: string;
}

export interface NodeData extends Node {
  project?: Project;
  skill?: Skill;
  person?: Person;
}
