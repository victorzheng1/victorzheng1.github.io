/**
 * Load modular header and footer components
 * Components are embedded directly (works with file:// protocol)
 */

document.addEventListener('DOMContentLoaded', function() {
    // Header component HTML
    const headerHTML = `<nav class="navbar navbar-dark navbar-expand-lg fixed-top portfolio-navbar gradient" style="color: #ffffff;filter: brightness(100%) contrast(100%) saturate(100%);--bs-body-bg: #984747;opacity: 1;background: linear-gradient(175deg, var(--bs-body-bg) 61%, white 100%), var(--bs-red);">
    <div class="container">
        <a class="navbar-brand logo" href="index.html" style="color: rgb(255,255,255);border-left-color: rgb(255,255,255);opacity: 1;filter: brightness(200%) contrast(200%);">Victor Zheng</a>
        <button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navbarNav">
            <span class="visually-hidden">Toggle navigation</span>
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item fs-5"><a class="nav-link" href="index.html" data-page="index" style="opacity: 1;filter: brightness(200%) contrast(200%);">Home</a></li>
                <li class="nav-item fs-5"><a class="nav-link" href="projects-compact-grid.html" data-page="projects" style="color: var(--bs-gray-200);opacity: 1;filter: brightness(200%) contrast(200%) saturate(200%);">Projects</a></li>
                <li class="nav-item fs-5"><a class="nav-link" href="publications.html" data-page="publications" style="opacity: 1;filter: brightness(200%) contrast(200%);">Publications</a></li>
                <li class="nav-item fs-5"><a class="nav-link" href="contact.html" data-page="contact" style="opacity: 1;filter: brightness(200%) contrast(200%);">Contact me</a></li>
                <li class="nav-item"><a class="nav-link fs-5" href="blog.html" data-page="blog" style="opacity: 1;filter: brightness(200%) contrast(200%);">Blog</a></li>
            </ul>
        </div>
    </div>
</nav>`;

    // Footer component HTML
    const footerHTML = `<footer class="page-footer">
    <div class="container">
        <div class="links"><a href="index.html">About me</a><a href="contact.html">Contact me</a><a href="projects-compact-grid.html">Projects</a></div>
        <div class="social-icons"><a href="https://www.linkedin.com/in/thevictorzheng/"><i class="fab fa-linkedin-in" href=""></i></a><a href="https://www.instagram.com/vic.turtle"><i class="icon ion-social-instagram-outline" href=""></i></a><a href="https://github.com/victorzheng1"><i class="fab fa-github" href=""></i></a></div>
        <small>Victor Zheng 2025</small>
    </div>
</footer>`;
    
    // Load header
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;
        highlightActivePage();
    }
    
    // Load footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }
    
    // Highlight the active navigation link
    function highlightActivePage() {
        const currentPage = getCurrentPageName();
        const navLinks = document.querySelectorAll('[data-page]');
        
        navLinks.forEach(link => {
            if (link.dataset.page === currentPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    
    // Get the current page name from the current URL
    function getCurrentPageName() {
        const pathname = window.location.pathname;
        const filename = pathname.split('/').pop();
        
        // Map filenames to page identifiers
        const pageMap = {
            'index.html': 'index',
            '': 'index', // root directory
            'projects-compact-grid.html': 'projects',
            'publications.html': 'publications',
            'contact.html': 'contact',
            'blog.html': 'blog',
            'bio.html': 'bio'
        };
        
        return pageMap[filename] || '';
    }
});
