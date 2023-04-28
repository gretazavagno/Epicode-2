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
        btn.classList.remove('colorBtn');
        nav.classList.remove('scroll');

    }
});

// const path = document.querySelectorAll('path[id="p"]');

// path.forEach((p) => {
//     setInterval(() => {
//         if(Math.random() < 0.3){
//             p.style.display = 'block';
//         }else{
//             p.style.display = 'none'
//         }
//     }, 2000)
// })

const paths = Array.from(document.querySelectorAll("#p"));

function hideAndShowRandomPaths() {
    // Numero di path che devono essere nascosti
    const numberOfPathsToHide = Math.floor(Math.random() * 40);
    
    // Array contenente gli indici dei path da nascondere
    const pathsToHideIndexes = [];
  
    while (pathsToHideIndexes.length < numberOfPathsToHide) {
      const randomIndex = Math.floor(Math.random() * paths.length);
  
      // Verifica che l'indice non sia già presente nell'array
      if (!pathsToHideIndexes.includes(randomIndex)) {
        pathsToHideIndexes.push(randomIndex);
        paths[randomIndex].style.display = "none";
        
        // Tempo di attesa prima di far riapparire il path
        const delay = Math.floor(Math.random() * 2000) + 1000;
        setTimeout(() => {
          paths[randomIndex].style.display = "block";
        }, delay);
      }
    }
  }

  setInterval(hideAndShowRandomPaths, 1000);