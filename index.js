document.addEventListener('DOMContentLoaded', () => {
    // Hamburgermenu-functionaliteit
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // Carousel-functionaliteit
    const carousel = document.querySelector('.community-carousel');
    if (carousel) { // Controleer of carousel bestaat
        let isDown = false;
        let startX;
        let scrollLeft;

        carousel.addEventListener('mousedown', (e) => {
            isDown = true;
            carousel.classList.add('active');
            startX = e.pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
        });

        carousel.addEventListener('mouseleave', () => {
            isDown = false;
            carousel.classList.remove('active');
        });

        carousel.addEventListener('mouseup', () => {
            isDown = false;
            carousel.classList.remove('active');
        });

        carousel.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - carousel.offsetLeft;
            const walk = (x - startX) * 2; // Scroll-snelheid
            carousel.scrollLeft = scrollLeft - walk;
        });
    }

    // Modal-functionaliteit
    const modal = document.getElementById("loginModal");
    const loginButton = document.querySelector(".login-button");
    const closeButton = document.querySelector(".close");
    const registerLink = document.getElementById("registerLink");
    const loginLink = document.getElementById("loginLink");
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    if (modal) {
        if (loginButton) {
            loginButton.addEventListener("click", () => {
                modal.style.display = "flex"; // Gebruik flex om de modal te centreren
            });
        }

        if (closeButton) {
            closeButton.addEventListener("click", () => {
                modal.style.display = "none";
            });
        }

        window.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });

        if (registerLink) {
            registerLink.addEventListener("click", (e) => {
                e.preventDefault();
                loginForm.style.display = "none";
                registerForm.style.display = "block";
            });
        }

        if (loginLink) {
            loginLink.addEventListener("click", (e) => {
                e.preventDefault();
                registerForm.style.display = "none";
                loginForm.style.display = "block";
            });
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
            navLinks.classList.toggle('active');

            // Schakel scrollen in of uit
            if (!isExpanded) {
                document.body.style.overflow = 'hidden'; // Scrollen uitschakelen
            } else {
                document.body.style.overflow = ''; // Scrollen herstellen
            }
        });
    }
});



document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM volledig geladen');
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        console.log('Elementen gevonden');
        navToggle.addEventListener('click', () => {
            console.log('Knop geklikt');
            navLinks.classList.toggle('active');
        });
    } else {
        console.log('Nav-toggle of nav-links niet gevonden');
    }
});


document.getElementById('acceptCookies').onclick = function() {
    document.getElementById('cookieConsent').style.display = 'none';
    // Sla de cookie-toestemming op in de browser (optioneel)
    document.cookie = "cookies_accepted=true; path=/; max-age=31536000"; // 1 jaar geldig
}

document.cookie = "key=value; SameSite=None; Secure";





