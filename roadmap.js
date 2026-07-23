const career = localStorage.getItem("career") || "Software Engineer";

document.getElementById("careerTitle").innerText = career + " Roadmap";

const roadmaps = {

"Software Engineer":{
skills:[
"C Programming",
"C++",
"Python",
"Java",
"HTML",
"CSS",
"JavaScript",
"React",
"Node.js",
"Git & GitHub",
"SQL",
"DBMS",
"Operating Systems",
"Computer Networks",
"Data Structures & Algorithms"
],

projects:[
"Calculator",
"Portfolio Website",
"Weather App",
"Chat Application",
"E-Commerce Website",
"Student Management System"
],

timetable:[
"6:00 AM - Wake Up",
"6:30 AM - Exercise",
"7:30 AM - Coding Practice",
"9:00 AM - College",
"5:00 PM - Learn New Topic",
"7:00 PM - Project Building",
"9:00 PM - Revision"
]
},

"Web Developer":{
skills:[
"HTML",
"CSS",
"JavaScript",
"Bootstrap",
"Tailwind CSS",
"React",
"Node.js",
"Express",
"MongoDB",
"Git & GitHub"
],

projects:[
"Portfolio Website",
"Restaurant Website",
"Blog Website",
"Netflix Clone",
"Amazon Clone",
"E-Commerce Website"
],

timetable:[
"1 Hour HTML",
"1 Hour CSS",
"2 Hours JavaScript",
"1 Hour React",
"1 Hour Project"
]
},

"AI / ML Engineer":{
skills:[
"Python",
"Numpy",
"Pandas",
"Matplotlib",
"Machine Learning",
"Deep Learning",
"TensorFlow",
"PyTorch",
"OpenCV",
"NLP"
],

projects:[
"AI Chatbot",
"Face Detection",
"Spam Detection",
"Recommendation System",
"Object Detection"
],

timetable:[
"Math Practice",
"Python",
"ML Concepts",
"Dataset Practice",
"AI Project"
]
}

};

const data = roadmaps[career];

if(data){

const sections=document.querySelectorAll(".section");

sections[0].innerHTML="<h2>📚 Skills</h2><ul>"+data.skills.map(skill=>`<li>${skill}</li>`).join("")+"</ul>";

sections[1].innerHTML="<h2>📅 Daily Timetable</h2><ul>"+data.timetable.map(time=>`<li>${time}</li>`).join("")+"</ul>";

sections[2].innerHTML="<h2>💡 Projects</h2><ul>"+data.projects.map(project=>`<li>${project}</li>`).join("")+"</ul>";

}
