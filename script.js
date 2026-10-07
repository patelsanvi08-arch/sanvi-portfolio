/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(
        '.section, .experience, .impact, .contact, .footer'
    );


revealElements.forEach((element) => {

    element.classList.add('reveal');

});


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add('visible');

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================================
   SMOOTH ANCHOR SCROLL
========================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach((link) => {

    link.addEventListener(
        'click',
        (event) => {

            const targetId =
                link.getAttribute('href');

            const target =
                document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

        }
    );

});