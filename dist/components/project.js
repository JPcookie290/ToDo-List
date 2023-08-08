import { ProjectItem } from "../models/projectItem.js";
import { ToDo } from "./todo.js";
export class Project extends ProjectItem {
    constructor(title, description, startDate, endDate) {
        super(title, description, startDate, endDate);
        this.currentToDos = [];
    }
    addToDo(title, description, endDate) {
        const newToDo = new ToDo(title, description, this.projectStart, endDate);
        this.currentToDos.push(newToDo);
        console.log(this.currentToDos);
    }
}
//# sourceMappingURL=project.js.map