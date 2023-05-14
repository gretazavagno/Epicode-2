const API_URL = 'https://striveschool-api.herokuapp.com/api/product/'

      // recuperiamo i prodotti e manipoliamo il DOM creando una col per ogni prodotto

        const getProducts = function () {
        
            fetch(API_URL, {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZjk3YTg4Zjc0MDAwMTQyODc0NDUiLCJpYXQiOjE2ODM4ODc0NDMsImV4cCI6MTY4NTA5NzA0M30.TDf-9vGvY8Z6o_4cqgAZFfSnIwwJZOEYyrea6FBk04k",
                }
            })

            .then((res) => {
                console.log('RES', res)
                if (res.ok) {
                    return res.json() // otteniamo i dati
                } else {
                    throw new Error('Errore nel recupero dei prodotti!')
                }
            })

            .then((data) => {
                console.log('PRODOTTI IN DB', data)
                //creazione di colonne a partire dall'array data
                data.forEach((product) => {
                    let colTemplate = `
                    <div class="col-12 col-md-3">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title"><b>${product.name}</b></h5>
                                <p class="card-text">${product.description}</p>
                                <p>${product.brand}</p>
                                <p>Link al prodotto: <a href="${product.imageUrl}">${product.imageUrl}</a></p>
                                <p>${product.price}€</p>
                                <a href="./backoffice.html?productId=${product._id}" class="btn btn-primary btn-modifica">MODIFICA</a> &nbsp;
                                <a href="./details.html?productId=${product._id}" class="btn btn-success btn-details">DETTAGLI</a>
                            </div>
                        </div>
                    </div>`
                    // passo a ./backoffice.html UN PARAMETRO con ?productId= --> questo parametro è l'_id della risorsa che intenderò modificare!

                    let rowReference = document.getElementById('products-container') 
                    rowReference.innerHTML += colTemplate // aggiungo colTemplate all'attuale contenuto di rowReference
                    // <div class="row"></div>
                })
          })
          .catch((error) => {
            console.log(error)
          })
        }

        // all'avvio di index.html lancio getEvents()
        window.onload = () => {
            getProducts()
      }