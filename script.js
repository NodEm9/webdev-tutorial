const cityImg = './images/city.jpg';
const cityImg2 = './images/city2.jpg';
const cityImg3 = './images/Huge-Backgrounds-17.jpg';

const mainNav = document.querySelectorAll(".nav");
const hamburger = document.querySelector(".hamburger");
// const navItems = document.querySelector(".navItems");
// const navBar = document.querySelector(".navbar");
// const navLink = document.querySelector(".navbar__link");



let showNav = false;

const toggleBurger = () => {
  if (!showNav) {
    mainNav.forEach((item) => item.classList.add("open"));
    showNav = true;
  } else {
    mainNav.forEach((item) => item.classList.remove("open"));
    showNav = false;
  }
};    

hamburger.addEventListener("click", toggleBurger);


const myCard = document.querySelector('.myCard');

const cards = document.createElement('div');
cards.setAttribute('class', 'topCard');
cards.style.background = '#0000ff';

const card0 = document.createElement('div');
card0.setAttribute('class', 'topCard');
card0.style.background = '#6ac';

const card1 = document.createElement('div');
card1.setAttribute('class', 'topCard');
card1.style.background = '#6ac';

const para = document.createElement('p');
para.setAttribute('class', 'para');
const para1 = document.createElement('p');
para1.setAttribute('class', 'para');
const para2 = document.createElement('para');
para2.setAttribute('class', 'para');

const img = document.createElement('img');
img.setAttribute('class', 'img');

const img1 = document.createElement('img');
img1.setAttribute('class', 'img');

const img2 = document.createElement('img');
img2.setAttribute('class', 'img');

class Card {
    constructor(image, title, txt) {
        this.image = image
        this.title = title
        this.txt = txt
    }
}

class cardCollection {
    createCard(item) {
        switch (item) {
            case 'cards': 
            return new Card(`${cityImg}`, 'JavaScript', 'Welcome Here')
            case 'card0': 
            return new Card(`${cityImg2}`, 'Web Developmment', 'Welcome to my website')
            case 'card1': 
            return new Card(`${cityImg3}`, 'Cascading Stylesheet', 'Welcome to my website')
        }
    }
}


const cardFactory = new cardCollection();
const firstCard = cardFactory.createCard('cards');
const secCard = cardFactory.createCard('card0');
const thirdCard = cardFactory.createCard('card1');
img.src = firstCard.image;
img1.src = secCard.image;
img2.src = thirdCard.image
para.textContent = firstCard.title;
para1.textContent = secCard.title;
para2.textContent = thirdCard.title;

myCard.appendChild(card0)
myCard.appendChild(cards)
myCard.appendChild(card1);
cards.appendChild(img2)
cards.appendChild(para);
card0.appendChild(img)
card0.appendChild(para1)
card1.appendChild(img1)
card1.appendChild(para2);

