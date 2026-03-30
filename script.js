// script.js

// Floating hearts and sparkles  
const createFloatingHearts = () => {  
    for(let i = 0; i < 10; i++) {  
        const heart = document.createElement('div');  
        heart.className = 'heart';  
        heart.style.left = `${Math.random() * 100}vw`;  
        document.body.appendChild(heart);  
        heart.animate([{ transform: 'translateY(0)' }, { transform: 'translateY(-100vh)' }], { duration: 2000, easing: 'ease-in', fill: 'forwards' });  
        setTimeout(() => heart.remove(), 2000);  
    }  
};

setInterval(createFloatingHearts, 1000);

// Section navigation  
const sections = document.querySelectorAll('section');  
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach((link, index) => {  
    link.addEventListener('click', (e) => {  
        e.preventDefault();  
        sections[index].scrollIntoView({ behavior: 'smooth' });  
    });  
});

// Interactive button  
const noButton = document.getElementById('noButton');  
noButton.addEventListener('mouseover', () => {  
    const x = Math.random() * (window.innerWidth - 100);  
    const y = Math.random() * (window.innerHeight - 100);  
    noButton.style.transform = `translate(${x}px, ${y}px)`;  
});

// Confetti celebration  
const celebrate = () => {  
    const colors = ['#ff0', '#0f0', '#00f', '#f00', '#ff00'];  
    for(let i = 0; i < 100; i++) {  
        const confetti = document.createElement('div');  
        confetti.className = 'confetti';  
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];  
        document.body.appendChild(confetti);  
        confetti.animate([{ transform: 'translateY(0)' }, { transform: 'translateY(300px)' }], { duration: 1500, easing: 'ease-in', fill: 'forwards' });  
        setTimeout(() => confetti.remove(), 1500);  
    }  
};

// Local storage functionality  
const userAction = (action) => {  
    let actions = JSON.parse(localStorage.getItem('userActions')) || [];  
    actions.push(action);  
    localStorage.setItem('userActions', JSON.stringify(actions));  
};

noButton.addEventListener('click', () => {  
    celebrate();  
    userAction('Clicked No Button');  
});