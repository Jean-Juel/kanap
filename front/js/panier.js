function removeKanap() {
    const removes = document.querySelectorAll('.cart__item__content__settings__delete')

    //Loop on each button delete in articles
    for (let remove of removes) {
        remove.addEventListener('click', function () {
            let color = this.closest("article").getAttribute('data-color');
            let id = this.closest("article").getAttribute('data-id');
            let spliceValue = [];

            let value = Object.values(localStorage)
            let valuelocalStorage = JSON.parse(value)
            console.log(valuelocalStorage)

            //Push value from localStorage in array 'spliceValue'
            for (let i = 0; i < valuelocalStorage.length; i++) {
                spliceValue.push(valuelocalStorage[i])
            }

            //Find index in spliceValue
            let index = spliceValue.findIndex(i => i.id === id && i.color === color)
            console.log(index)

            //Use splice for delete spliceValue
            spliceValue.splice(index, 1)
            console.log(spliceValue)

            this.closest("article").remove();
            localStorage.removeItem('kanap')
            addLocalStorage(spliceValue)
            //Call function for recalculate total price and total quantity after remove kanap
            // calculTotalPrice()
        })
    }
}

function calculTotalPrice() {
    let articles = document.querySelectorAll('.cart__item_article')
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

        //Emptied total card
        basketTotalQuantity.innerHTML = ``
        basketTotalPrice.innerHTML = ``

        //Add total quantity and total price
        basketTotalQuantity.innerHTML = `${sumQuantity}`
        basketTotalPrice.innerHTML = `${sumPrice}`
    }
}

function inputValueChange() {
    const inputs = document.querySelectorAll('.itemQuantity')
    // const quantity = document.querySelectorAll('.quantity')

    for (let input of inputs) {
        //Change Qté when change input
        input.addEventListener('input', function () {
            //Change value attribute on change input quantity
            let inputValue = this.value
            input.setAttribute('value', inputValue)

            let quantity = this.getAttribute('value');
            //Change quantity with the same input quantity
            let p = this.previousElementSibling
            p.innerHTML = `Qté : ${quantity}`
            this.setAttribute('value', quantity)
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
                                renderBasket(data, value)
                            }
                            //Function gonna wait addEventListener
                            removeKanap()
                            inputValueChange()
                            //Function calcul total price when the item localStorage appear
                            calculTotalPrice()
                        }
                    )
            } else {
                console.log("Error on fetch API")
            }
        }
    }
}

viewCart()
