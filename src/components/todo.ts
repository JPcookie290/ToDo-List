import { ProjectItem } from "../models/projectItem.js";

export class ToDo extends ProjectItem {
  constructor(
    title: string,
    description: string,
    startDate: string,
    endDate: string
  ) {
    super(title, description, startDate, endDate);
  }
}
