document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (!href.startsWith('#')) {
            return;
        }
        
        e.preventDefault();
        document.querySelector(href).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
