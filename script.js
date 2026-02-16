// Configuration - Easily changeable phone number
const CONTACT_NUMBER = "919999999999";
const GENERIC_MESSAGE = "Hi, I am interested in pest control services in Vijayawada.";

document.addEventListener('DOMContentLoaded', () => {
    // 1. WhatsApp Generic Link Logic
    const encodedGeneric = encodeURIComponent(GENERIC_MESSAGE);
    const genericUrl = `https://wa.me/${CONTACT_NUMBER}?text=${encodedGeneric}`;

    // Set for all generic links (Floating button, Hero secondary link, etc.)
    document.querySelectorAll('.whatsapp-link').forEach(link => {
        link.href = genericUrl;
        link.target = "_blank";
        if (!link.title) link.title = "Chat on WhatsApp";
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

    // 4. Service Specific WhatsApp Logic
    const serviceButtons = document.querySelectorAll('.service-btn');

    serviceButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Prevent multiple rapid clicks
            if (btn.classList.contains('btn-success')) return;

            const serviceName = btn.getAttribute('data-service');
            const message = `Hi, I am interested in pest control service for ${serviceName} in Vijayawada. Please share more details.`;
            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/${CONTACT_NUMBER}?text=${encodedMessage}`;

            const originalText = btn.innerHTML;

            // Apply animation feedback
            btn.classList.add('btn-click-anim', 'btn-success');
            btn.innerHTML = '<i class="fas fa-check"></i> Redirecting...';

            // Brief delay for the animation and "Redirecting..." state to be visible
            setTimeout(() => {
                window.open(whatsappUrl, '_blank');
            }, 600);

            // Revert after feedback period
            setTimeout(() => {
                btn.classList.remove('btn-success', 'btn-click-anim');
                btn.innerHTML = originalText;
            }, 3000);
        });
    });
});
