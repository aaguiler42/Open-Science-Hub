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
      title: "Proyecto 2",
      description: "Proyecto 2",
      skills: [{ name: "Proyecto 2" }],
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
  { from: 3, to: 1 },
  { from: 3, to: 4 },
];
