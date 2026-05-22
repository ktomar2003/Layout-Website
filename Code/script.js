// Count-up on scroll (Case Study stats)
const counters = document.querySelectorAll('.count-up');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            counters.forEach(counter => {
                const target = parseInt(counter.dataset.target);
                let count = 0;
                const step = Math.ceil(target / 60);
                const interval = setInterval(() => {
                    count += step;
                    if (count >= target) {
                        count = target;
                        clearInterval(interval);
                    }
                    counter.textContent = count + '%';
                }, 25);
            });
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

observer.observe(document.querySelector('.case-stats'));