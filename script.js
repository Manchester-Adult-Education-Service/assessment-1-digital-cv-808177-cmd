const nameHeading = document.querySelector ('h1');
const hour = new Date().getHours();
const year = new Date().getFullYear();
const time = new Date().getTime();

document.getElementById('time').textContent = time
document.getElementById('copyright').textContent = `Copyright © ${year} Ikram Ali`

if (hour < 12) {
    nameHeading.textContent = "Good Morning, Ikram Ali";
} else if (hour < 18) {
    nameHeading.textContent = "Good Afternoon, Ikram Ali";
}else {
    nameHeading.textContent = "Good Evening, Ikram Ali"
}

console.log("The current hour is " + hour);

const personalStatement = document.querySelector('highlight')
personalStatement.style.backgroundColor = '#bee4c1'

alert("Thanks for visiting my portfolio!")
document.querySelectorAll
querySelector

document.getElementById('theme-btn').addEventListener('click', function() {document.body.style.backgroundColor});

const mainContainer = document.querySelector('main');
const headerBar = document.querySelector('header')
const subTitles = document.querySelector('h2');

mainContainer.style.backgroundColor = "#1e293b";
headerBar.style.backgroundColor = "#041125"

const allSkills = document.querySelectorAll('li');

allSkills.forEach(skill=> {
    if (skill.textContent.includes("python")) {
        skill.style.color = "#ea580c"; 
        skill.style.fontWeight = "bold";
    }
});

const currentYear = new Date().getFullYear();
document.getElementById('copyright').textContent = "coperight ©  " + currentYear + "Ikram Ali";

const button = document.querySelector('button');
const isDarkMode = document.body.classList.contains('dark-mode');
if (isDarkMode) {
    button.textContent = "Switch to Light mode";
} else {
    button.textContent = "Switch to Dark mode";
}

const userName = prompt ("Ikram");
const greetingHeading = document.querySelector('h1');

if (userName) {
    greetingHeading.textContent = `Welcome, ${userName}. Welcome to my portfolio.`;
}



