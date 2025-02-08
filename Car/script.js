function createHeart() {
    let heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';

    let size = Math.random() * 20 + 10; 
    let duration = Math.random() * 2 + 2; 

    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = (Math.random() * window.innerHeight * 0.9) + 'px'; 
    heart.style.fontSize = `${size}px`;
    heart.style.animationDuration = `${duration}s`;

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), duration * 1000);
}

setInterval(createHeart, 300);

document.addEventListener('mousemove', function(e) {
    let sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = `${e.pageX}px`;
    sparkle.style.top = `${e.pageY}px`;
    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 600);
});
const letter = document.querySelector('.letter');

letter.addEventListener('mouseenter', () => {
    letter.innerHTML = "<p>Te amo más de lo que las palabras pueden expresar. 💖</p>";
});

letter.addEventListener('mouseleave', () => {
    letter.innerHTML = `
        <p>Querida Normis,</p>
    <p>Desde el momento en que nuestras miradas se cruzaron, supe que mi corazón encontró su hogar en ti.</p>
    <p>Cada día a tu lado es un poema sin final, una melodía dulce que llena mi alma de felicidad.</p>
    <p>Eres mi refugio en la tormenta, mi luz en los días grises, el suspiro que da sentido a mis latidos.</p>
    <p>Te amo con cada parte de mí, con cada pensamiento y cada suspiro.</p>
    <p>❤️ Diego ❤️</p>
    `;
});

let isOpen = false; 

function toggleLetter() {
    const envelope = document.querySelector('.envelope');
    const flap = document.querySelector('.flap');
    const letter = document.querySelector('.letter');

    if (isOpen) {
        flap.style.transform = 'rotateX(0deg)'; 
        letter.style.bottom = '-100%'; 
        envelope.classList.remove('open');
    } else {
        flap.style.transform = 'rotateX(180deg)'; 
        letter.style.bottom = '20px'; 
        envelope.classList.add('open');
    }

    isOpen = !isOpen;
}

