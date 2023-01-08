//For render Basket
const basketContainer = document.getElementById("cart__items");
const basketTotalQuantity = document.getElementById("totalQuantity");
const basketTotalPrice = document.getElementById("totalPrice");
const basketInput = document.getElementsByClassName("itemQuantity");
const basketError = document.getElementById("firstNameErrorMsg");


let ki = Object.keys(localStorage)
let value = Object.values(localStorage)
let parseValue = JSON.parse(value)

function renderBasket(data) {
    let totalPrice = 0;
    let totalQuantity = 0;
    for (let i = 0; i < parseValue.length; i++) {
        if (!localStorage.getItem("orderId")) {
            // let parseValue = JSON.parse(value[i])
            let quantiter = Number(parseValue[0].quantity);
            let prixKanap = parseValue[0].price;
            let prixTotalDUKanap = quantiter * prixKanap;
            totalPrice += prixTotalDUKanap;
            totalQuantity += quantiter
            basketContainer.innerHTML += `
                  <article class="cart__item cart__item_article" data-name="${parseValue[i].name}" data-color="${parseValue[i].color}" data-value="${parseValue[i].quantity}" data-price="${parseValue[i].price}">
                        <div class="cart__item__img">
                            <img src="${parseValue[i].imageUrl}" alt="Photographie d'un canapé">
                        </div>
                        <div class="cart__item__content">
                            <div class="cart__item__content__description">
                                <h2>${parseValue[i].name}</h2>
                                <p>${parseValue[i].color}</p>
                                <p class="price">${data[i].price + '' + '$'}</p>
                            </div>
                        <div class="cart__item__content__settings">
                            <div class="cart__item__content__settings__quantity">
                                <p class="quantity">Qté : ${parseValue[i].quantity}</p>
                                <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${parseValue[i].quantity}">
                            </div>
                            <div class="cart__item__content__settings__delete" data-id="${parseValue[i].id}">
                                <p class="deleteItem" id="delete">Supprimer</p>
                            </div>
                        </div>
                    </div>
                </article>`;
            basketTotalQuantity.innerHTML = `${totalQuantity}`
            basketTotalPrice.innerHTML = `${totalPrice}`

        } else {
            console.log('no render Basket')
        }
    }

}

// renderBasket()

