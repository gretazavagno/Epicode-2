const navbarToggle = document.querySelector('#navbarSupportedContent');
const btnHam = document.querySelector('.btnHam');

btnHam.addEventListener('click', function() {
    navbarToggle.classList.toggle('d-none');
  });