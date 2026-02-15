// Configuration - Easily changeable phone number
const CONTACT_NUMBER = "916305017247";
const WHATSAPP_MESSAGE = "i am interested";

document.addEventListener('DOMContentLoaded', () => {
    // 1. WhatsApp Link Logic
    const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
    const whatsappUrl = `https://wa.me/${CONTACT_NUMBER}?text=${encodedMessage}`;

    const whatsappLinks = document.querySelectorAll('.whatsapp-link');
    whatsappLinks.forEach(link => {
        link.href = whatsappUrl;
        link.target = "_blank"; // Open in new tab
    });

    // 2. FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // 3. Smooth Scrolling for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. "Add to Plan" Animation Logic
    const addButtons = document.querySelectorAll('.service-footer .btn-secondary');

    addButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Prevent multiple rapid clicks
            if (btn.classList.contains('btn-success')) return;

            const originalText = btn.innerHTML;

            // Apply animation and success state
            btn.classList.add('btn-click-anim', 'btn-success');
            btn.innerHTML = '<i class="fas fa-check"></i> Added';

            // Remove animation class after it plays
            setTimeout(() => {
                btn.classList.remove('btn-click-anim');
            }, 400);

            // Revert after feedback period
            setTimeout(() => {
                btn.classList.remove('btn-success');
                btn.innerHTML = originalText;
            }, 2000);
        });
    });
});
