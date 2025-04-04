const navButtons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.section');

navButtons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.dataset.section;
    sections.forEach(section => {
      section.classList.remove('active');
    });
    document.getElementById(target).classList.add('active');
  });
});