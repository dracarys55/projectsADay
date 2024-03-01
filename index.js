const overlays = document.querySelectorAll('.overlay');
const cards = document.querySelectorAll('.card');
const button = document.querySelector('.button');

overlays.forEach((overlay) => {
  overlay.addEventListener('click', () => {
    console.log(overlay.classList);
    const card = overlay.closest('.card');
    if (card) {
      card.classList.add('active');
    }

    overlay.style.pointerEvents = 'none';
  });
});

button.addEventListener('click', () => {
  removeActiveClasses(cards);
  overlayBack();
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' || event.keyCode === 27) {
    // 當按下 Esc 鍵時執行的代碼

    removeActiveClasses(cards);
    overlayBack();
  }
});

function overlayBack() {
  overlays.forEach((overlay) => {
    overlay.style.pointerEvents = 'auto';
  });
}
function removeActiveClasses(cards) {
  cards.forEach((cards) => {
    cards.classList.remove('active');
  });
}
