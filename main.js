//toggle button menu
const toggleBtn = document.querySelector('.mb-toggle');
const menu = document.querySelector('.hover-menu');

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('active');
  menu.classList.toggle('active');
});
//hide/show buy now
const buyToggleBox = document.querySelector('.buy');
const buyBox = document.querySelector('.new');

buyBox.addEventListener('click', () => {
  buyToggleBox.classList.toggle('active');
  console.log('over');
});

//Grab Element
let btn = document.querySelectorAll('.dropDown .btn');
//Event
btn.forEach(btns => btns.addEventListener('click', showHide1));
//function
function showHide1(e) {
  let list = e.target.parentElement.nextElementSibling.querySelector(
    '.showTrade'
  );
  console.log(list);
  e.target.classList.toggle('crimson');
  list.classList.toggle('show1');
}
