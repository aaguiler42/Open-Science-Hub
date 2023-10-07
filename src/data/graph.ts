import { Edge } from "vis-network/standalone/esm/vis-network";
import { NodeData } from "../types";
import people from "./people";

export const nodes: NodeData[] = [
  {
    id: 1,
    label: "Physics",
    skill: {
      name: "Physics",
    },
  },
  {
    id: 2,
    label: "Proyecto 2",
    project: {
      id: 2,
      title: "Proyecto 2",
      description: "Proyecto 2",
      skills: [{ name: "Proyecto 2" }],
      category: { id: "science", name: "Science"},
      level: "basic",
      startDate: new Date(),
      endDate: new Date(),
      status: "inProgress",
    },
  },
  {
    id: 3,
    label: "Persona 1",
    person: {
      id: "Persona 1",
      description: "Persona 1",
      name: "Persona 1",
      skills: [{ name: "Persona 1" }],
      level: "basic",
    },
  },
  { id: 4, label: "Space Project", project: { title: "Space Project", description: "Node 4", skills: [{ name: "Node 4" }], level: "basic", startDate: new Date(), endDate: new Date(), status: "inProgress" } },
  ...people.map((person) => ({
    id: person.name,
    label: person.name,
    person,
  })),
];

export const edges: Edge[] = [
  { from: 2, to: 1 },
  { from: "Albert Einstein", to: 1 },
  { from: 3, to: 4 },
];
