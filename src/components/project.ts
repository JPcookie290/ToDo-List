import { ProjectItem } from "../models/projectItem.js";
import { ToDo } from "./todo.js";

export class Project extends ProjectItem {
  currentToDos: Object[];

  constructor(
    title: string,
    description: string,
    startDate: string,
    endDate: string
  ) {
    super(title, description, startDate, endDate);
    this.currentToDos = [];
  }

  addToDo(title: string, description: string, endDate: string) {
    const newToDo = new ToDo(title, description, this.projectStart, endDate);

    this.currentToDos.push(newToDo);

    console.log(this.currentToDos);
  }
}
