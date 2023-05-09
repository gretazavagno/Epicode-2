// questa rubrica salverà in localStorage una lista di contatti con nome, cognome e n. di telefono
// alla pressione del tasto salva, dovremo inserire un nuovo contatto alla lista già presente
let contactsList = []
// all'avvio della pagina sarà necessario ripartire dalla lista contatti già salvata, se la troveremo in localStorage

// prendiamoci i riferimenti agli input field
const nameField = document.getElementById('name')
const surnameField = document.getElementById('surname')
const phoneField = document.getElementById('phone')

// prendiamo un riferimento al form
const saveButton = document.getElementById('save-button')

saveButton.addEventListener('click', function (e) {
  e.preventDefault() // FERMA la pagina dal suo riavvio automatico
  const newUser = {
    name: nameField.value,
    surname: surnameField.value,
    phone: phoneField.value,
  }
  console.log(newUser)
  // funziona! adesso il prossimo passo da fare è aggiungerlo a contactsList
  // e poi arriva il problema: dobbiamo salvare un array di oggetti dentro il localStorage
})
