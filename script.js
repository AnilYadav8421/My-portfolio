const link = document.querySelector('.about');
const AboutMe1 = document.querySelector('#About-me-1');
const project = document.querySelector('.project');
const Project1 = document.querySelector('#Project-1');
const contactMe = document.querySelector('.contactMe');
const contactMe1 = document.querySelector('#contact-me-1');

link.addEventListener('click', function(){
    AboutMe1.scrollIntoView({behavior:"smooth"});
});

project.addEventListener('click', function(){
    Project1.scrollIntoView({behavior:"smooth"});
});

contactMe.addEventListener('click', function(){
    contactMe1.scrollIntoView({behavior:"smooth"});
});