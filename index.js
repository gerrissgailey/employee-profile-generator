const fs = require("fs");
const path = require("path");

const inquirer = require("inquirer");

//
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

const team = [];


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
                    addAnother()
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
                    console.log(answer.officeNumber)
                    const addEngineer = new Engineer(teamMember.name, teamMember.id, teamMember.email, teamMember.role, answer.github);
                    team.push(addEngineer);
                    addAnother()
                })
        }

        // Build out function for adding another teammember
        function addAnother() {
            
        }
    })