// get a card from bootstrap use same card over and over and make it
// manager.getName
// manager.getId

function generateCardHTML(answers) {
    switch (answers) {
        case employee.getRole() = "Manager":
            return `
<div class="col mb-4">
<div class="card" style="width: 18rem;">
                        <div class="card-body bg-warning">
                            <h4 class="card-title">${employee.getName()}</h4>
                            <h5 class="card-text">Manager</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${employee.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail}</li>
                            <li class="list-group-item">Office number: ${manager.officeNumber}</li>
                        </ul>
                    </div>
                </div>
`;
        case employee.getRole() = "Engineer":
            return `
    <div class="col mb-4">
    <div class="card" style="width: 18rem;">
                        <div class="card-body bg-warning">
                            <h4 class="card-title">${employee.getName()}</h4>
                            <h5 class="card-text">Engineer</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${employee.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</li>
                            <li class="list-group-item"><a href="https://github.com/${engineeer.getGithub}" target="_blank">${engineeer.getGithub}</a></li>
                        </ul>
                    </div>
                </div>
    `;
        case employee.getRole() = "Intern":
            return `
    <div class="col mb-4">
    <div class="card" style="width: 18rem;">
                        <div class="card-body bg-warning">
                            <h4 class="card-title">${employee.getName()}</h4>
                            <h5 class="card-text">Intern</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${employee.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</li>
                            <li class="list-group-item">${intern.getSchool}</li>
                        </ul>
                    </div>
                </div>
    `;
    }
}

const generateHTML = () => {
return`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <title>Team Profile</title>
</head>

<body>
    <header>
        <div class="container-fluid p-3 mb-2 bg-success text-warning text-center">
            <h1>My Team</h1>
        </div>
    </header>
    <div class="container text-success">
            <div class="row row-cols-1 row-cols-md-3">
            ${generateCardHTML(answers)}                
            </div>
    </div>
</body>

</html>
`;
};