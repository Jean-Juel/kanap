// Rendu page product
let valueLocalStorage = [];

function addLocalStorage(value) {
    localStorage.setItem('kanap', JSON.stringify(value))
}

function compare(a, b) {
    if (a.id < b.id) {
        return -1
    }
    if (a.id > b.id) {
        return 1
    }
    return 0
}

function viewProduct(item) {
    let img = document.querySelector('.item__img');
    let price = document.getElementById('price');
    let description = document.getElementById('description');
    let colors = document.getElementById('colors');
    let input = document.getElementById('quantity');
    let button = document.getElementById('addToCart');

    price.innerHTML += item.price;
    description.innerHTML += item.description;
    img.innerHTML += `<img src='${item.imageUrl}'
                      alt='${item.altTxt}'>`;

    for (let color of item.colors) {
        colors.innerHTML += `<option value="${color}">${color}</option>`;
    }

    input.addEventListener('input', function () {
        this.setAttribute('value', input.value);
    })

    button.addEventListener('click', function (e) {
        e.preventDefault()
        e.stopPropagation()
        let color = colors.value;
        let quantity = Number(input.getAttribute('value'));

        let thisKanapObject = {
            "id": item._id,
            "color": color,
            "quantity": quantity,
        }

        if (color === '' || quantity === 0) {
            alert('Veuillez selectione la couleur et la quantite')
            return
        }
        if (localStorage.getItem('kanap') == null) {
            valueLocalStorage.push(thisKanapObject)
            addLocalStorage(valueLocalStorage)
        } else {
            const retrievedString = localStorage.getItem('kanap');
            const parsedObject = JSON.parse(retrievedString);
            let checkOneIsSame = true;
            for (let p = 0; p < parsedObject.length; p++) {
                if (item._id === parsedObject[p].id && parsedObject[p].color === color) {
                    valueLocalStorage = []
                    let thisQuantityToNumber = Number(quantity)
                    let quantityParseToNumber = Number(parsedObject[p].quantity)
                    let total = quantityParseToNumber + thisQuantityToNumber
                    let value = Object.values(localStorage)
                    let valuelocalStorage = JSON.parse(value)

                    valueLocalStorage.push(valuelocalStorage[p])

                    let findItemAdd = valuelocalStorage.find(el => el.id === item._id && el.color === color)
                    findItemAdd.quantity = total

                    if (valuelocalStorage.length === 1) {
                        valueLocalStorage = []
                        valueLocalStorage.push(findItemAdd)
                        addLocalStorage(valueLocalStorage)
                    }
                    if (valuelocalStorage.length > 1) {
                        localStorage.removeItem('kanap')
                        //Clean valueLocalStorage
                        valueLocalStorage = []
                        //Push item add value before valueLocalStorage
                        valueLocalStorage.push(findItemAdd)
                        // Use filter for take item who have the same name not same color
                        const sameName = valuelocalStorage.filter(el => el.id === item._id && el.color !== color);
                        // Use filter for take item who doesn't have the same name and same color
                        const notSameColorNotSameName = valuelocalStorage.filter(el => el.id !== item._id && el.color !== color);

                        //Check if notSameColorNotSameName is not empty and if is not and push item
                        if (typeof notSameColorNotSameName !== 'undefined' && notSameColorNotSameName >= 1) {
                            for (let value of notSameColorNotSameName.length) {
                                valueLocalStorage.push(value)

                            }
                        }
                        //Check if sameName is not empty and if is not and push item
                        if (typeof sameName !== 'undefined' && notSameColorNotSameName >= 1) {
                            for (let value of sameName.length) {
                                valueLocalStorage.push(value)
                            }
                        }
                        checkOneIsSame = false
                        valueLocalStorage.sort(compare)
                        addLocalStorage(valueLocalStorage)
                    }
                }
                if (item._id === parsedObject[p].id && parsedObject[p].color !== color && checkOneIsSame === true) {
                    let value = Object.values(localStorage)
                    let valuelocalStorage = JSON.parse(value)

                    localStorage.removeItem('kanap')
                    for (let value of valuelocalStorage.length) {
                        valueLocalStorage.push(value)
                    }
                    valueLocalStorage.push(thisKanapObject)
                    valueLocalStorage.sort(compare)

                    addLocalStorage(valueLocalStorage)
                    checkOneIsSame = false
                }
                if (item._id !== parsedObject[p].id && checkOneIsSame === true) {
                    let value = Object.values(localStorage)
                    let valuelocalStorage = JSON.parse(value)
                    valuelocalStorage.push(thisKanapObject)
                    checkOneIsSame = false

                    valuelocalStorage.sort(compare)
                    addLocalStorage(valuelocalStorage)
                }
            }
        }
        alert('Le/les canape selectionner on ete ajoute au panier')

        valueLocalStorage = []
    })
}

