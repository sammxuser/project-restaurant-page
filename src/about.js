export function about() {
  const divAbout = document.getElementById('content');
  const p = document.createElement('p');
  p.textContent =
    'We are home of the best African Cuisines.' +
    'We started our operations in 1980, after our founder Mr. Samuel Mburu,' +
    'identified a gap in the African market for tasty delicacies. Armed with ' +
    'the knowledge and a commitment to offer great foods, Mr. Mburu started' +
    ' the first outlet, and from there the rest is history....' +
    '          The restaurant has since grown to include a team of dedicated staff as below.';
  divAbout.appendChild(p);
}
