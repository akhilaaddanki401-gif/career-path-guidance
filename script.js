// Career Compass - script.js

function showRoadmap() {
    const career = document.getElementById("career").value;

    if (career === "") {
        alert("Please select your career goal.");
        return;
    }

    localStorage.setItem("career", career);

    window.location.href = "roadmap.html";
}

// Smooth animation
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// Dark Mode Toggle
function toggleTheme() {
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
}

// Load Saved Theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-theme");
}

// Daily Motivation Quotes
const quotes = [
    "Success comes from consistency.",
    "Dream big, start small.",
    "Every expert was once a beginner.",
    "Practice makes progress.",
    "Code. Learn. Build. Repeat."
];

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

console.log("Today's Motivation:", randomQuote);
