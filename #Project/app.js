const study = document.getElementById("study");
study.addEventListener('mouseenter', () => {
    study.childNodes[3].style.color = 'white';
})
study.addEventListener('mouseleave', () => {
    study.childNodes[3].style.color = 'rgba(255,255,255,0)';
})

const mail = document.getElementById('mail');
mail.addEventListener('click', () => {
    alert("Email Address Copied!");
})

const social = document.getElementById('socials');
social.addEventListener('mouseenter', () => {
    social.style.opacity = '0.6';
    social.childNodes[1].style.opacity = '1';
    social.childNodes[3].style.opacity = '1';
})

social.addEventListener('mouseleave', () => {
    social.style.opacity = '1';
})

const project = document.getElementById('projects');
project.addEventListener('mouseenter', () => {
    project.style.opacity = '0.6';
    project.childNodes[1].style.opacity = '1';
})

project.addEventListener('mouseleave', () => {
    project.style.opacity = '1';
})