let promoElements = document.querySelectorAll('.promo-element');
let promoNext = document.querySelector('.button-slider-next');
let promoBack = document.querySelector('.button-slider-back');
let promoRadio = document.querySelector('.promo-slider-radio .promo-element');
let promoRadioL = document.querySelector('.promo-slider-radio .promo-element:last-child');


promoNext.addEventListener('click', function() {
  for (let i = 0; i < promoElements.length; i++) {
    promoElements[i].classList.toggle('promo-element-current');
  };
}) 

promoBack.addEventListener('click', function() {
  for (let i = 0; i < promoElements.length; i++) {
    promoElements[i].classList.toggle('promo-element-current');
  };
}) 

promoRadio.addEventListener('click', function() {
  for (let i = 0; i < promoElements.length; i++) {
    promoElements[i].classList.toggle('promo-element-current');
  };
})

promoRadioL.addEventListener('click', function() {
  for (let i = 0; i < promoElements.length; i++) {
    promoElements[i].classList.toggle('promo-element-current');
  };
}) 


let serviceItems = document.querySelectorAll('.service-slider-item');
let servicePages = document.querySelectorAll('.service-slider-page');


serviceItems[0].addEventListener('click', function() {
  serviceItems[0].classList.add('service-slider-current');
  serviceItems[1].classList.remove ('service-slider-current');
  serviceItems[2].classList.remove('service-slider-current');
  servicePages [0].classList.remove('visually-hidden');
  servicePages [1].classList.add('visually-hidden');
  servicePages [2].classList.add('visually-hidden');
}) 

serviceItems[1].addEventListener('click', function() {
  serviceItems[0].classList.remove('service-slider-current');
  serviceItems[1].classList.add('service-slider-current');
  serviceItems[2].classList.remove('service-slider-current');
  servicePages [0].classList.add('visually-hidden');
  servicePages [1].classList.remove('visually-hidden');
  servicePages [2].classList.add('visually-hidden');
})

serviceItems[2].addEventListener('click', function() {
  serviceItems[0].classList.remove('service-slider-current');
  serviceItems[1].classList.remove('service-slider-current');
  serviceItems[2].classList.add('service-slider-current');
  servicePages [0].classList.add('visually-hidden');
  servicePages [1].classList.add('visually-hidden');
  servicePages [2].classList.remove('visually-hidden');
})



let close = document.querySelectorAll('.close');
let writeUs = document.querySelector('.write-us');
let overlay = document.querySelector('.overlay');
let contactButton = document.querySelector('.about-contacts button');
let map = document.querySelector('.about-contacts img');
let bigMap = document.querySelector('.big-map');


contactButton.addEventListener('click', function() {
  writeUs.classList.remove('off');
  overlay.classList.remove('off');
});

map.addEventListener('click', function() {
  bigMap.classList.remove('off');
  overlay.classList.remove('off');
});

for(let i = 0; i < close.length; i++) {
  close[i].addEventListener('click', function() {
    writeUs.classList.add('off');
    bigMap.classList.add('off');
    overlay.classList.add('off');
  });
};

overlay.addEventListener('click', function() {
  writeUs.classList.add('off');
  bigMap.classList.add('off');
  overlay.classList.add('off');
});

window.addEventListener('keyup', function(evt) {
  if (evt.keyCode === 27) {
    writeUs.classList.add('off');
    bigMap.classList.add('off');
    overlay.classList.add('off');
  };
});