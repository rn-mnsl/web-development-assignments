document.addEventListener('DOMContentLoaded', () => {
    const learnMoreButton = document.querySelector('.cta-button');
    
    learnMoreButton.addEventListener('click', () => {
        const aboutSection = document.getElementById('about');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
});

const projects = document.querySelectorAll(".project-card");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
let currentIndex = 0;

function showProject(index) {
    projects.forEach((project, i) => {
        project.classList.toggle("active", i === index);
    });
}

leftBtn.addEventListener("click", () => {
    currentIndex = (currentIndex === 0) ? projects.length - 1 : currentIndex - 1;
    showProject(currentIndex);
});

rightBtn.addEventListener("click", () => {
    currentIndex = (currentIndex === projects.length - 1) ? 0 : currentIndex + 1;
    showProject(currentIndex);
});

// Initialize first project
showProject(currentIndex);