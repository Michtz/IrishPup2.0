/*
This code is the property of Michael Venetz. All rights reserved. Unauthorized use will result in a penalty of min. $2000.
*/

const largeLogoUrl = 'https://www.leprechaunirish.com/assets/kobold2.png';

const navItems = [
    {
        id: 'contact_icon',
        href: '#address_info',
        src: 'https://www.leprechaunirish.com/assets/mobile.png',
        alt: 'mobile',
    },
    {
        id: 'location_icon',
        href: '#location',
        src: 'https://www.leprechaunirish.com/assets/gps.png',
        alt: 'gps',
    },
    {
        id: 'facebook_icon',
        src: 'https://www.leprechaunirish.com/assets/facebook.png',
        href: 'https://www.facebook.com/luckyleprechaunirishbarsiemreap',
        alt: 'facebook',
    },
];

const createNavigation = () => {
    const nav = document.querySelector('#nav');
    const ul = document.createElement('ul');

    navItems.forEach(({ id, href, src, alt, action }) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        const img = document.createElement('img');

        if (href) a.href = href;
        if (action) a.onclick = action;
        Object.assign(img, { id, src, alt });

        a.appendChild(img);
        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);
};

const addTextToHeader = () => {
    const header = document.querySelector('#title');
    const h1 = document.createElement('h1');

    h1.textContent = 'The Lucky Leprechaun Irish Pub';
    h1.className = 'title';

    header.appendChild(h1);
};

const addImageToHeader = () => {
    const logo = document.querySelector('#logo');
    const container = document.createElement('div');
    const cambodianFlag = document.createElement('img');
    const irlandFlag = document.createElement('img');

    Object.assign(container, {
        className: 'flags_container',
    });

    /* kobold version */
    Object.assign(cambodianFlag, {
        className: 'flag',
        src: largeLogoUrl,
        id: 'kobold',
        alt: 'leprechaun',
    });

    container.appendChild(cambodianFlag);
    container.appendChild(irlandFlag);
    logo.appendChild(container);
};

const initPage = () => {
    createNavigation();
    addTextToHeader();
    addImageToHeader();
};

document.addEventListener('DOMContentLoaded', initPage);