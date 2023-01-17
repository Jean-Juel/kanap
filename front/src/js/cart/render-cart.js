//For render Basket
const basketCart = document.getElementById("cart__items");

function renderCart(data, value) {
    let prixKanap = data.price;
    let quantityKanap = value.quantity;
    if (!localStorage.getItem("orderId")) {
        basketCart.innerHTML += `
                  <article class="cart__item cart__item_article" data-id="${data._id}" data-color="${value.color}" data-value="${quantityKanap}">
                        <div class="cart__item__img">
                            <img src="${data.imageUrl}" alt="Photographie d'un canapé">
                        </div>
                        <div class="cart__item__content">
                            <div class="cart__item__content__description">
                                <h2>${data.name}</h2>
                                <p>${value.color}</p>
                                <p class="price">${prixKanap + '' + '$'}</p>
                            </div>
                        <div class="cart__item__content__settings">
                            <div class="cart__item__content__settings__quantity">
                                <p class="quantity">Qté : ${quantityKanap}</p>
                                <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${quantityKanap}">
                            </div>
                            <div class="cart__item__content__settings__delete" data-id="${data._id}">
                                <p class="deleteItem" id="delete">Supprimer</p>
                            </div>
                        </div>
                    </div>
                </article>`;

    } else {
        console.log('no render Cart')
    }
}

// renderCart()
export {renderCart}