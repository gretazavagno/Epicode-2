const nav = document.querySelector('.container1a');
const btn = document.querySelector('.btn');

 

window.addEventListener('scroll', function(){
    if(window.pageYOffset > 200){
        nav.classList.add('coloreNavbar');
        btn.classList.add('colorBtn');
    }else if(window.pageYOffset > 20){
        nav.classList.add('scroll');
    }else{
        nav.classList.remove('coloreNavbar');
        btn.classList.remove('coloreBtn');
    }
});

// window.addEventListener('scroll', function() {
//     var nav = document.querySelector('nav');
    
//     if (distanceFromTop >= 200) {
//       nav.classList.add('scrolled');
//     } else {
//       nav.classList.remove('scrolled');
//     }
//   });