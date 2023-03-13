class Customer {
    constructor(name, email, phone) {
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.projects = [];
    }
  
    edit(name, email, phone) {
      this.name = name;
      this.email = email;
      this.phone = phone;
    }
  
    addProject(project) {
      this.projects.push(project);
    }
  
    removeProject(project) {
      const index = this.projects.indexOf(project);
      if (index > -1) {
        this.projects.splice(index, 1);
      }
    }
  
    findProject(name) {
      return this.projects.find((project) => project.name === name);
    }
  
    findProjects() {
      return this.projects;
    }
  }
  
  class Executor {
    constructor(name, email, phone) {
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.projects = [];
    }
  
    edit(name, email, phone) {
      this.name = name;
      this.email = email;
      this.phone = phone;
    }
  
    addProject(project) {
      this.projects.push(project);
    }
  
    removeProject(project) {
      const index = this.projects.indexOf(project);
      if (index > -1) {
        this.projects.splice(index, 1);
      }
    }
  
    findProjects() {
      return this.projects;
    }
  }
  
  class Project {
    constructor(name, description, customer, executor) {
      this.name = name;
      this.description = description;
      this.customer = customer;
      this.executor = executor;
      this.status = 'In Progress';
    }
  
    edit(name, description) {
      this.name = name;
      this.description = description;
    }
  
    changeStatus(status) {
      this.status = status;
    }
  }
  
  class ProjectsInProgress {
    constructor() {
      this.projects = [];
    }
  
    addProject(project) {
      this.projects.push(project);
    }
  
    removeProject(project) {
      const index = this.projects.indexOf(project);
      if (index > -1) {
        this.projects.splice(index, 1);
      }
    }
  
    findProjectsByCustomer(customer) {
      return this.projects.filter((project) => project.customer === customer);
    }
  
    findProjectsByExecutor(executor) {
      return this.projects.filter((project) => project.executor === executor);
    }
  }
  

  const customers = [];
  const executors = [];
  const projectsInProgress = new ProjectsInProgress();
  
  const customer1 = new Customer('John Doe', 'johndoe@example.com', '1234567890');
  const executor1 = new Executor('Jane Smith', 'janesmith@example.com', '0987654321');
  const project1 = new Project('Website Development', 'Develop a new website ', customer1, executor1);
  
  customer1.addProject(project1);
  executor1.addProject(project1);
  projectsInProgress.addProject(project1);
  
  customers.push(customer1);
  executors.push(executor1);
  
  console.log(customers);
  console.log(executors);
  console.log(projectsInProgress.findProjectsByCustomer(customer1));
  console.log(projectsInProgress.findProjectsByExecutor(executor1));
  