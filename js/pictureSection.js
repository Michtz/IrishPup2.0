/*
This code is the property of Michael Venetz. All rights reserved. Unauthorized use will result in a penalty of min. $2000.
*/

const imagePaths = [
    'https://www.leprechaunirish.com/assets/picture1.avif',
    'https://www.leprechaunirish.com/assets/picture2.avif',
    'https://www.leprechaunirish.com/assets/picture3.avif',
    'https://www.leprechaunirish.com/assets/picture4.avif',
    'https://www.leprechaunirish.com/assets/picture5.avif',
];

const carousel = document.getElementById('carousel');
let currentIndex = 0;

const createCarouselItems = () => {
    for (let i = 0; i < 4; i++) {
        const item = document.createElement('div');
        item.className = 'carousel-item';
        const img = document.createElement('img');
        img.src = imagePaths[(currentIndex + i) % imagePaths.length];
        item.appendChild(img);
        carousel.appendChild(item);
    }
};

const moveCarousel = () => {
    const items = carousel.children;

    setTimeout(() => {
        carousel.style.transition = 'none';
        carousel.style.transform = 'translateX(-300px)';
        carousel.removeChild(items[3]);
        const newItem = document.createElement('div');
        newItem.className = 'carousel-item';
        const img = document.createElement('img');
        console.log(currentIndex);
        img.src = imagePaths[(currentIndex + 3) % imagePaths.length];
        newItem.appendChild(img);
        carousel.insertBefore(newItem, items[0]);

        setTimeout(() => {
            carousel.style.transition = 'transform 0.5s ease';
            carousel.style.transform = 'translateX(0)';
        }, 50);

        currentIndex = (currentIndex + 1) % imagePaths.length;
    }, 500);
};

const modal = document.getElementById('photoModal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.getElementsByClassName('modal')[0];

const openModal = (imgSrc) => {
    modal.style.display = 'block';
    modalImg.src = imgSrc;
};

closeBtn.onclick = () => {
    modal.style.display = 'none';
};

window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

carousel.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        openModal(e.target.src);
    }
});

window.addEventListener('load', () => {
    createCarouselItems();
    setInterval(moveCarousel, 4000);
});