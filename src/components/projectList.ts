import { Project } from "./project.js";

export class ProjectList {
  currentProjects: Object[];

  constructor() {
    this.currentProjects = [];
  }

  addProject(project: Object) {
    const newProject = project;
    this.currentProjects.push(newProject);
  }
}
