const inquirer = require("inquirer");
const fs = require("fs");
const { initialHTML, addEmployee } = require("./src/page-template");

const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");


const team = [];






function employeeQuestions() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Employee name?",
                validate: employeeName => {
                    if (employeeName) {
                        return true;
                    } else {
                        console.log("Please enter employee name.")
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "id",
                message: "Employee ID?",
                validate: employeeId => {
                    if (employeeId) {
                        return true;
                    } else {
                        console.log("Please enter employee ID.")
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "email",
                message: "Employee email?",
                validate: employeeEmail => {
                    if (employeeEmail) {
                        return true;
                    } else {
                        console.log("Please enter employee email.")
                        return false;
                    }
                }
            },
            {
                type: "list",
                name: "role",
                message: "Employee role?",
                choices: ["Manager", "Engineer", "Employee", "Intern"]
            }
        ])
        .then(teamMember => {
            if (teamMember.role === "Manager") {
                inquirer
                    .prompt([
                        {
                            type: "input",
                            name: "officeNumber",
                            message: "Enter Manager's office number.",
                            validate: managerOfficeNum => {
                                if (managerOfficeNum) {
                                    return true;
                                } else {
                                    console.log("Please enter Manager's office number.")
                                    return false;
                                }
                            }
                        },
                    ])
                    .then(answer => {
                        console.log(answer.officeNumber)
                        const addManager = new Manager(teamMember.name, teamMember.id, teamMember.email, teamMember.role, answer.officeNumber);
                        team.push(addManager);
                        initialHTML(team)

                        let role = "Manager";
                        addEmployee(addManager, role);

                        addAnother();
                    })
            } else if (teamMember.role === "Engineer") {
                inquirer
                    .prompt([
                        {
                            type: "input",
                            name: "github",
                            message: "Enter Engineer's GitHub username.",
                            validate: engineerGithub => {
                                if (engineerGithub) {
                                    return true;
                                } else {
                                    console.log("Please enter Engineer's GitHub username.")
                                    return false;
                                }
                            }
                        },
                    ])
                    .then(answer => {
                        console.log(answer.github)
                        const addEngineer = new Engineer(teamMember.name, teamMember.id, teamMember.email, teamMember.role, answer.github);
                        team.push(addEngineer);
                        initialHTML(team);
                        addAnother();
                    })
            } else if (teamMember.role === "Intern") {
                inquirer
                    .prompt([
                        {
                            type: "input",
                            name: "school",
                            message: "Enter Intern's school.",
                            validate: internSchool => {
                                if (internSchool) {
                                    return true;
                                } else {
                                    console.log("Please enter Intern's school.")
                                    return false;
                                }
                            }
                        },
                    ])
                    .then(answer => {
                        console.log(answer.school)
                        const addIntern = new Intern(teamMember.name, teamMember.id, teamMember.email, teamMember.role, answer.school);
                        team.push(addIntern);
                        initialHTML(team);
                        addAnother();
                    })

            } else {
                const addEmployee = new Employee(teamMember.name, teamMember.id, teamMember.email, teamMember.role)
                team.push(addEmployee);
                initialHTML(team);
                addAnother();
            }
            
            // Build out function for adding another teammember
            function addAnother() {
                inquirer
                    .prompt([
                        {
                            type: "confirm",
                            name: "newEmployee",
                            message: "Do you want to add another employee?"
                        }
                    ])
                    .then(add => {
                        if (add.newEmployee) {
                            employeeQuestions()
                        } else {
                            console.log("Your team is complete!")
                            initialHTML(team);
                        }
                    })
                }
            })
        }
        
        // new TeamProfile().generateTeamProfilePage();
employeeQuestions();