console.log('render basket');

//For render Basket
const basketContainer = document.getElementById("cart__items");
const basketTotalQuantity = document.getElementById("totalQuantity");
const basketTotalPrice = document.getElementById("totalPrice");
const basketInput = document.getElementsByClassName("itemQuantity");
const basketError = document.getElementById("firstNameErrorMsg");


console.log(idArray)

let abc = JSON.parse(kanap.getItem('id'))



let ki = Object.keys(localStorage)
console.log('ki' + ki)
let value = Object.values(localStorage)

function renderBasket() {
    let totalPrice = 0;
    let totalQuantity = 0;
        for (let i = 0; i < kanap.length; i++) {
            let parseValue = JSON.parse(value[i])
            let quantiter = Number(parseValue[0].quantity);
            let prixKanap = parseValue[0].price;
            let prixTotalDUKanap = quantiter * prixKanap;
            totalPrice += prixTotalDUKanap;
            totalQuantity += quantiter
            basketContainer.innerHTML += `
                  <article class="cart__item cart__item_article" data-id="${parseValue[0].id}"  data-color="${parseValue[0].color}" data-value="${parseValue[0].quantity}" data-price="${parseValue[0].price}">
                        <div class="cart__item__img">
                            <img src="${parseValue[0].imageUrl}" alt="Photographie d'un canapé">
                        </div>
                        <div class="cart__item__content">
                            <div class="cart__item__content__description">
                                <h2>${parseValue[0].name}</h2>
                                <p>${parseValue[0].color}</p>
                                <p class="price">${parseValue[0].price + '' + '$'}</p>
                            </div>
                        <div class="cart__item__content__settings">
                            <div class="cart__item__content__settings__quantity">
                                <p>Qté : ${parseValue[0].quantity}</p>
                                <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${parseValue[0].quantity}">
                            </div>
                            <div class="cart__item__content__settings__delete" data-id="${parseValue[0].id}">
                                <p class="deleteItem" id="delete">Supprimer</p>
                            </div>
                        </div>
                    </div>
            </article>`;

                basketTotalQuantity.innerHTML = `${totalQuantity}`
                basketTotalPrice.innerHTML = `${totalPrice}`
            }

}
renderBasket()

