const bar = document.getElementById('mobile-menu');
const menu = document.querySelector('.list-items');

// otvori/zatvori navigaciju za manji screen
bar.addEventListener('click', function () {
    menu.classList.toggle('active');
    bar.classList.toggle('is-active');
});

// zatvori prikazanu navigaciju klikom na item
menu.addEventListener('click', function () {
    menu.classList.remove('active');
    bar.classList.toggle('is-active');
});

// slider/galerija
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const gallery = document.getElementById('gallery-photo');

slide = 1;

leftArrow.addEventListener('click', function () {
    if (slide == 1) {
        gallery.style.backgroundImage = 'url(./img/gallery5.jpg)';
        slide = 5;
    } else if (slide > 1 && slide <= 5) {
        slide = slide - 1;
        gallery.style.backgroundImage = 'url(./img/gallery' + slide + '.jpg)';
    }
});

rightArrow.addEventListener('click', function () {
    if (slide == 5) {
        gallery.style.backgroundImage = 'url(./img/gallery1.jpg)';
        slide = 1;
    } else if (slide >= 1 && slide <= 5) {
        slide = slide + 1;
        gallery.style.backgroundImage = 'url(./img/gallery' + slide + '.jpg)';
    }
});
