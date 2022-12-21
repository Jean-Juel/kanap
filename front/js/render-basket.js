console.log('render basket');

//For render Basket
const basketContainer = document.getElementById("cart__items");
const basketTotalQuantity = document.getElementById("totalQuantity");
const basketTotalPrice = document.getElementById("totalPrice");
const basketInput = document.getElementsByClassName("itemQuantity");
const basketError = document.getElementById("firstNameErrorMsg");


console.log(idArray)

let abc = JSON.parse(kanap.getItem('id'))


let string = JSON.stringify(kanap)
console.log(string)
let parse = JSON.parse(string)
console.log(parse)
console.log(kanap.length)
let ki = Object.keys(localStorage)
let value = Object.values(localStorage)


function renderBasket() {
    let arrayPrice;
    let arrayQuantity;
    arrayPrice = [];
    arrayQuantity = [];
        for (let i = 0; i < kanap.length; i++) {
            let parseValue = JSON.parse(value[i])
            arrayQuantity.push(parseValue[i].quantity)
            console.log(parseValue)
            arrayPrice.push(parseValue[i].price)
            // let totalQuantity =
            let totalQuantity = arrayQuantity.reduce((total , b) => total + b)
            let totalPrice = arrayPrice.reduce((a,b) => a + b, 1);
            console.log(totalQuantity)
            console.log(totalPrice)
            console.log(arrayPrice)
            let total = totalQuantity * totalPrice;
            console.log(parseValue[i].price)
            console.log(`${parseValue[0].quantity * parseValue[0].price}`)
                basketContainer.innerHTML += `
 <article class="cart__item" data-id="${parseValue[0].id}"  data-color="${parseValue[0].color}">
  <div class="cart__item__img">
 <img src="${parseValue[0].imageUrl}" alt="Photographie d'un canapé">

  </div>
  <div class="cart__item__content">
    <div class="cart__item__content__description">
      <h2>${parseValue[0].name}</h2>
      <p>${parseValue[0].color}</p>
      <p>${parseValue[0].price + '' + '$'}</p>
    </div>
    <div class="cart__item__content__settings">
      <div class="cart__item__content__settings__quantity">
        <p>Qté : ${parseValue[0].quantity}</p>
        <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${parseValue[0].quantity}">
      </div>
      <div class="cart__item__content__settings__delete">
        <p class="deleteItem" id="delete">Supprimer</p>
      </div>
    </div>
  </div>
</article>`;


                basketTotalQuantity.innerHTML += `${totalQuantity}`
                basketTotalPrice.innerHTML += `${total}`
            }

}

renderBasket()


//   console.log(products)
//   console.log(kanap[i].color)
//   basketContainer.innerHTML += `
//  <article class="cart__item" data-id="${kanap[i]._id}" data-color="${kanap.color}">
//   <div class="cart__item__img">
//     <img src="${kanap[i].imageUrl}" alt="Photographie d'un canapé">
//   </div>
//   <div class="cart__item__content">
//     <div class="cart__item__content__description">
//       <h2>${kanap[i].name}</h2>
//       <p>${kanap[i].color}</p>
//       <p>${parseValue[0].price + '' + '$'}</p>
//     </div>
//     <div class="cart__item__content__settings">
//       <div class="cart__item__content__settings__quantity">
//         <p>Qté : ${kanap[i].quantity}</p>
//         <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${kanap.quantity}">
//       </div>
//       <div class="cart__item__content__settings__delete">
//         <p class="deleteItem" id="delete">Supprimer</p>
//       </div>
//     </div>
//   </div>
// </article>`;
//   basketTotalQuantity.innerHTML += `${kanap.quantity}`
//   basketTotalPrice.innerHTML += `${kanap.quantity * products.price}`