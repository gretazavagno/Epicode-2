const API_URL = 'https://striveschool-api.herokuapp.com/api/product/'
        let addressBarContent = new URLSearchParams(window.location.search)
        let productId = addressBarContent.get('productId') //vedo se esiste un id nella bassa degli indirizzi e se c'è ha valore productId
        console.log('DETAILS', productId)


        const getDetails = function () {
            if (productId) { //se esiste un productId allora eseguo questo che c'è sotto 

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
                .then((data)=>{
                    console.log('DETTAGLI', data)
                    const container = document.getElementById('details-container');

                    let templateDetails = `
                    <div class="col-12 col-md-3 text-light">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Nome: <b>${data.name}</b></h5>
                                <p class="card-text">Descrizione: ${data.description}</p>
                                <p>Marca: ${data.brand}</p>
                                <p>Link al prodotto: ${data.imageUrl}</p>
                                <p>${data.price}€</p>
                                <a href="./homepage.html" class="btn btn-primary btn-modifica">RETURN</a> &nbsp;
                            </div>
                        </div>
                    </div>`
                    container.innerHTML += templateDetails
                })

                }
        }

        window.onload = () => {
            getDetails()
        }