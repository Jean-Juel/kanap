console.log('render basket');

//For render Basket
const basketContainer = document.getElementById("cart__items");
const basketTotalQuantity= document.getElementById("totalQuantity");
const basketTotalPrice = document.getElementById("totalPrice");
const basketInput = document.getElementsByClassName("itemQuantity");
const basketError = document.getElementById("firstNameErrorMsg");
let removeArticle = document.getElementById('delete');


function renderBasket(products) {
        let local = showLocal(products)
        let kanap = local[0]
        let inputValue = basketInput.value
        console.log(kanap)
        console.log(products)
        basketContainer.innerHTML +=   `
               <article class="cart__item" data-id="${products._id}" data-color="${kanap.color}">
                <div class="cart__item__img">
                  <img src="${products.imageUrl}" alt="Photographie d'un canapé">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__description">
                    <h2>${products.name}</h2>
                    <p>${kanap.color}</p>
                    <p>${products.price}</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté : ${kanap.quantity}</p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${kanap.quantity}">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem" id="delete">Supprimer</p>
                    </div>
                  </div>
                </div>
              </article>`;
        basketTotalQuantity.innerHTML += `${basketInput}`
        basketTotalPrice.innerHTML += `${kanap.quantity * products.price}`

}