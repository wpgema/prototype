const heroContents = [
    {
        title: "Teknologi untuk Masa Depan",
        tagline: "PT Arunika Teknologi Nusantara menghadirkan solusi digital inovatif untuk membantu bisnis berkembang lebih cepat, efisien, dan berkelanjutan."
    },
    {
        title: "Membangun Solusi Digital",
        tagline: "Kami mengembangkan teknologi yang dirancang untuk menjawab kebutuhan bisnis dan memberikan pengalaman digital yang lebih baik."
    },
    {
        title: "Inovasi Tanpa Batas",
        tagline: "Menggabungkan kreativitas, teknologi, dan keahlian untuk menciptakan solusi yang memberikan nilai nyata bagi pelanggan dan mitra."
    },
    {
        title: "Berkembang Bersama Teknologi",
        tagline: "Menjadi mitra teknologi terpercaya bagi perusahaan dan organisasi dalam menghadapi tantangan dan peluang di era digital."
    }
];

const menuToggle = document.getElementById("mobile-menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const menuBackdrop = document.getElementById("mobile-menu-backdrop");
const menuIcon = document.getElementById("mobile-menu-icon");

if (menuToggle && mobileMenu && menuBackdrop && menuIcon) {
    const setMenuOpen = (isOpen) => {
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute("aria-label", isOpen ? "Tutup menu navigasi" : "Buka menu navigasi");
        menuIcon.classList.toggle("fa-bars", !isOpen);
        menuIcon.classList.toggle("fa-xmark", isOpen);
        mobileMenu.setAttribute("aria-hidden", String(!isOpen));
        mobileMenu.inert = !isOpen;
        mobileMenu.classList.toggle("is-open", isOpen);
        menuBackdrop.setAttribute("aria-hidden", String(!isOpen));
        menuBackdrop.inert = !isOpen;
        menuBackdrop.classList.toggle("is-open", isOpen);
        document.body.classList.toggle("overflow-hidden", isOpen);

        if (!isOpen) {
            menuToggle.focus();
        }
    };

    menuToggle.addEventListener("click", () => {
        setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
    });
    menuBackdrop.addEventListener("click", () => setMenuOpen(false));
    mobileMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => setMenuOpen(false));
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
            setMenuOpen(false);
        }
    });
}
 
let currentIndex = 0;
const transitionDuration = 700;
const heroImages = ["images/students3.jpg", "images/img.png", "images/students1.jpg"];

const title = document.getElementById("hero-title");
const tagline = document.getElementById("hero-tagline");
let visibleImage = document.getElementById("hero-image");
let incomingImage = document.getElementById("hero-image-next");

setInterval(() => {
    // Fade out
    title.classList.add("opacity-0", "translate-y-1", "blur-[1px]");
    tagline.classList.add("opacity-0", "translate-y-1", "blur-[1px]");

    const nextImageIndex = (currentIndex + 1) % heroImages.length;
    incomingImage.src = heroImages[nextImageIndex];
    incomingImage.classList.remove("hero-image-zoom");
    void incomingImage.offsetWidth;
    incomingImage.classList.add("hero-image-zoom");

    incomingImage.onload = () => {
        incomingImage.classList.remove("opacity-0");
        visibleImage.classList.add("opacity-0");
    };

    setTimeout(() => {
        // Next content
        currentIndex = (currentIndex + 1) % heroContents.length;

        title.textContent = heroContents[currentIndex].title;
        tagline.textContent = heroContents[currentIndex].tagline;

        // Fade in
        title.classList.remove("opacity-0", "translate-y-1", "blur-[1px]");
        tagline.classList.remove("opacity-0", "translate-y-1", "blur-[1px]");
    }, transitionDuration);

    setTimeout(() => {
        const previousImage = visibleImage;
        visibleImage = incomingImage;
        incomingImage = previousImage;
        incomingImage.classList.remove("hero-image-zoom");
        incomingImage.classList.add("opacity-0");
    }, transitionDuration + 50);

}, 5000);

const container = document.getElementById('particles-container');

const particleCount = 28;

for (let i = 0; i < particleCount; i++) {

    const particle = document.createElement('div');

    particle.classList.add('particle');

    // Posisi awal random
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;

    // Ukuran random
    const size = Math.random() * 4 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Durasi random
    const duration = Math.random() * 4 + 4;
    particle.style.setProperty(
        '--duration',
        `${duration}s`
    );

    // Delay random
    const delay = Math.random() * 6;
    particle.style.setProperty(
        '--delay',
        `${delay}s`
    );

    // Arah gerakan random
    const startX = (Math.random() - 0.5) * 50;
    const startY = (Math.random() - 0.5) * 50;

    const moveX = (Math.random() - 0.5) * 80;
    const moveY = (Math.random() - 0.5) * 80;

    const endX = (Math.random() - 0.5) * 120;
    const endY = (Math.random() - 0.5) * 120;

    particle.style.setProperty('--start-x', `${startX}px`);
    particle.style.setProperty('--start-y', `${startY}px`);

    particle.style.setProperty('--move-x', `${moveX}px`);
    particle.style.setProperty('--move-y', `${moveY}px`);

    particle.style.setProperty('--end-x', `${endX}px`);
    particle.style.setProperty('--end-y', `${endY}px`);

    container.appendChild(particle);
}
