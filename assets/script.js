const slides = [
    {
        "image":"slide1.jpg",
        "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image":"slide2.jpg",
        "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image":"slide3.jpg",
        "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image":"slide4.png",
        "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

// Sélection des éléments des flèches
const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');

// Ajout des écouteurs d'événements sur les flèches
leftArrow.addEventListener('click', () => {
    console.log('Flèche gauche cliquée'); // Affiche un message dans la console lorsque la flèche gauche est cliquée
    changeSlide('left');
});

rightArrow.addEventListener('click', () => {
    console.log('Flèche droite cliquée'); // Affiche un message dans la console lorsque la flèche droite est cliquée
    changeSlide('right');
});

// Sélection de l'élément dots
const dots = document.querySelector('.dots');
let currentIndex = 0; // Index de la slide actuelle

// Initialisation des points
for (let i = 0; i < slides.length; i++) {
    console.log(i);
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === currentIndex) {
        dot.classList.add('dot_selected');
    }
    dots.appendChild(dot);
    dot.addEventListener('click', () => {
        currentIndex = i;
        updateCarousel();
    });
}

// Fonction pour mettre à jour le carrousel
function updateCarousel() {
    // Met à jour le dot actif
    const selectedDot = document.querySelector('.dot_selected');
    if (selectedDot) {
        selectedDot.classList.remove('dot_selected');
    }
    dots.children[currentIndex].classList.add('dot_selected');

    // Met à jour l'image et le texte de la bannière
    const bannerImg = document.querySelector('.banner-img');
    const bannerTagline = document.querySelector('#banner p');
    bannerImg.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
    bannerTagline.innerHTML = slides[currentIndex].tagLine;
}

// Fonction pour changer de slide
function changeSlide(direction) {
    if (direction === 'left') {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slides.length - 1; // Si on est à la première slide, revenir à la dernière slide
        }
    } else if (direction === 'right') {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Si on est à la dernière slide, revenir à la première slide
        }
    }
    updateCarousel(); // Mise à jour du carrousel pour afficher la slide correspondante
}