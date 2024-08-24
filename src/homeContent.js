export function content() {
  const contentDiv = document.getElementById('content');
  const h1 = document.createElement('h1');
  h1.textContent = 'Karibu!';

  const p = document.createElement('p');
  p.textContent =
    'We offer amazing African delicacies, cooked to perfection by an amazing and professional staff';
  const p2 = document.createElement('p');
  p2.textContent =
    'Make your orders today and we will deliver an experience to remember!';

  contentDiv.appendChild(h1);
  contentDiv.appendChild(p);
  contentDiv.appendChild(p2);
  // contentDiv.appendChild(image);

  document.body.appendChild(contentDiv);
}
