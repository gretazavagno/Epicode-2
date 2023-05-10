const bookList = document.getElementById('book-list');

fetch('https://striveschool-api.herokuapp.com/books')
    .then(response => response.json())
    .then(books => {
        books.forEach(book => {
            const bookDiv = document.createElement('div');
            bookDiv.classList.add('book');

            const title = document.createElement('h2');
            title.textContent = book.title;

            const author = document.createElement('p');
            author.textContent = `Author: ${book.author}`;

            const img = document.createElement('img');
            img.src = book.img;

            bookDiv.appendChild(title);
            bookDiv.appendChild(author);
            bookDiv.appendChild(img);

            bookList.appendChild(bookDiv);
        });
    })
    .catch(error => {
        console.error('Errore durante il recupero dei libri:', error);
    });