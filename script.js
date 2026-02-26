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