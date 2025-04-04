document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.sidebar ul li a');
    const sections = document.querySelectorAll('.content section');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default anchor behavior

            // Remove the 'active' class from all sections
            sections.forEach(section => section.classList.remove('active'));

            // Get the target section ID from the link's href
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // Add the 'active' class to the target section
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });
});

