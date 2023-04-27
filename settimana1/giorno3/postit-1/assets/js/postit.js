window.addEventListener('load', function() {
    var elementi = document.querySelectorAll('#post-it');
    
    for (var i = 0; i < elementi.length; i++) {
      elementi[i].classList.add('animated', 'fadeIn', 'slideIn');
    }
  });