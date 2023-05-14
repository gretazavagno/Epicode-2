const API_URL = 'https://striveschool-api.herokuapp.com/api/product/'
      // ora dobbiamo permettere all'admin di poter MODIFICARE UN EVENTO
      // in caso di modifica, questa pagina verrà caricata con un parametro nell'indirizzo, l'_id
      // dell'evento da modificare (l'abbiamo chiamato eventId)

      // per questo motivo, questa pagina backoffice ora ha un doppio scopo:
      // 1) può creare un evento da zero
      // 2) se c'è il parametro eventId nell'indirizzo, potrà MODIFICARE una risorsa

      // verifichiamo che ci sia o meno il parametro eventId nella barra degli indirizzi
      // valore della barra degli indirizzi:
    let addressBarContent = new URLSearchParams(window.location.search) //è il valore della barra degli indirizzi

    let productId = addressBarContent.get('productId') //vedo se esiste un id nella bassa degli indirizzi e se c'è ha valore productId
    console.log('PRODUCTID', productId)

    if (productId) { //se esiste un productId allora eseguo questo che c'è sotto 
        // modalità MODIFICA
        // cambio titolo
        document.getElementsByTagName('h2')[0].innerText =
          'Backoffice page - Modifica Prodotto' //questo mi fa accedere al tag h2 e l'indice 0 mi indica il primo h2 che trova
        // cambio label bottone
        document.getElementById('save-button').innerText = 'MODIFICA PRODOTTO' 
        // faccio comparire il bottone delete
        let deleteButton = document.getElementById('delete-button')
        deleteButton.classList.remove('d-none') //elimina la proprietà d-none quindi si vede il button
        deleteButton.addEventListener('click', () => {
            fetch(API_URL + productId, {
                method: 'DELETE',
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZjk3YTg4Zjc0MDAwMTQyODc0NDUiLCJpYXQiOjE2ODM4ODc0NDMsImV4cCI6MTY4NTA5NzA0M30.TDf-9vGvY8Z6o_4cqgAZFfSnIwwJZOEYyrea6FBk04k",
                },
                // non c'è body
                // non c'è quindi content-type
            })
            .then((res) => {
                if (res.ok) {
                alert('eliminazione completata con successo')
                location.assign('./homepage.html')
                } else {
                throw new Error("Problema nell'eliminazione del prodotto")
                }
            })
            .catch((err) => {
                console.log(err)
            })
        })

        // ora che ho l'evento da modificare, devo fare una fetch() di tipo GET e recuperare i dettagli di questo evento!
        // faccio una get specifica per ottenere i dettagli di un solo evento: l'evento con id eventId
        fetch(API_URL + productId, {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZjk3YTg4Zjc0MDAwMTQyODc0NDUiLCJpYXQiOjE2ODM4ODc0NDMsImV4cCI6MTY4NTA5NzA0M30.TDf-9vGvY8Z6o_4cqgAZFfSnIwwJZOEYyrea6FBk04k",
            },
            })
        .then((res) => {
        if (res.ok) {
            return res.json()
        } else {
            throw new Error("Errore nel recupero del prodotto")
        }
        })
        .then((product) => {
            console.log('DATI DEL SINGOLO PRODOTTO', product)
            // ripopoliamo il form
            document.getElementById('name').value = product.name
            document.getElementById('description').value = product.description
            document.getElementById('brand').value = product.brand
            document.getElementById('imagegUrl').value = product.imageUrl
            document.getElementById('price').value = product.price
        })
        .catch((err) => {
        console.log(err)
        })
      }

      // questo form invierà un nuovo oggetto evento alle API 
      // l'oggetto che creiamo raccogliendo i dati dal form non può essere scritto a caso!
      // un oggetto "prodotto" di CRUDAZON dev'essere fatto da determinate proprietà CHE SONO: 
      // name, description, brand, imageUrl, price
  

      // prendo un riferimento al bottone
      const productForm = document.getElementById('product-form')

      productForm.addEventListener('submit', function (evento) {

        evento.preventDefault() //evita il comportamento predefinito dei form e permette la gestione dei dati manualmente attraverso utilizzo di codice js
        console.log('invio i dati')

        //variabili che fanno riferimento agli id del form
        let nameInput = document.getElementById('name')
        let descriptionInput = document.getElementById('description')
        let brandInput = document.getElementById('brand')
        let imageUrlInput = document.getElementById('imageUrl')
        let priceInput = document.getElementById('price')

        // raccogliere i dati del form e inviarli con una request di tipo POST
        let newProduct = {
          name: nameInput.value,
          description: descriptionInput.value,
          brand: brandInput.value,
          imageUrl: imageUrlInput.value,
          price: priceInput.value,
        }

        console.log('evento pronto da inviare alle API', newProduct)
        // fetch()
        // --> POST: si fa su API_URL
        // --> PUT: bisogna selezionare un elemento preciso, quindi c'è ID

        fetch(productId ? API_URL + productId : API_URL, {
            method: productId ? 'PUT' : 'POST',
            headers: {
             // <-- autorizzazione per l'API, in questo caso non serve!
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZjk3YTg4Zjc0MDAwMTQyODc0NDUiLCJpYXQiOjE2ODM4ODc0NDMsImV4cCI6MTY4NTA5NzA0M30.TDf-9vGvY8Z6o_4cqgAZFfSnIwwJZOEYyrea6FBk04k",
                'Content-Type': 'application/json', // informa l'API che la stringa che mandiamo nel body in realtà va parsata!
            },
            body: JSON.stringify(newProduct),
        })



        .then((res) => {
        // il server, una volta accettata la vostra request, restituirà una response
        console.log('RESPONSE DELLA CHIAMATA POST', res)
        if (res.ok) {
            // il nuovo evento è stato salvato!! yeeee
            alert(productId ? 'PRODOTTO MODIFICATO!' : 'PRODOTTO CREATO!')
            location.assign('./homepage.html') // riporto alla pagina home
        } else {
            // 400, 404
            alert('ERRORE NEL SALVATAGGIO')
            throw new Error('ERRORE NEL SALVATAGGIO')
        }
        })
        .catch((err) => {
        console.log(err)
        })
    })