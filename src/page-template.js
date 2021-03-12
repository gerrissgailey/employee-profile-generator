const fs = require("fs");


function initialHTML(arr) {
    const html = `<!DOCTYPE html>
      <html lang="en">
      
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

            <!-- Latest compiled and minified CSS -->
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
                integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
                crossorigin="anonymous" />
            <link rel="stylesheet" href="./dist/style.css">
            <title>Team Profile</title>
        </head>
        <body>
            <nav class="navbar bg-info m-2">
                <span class="mb-4 mt-2 h2 w-100 text-light text-center">The Company Team</span>
            </nav>
            <div class="container">
                <div class="row">
                    ${generateCards(arr)}
                </div>
            </div>
        </body>
        </html>`;

    fs.writeFile("./dist/index.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
                    
    console.log("HTML Started / Generated!")
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



// const addEmployee = (info, role) => {
//     return new Promise(function(resolve, reject) {
//     let newHtml = '';
//     const name = info.getName();
//     const id = info.getId();
//     const email = info.getEmail();
//     const theirRole = info.getRole();
//     let additionalDetail;
//     if (role === "Manager") {
//         additionalDetail = info.getOfficeNumber();
//     } else if (role === "Engineer") {
//         additionalDetail = info.getGithub();
//     } else if (role === "Intern") {
//         additionalDetail = info.getSchool();
//     } else {
//         return;
//     }
//         // newHtml = `    
//         //     <div class="col-sm-4">
//         //         <div class="card" style="width: 18rem;">
//         //             <div class="card-body">
//         //                 <ul class="list-group list-group-flush">
//         //                     <li class="list-group-item card-header">
//         //                         <h4 class="card-title">${name}</h4>
//         //                         <h5 class="card-text"><i class="fas fa-mug-hot"></i> ${theirRole}</h5>
//         //                     </li>
//         //                     <div class="card-body-wrapper">
//         //                         <li class="list-group-item"><span>ID:</span> ${id}</li>
//         //                         <li class="list-group-item"><span>Email:</span> <a href = "mailto:${email}">${email}</a></li>
//         //                         <li class="list-group-item"><span>Office number:</span> ${additionalDetail}</li>
//         //                     </div>
//         //                 </ul>
//         //             </div>
//         //         </div>
//         //     </div>
//         //     `;
//         //     return newHtml;
//     });
// };
const managerHtml = ({ name, id, email, role, officeNumber }) => {
        return `
            <div class="col-sm-4">
                <div class="card mx-auto mb-4 shadow" style="width: 19rem">
                    <div class="card-header bg-secondary text-light">
                        <h2 class="card-title">${name}</h2> 
                        <h3 class="card-title"><i class="fas fa-mug-hot"></i> ${role}</h3>
                    </div>
                    <div class="card-body bg-light">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><span>ID:</span> ${id}</li>
                            <li class="list-group-item"><span>Email:</span> <a href = "mailto:${email}">${email}</a></li>
                            <li class="list-group-item"><span>Office Number:</span> ${officeNumber}</li>
                        </ul>
                    </div>
                </div>
            </div>
            `;
};

const engineerHtml = ({ name, id, email, role, github }) => {
        return `
            <div class="col-sm-4">
                <div class="card mx-auto mb-4 shadow" style="width: 19rem">
                    <div class="card-header bg-secondary text-light">
                        <h2 class="card-title">${name}</h2> 
                        <h3 class="card-title"><i class="fas fa-glasses"></i> ${role}</h3>
                    </div>
                    <div class="card-body bg-light">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><span>ID:</span> ${id}</li>
                            <li class="list-group-item"><span>Email:</span> <a href = "mailto:${email}">${email}</a></li>
                            <li class="list-group-item"><span>Github:</span> <a href="https://github.com/${github}" target=“_blank”>${github}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            `;
};

const internHtml = ({ name, id, email, role, school }) => {
        return `
            <div class="col-sm-4">
                <div class="card mx-auto mb-4 shadow" style="width: 19rem">
                    <div class="card-header bg-secondary text-light">
                        <h2 class="card-title">${name}</h2> 
                        <h3 class="card-title"><i class="fas fa-user-graduate"></i> ${role}</h3>
                    </div>
                    <div class="card-body bg-light">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><span>ID:</span> ${id}</li>
                            <li class="list-group-item"><span>Email:</span> <a href = "mailto:${email}">${email}</a></li>
                            <li class="list-group-item"><span>School:</span> ${school}</li>
                        </ul>
                    </div>
                </div>
            </div>
            `;
};

const employeeHtml = ({ name, id, email, role }) => {
        return `
            <div class="col-sm-4">
                <div class="card mx-auto mb-4 shadow" style="width: 19rem">
                    <div class="card-header bg-secondary text-light">
                        <h2 class="card-title">${name}</h2> 
                        <h3 class="card-title"><i class="fas fa-address-card"></i> ${role}</h3>
                    </div>
                    <div class="card-body bg-light">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><span>ID:</span> ${id}</li>
                            <li class="list-group-item"><span>Email:</span> <a href = "mailto:${email}">${email}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            `;
};


module.exports = { initialHTML }
