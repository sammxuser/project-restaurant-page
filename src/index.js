import './styles.css';
import { content } from './homeContent';
import { menu } from './menu';
import { about } from './about';

const divContent = document.getElementById('content');
const homeBtn = document.getElementById('home-btn');
const menuBtn = document.getElementById('menu-btn');
const aboutBtn = document.getElementById('about-btn');

content();

const homeButton = document
  .getElementById('home-btn')
  .addEventListener('click', function () {
    divContent.textContent = '';
    const homeBtn = document.getElementById('home-btn');
    switchActiveTab('homeBtn');
    content();
  });

const menuButton = document
  .getElementById('menu-btn')
  .addEventListener('click', function () {
    divContent.textContent = '';
    switchActiveTab('menuBtn');
    menu();
  });

const aboutButton = document
  .getElementById('about-btn')
  .addEventListener('click', function () {
    divContent.textContent = '';
    switchActiveTab('aboutBtn');
    about();
  });

function switchActiveTab(btn) {
  if (btn === 'homeBtn') {
    homeBtn.classList.add('active');
    aboutBtn.classList.remove('active');
    menuBtn.classList.remove('active');
  } else if (btn === 'menuBtn') {
    homeBtn.classList.remove('active');
    aboutBtn.classList.remove('active');
    menuBtn.classList.add('active');
  } else if (btn === 'aboutBtn') {
    homeBtn.classList.remove('active');
    aboutBtn.classList.add('active');
    menuBtn.classList.remove('active');
  }
}
