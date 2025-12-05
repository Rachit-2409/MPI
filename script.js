/*Header*/
    // Header scroll effect
        const header = document.getElementById('header');
        document.addEventListener('scroll', () => {
            const scrollValue = window.scrollY;
            if (scrollValue > 50) {
                header.style.background = "#262020";
            } else {
                header.style.background = "transparent";
            }
        });

        // Mobile menu toggle
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        const navMenu = document.getElementById('navMenu');
        const menuOverlay = document.getElementById('menuOverlay');

        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            menuOverlay.classList.toggle('active');
        });

        // Close menu when overlay is clicked
        menuOverlay.addEventListener('click', () => {
            closeMenu();
        });

        // Close menu function
        function closeMenu() {
            mobileMenuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            menuOverlay.classList.remove('active');
        }

        // Close menu on window resize if open
        window.addEventListener('resize', () => {
            if (window.innerWidth > 992) {
                closeMenu();
            }
        });


const about_links = Array.from(document.querySelectorAll(".about-link"));
const about_image_desktop = document.querySelector(".about-image-box img");
const about_image_mobile = document.querySelector("#about-image");
const about_image_box_mob = document.querySelector(".about-image-box-mob");

const about_image_change = (n, e) => {
    // Change both images
    about_image_desktop.src = `./assests/about${n}.jpg`;
    about_image_mobile.src = `./assests/about${n}.jpg`;

    // Active class
    about_links.forEach(link => link.classList.remove("active"));
    e.target.classList.add("active");

    // Change mobile order dynamically
    about_image_box_mob.style.order = n + 1;
};
