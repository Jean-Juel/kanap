console.log('basket')
// let idArray = []
// console.log(localStorage)
//
// for (let i = 0; i < localStorage.length; i++) {
//     const key = localStorage.key(i)
//     let keys = localStorage.getItem(key)
//
// idArray.push(keys)
//
// }
//
// console.log(idArray)


function viewBasket(item) {
    console.log(item)
    let kanap = idArray
    console.log(kanap)
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
                        for (let id of idArray){
                            if (data_id === item.id) {
                                console.log(id)
                                renderBasket(id)

                                const remove = document.querySelector('.cart__item__content__settings__delete')
                                const inputValue = document.querySelector('.cart__item__content__settings__quantity > input')
                                const kanapQuantity = document.querySelector('.cart__item__content__settings__quantity > p')

                                inputValue.addEventListener('input', function () {
                                    let quantityInput = inputValue.value;
                                    inputValue.setAttribute('value', quantityInput);
                                    kanapQuantity.innerHTML = ``
                                    kanapQuantity.innerHTML += `Qté : ${quantityInput}`
                                    basketTotalQuantity.innerHTML = ``
                                    basketTotalQuantity.innerHTML += `${quantityInput}`
                                    basketTotalPrice.innerHTML = ``
                                    basketTotalPrice.innerHTML += `${quantityInput * donne.price}`
                                })

                                remove.addEventListener('click', function () {
                                    basketContainer.innerHTML = '';
                                    basketTotalPrice.innerHTML = ``
                                    basketTotalQuantity.innerHTML = ``
                                    basketTotalQuantity.innerHTML += `0`
                                    basketTotalPrice.innerHTML += `0`
                                    localStorage.clear()
                                })
                            }
                        }
                    }

                })
            } else {
                console.log("Error")
            }
        })
}

viewBasket(localStorage)


