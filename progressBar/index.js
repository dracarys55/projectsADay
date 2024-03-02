const line = document.querySelector('.line');
const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#prev');
const circles = document.querySelectorAll('.circle');

let count = 1;

nextButton.addEventListener('click', () => {
  circles.forEach((element, index) => {
    if (index <= count) {
      element.classList.add('active');
    }
  });

  if (count <= 3) {
    let currentWidth = line.offsetWidth;
    let parentWidth = line.parentNode.offsetWidth;
    let addmoreWidth = currentWidth + parentWidth * 0.33;
    line.style.width = addmoreWidth + 'px';
    count++;
    console.log(count);
  }
});

prevButton.addEventListener('click', () => {
  console.log(count);
  if (count > 1) {
    count--;
    let currentWidth = line.offsetWidth;
    let parentWidth = line.parentNode.offsetWidth;
    let minusMoreWidth = currentWidth - parentWidth * 0.33;
    line.style.width = minusMoreWidth + 'px';
  }
  circles.forEach((element, index) => {
    if (index >= count) {
      element.classList.remove('active');
      console.log('kcik in');
    }
  });
});
