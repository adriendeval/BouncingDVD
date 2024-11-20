const rectangle = document.getElementById('bouncing-rectangle');
const container = document.getElementById('container');

// Variables de position et de vitesse
let posX = container.clientWidth / 2 - 100; // Centrer le rectangle
let posY = container.clientHeight / 2 - 50;
let velocityX = 3; // Vitesse horizontale
let velocityY = 3; // Vitesse verticale

// Fonction pour générer une couleur aléatoire
function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Fonction de mise à jour de la position
function updatePosition() {
    // Mise à jour des coordonnées
    posX += velocityX;
    posY += velocityY;

    // Vérification des collisions avec les bords
    if (posX <= 0 || posX + 200 >= container.clientWidth) {
        velocityX *= -1;
        rectangle.style.backgroundColor = getRandomColor();
    }
    if (posY <= 0 || posY + 100 >= container.clientHeight) {
        velocityY *= -1;
        rectangle.style.backgroundColor = getRandomColor();
    }

    // Appliquer les nouvelles coordonnées
    rectangle.style.left = `${posX}px`;
    rectangle.style.top = `${posY}px`;

    // Requête pour continuer l'animation
    requestAnimationFrame(updatePosition);
}

// Initialisation de la position et démarrage
rectangle.style.left = `${posX}px`;
rectangle.style.top = `${posY}px`;
updatePosition();
