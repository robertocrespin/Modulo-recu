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

const form = document.getElementById('appointmentForm');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('¡Gracias por agendar tu cita! Te contactaremos pronto.');
        form.reset();
    });
}