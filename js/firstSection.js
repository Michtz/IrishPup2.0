/*
This code is the property of Michael Venetz. All rights reserved. Unauthorized use will result in a penalty of min. $2000.
*/

const smallImageUrl = 'https://www.leprechaunirish.com/assets/small/guinnes.jpg';
const largeImageUrl = 'https://www.leprechaunirish.com/assets/guinnes.avif';
const mobileImageUrl = 'https://www.leprechaunirish.com/assets/mobile/guinnes.avif';

const setBackgroundImage = (imageUrl) => {
    const section = document.getElementById('opening_hours');
    section.style.backgroundImage = `url(${imageUrl})`;
};

const loadImage = (url) =>
    new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(url);
        img.onerror = reject;
        img.src = url;
    });

const getAppropriateImageUrl = () => {
    if (window.innerWidth < 768) return mobileImageUrl;
    else return largeImageUrl;
};

const loadImagesSequentially = async () => {
    try {
        const smallSrc = await loadImage(smallImageUrl);
        setBackgroundImage(smallSrc);
        const appropriateImageUrl = getAppropriateImageUrl();
        const largeSrc = await loadImage(appropriateImageUrl);
        setBackgroundImage(largeSrc);
    } catch (error) {
        console.error('Fehler beim Laden des Bildes:', error);
    }
};

const handleResize = () => {
    const appropriateImageUrl = getAppropriateImageUrl();
    setBackgroundImage(appropriateImageUrl);
};

document.addEventListener('DOMContentLoaded', () => {
    loadImagesSequentially();
    window.addEventListener('resize', handleResize);
});

const isBetween3PMAnd3AM = () =>
    (new Date().getUTCHours() + 7) % 24 >= 15 ||
    (new Date().getUTCHours() + 7) % 24 < 3;

const addOpeningContainerToFirstSection = () => {
    const opening_hours = document.querySelector('#opening_hours');
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    div.className = 'open_container';
    h1.id = 'weAreOpen';
    h1.className = 'we_are_open';
    h1.textContent = isBetween3PMAnd3AM() ? 'We are Open!' : 'We are Closed';
    p.textContent = 'Opening hours: 3pm - 3am';
    p.className = 'opening_time';

    div.append(h1, p);
    opening_hours.appendChild(div);
};

addOpeningContainerToFirstSection();