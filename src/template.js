// get a card from bootstrap use same card over and over and make it
// manager.getName
// manager.getId

function generateHTML(answers) {
    switch (answers) {
        case "Manager":
            return `
<div class="col mb-4">
                    <div class="card">
                        <div class="card-body bg-warning">
                            <h4 class="card-title">${this.name}</h4>
                            <h5 class="card-text">Manager</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${this.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</li>
                            <li class="list-group-item">Office number: ${this.officeNumber}</li>
                        </ul>
                    </div>
                </div>
`;
        case "Engineer":
            return `
    <div class="col mb-4">
                    <div class="card">
                        <div class="card-body bg-warning">
                            <h4 class="card-title">${this.name}</h4>
                            <h5 class="card-text">Engineer</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${this.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</li>
                            <li class="list-group-item"><a href="https://github.com/${this.github}">${this.github}</a></li>
                        </ul>
                    </div>
                </div>
    `;
        case "Intern":
            return `
    <div class="col mb-4">
                    <div class="card">
                        <div class="card-body bg-warning">
                            <h4 class="card-title">${this.name}</h4>
                            <h5 class="card-text">Intern</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${this.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</li>
                            <li class="list-group-item">${this.school}</li>
                        </ul>
                    </div>
                </div>
    `;
    }
}