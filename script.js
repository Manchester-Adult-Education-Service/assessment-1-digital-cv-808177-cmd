const nameHeading = document.querySelector ('h1');
const hour = new Date().getHours();

if (hour < 12) {
    nameHeading.textContent = "Good Morning, Ikram Ali";
} else if (hour < 18) {
    nameHeading.textContent = "Good Afternoon, Ikram Ali";
}else {
    nameHeading.textContent = "Good Evening, Ikram Ali"
}

console.log("The current hour is " + hour);
