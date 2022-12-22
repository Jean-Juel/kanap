console.log('basket')
const inputValue = document.querySelector('.cart__item__content__settings__quantity > input')
const kanapQuantity = document.querySelector('.cart__item__content__settings__quantity > p')

let valueArray = []

function getItemLocalStorage() {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        console.log(key)
        let keys = localStorage.getItem(key)
        idArray.push(keys)
        console.log(idArray)
    }
}

getItemLocalStorage()

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

function getValue(item) {
    for (let i = 0; i < idArray.length; i++) {
        let items = localStorage.getItem(item[i])
        valueArray.push(items)
    }
}


// function removeItem(item) {
//     remove.addEventListener('click', function () {
//         basketContainer.innerHTML = '';
//         basketTotalPrice.innerHTML = ``
//         basketTotalQuantity.innerHTML = ``
//         basketTotalQuantity.innerHTML += `0`
//         basketTotalPrice.innerHTML += `0`
//         localStorage.clear()
//     })
// }
//


function removeItemLocal() {
    const removes = document.querySelectorAll('.cart__item__content__settings__delete')

    let basketTotalPrix = Number(basketTotalPrice.innerHTML)
    let basketTotalQuantite = Number(basketTotalQuantity.innerHTML)

    for (let remove of removes) {
        remove.addEventListener('click', function () {
            let id = this.getAttribute('data-id')
            let quantity = this.closest("article").getAttribute('data-value');
            let price = this.closest("article").getAttribute('data-price');
            basketTotalQuantite -= quantity
            basketTotalPrix -= (quantity * price)
            console.log(basketTotalPrix)
            for (let key of ki) {
                if (key === id) {
                    basketTotalQuantity.innerHTML = ''
                    basketTotalPrice.innerHTML = ''
                    basketTotalQuantity.innerHTML = `${basketTotalQuantite}`
                    basketTotalPrice.innerHTML = `${basketTotalPrix}`
                    this.closest("article").remove();
                    localStorage.removeItem(id)
                }
            }
        })
    }
}

// function removeItemView() {
//     for (let article of articles) {
//         article.addEventListener('click', function () {
//             let id = this.getAttribute('data-id')
//             console.log(id)
//             for (let key of ki) {
//                 if (key !== id) {
//
//                 }
//             }
//         })
//     }
// }


// if (key === this) {
//     local.removeItem(this)
// }

// function () {
//     console.log('remove')
//     for (let key of ki) {
//         if (key === this) {
//             local.removeItem(this)
//         }
//     }
// }

getValue(localStorage)

function viewBasket() {
    console.log("function get basket")
    const headers = new Headers();

    const options = {
        method: "GET",
        headers: headers,
    };

    fetch("http://localhost:3000/api/products", options)
        .then(function (res) {
            if (res.ok) {
                res.json().then(function (data) {

                    for (const donne of data) {
                        let data_id = donne._id;
                        if (data_id === ki) {
                            renderBasket(donne);
                        }
                    }
                    removeItemLocal()

                    // let thisId = getAtribute()
                    // console.log(thisId)


                })
            } else {
                console.log("Error")
            }
        })
}

viewBasket()


// inputValue.addEventListener('input', function () {
//     let quantityInput = inputValue.value;
//     inputValue.setAttribute('value', quantityInput);
//     kanapQuantity.innerHTML = ``
//     kanapQuantity.innerHTML += `Qté : ${quantityInput}`
//     basketTotalQuantity.innerHTML = ``
//     basketTotalQuantity.innerHTML += `${quantityInput}`
//     basketTotalPrice.innerHTML = ``
//     basketTotalPrice.innerHTML += `${quantityInput * donne.price}`
// })
