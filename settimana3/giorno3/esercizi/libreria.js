const bookList = document.getElementById('book-list');

window.onload = () =>{
fetch('https://striveschool-api.herokuapp.com/books')
    
    .then(response => response.json())
    
    .then(books => { //per ogni libro crea la card
        books.forEach(book => {
            const col = document.createElement('div'); //variabile creazione colonna
            col.classList.add('col-md-3', 'mb-4', 'mr-4');

            const card = document.createElement('div');
            card.classList.add('card');

            const img = document.createElement('img');
            img.classList.add('card-img-top', 'card-img-center', 'img-fluid');
            img.src = book.img;
            img.alt = book.title;

            const cardBody = document.createElement('div'); //vanno tutte le info del Book sotto l'immagine
            cardBody.classList.add('card-body');

            const title = document.createElement('h5'); //titolo
            title.classList.add('card-title');
            title.textContent = book.title;

            const price = document.createElement('p'); //Prezzo
            price.classList.add('card-text');
            price.textContent = `Prezzo: ${book.price} $`;

            const button = document.createElement('button'); //button scarta
            button.classList.add('btn', 'btn-danger');
            button.textContent = 'Scarta';
            button.addEventListener('click', () => {
                col.remove();
            });

            const btnAdd = document.createElement('button');
            btnAdd.classList.add('btn', 'btn-success');
            btnAdd.textContent = 'Add to cart';
            btnAdd.addEventListener('click', (item)=>{
                //se il carrello esiste già nello storage e se esiste viene parsato da una stringa JSON a un oggetto con JSON.parse. Se non esiste viene creato un array vuoto. let cart = JSON.parse(localStorage.getItem('cart')) || [];
                let cart = localStorage.getItem('cart');
                if(cart){
                    cart = JSON.parse(cart);
                }else{
                    cart = [];
                }
                cart.push(item); //aggiunge articolo a cart

                localStorage.setItem('cart', JSON.stringify(cart)); //array del cart viene convertito in stringa con JSON.stringify e viene salvato in localstorage setItem
            })

            cardBody.appendChild(title);
            cardBody.appendChild(price);
            cardBody.appendChild(button);
            cardBody.appendChild(btnAdd);

            card.appendChild(img);
            card.appendChild(cardBody);

            col.appendChild(card);

            bookList.appendChild(col);
        });
    })
    .catch(error => {
        console.error('Errore durante il recupero dei libri:', error);
    });

}
