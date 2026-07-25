document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            const isExpanded = mobileBtn.getAttribute('aria-expanded') === 'true';
            mobileBtn.setAttribute('aria-expanded', !isExpanded);
            
            if (navLinks) {
                navLinks.style.display = isExpanded ? 'none' : 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '70px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.padding = '2rem 1.8rem';
                navLinks.style.backgroundColor = '#230406';
                navLinks.style.borderBottom = '1px solid rgba(237, 230, 221, 0.1)';
            }
        });
    }

    // 2. Initial Subtle Entrance Fade (Luxury editorial aesthetic)
    const elementsToAnimate = [
        '.hero-title',
        '.hero-portrait',
        '.hero-content-left',
        '.hero-content-right',
        '.site-header'
    ];

    elementsToAnimate.forEach((selector) => {
        const el = document.querySelector(selector);
        if (el) {
            el.style.opacity = '0';
            el.style.transition = 'opacity 1.2s cubic-bezier(0.25, 1, 0.5, 1)';
        }
    });

    // Trigger subtle fade after load
    requestAnimationFrame(() => {
        setTimeout(() => {
            elementsToAnimate.forEach((selector) => {
                const el = document.querySelector(selector);
                if (el) el.style.opacity = '1';
            });
        }, 100);
    });
});