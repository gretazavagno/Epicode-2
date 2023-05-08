class User {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location
      }
      //metodo che restituisca il confronto con l'età di un'altra persona. Date due istanze della classe utente x e y inizializzate con le proprietà sopra descritte, il metodo dovrà restituire una frase simile a x è più vecchio di y a seconda del risultato del confronto. Crea degli oggetti a partire dalla classe User e verifica che la comparazione tra le età funzioni correttamente.

      comparazione (altroUtente) {
        if(this.age > altroUtente.age){
            return `${this.firstName} è più vecchio di ${altroUtente.firstName}`
        }else if(this.age < altroUtente.age){
            return `${this.firstName} è più giovane di ${altroUtente.firstName}`
        }else{
            retur `${this.firstName} e ${altroUtente.firstName} hanno la stessa età`
        }
    }
}

// creazione di due istanze della classe User

const x = new User('Greta', 'Zavagno', 23, 'Udine');
const y = new User('Giulia', 'Zavagno', 29, 'Udine');

//confronto delle età delle due istanze e me lo stampa
const outputAge = document.getElementById('output');
outputAge.textContent = x.comparazione(y);





//Crea un form per la creazione di oggetti "Pet". La classe dovrà essere dotata delle seguenti proprietà: petName, ownerName, species (cane, gatto, coniglio, etc), breed (labrador, soriano, mamo, etc). Nella classe che utilizzerai per creare questi oggetti aggiungi anche un metodo che restituisca true se due animali condividono lo stesso padrone. Crea, raccogliendo i dati dal form, diverse istanze della classe Pet e mostrane i dati in una lista sottostante.


class Pet {
    constructor(petName, ownerName, species, breed) {
      this.petName = petName;
      this.ownerName = ownerName;
      this.species = species;
      this.breed = breed;
    }
    stessoProprietario(y) {
        if (this.ownerName === y.ownerName){
            console.log(true);
        }else{
            console.log(false);
        }
        return
    }
  }

  const petForm = document.getElementById("petForm");
  const petList = document.getElementById("petList");
  const pets = [];

  petForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const petName = event.target.elements.petName.value;
    // recupera il valore inserito dall'utente nell'input con name="petName" del form. Il valore viene poi assegnato alla variabile petName nella riga successiva e utilizzato per creare un nuovo oggetto "Pet".
    const ownerName = event.target.elements.ownerName.value;
    const species = event.target.elements.species.value;
    const breed = event.target.elements.breed.value;
    const pet = new Pet(petName, ownerName, species, breed); //istanza


    pets.push(pet); //metto ogni istanza nell'array nuovo creato pets.

    // event.target.reset(); //elimina tutto quello che c'è tutto

    renderPetList(); // funzioone che crea la lista con gli elementi del form
  });



  //se hanno stesso padrone
  const fuffi = new Pet('fuffi', 'Greta', 'cane', 'labrador');
  const anna = new Pet('anna', 'Greta', 'cane', 'maltese');
  fuffi.stessoProprietario(anna);


//Aggiunge li per ogni animale inserito
  function renderPetList() {
    petList.innerHTML = "";

    for (let i = 0; i < pets.length; i++) {
      const pet = pets[i];

      const li = document.createElement("li");
      li.textContent = `${pet.petName} (${pet.species}, ${pet.breed}) - Proprietario: ${pet.ownerName}`;
      petList.appendChild(li);
    }
  }

