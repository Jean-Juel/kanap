// Rendu page product
let arrayValueLocalStorage = [];

function addLocalStorage(value) {
    localStorage.setItem('kanap', JSON.stringify(value))
}

function pushArray(value) {
    arrayValueLocalStorage.push(value)
}

function compare(a, b) {
    if (a.name < b.name) {
        return -1
    }
    if (a.name > b.name) {
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
        let key = Object.keys(localStorage)

        let thisKanapObject = {
            "name": item.name,
            "color": color,
            "quantity": quantity,
            "description": item.description,
            "imageUrl": item.imageUrl
        }

        if (color === '' || quantity === 0) {
            alert('Veuillez selectione la couleur et la quantite')
        } else {
            if (localStorage.getItem('kanap') == null) {
                arrayValueLocalStorage.push(thisKanapObject)
                addLocalStorage(arrayValueLocalStorage)
            } else {
                const retrievedString = localStorage.getItem('kanap');
                const parsedObject = JSON.parse(retrievedString);
                let checkOneIsSame = true;
                for (let p = 0; p < parsedObject.length; p++) {
                    if (item.name === parsedObject[p].name && parsedObject[p].color === color) {
                        console.log('same name and same color')
                        arrayValueLocalStorage = []
                        let thisQuantityToNumber = Number(quantity)
                        let quantityParseToNumber = Number(parsedObject[p].quantity)
                        let total = quantityParseToNumber + thisQuantityToNumber
                        let value = Object.values(localStorage)
                        let parseValue = JSON.parse(value)

                        pushArray(parseValue[p])

                        let findItemAdd = parseValue.find(el => el.name === item.name && el.color === color)
                        findItemAdd.quantity = total

                        if (parseValue.length === 1) {
                            arrayValueLocalStorage = []
                            pushArray(findItemAdd)
                            addLocalStorage(arrayValueLocalStorage)
                        }
                        if (parseValue.length > 1) {
                            localStorage.removeItem('kanap')
                            arrayValueLocalStorage = []
                            const ArrayFilterSameName = parseValue.filter(el => el.name === item.name && el.color !== color);
                            const ArrayFilterNotSameColorNotSameName = parseValue.filter(el => el.name !== item.name && el.color !== color);

                            pushArray(findItemAdd)

                            if (typeof ArrayFilterNotSameColorNotSameName !== 'undefined') {
                                for (let i = 0; i < ArrayFilterNotSameColorNotSameName.length; i++) {
                                    pushArray(ArrayFilterNotSameColorNotSameName[i])
                                }
                            }
                            if (typeof ArrayFilterSameName !== 'undefined') {
                                for (let i = 0; i < ArrayFilterSameName.length; i++) {
                                    pushArray(ArrayFilterSameName[i])
                                    console.log(ArrayFilterSameName)
                                }
                            }
                            checkOneIsSame = false
                            arrayValueLocalStorage.sort(compare)
                            addLocalStorage(arrayValueLocalStorage)
                        }
                    }
                    if (item.name === parsedObject[p].name && parsedObject[p].color !== color && checkOneIsSame === true) {
                        let value = Object.values(localStorage)
                        let parseValue = JSON.parse(value)
                        localStorage.removeItem('kanap')
                        for (let i = 0; i < parseValue.length; i++) {
                            pushArray(parseValue[i])
                            console.log(arrayValueLocalStorage)
                        }
                        pushArray(thisKanapObject)
                        arrayValueLocalStorage.sort(compare)

                        addLocalStorage(arrayValueLocalStorage)
                        checkOneIsSame = false
                    }
                    if (item.name !== parsedObject[p].name && checkOneIsSame === true) {
                        let value = Object.values(localStorage)
                        let parseValue = JSON.parse(value)
                        parseValue.push(thisKanapObject)
                        checkOneIsSame = false

                        parseValue.sort(compare)
                        addLocalStorage(parseValue)
                    }
                }
            }
            alert('Le/les canape selectionner on ete ajoute au panier')
        }

        arrayValueLocalStorage = []
    })
}

