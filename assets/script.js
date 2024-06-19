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
]

// Sélection des éléments des flèches
const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');

// Ajout des écouteurs d'événements sur les flèches
leftArrow.addEventListener('click', () => {
    console.log('Flèche gauche cliquée'); // Affiche un message dans la console lorsque la flèche gauche est cliquée
});

rightArrow.addEventListener('click', () => {
    console.log('Flèche droite cliquée'); // Affiche un message dans la console lorsque la flèche droite est cliquée
});

const dots = document.querySelector ('.dots');
for(let i = 0;i < slides.length;i++){
console.log(i)
const dot = document.createElement ('span');
dot.classList.add('dot');
dots.appendChild(dot);

}

