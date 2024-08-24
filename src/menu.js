import menuImage from './menu.jpg';

export function menu() {
  const divMenu = document.getElementById('content');
  const image = document.createElement('img');
  image.src = menuImage;
  image.alt = 'Restaurant menu';
  divMenu.appendChild(image);
}
