let counter = 0;

//se c'è un valore salvato nella variabile counter lo converte in un numero interno e lo assegna alla variabile counter, poi aggiurna il valore dontenuto nell'ID counter all'interno del sessionStorage. 

if (sessionStorage.getItem('counter')) { 
    counter = parseInt(sessionStorage.getItem('counter'));
    document.getElementById('counter').textContent = counter;
}

//ogni 1000ms = 1s incrementa di uno il valore di counter che parte da 0 e ogni secondo viene salvato nel session Storage il  
const timer = setInterval(() => {
    counter++;
    sessionStorage.setItem('counter', counter); //salva il valore della variabile counter aggiornato a ogni secondo con chiave counter.
    document.getElementById('counter').textContent = counter; //me lo stampa
}, 1000);

window.addEventListener('beforeunload', () => {
    // sessionStorage.setItem('counter', counter);
    clearInterval(timer); //quando la pagina viene chiusa azzera il timer
});