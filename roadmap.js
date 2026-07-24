const career = localStorage.getItem("career") || "Software Engineer";

document.getElementById("careerTitle").innerText = career + " Roadmap";

const roadmaps = {

"Software Engineer":{
skills:["C","C++","Java","Python","HTML","CSS","JavaScript","React","Node.js","SQL","Git & GitHub","DSA"],
timetable:["6:00 AM Exercise","7:00 AM Coding","9:00 AM College","5:00 PM Learn","7:00 PM Project","9:00 PM Revision"],
projects:["Calculator","Portfolio","Weather App","Chat App","E-Commerce","Student Management"],
advanced:["Online Compiler","Job Portal","AI Chatbot","Social Media App","Cloud Project"]
},

"Web Developer":{
skills:["HTML","CSS","JavaScript","Bootstrap","React","Node.js","MongoDB","Git"],
timetable:["1 hr HTML","1 hr CSS","2 hrs JavaScript","1 hr React","1 hr Project"],
projects:["Portfolio","Restaurant Website","Blog","Netflix Clone","Amazon Clone"],
advanced:["E-Commerce","Social Media","Video Streaming","CMS","Freelancing Portfolio"]
},

"AI / ML Engineer":{
skills:["Python","NumPy","Pandas","Matplotlib","Machine Learning","Deep Learning","TensorFlow","PyTorch"],
timetable:["Math","Python","ML","Dataset Practice","Project"],
projects:["AI Chatbot","Spam Detection","Face Detection","Recommendation System"],
advanced:["Object Detection","Voice Assistant","Self Driving Demo","Medical AI","Stock Prediction"]
},

"Data Scientist":{
skills:["Python","SQL","Pandas","Statistics","Power BI","Machine Learning"],
timetable:["Python","SQL","Statistics","Visualization","Projects"],
projects:["Sales Analysis","COVID Dashboard","IPL Analysis","Data Cleaning"],
advanced:["Prediction Models","Big Data Dashboard","Customer Analytics","Fraud Detection"]
},

"Cyber Security":{
skills:["Networking","Linux","Python","Ethical Hacking","OWASP","Burp Suite"],
timetable:["Networking","Linux","Python","CTF","Revision"],
projects:["Port Scanner","Password Checker","Packet Sniffer","Vulnerability Scanner"],
advanced:["Pen Testing Lab","SOC Dashboard","Malware Analysis","IDS"]
},

"App Developer":{
skills:["Java","Kotlin","Android Studio","Firebase","SQLite","REST API"],
timetable:["Java","Android","Firebase","Project","Testing"],
projects:["Notes App","Weather App","Chat App","Expense Tracker"],
advanced:["Food Delivery App","E-Commerce App","Ride Booking","Social Media App"]
},

"UI / UX Designer":{
skills:["Figma","Adobe XD","Photoshop","Wireframing","Prototyping"],
timetable:["Design Practice","UI","UX","Prototype","Portfolio"],
projects:["Login Screen","Landing Page","Mobile UI","Dashboard"],
advanced:["Complete App UI","Design System","E-Commerce UI","Banking UI"]
},

"Digital Marketing":{
skills:["SEO","Google Ads","Meta Ads","Content Marketing","Email Marketing"],
timetable:["SEO","Content","Ads","Analytics","Campaign"],
projects:["SEO Website","Instagram Campaign","Blog","Email Campaign"],
advanced:["Brand Marketing","Affiliate Website","Google Ads Campaign","Marketing Dashboard"]
},

"Government Jobs":{
skills:["Reasoning","Aptitude","GK","Current Affairs","English"],
timetable:["Current Affairs","Reasoning","Maths","Mock Test","Revision"],
projects:["Daily Notes","Mock Analysis","Current Affairs PDF","Revision Planner"],
advanced:["Full Test Series","Interview Prep","Rank Booster","Exam Strategy"]
},

"Entrepreneur":{
skills:["Business","Marketing","Sales","Finance","Leadership"],
timetable:["Read Business","Market Research","Product","Sales","Networking"],
projects:["Business Plan","Startup Website","Pitch Deck","Market Survey"],
advanced:["Launch Startup","Investor Pitch","Scale Business","Brand Building"]
}

};

const data = roadmaps[career];

if(data){

const sections = document.querySelectorAll(".section");

sections[0].innerHTML =
"<h2>📚 Skills You Need</h2><ul>" +
data.skills.map(x=>`<li>${x}</li>`).join("") +
"</ul>";

sections[1].innerHTML =
"<h2>📅 Daily Timetable</h2><ul>" +
data.timetable.map(x=>`<li>${x}</li>`).join("") +
"</ul>";

sections[2].innerHTML =
"<h2>💡 Beginner Projects</h2><ul>" +
data.projects.map(x=>`<li>${x}</li>`).join("") +
"</ul>";

sections[3].innerHTML =
"<h2>🚀 Advanced Projects</h2><ul>" +
data.advanced.map(x=>`<li>${x}</li>`).join("") +
"</ul>";

}
