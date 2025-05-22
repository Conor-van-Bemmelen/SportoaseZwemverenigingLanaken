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


function showCookieBannerIfNoConsent() {
    if (localStorage.getItem('cookiesConsent') === 'accepted') {
        // banner NIET tonen, scripts laden direct
        loadExternalScripts();
        document.getElementById('cookie-banner').style.display = 'none';
    } else {
        // banner tonen
        document.getElementById('cookie-banner').style.display = 'block';
    }

}

document.addEventListener('DOMContentLoaded', function() {
    showCookieBannerIfNoConsent();

    // Functie om externe scripts te laden NA toestemming
    function loadExternalScripts() {
        try {
            // Google Fonts laden
            if (!document.getElementById('google-fonts')) {
                const link = document.createElement('link');
                link.href = 'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap';
                link.rel = 'stylesheet';
                link.id = 'google-fonts';
                document.head.appendChild(link);
            }

            // Google Maps laden
            if (!document.getElementById('google-maps')) {
                const script = document.createElement('script');
                script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAy7cFa8ZD0LV_83tuQ_BE8py5dX29wPpU&callback=initMap';
                script.async = true;
                script.id = 'google-maps';
                document.body.appendChild(script);
            }
        } catch (error) {
            console.error("Er ging iets mis met het laden van externe scripts:", error);
        }
    }

    // Afhandeling akkoord
    document.getElementById('accept-cookies').onclick = function() {
        localStorage.setItem('cookiesConsent', 'accepted');
        document.getElementById('cookie-banner').style.display = 'none';
        loadExternalScripts();
    };

    // Afhandeling weigeren
    document.getElementById('decline-cookies').onclick = function() {
        localStorage.setItem('cookiesConsent', 'declined');
        document.getElementById('cookie-banner').style.display = 'none';
    };

    // Toestemming wijzigen knop
    document.getElementById('change-cookies').onclick = function() {
        localStorage.removeItem('cookiesConsent'); // Verwijder eerdere keuze
        document.getElementById('cookie-banner').style.display = 'block'; // Toon banner opnieuw
    };
});

// Safari: zorg dat banner ook getoond wordt bij pagina refresh via 'pageshow' event
window.addEventListener('pageshow', function(event) {
    // alleen als er geen consent is
    if (!localStorage.getItem('cookiesConsent')) {
        document.getElementById('cookie-banner').style.display = 'block';
    }
});





