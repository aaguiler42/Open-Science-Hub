import { Edge, IdType, Options } from "vis-network/standalone/esm/vis-network";
import { NodeData } from "../types";
import people from "./people";
import projects from "./projects";
import categories from "./categories";

export const options: Options = {
  layout: {
    randomSeed: 0.3882036480184978,
  },
  nodes: {
    shape: "circle",
    color: {
      background: "#eee",
      border: "#1c1c1c",
      highlight: {
        background: "#fff",
        border: "#000000",
      },
      hover: {
        background: "#ffffff",
        border: "red",
      },
    },
    font: {
      color: "#000",
    },
    widthConstraint: {
      maximum: 100,
    },
  },
  edges: {
    color: {
      color: "#00f7ff",
      highlight: "#09f",
    },
    width: 2,
  },
};

export const nodes: NodeData[] = [
  ...people.map((person, index) => ({
    id: person.id,
    // label: person.name,
    shape: "circularImage",
    image: person.image ?? `/person-${index}.jpg`,
    color: {
      highlight: {
      border: "#09f",
    }},
    person: {
      ...person,
      image: person.image ?? `/person-${index}.jpg`,
    },
  })),
  ...projects.map((project) => ({
    id: project.id,
    label: project.title,
    project,
  })),
  ...categories
    .filter((c) => projects.some((p) => p.categories.some(category => category.id === c.id)))
    .map((category) => ({
      id: category.id,
      label: category.name,
      category,
      color: category.color,
      shape: "ellipse",
      font: {
        size: 16,
      },
    })),
];

export const edges: Edge[] = [];

function createEdge(from: IdType, to: IdType): Edge {
  return { from, to };
}

// Relaciones entre personas y proyectos
people.forEach((person) => {
  person.projects.forEach((p) => {
    edges.push(createEdge(person.id, p.id));
  });
});

// // Relaciones entre proyectos y categorías
projects.forEach((project) => {
  project.categories.forEach((c) => {
    edges.push(createEdge(project.id, c.id));
  })
});
