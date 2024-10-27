window.onload = function() {
    // Ambil elemen navbar
    var navbar = document.querySelector('.background-nav');
    navbar.style.opacity = 1;

    var midSection = document.querySelector('.mid');
    midSection.style.opacity = 1;

    // Ambil elemen-elemen grid skill
    const gridLeftElements = document.querySelectorAll('.grid-skill-1, .grid-skill-2, .grid-skill-3');
    const gridRightElements = document.querySelectorAll('.grid-skill-4, .grid-skill-5, .grid-skill-6');
    const skillSection = document.getElementById('Skill');

    // Ambil elemen-elemen pada halaman pengalaman
    const pengalamanElement = document.querySelector('.halaman-tiga-1');
    const projekElement = document.querySelector('.halaman-tiga-2');
    const contohProjekElement = document.querySelector('.halaman-tiga-3');
    const pengalamanSection = document.getElementById('Pengalaman');

    // Ambil elemen pada halaman Tools
    const toolsSection = document.getElementById("Tools");
    const toolsGridElementsUp = document.querySelectorAll('.grid-tools-1, .grid-tools-3, .grid-tools-4, .grid-tools-6');
    const toolsGridElementsDown = document.querySelectorAll('.grid-tools-2, .grid-tools-5');

    // Ambil elemen pada halaman Sertifikat
    const sertifikatSection = document.getElementById("Sertifikat");
    const adityaElement = document.querySelector('.latar-aditya');
    const yogaElement = document.querySelector('.latar-yoga');
    const wisnuElement = document.querySelector('.latar-wisnu');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
    }

    function animateSkills() {
        if (isInViewport(skillSection)) {
            gridLeftElements.forEach(el => {
                el.classList.add('fade-in-left');
                el.classList.remove('fade-out');
            });
            gridRightElements.forEach(el => {
                el.classList.add('fade-in-right');
                el.classList.remove('fade-out');
            });
