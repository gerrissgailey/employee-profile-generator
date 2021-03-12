const fs = require("fs");


function initialHTML(arr) {
    const html = `<!DOCTYPE html>
      <html lang="en">
      
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
            integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
            integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
            crossorigin="anonymous" />
        <link rel="stylesheet" href="./dist/style.css">
        <title>Document</title>
      </head>
      <body>
        <div class="nav-wrapper">
            <nav class="navbar">
                <h1 class="navbar-brand" href="#">
                    NEXT GENERATION SOLUTIONS TEAM PROFILE
                </h1>
            </nav>
        </div>
        <div>
            <div class="container" id="managers-container">
                <div class="row">
                ${generateCards(arr)}
                </div>
            </div>
        </div>
      </body>
      </html>`;
        fs.writeFile("./dist/index.html", html, function(err) {
            if (err) {
                console.log(err);
            }
        });
                    

    console.log("Starter HTML created!")
}

function generateCards(teamMembersArray) {
    let result = ""
    teamMembersArray.forEach(employee => {
        switch(employee.getRole()) {
            case "Manager":
                result += managerHtml(employee)
            break;
            case "Engineer":
                result += engineerHtml(employee)
            break;
            case "Intern":
                result += internHtml(employee)
            break;
            default:
                result += employeeHtml(employee)
        }
    })
    return result;
} 



const addEmployee = (info, role) => {
    return new Promise(function(resolve, reject) {
    let newHtml = '';
    const name = info.getName();
    const id = info.getId();
    const email = info.getEmail();
    const theirRole = info.getRole();
    let additionalDetail;
    if (role === "Manager") {
        additionalDetail = info.getOfficeNumber();
    } else if (role === "Engineer") {
        additionalDetail = info.getGithub();
    } else if (role === "Intern") {
        additionalDetail = info.getSchool();
    } else {
        return;
    }
        newHtml = `    
            <div class="col-sm-4">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item card-header">
                                <h4 class="card-title">${name}</h4>
                                <h5 class="card-text"><i class="fas fa-mug-hot"></i> ${theirRole}</h5>
                            </li>
                            <div class="card-body-wrapper">
                                <li class="list-group-item"><span>ID:</span> ${id}</li>
                                <li class="list-group-item"><span>Email:</span> <a href = "mailto:${email}">${email}</a></li>
                                <li class="list-group-item"><span>Office number:</span> ${additionalDetail}</li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            `;
            return newHtml;
    });
};
const managerHtml = ({ name, id, email, officeNumber }) => {
    // return managers.map(({ name, id, email, officeNumber }) => {
        return `
            <div class="col-sm-4">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item card-header">
                                <h4 class="card-title">${name}</h4>
                                <h5 class="card-text"><i class="fas fa-glasses"></i>
                                    Engineer</h5>
                            </li>
                            <div class="card-body-wrapper">
                                <li class="list-group-item"><span>ID:</span> ${id}</li>
                                <li class="list-group-item"><span>Email:</span> <a href = "mailto:${email}">${email}</a></li>
                                <li class="list-group-item"><span>Office Number:</span> ${officeNumber}</li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            `;
    // });
};
const engineerHtml = ({ name, id, email, github }) => {
    // return engineers.map(({ name, id, email, github }) => {
        return `
            <div class="col-sm-4">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item card-header">
                                <h4 class="card-title">${name}</h4>
                                <h5 class="card-text"><i class="fas fa-glasses"></i>
                                    Engineer</h5>
                            </li>
                            <div class="card-body-wrapper">
                                <li class="list-group-item"><span>ID:</span> ${id}</li>
                                <li class="list-group-item"><span>Email:</span> <a href = "mailto:${email}">${email}</a></li>
                                <li class="list-group-item"><span>Github:</span> <a href="https://github.com/${github}" target=“_blank”>${github}</a></li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            `;
    // });
};

const internHtml = ({ name, id, email, school }) => {
    // return interns.map(({ name, id, email, school }) => {
        return `
            <div class="col-sm-4">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item card-header">
                                <h4 class="card-title">${name}</h4>
                                <h5 class="card-text"><i class="fas fa-user-graduate"></i>
                                    Intern</h5>
                            </li>
                            <div class="card-body-wrapper">
                                <li class="list-group-item"><span>ID:</span> ${id}</li>
                                <li class="list-group-item"><span>Email:</span> <a href = "mailto:${email}">${email}</a></li>
                                <li class="list-group-item"><span>School:</span> ${school}</li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            `;
    // });
};

const employeeHtml = ({ name, id, email }) => {
    // return employees.map(({ name, id, email, school }) => {
        return `
            <div class="col-sm-4">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item card-header">
                                <h4 class="card-title">${name}</h4>
                                <h5 class="card-text"><i class="fas fa-user-graduate"></i>
                                    Intern</h5>
                            </li>
                            <div class="card-body-wrapper">
                                <li class="list-group-item"><span>ID:</span> ${id}</li>
                                <li class="list-group-item"><span>Email:</span> <a href = "mailto:${email}">${email}</a></li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            `;
    // });
};


module.exports = { initialHTML, addEmployee }
