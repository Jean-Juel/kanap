import {addLocalStorage} from "../product/product-manager.js";
import {renderCart} from "./render-cart.js";

function removeKanap() {
    const removes = document.querySelectorAll('.cart__item__content__settings__delete')
    //Loop on each button delete in articles
    for (let remove of removes) {
        remove.addEventListener('click', function () {
            let color = this.closest("article").getAttribute('data-color');
            let id = this.closest("article").getAttribute('data-id');
            let newValue = [];

            //Get localStorage
            let valueLocalStorage = Object.values(localStorage)
            let productLocalStorage = JSON.parse(valueLocalStorage)

            //Push value from localStorage in array 'newValue'
            for (let i = 0; i < productLocalStorage.length; i++) {
                newValue.push(productLocalStorage[i])
            }

            //Find index in newValue
            let index = newValue.findIndex(i => i.id === id && i.color === color)

            //Use splice for delete the same article
            newValue.splice(index, 1)

            //Remove all localstorage
            localStorage.removeItem('kanap')

            //Remove article select in cart
            this.closest("article").remove();

            //Add new array in localStorage
            addLocalStorage(newValue)

            //Call function for recalculate total price and total quantity after remove kanap
            calculTotalPrice()
        })
    }
}

function calculTotalPrice() {
    let articles = document.querySelectorAll('.cart__item_article')
    let cartTotalPrice = document.getElementById("totalPrice");
    let cartTotalQuantity = document.getElementById("totalQuantity");

    let sumQuantity = 0;
    let sumPrice = 0;
    //Loop in all articles
    for (let article of articles) {
        //Selected price <p class="price" of each article
        let price = article.querySelector('p.price')
        //Replace for delete '$'
        let priceReplace = price.innerHTML.replace(/[^\d]/g, '')
        //Get data-value for each article
        let quantity = Number(article.getAttribute('data-value'))

        sumQuantity += quantity
        sumPrice += (quantity * priceReplace)

        //Emptied total price and quantity card
        cartTotalQuantity.innerHTML = ``
        cartTotalPrice.innerHTML = ``

        //Add total quantity and total price
        cartTotalQuantity.innerHTML = `${sumQuantity}`
        cartTotalPrice.innerHTML = `${sumPrice}`
    }
}

function inputValueChange() {
    const inputs = document.querySelectorAll('.itemQuantity')
    // const quantity = document.querySelectorAll('.quantity')

    for (let input of inputs) {
        //Change Qté when change input
        input.addEventListener('input', function () {

            //Change value attribute on change input quantity
            input.setAttribute('value', this.value)

            //get atttribute
            let quantity = this.getAttribute('value');

            //Select text price
            let p = this.previousElementSibling

            //Change quantity with the same input quantity
            p.innerHTML = `Qté : ${quantity}`

            //Add quantity to data-value attribute
            this.closest("article").setAttribute('data-value', quantity);

            //Call function for recalculate total price and total quantity after change value
            calculTotalPrice()
        })
    }
}

//Fetch on each item in localstorage for render
async function viewCart() {
    let value = Object.values(localStorage)
    //if localStorage is not empty
    if (value.length > 0) {
        let valuelocalStorage = JSON.parse(value)

        //For each value localStorage fetch with the id of product for get just this data of product
        for (let value of valuelocalStorage) {
            let rep = await fetch(`http://localhost:3000/api/products/${value.id}`, {method: 'GET'});
            if (rep.ok) {
                await rep.json()
                    .then(await function (data) {
                            if (data._id === value.id) {
                                renderCart(data, value)
                            }
                        }
                    )
            } else {
                console.log("Error on fetch API")
            }
        }
        //Function gonna wait addEventListener
        removeKanap()
        inputValueChange()
        //Function calcul total price when the item localStorage appear
        calculTotalPrice()
    }
}
viewCart()
export {viewCart, calculTotalPrice, removeKanap, inputValueChange}