
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.top = `${e.pageY}px`;
    cursor.style.left = `${e.pageX}px`;
});


const projectsContainer = document.querySelector('.projects-container');
let isDown = false;
let startX;
let scrollLeft;

projectsContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    projectsContainer.classList.add('active');
    startX = e.pageX - projectsContainer.offsetLeft;
    scrollLeft = projectsContainer.scrollLeft;
});

projectsContainer.addEventListener('mouseleave', () => {
    isDown = false;
    projectsContainer.classList.remove('active');
});

projectsContainer.addEventListener('mouseup', () => {
    isDown = false;
    projectsContainer.classList.remove('active');
});

projectsContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - projectsContainer.offsetLeft;
    const walk = (x - startX) * 2; 
    projectsContainer.scrollLeft = scrollLeft - walk;
});


const background = document.querySelector('.dynamic-background');

function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');


    particle.style.top = `${Math.random() * 100}vh`;
    particle.style.left = `${Math.random() * 100}vw`;


    particle.style.setProperty('--x', Math.random() * 2 - 1); 
    particle.style.setProperty('--y', Math.random() * 2 - 1); 

    background.appendChild(particle);


    particle.addEventListener('animationend', () => {
        particle.remove();
        createParticle();
    });
}

window.onload = () => {
    for (let i = 0; i < 50; i++) {
        createParticle();
    }
};

function navigateToProject1() {
    window.location.href = "project1.html"; 
}

function navigateToProject2() {
    window.location.href = "project2.html"; 
}

function navigateToProject3() {
    window.location.href = "project3.html"; 
}

function navigateToProject4() {
    window.location.href = "project4.html"; 
}

function navigateToProject5() {
    window.location.href = "project5.html"; 
}

function navigateToAboutPage() {
    window.location.href = "about.html"; 
}

