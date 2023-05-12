const endpoint = 'https://api.pexels.com/v1/search?query=cane'
const APIkey = 'Rcxs42S894122VWVijxJxUkjhcbFwZSm3ghm7JJndHP4kef02x65luxK'


fetch(endpoint, {
    headers: {
        Authorization: APIkey
    }
})
.then((response) => {

    console.log('oggetto response', response)
    if(response.ok){
        return response.json()
    }else{
        throw new Error("Errore nell'esecuzione della richiesta") //throw lancia un errore
    }
})
.then((data) => {
    console.log('EVENTI IN DB', data.photos)
    for(let i=0; i<data.length; i++){
        const card = `<div class="col-md-4">
        <div class="card mb-4 shadow-sm">
          <img src='${data[i].photos}'>
          <div class="card-body">
            <h5 class="card-title">${data[i].photographer}</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">
                  View
                </button>
                <button type="button" class="btn btn-sm btn-outline-secondary">
                  Edit
                </button>
              </div>
              <small class="text-muted">9 mins</small>
            </div>
          </div>
        </div>
        </div>`
        
        }
})
   
.catch(error => {
      console.error('Errore durante il caricamento dei dati:', error);
});



row.innerHTML

