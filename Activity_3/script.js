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

document.addEventListener("DOMContentLoaded", () => {
    const players = document.querySelectorAll(".kuripot-player");

    players.forEach(player => {
        const audio = new Audio(player.dataset.src);
        audio.loop = true;

        const playBtn = player.querySelector(".play-toggle");
        const progress = player.querySelector(".track-progress");
        const nextBtn = player.querySelector(".next");
        const prevBtn = player.querySelector(".prev");

        let isPlaying = false;
        let updateInterval = null;

        playBtn.addEventListener("click", () => {
            if (!isPlaying) {
                audio.play();
                playBtn.textContent = "⏸";
                isPlaying = true;

                updateInterval = setInterval(() => {
                    progress.value = (audio.currentTime / audio.duration) * 100 || 0;
                }, 300);
            } else {
                audio.pause();
                playBtn.textContent = "▶";
                isPlaying = false;
                clearInterval(updateInterval);
            }
        });

        progress.addEventListener("input", () => {
            audio.currentTime = (progress.value / 100) * audio.duration;
        });

        nextBtn?.addEventListener("click", () => {
            audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
        });
        
        prevBtn?.addEventListener("click", () => {
            audio.currentTime = Math.max(0, audio.currentTime - 10);
        });



        audio.addEventListener("ended", () => {
            playBtn.textContent = "▶";
            progress.value = 0;
            isPlaying = false;
            clearInterval(updateInterval);
        });
    });
});
