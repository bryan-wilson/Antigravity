// Efek transisi background pada Navbar saat discroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Toggle menu hamburger untuk versi mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Menutup menu mobile saat link (menu) diklik
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Intersection Observer: Menambahkan animasi scroll reveal
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target); // Animasi hanya berjalan sekali
        }
    });
}, observerOptions);

// Mengaplikasikan animasi reveal ke elemen-elemen tertentu
const animatedElements = document.querySelectorAll('.section-title, .about-content, .project-card, .contact-form');

animatedElements.forEach(el => {
    // Setel state awal sebelum di-scroll
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'all 0.8s ease-out';
    observer.observe(el);
});

// Form submission mock (Simulasi pengiriman formulir)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Mencegah reload halaman
        const btn = contactForm.querySelector('button');
        const originalText = btn.innerText;
        
        // Ubah teks tombol
        btn.innerText = 'Mengirim...';
        btn.style.opacity = '0.7';
        
        // Simulasi delay jaringan menggunakan setTimeout
        setTimeout(() => {
            alert('Pesan Anda berhasil dikirim! (Ini hanya simulasi interaktif)');
            contactForm.reset();
            btn.innerText = originalText;
            btn.style.opacity = '1';
        }, 1500);
    });
}
