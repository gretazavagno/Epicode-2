const bookList = document.getElementById('book-list');

fetch('https://striveschool-api.herokuapp.com/books')
    
    .then(response => response.json())
    
    .then(books => { //per ogni libro crea la card
        books.forEach(book => {
            const col = document.createElement('div'); //variabile creazione colonna
            col.classList.add('col-md-3', 'mb-4');

            const card = document.createElement('div');
            card.classList.add('card');

            const img = document.createElement('img');
            img.classList.add('card-img-top');
            img.src = book.img;
            img.alt = book.title;

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            const title = document.createElement('h5');
            title.classList.add('card-title');
            title.textContent = book.title;

            const price = document.createElement('p');
            price.classList.add('card-text');
            price.textContent = `Prezzo: ${book.price}`;

            const button = document.createElement('button');
            button.classList.add('btn', 'btn-danger');
            button.textContent = 'Scarta';
            button.addEventListener('click', () => {
                col.remove();
            });

            cardBody.appendChild(title);
            cardBody.appendChild(price);
            cardBody.appendChild(button);

            card.appendChild(img);
            card.appendChild(cardBody);

            col.appendChild(card);

            bookList.appendChild(col);
        });
    })
    .catch(error => {
        console.error('Errore durante il recupero dei libri:', error);
    });
