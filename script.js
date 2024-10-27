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
        } else {
            gridLeftElements.forEach(el => {
                el.classList.remove('fade-in-left');
                el.classList.add('fade-out');
            });
            gridRightElements.forEach(el => {
                el.classList.remove('fade-in-right');
                el.classList.add('fade-out');
            });
        }
    }

    function animatePengalaman() {
        if (isInViewport(pengalamanSection)) {
            pengalamanElement.classList.add('fade-in-top');
            pengalamanElement.classList.remove('fade-out');
            projekElement.classList.add('fade-in-bottom');
            projekElement.classList.remove('fade-out');
            contohProjekElement.classList.add('fade-in-bottom');
            contohProjekElement.classList.remove('fade-out');
        } else {
            pengalamanElement.classList.remove('fade-in-top');
            pengalamanElement.classList.add('fade-out');
            projekElement.classList.remove('fade-in-bottom');
            projekElement.classList.add('fade-out');
            contohProjekElement.classList.remove('fade-in-bottom');
            contohProjekElement.classList.add('fade-out');
        }
    }

    function animateTools() {
        if (isInViewport(toolsSection)) {
            toolsGridElementsUp.forEach(el => {
                el.classList.add('fade-in-up');
                el.classList.remove('fade-out');
            });
            toolsGridElementsDown.forEach(el => {
                el.classList.add('fade-in-down');
                el.classList.remove('fade-out');
            });
        } else {
            toolsGridElementsUp.forEach(el => {
                el.classList.remove('fade-in-up');
                el.classList.add('fade-out');
            });            
