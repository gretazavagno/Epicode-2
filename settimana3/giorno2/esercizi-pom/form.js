const saveBtn = document.getElementById('save');
const removeBtn = document.getElementById('remove');
const savedNameSpan = document.getElementById('saved-name');
const nameInput = document.getElementById('name');

// Recupera il nome precedentemente salvato, se presente
const savedName = localStorage.getItem('savedName'); //recupera il valore salvato nella chiave savedNAme dal localstorage e lo memorizza nella costante savedName


//se il localStorage ha salvato qualche valore (savedName) allora stampa nello span il valore
if (savedName) { 
    savedNameSpan.textContent = savedName;
}

// Al click su salva il valore che viene inserito dall'utente (nameInput id=name) viene salvato nella costante name. E se il nome è presente allora viene salvato nel localStorage con la chiave savedName. 
saveBtn.addEventListener('click', () => {
    const name = nameInput.value; 
    if (name) {
        localStorage.setItem('savedName', name);
        savedNameSpan.textContent = name;
    }
});

// Al click su remove il valore salvato come chiave savedName dal localStorage viene rimosso e viene messo nello span una stringa vuota. 
removeBtn.addEventListener('click', () => {
    localStorage.removeItem('savedName');
    savedNameSpan.textContent = '';
});