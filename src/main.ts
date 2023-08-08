import { Project } from "./components/project.js";
import { ProjectList } from "./components/projectList.js";

/*--------------------------Testing Code--------------------------*/
const test = new Project(
  "test title",
  "Test description",
  "test date start",
  "test date end"
);

test.addToDo("test1", "test1", "test1");
test.addToDo("test2", "test2", "test2");
test.addToDo("test3", "test3", "test3");

const test2 = new ProjectList();

test2.addProject(test);

console.log(test2.currentProjects);
