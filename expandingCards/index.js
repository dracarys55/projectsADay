const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
  panel.addEventListener('click', () => changing(panel));
});

function changing(panel) {
  console.log('in');
  removeActiveClasses();
  panel.classList.add('active');
}
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}
