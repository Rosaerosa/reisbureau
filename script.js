const container = document.querySelector('.container');

document.querySelector('.open-navbar-icon').addEventListener('click', () => {
  container.classList.add('change');
});

document.querySelector('.close-navbar-icon').addEventListener('click', () => {
  container.classList.remove('change');
});

const colors = ['#6b87b4', '#7f8977', '#cda369', '#e8884f', '#c85e5e'];

let i = 0;

Array.from(document.querySelectorAll('.nav-link')).forEach((item) => {
    item.style.cssText =`background-color: ${colors[i++]}`;
});

Array.from(document.querySelectorAll('.navigation-button')).forEach((item) => {
    item.onclick = () => {
        item.parentElement.parentElement.classList.toggle('change');
    };
});



