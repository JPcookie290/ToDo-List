export abstract class ProjectItem {
  projectTitle: string;
  projectDescription: string;
  projectStart: string;
  projectEnd: string;

  constructor(
    title: string,
    description: string,
    startDate: string,
    endDate: string
  ) {
    this.projectTitle = title;
    this.projectDescription = description;
    this.projectStart = startDate;
    this.projectEnd = endDate;
  }

  // Functions will be added
}
