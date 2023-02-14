'use strict';
//////////////////////////////////////////////////////////////////////////////////////////////////////
//Lectures
/*
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

//Selecting Elements

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--3');

//Only with querry selector we use # for identifying elements by ID
document.querySelector('#section--3');

const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

document.getElementsByClassName('btn');

//Creating and inserting elements
//.insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'We use cookies for improved functionality and analytics';
message.innerHTML =
  'We use cookies for improved functionality and analytics<button class ="btn btn--close-cookie">Got it!</button';
// header.prepend(message);
header.append(message);
// header.before(message);
// header.after(message);

//Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove();
  });

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.height);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

//Non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

logo.getAttribute('src');
console.log(logo.getAttribute('src'));
const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

//Data attributes
console.log(logo.dataset.versionNumber);
// We transform attributes from html using camelCase notation in JS

//Classes
logo.classList.add('C');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');

//DON'T USE! THIS WILL OVERWRITE ALL THE OTHER EXISTING CLASSES
logo.className = 'Cosmin';
*/
