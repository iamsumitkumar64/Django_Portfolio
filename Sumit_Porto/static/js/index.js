document.addEventListener('keydown', function (e) {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        e.preventDefault();
    }
});
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});
let mode = document.getElementById("mode");
let body = document.body;
mode.addEventListener("click", () => {
    if (mode.getAttribute("src") == "static/other/night.png") {
        mode.src = "static/other/light.png";
        body.setAttribute("style", "color:white;background-color: rgb(1, 0, 26);");
        document.querySelectorAll("a").forEach(a => a.setAttribute("style", "color:white;"));
    } else {
        mode.src = "static/other/night.png";
        body.setAttribute("style", "color:black; background-color:rgb(129, 129, 129);");
        document.querySelectorAll("a").forEach(a => a.setAttribute("style", "color:black;"));
    }
});
let about_btn = document.getElementsByClassName("about-btns");
console.log(about_btn);
let para = document.getElementById("about-btn-cont-p");
para.innerHTML = `  <ul>
 <li> Hello! My name is Sumit Birwal & I enjoy creating things that live on the internet.</li></br><li>I'm a passionate Developer, with strong administrative & communication skills, good attention to detail & the ability to write efficient code.</li></br>
 <li>I have done Full-Stack Development in Django from Youtube.</li></br>
 <li>I have done 120+ LeetCode Problems with C++ and Python.</li>
</ul>`;
;
window.addEventListener("scroll", () => {
    if (about_btn.length > 0) {
        about_btn[0].addEventListener("click", () => {
            let para = document.getElementById("about-btn-cont-p");
            para.innerHTML = `  <ul>
             <li> Hello! My name is Sumit Birwal & I enjoy creating things that live on the internet.</li></br> <li>I'm a passionate Developer, with strong administrative & communication skills, good attention to detail & the ability to write efficient code.</li></br>
             <li>I have done Full-Stack Development in Django from Youtube.</li></br>
             <li>I have done 120+ LeetCode Problems with C++ and Python.</li>
         </ul>`;
        });
        about_btn[1].addEventListener("click", () => {
            let para = document.getElementById("about-btn-cont-p");
            para.innerHTML = `<ul>
    <li>Gained hands-on experience in Python, JavaScript, C++.</li></br>
    <li>Learned Web Development basics: HTML, CSS, and JavaScript.</li></br>
    <li>Improved Problem-Solving skills through Data-Structures and Algorithms.</li></br>
    <li>Developed Amazon CLone Project by Youtube-Tutorial and try to add things with my basic knowledge.</li></br>
    <li>Received valuable Mentorship and built a network in the Tech Industry.</li>
</ul>`;
        });
    } else {
        console.error("No elements found with the class name 'about-btns'.");
    }
});
function SendMail(event) {
    event.preventDefault();
    var params = {
        from_name: document.getElementsByClassName("form")[0].value,
        email_id: document.getElementsByClassName("form")[1].value,
        mobile: document.getElementsByClassName("form")[2].value,
        message: document.getElementsByClassName("form")[3].value,
    }
    emailjs.send("service_nvpczn8", "template_fjbjz6e", params).then(function (res) {
        alert("Success !" + res.status)
    }).catch(function (error) {
        console.error("Failed to send email:", error);
    });
}
// document.getElementById("myForm").addEventListener("submit", SendMail);
document.getElementById("resume").addEventListener("click", () => {
    const pdfUrl = "static/other/My Resume.pdf";
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});