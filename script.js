let homeDish = document.querySelector('.home .home-dish');
let homeDishItem = document.querySelectorAll('.home .home-dish img');
let menuPhoto = document.querySelector('.menu .container .menu-photo');
let menuPhotoItem = document.querySelectorAll('home .container .menu-photo img');
let Menu = document.getElementById('Menu');

let runTimeOut;
let timeRunning = 3000;
let imageAutoNext = 7000;
let runImage;
let timeAutoNext = 7000;
let runNextAuto;

function slider() {
    homeDishItem = document.querySelectorAll('.home .home-dish img');
    homeDish.appendChild(homeDishItem[0]);
    
    clearTimeout(runNextAuto);
    runNextAuto = setTimeout( () => {
        slider();
    },timeAutoNext);
}

function slidingImages(type) {
    let menuPhoto = document.querySelector('.menu .container .menu-photo');
    let menuPhotoItems = document.querySelectorAll('.menu .container .menu-photo img');

    if (type === 'next') {
        menuPhoto.style.transition = 'transform 1s ease-in-out';
        menuPhoto.style.transform = `translateX(-440px)`;

        setTimeout(() => {
            menuPhoto.appendChild(menuPhotoItems[0]);
            menuPhoto.style.transition = 'none';
            menuPhoto.style.transform = 'translateX(0)';
        }, 1000); // Match the transition duration
    }

    clearTimeout(runImage);
    runImage = setTimeout(() => {
        slidingImages('next');
    }, imageAutoNext);
}

clearTimeout(runNextAuto);
runNextAuto = setTimeout( () => {
    slider();
},timeAutoNext);


slidingImages('next');
