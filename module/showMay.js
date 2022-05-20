
const ShowCard = (container, data = []) => {
    container.innerHTML = '';
    data.forEach(item => {
        const { imgUno, product, price, id} = item;
        container.innerHTML += `
        
        <div class="card" style="width: 18rem;">
            <img src="${imgUno}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title text-center">${product}</h5>
              <p class="card-text text-center">${price} <i class="fa-solid fa-trash text-danger" id="${id}"></i></p>
            </div>
        </div>`
    })

}

export default ShowCard;