
const navbar = document.getElementById('navbar');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const typingText = document.getElementById('typing-text');
const backToTop = document.getElementById('back-to-top');
const contactForm = document.getElementById('contact-form');
const projectModal = document.getElementById('project-modal');
const closeModal = document.querySelector('.close-modal');
const modalBody = document.getElementById('modal-body');


const skills = ['Modern UI/UX', 'Full Stack Apps', 'Problem Solving', 'Responsive Design'];
let skillIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 200;

function type() {
    const currentSkill = skills[skillIndex];
    if (isDeleting) {
        typingText.textContent = currentSkill.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 100;
    } else {
        typingText.textContent = currentSkill.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 200;
    }

    if (!isDeleting && charIndex === currentSkill.length) {
        isDeleting = true;
        typeSpeed = 2000; 
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        skillIndex = (skillIndex + 1) % skills.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}


const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            
            if (entry.target.classList.contains('about-info')) {
                document.querySelectorAll('.skill-progress').forEach(bar => {
                    bar.style.width = bar.parentElement.previousElementSibling.lastElementChild.textContent;
                });
            }
        }
    });
}, { threshold: 0.1 });


window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    if (window.scrollY > 500) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});


mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.querySelector('i').classList.toggle('fa-bars');
    mobileMenu.querySelector('i').classList.toggle('fa-times');
});


const projectsData = {
    '1': {
        title: 'Responsive Login Page',
        img: 'https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&q=80&w=800',
        desc: 'Detailed description of the E-Commerce platform. Features include user authentication, product search, cart management, and Stripe integration.',
        tags: ['Html', 'CSS', 'JS'],
        live: '#',
        github: 'https://github.com/sihambirhanu24/responsive-login'
    },
    '2': {
        title: 'Student Registration Servlet App',
        img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        desc: 'A comprehensive dashboard for business analytics. Built with real-time data streaming and complex chart visualizations.',
        tags: ['Html', 'CSS', 'js', 'Java'],
        live: '#',
        github: 'https://github.com/sihambirhanu24/StudentRegistrationServletApp'
    },
    '3': {
        title: 'Chat APP',
        img: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=800',
        desc: 'Leveraging OpenAI API to automatically categorize and prioritize user tasks based on natural language input.',
        tags: ['Html', 'CSS', 'js', 'Java', 'Servlet'],
        live: '#',
        github: 'https://github.com/sihambirhanu24/chatAPP'
    }
};

document.querySelectorAll('.open-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const id = e.target.closest('.project-card').dataset.project;
        const project = projectsData[id];
        
        modalBody.innerHTML = `
            <div class="modal-grid">
                <img src="${project.img}" alt="${project.title}" style="width: 100%; border-radius: 15px; margin-bottom: 2rem;">
                <div class="modal-info">
                    <h2 style="margin-bottom: 1rem;">${project.title}</h2>
                    <p style="color: var(--text-muted); margin-bottom: 2rem;">${project.desc}</p>
                    <div class="project-tags" style="margin-bottom: 2rem;">
                        ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                    </div>
                    <div class="hero-btns">
                        <a href="${project.live}" class="btn btn-primary">Live Demo</a>
                        <a href="${project.github}" class="btn btn-outline">View Code</a>
                    </div>
                </div>
            </div>
        `;
        projectModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

closeModal.addEventListener('click', () => {
    projectModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        projectModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});



const uiuxData = {
    '1': {
        title: 'Dashboard Redesign',
        img: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=800',
        problem: 'The original dashboard had poor spacing, weak hierarchy, and confusing navigation.',
        solution: 'Redesigned layout using Auto Layout principles, improved contrast, spacing, and user flow.',
        tools: ['Figma', 'Auto Layout', 'Prototype'],
        prototype: '#'
    },
    '2': {
        title: 'Mobile App Concept',
        img: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&q=80&w=800',
        problem: 'Users struggled with navigation and inconsistent UI elements.',
        solution: 'Created a clean mobile UI with strong visual consistency and improved UX flow.',
        tools: ['Figma', 'UX Research', 'Wireframing'],
        prototype: '#'
    }
};

document.querySelectorAll('.open-ui-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {

        const id = e.target.closest('.project-card').dataset.ui;
        const design = uiuxData[id];

        modalBody.innerHTML = `
            <div class="modal-grid">
                <img src="${design.img}" alt="${design.title}" style="width:100%; border-radius:15px; margin-bottom:2rem;">
                <div class="modal-info">
                    <h2 style="margin-bottom:1rem;">${design.title}</h2>

                    <p><strong>Problem:</strong> ${design.problem}</p>
                    <p style="margin-top:1rem;"><strong>Solution:</strong> ${design.solution}</p>

                    <div class="project-tags" style="margin:2rem 0;">
                        ${design.tools.map(tool => `<span>${tool}</span>`).join('')}
                    </div>

                    <a href="${design.prototype}" target="_blank" class="btn btn-primary">
                        View Prototype
                    </a>
                </div>
            </div>
        `;

        projectModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});



contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
 
    const btn = contactForm.querySelector('button');
    const originalText = btn.textContent;
    btn.textContent = 'Message Sent!';
    btn.style.background = 'var(--secondary-gradient)';
    contactForm.reset();
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = 'var(--primary-gradient)';
    }, 3000);
});


document.addEventListener('DOMContentLoaded', () => {
    type();
    revealElements.forEach(el => revealObserver.observe(el));
});


