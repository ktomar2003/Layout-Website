// Animated Counter 
let clientCount = 0;
let projectCount = 0;
let leadsCount = 0;

let clients = document.getElementById("clients");
let projects = document.getElementById("projects");
let leads = document.getElementById("leads");

let counter = setInterval(() => {
    clientCount++;
    projectCount++;
    leadsCount += 5;
    clients.innerText = clientCount + "+";
    projects.innerText = projectCount + "+";
    leads.innerText = leadsCount + "+";
    if (clientCount == 120) {
        clearInterval(counter);
    }
}, 40);