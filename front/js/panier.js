console.log('basket')
// let idArray = []
console.log(localStorage)

let valueArray = []

function getItemLocalStorage(){
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        console.log(key)
        let keys = localStorage.getItem(key)
        idArray.push(keys)
        console.log(idArray)

    }
}
getItemLocalStorage()
console.log(valueArray)

function getIdItemBasket(){
    for (let i = 0; i < valueArray.length; i++) {
        console.log(valueArray[i].id)
        let key = localStorage.key(i)
        let keys = localStorage.getItem(key)
        idArray.push(keys)
        console.log(idArray)
    }
}
getIdItemBasket()

function getValue(item){
    for (let i = 0; i < idArray.length; i++) {
        let items = localStorage.getItem(item[i])
        valueArray.push(items)
    }
}

getValue(localStorage)
console.log(valueArray)


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
                        console.log(data_id)
                        console.log(data)
                        for (const donne of data) {
                            let data_id = donne._id;
                            if (data_id === ki) {
                                console.log('view product')
                                renderBasket(donne);
                            }
                        }
                            // if (id === data_id) {
                                // renderBasket(data)
                                //
                                // const remove = document.querySelector('.cart__item__content__settings__delete')
                                // const inputValue = document.querySelector('.cart__item__content__settings__quantity > input')
                                // const kanapQuantity = document.querySelector('.cart__item__content__settings__quantity > p')
                                //
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
                                //
                                // remove.addEventListener('click', function () {
                                //     basketContainer.innerHTML = '';
                                //     basketTotalPrice.innerHTML = ``
                                //     basketTotalQuantity.innerHTML = ``
                                //     basketTotalQuantity.innerHTML += `0`
                                //     basketTotalPrice.innerHTML += `0`
                                //     localStorage.clear()
                                // })
                            // }
                        // }
                    }

                })
            } else {
                console.log("Error")
            }
        })
}

viewBasket()


