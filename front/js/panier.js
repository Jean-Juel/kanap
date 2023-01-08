console.log('basket')
let valueArray = []


function getIdItemBasket() {
    for (let i = 0; i < valueArray.length; i++) {
        console.log(valueArray[i].id)
        let key = localStorage.key(i)
        let keys = localStorage.getItem(key)
        idArray.push(keys)
        console.log(idArray)
    }
}

getIdItemBasket()

function removeItemLocal() {
    const removes = document.querySelectorAll('.cart__item__content__settings__delete')

    let basketTotalPrix = Number(basketTotalPrice.innerHTML)
    let basketTotalQuantite = Number(basketTotalQuantity.innerHTML)

    for (let remove of removes) {
        remove.addEventListener('click', function () {
            let name = this.closest("article").getAttribute('data-name')
            let quantity = this.closest("article").getAttribute('data-value');
            let price = this.closest("article").getAttribute('data-price');
            let color = this.closest("article").getAttribute('data-color');
            let value = Object.values(localStorage)
            let parseValue = JSON.parse(value)

            basketTotalQuantite -= quantity
            basketTotalPrix -= (quantity * price)
            let spliceParse = [];
            let spliceParsefdsf = [];

            spliceParsefdsf.push(parseValue)
            console.log(spliceParsefdsf)


            for (let i = 0; i < parseValue.length; i++) {
                spliceParse.push(parseValue[i])
            }

            console.log(parseValue)

            let index = spliceParse.findIndex(i => i.name === name && i.color === color)
            console.log(spliceParse)
            spliceParse.splice(index, 1)
            console.log(spliceParse)

            basketTotalQuantity.innerHTML = ''
            basketTotalPrice.innerHTML = ''
            basketTotalQuantity.innerHTML = `${basketTotalQuantite}`
            basketTotalPrice.innerHTML = `${basketTotalPrix}`
            this.closest("article").remove();
            localStorage.removeItem('kanap')
            addLocalStorage(spliceParse)

            console.log('spliceParse')
            console.log(spliceParse)

        })
    }
}

function inputValueChange() {
    const inputs = document.querySelectorAll('.itemQuantity')
    const kanapQuantity = document.querySelectorAll('.cart__item__content__settings__quantity > p')
    for (let input of inputs) {
        input.addEventListener('input', function () {
            let quantity = this.value;
            let p = this.previousElementSibling
            p.innerHTML = `Qté : ${quantity}`
            this.setAttribute('value', quantity)
            this.closest("article").setAttribute('data-value', quantity);
            let attibuteValue = Number(input.getAttribute('value'))
            console.log(attibuteValue)
        })


        input.addEventListener('change', function () {
            const articles = document.getElementsByTagName('article')
            let sumQuantity = 0;
            let sumPrice = 0;

            for (let article of articles) {
                let values = Number(article.getAttribute('data-value'))
                let quantity = Number(article.getAttribute('data-price'))
                sumQuantity += values
                sumPrice += (values * quantity)

                basketTotalQuantity.innerHTML = ``
                basketTotalQuantity.innerHTML = `${sumQuantity}`

                basketTotalPrice.innerHTML = ``
                basketTotalPrice.innerHTML = `${sumPrice}`

            }
        })
    }
}

// getValue(localStorage)

function viewBasket() {
    const headers = new Headers();

    const options = {
        method: "GET",
        headers: headers,
    };

    fetch("http://localhost:3000/api/products", options)
        .then(function (res) {
                if (res.ok) {
                    res.json().then(function (data) {
                            for (let value of parseValue) {
                                let value_name = value.name;
                                if (value_name === data.name) {
                                    console.log('hello')
                                    for (let donne of data) {
                                        renderBasket(donne);
                                    }
                                }
                            }
                            removeItemLocal()
                            inputValueChange()
                        }
                    )
                } else {
                    console.log("Error")
                }
            }
        )
}

viewBasket()

