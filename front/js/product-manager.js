// Rendu page product

//Empty array for push in localStorage
let valueToStorage = [];

function addLocalStorage(value) {
    localStorage.setItem('kanap', JSON.stringify(value))
}

//Function sift an array
function compare(a, b) {
    if (a.id < b.id) {
        return -1
    }
    if (a.id > b.id) {
        return 1
    }
    return 0
}

//ViewPriduct with item parametre: data of API
function viewProduct(item) {
    //Selected all in DOM
    let img = document.querySelector('.item__img');
    let price = document.getElementById('price');
    let description = document.getElementById('description');
    let colors = document.getElementById('colors');
    let input = document.getElementById('quantity');
    let button = document.getElementById('addToCart');

    //Get price, description
    price.innerHTML += item.price;
    description.innerHTML += item.description;
    img.innerHTML += `<img src='${item.imageUrl}'
                      alt='${item.altTxt}'>`;

    //For each color can choose for this product add option on input
    for (let color of item.colors) {
        colors.innerHTML += `<option value="${color}">${color}</option>`;
    }

    //Witch input change setAttribute input.value to 'value'
    input.addEventListener('input', function () {
        this.setAttribute('value', input.value);
    })

    //Listening on click button
    button.addEventListener('click', function (e) {
        e.preventDefault()
        e.stopPropagation()
        //Get color and quantity selected
        let color = colors.value;
        let quantity = Number(input.getAttribute('value'));

        //Create object with this(id, color, quantity)
        let thisKanapObject = {
            "id": item._id,
            "color": color,
            "quantity": quantity,
        }

        //If customer don't choose any color or quantity alert
        if (color === '' || quantity === 0) {
            alert('Veuillez selectione la couleur et la quantite')
            return
        }

        //If localStorage is empty
        if (localStorage.getItem('kanap') == null) {
            valueToStorage.push(thisKanapObject)
            addLocalStorage(valueToStorage)
        }
        //If localStorage is not empty
        else {
            //Take value localStorage
            const retrievedString = localStorage.getItem('kanap');
            const parsedObject = JSON.parse(retrievedString);
            //Add boolean for check if one condition is ok
            let checkOneIsSame = true;

            //Loop on value localStorage parsed
            for (let p = 0; p < parsedObject.length; p++) {
                if (item._id === parsedObject[p].id && parsedObject[p].color === color) {
                    //Reset array
                    valueToStorage = []
                    //Take quantity choose and this item and convert to number
                    let thisQuantityToNumber = Number(quantity)
                    let quantityParseToNumber = Number(parsedObject[p].quantity)
                    let total = quantityParseToNumber + thisQuantityToNumber


                    //Get value localStorage
                    let value = Object.values(localStorage)
                    let valuelocalStorage = JSON.parse(value)

                    //Push localStorage in array
                    valueToStorage.push(valuelocalStorage[p])

                    //Find item with same id and same color and add quantity choose
                    let findItemAdd = valuelocalStorage.find(el => el.id === item._id && el.color === color)
                    findItemAdd.quantity = total

                    //If equal at 1 is the same and just add same with quantity change
                    if (valuelocalStorage.length === 1) {
                        valueToStorage = []
                        valueToStorage.push(findItemAdd)
                        addLocalStorage(valueToStorage)
                    }
                    //If superior at 1, minimum one is not the same and add the other product
                    if (valuelocalStorage.length > 1) {
                        //Clean LocalStorage
                        localStorage.removeItem('kanap')
                        //Clean valueLocalStorage
                        valueToStorage = []
                        //Push item add value before valueLocalStorage
                        console.log(findItemAdd)
                        valueToStorage.push(findItemAdd)
                        // Use filter for take item who have the same name not same color
                        const sameName = valuelocalStorage.filter(el => el.id === item._id && el.color !== color);
                        console.log('sameName')
                        console.log(sameName)
                        //Check if sameName is not empty and if is not push item
                        if (typeof sameName !== 'undefined') {
                            for (let valueSame of sameName) {
                                valueToStorage.push(valueSame)
                            }
                        }

                        // Use filter for take item who doesn't have the same name and same color
                        const notSameColorNotSameName = valuelocalStorage.filter(el => el.id !== item._id && el.color !== color);
                        console.log('notSameColorNotSameName')
                        console.log(notSameColorNotSameName)

                        //Check if notSameColorNotSameName is not empty and if is not push item
                        if (typeof notSameColorNotSameName !== 'undefined') {
                            for (let valueNotSame of notSameColorNotSameName) {
                                valueToStorage.push(valueNotSame)
                            }
                        }

                        checkOneIsSame = false
                        valueToStorage.sort(compare)
                        addLocalStorage(valueToStorage)
                    }
                }
                if (item._id === parsedObject[p].id && parsedObject[p].color !== color && checkOneIsSame === true) {
                    let value = Object.values(localStorage)
                    let valuelocalStorage = JSON.parse(value)
                    localStorage.removeItem('kanap')
                    let valueSpliceToStorage = []

                    for (let value of valuelocalStorage) {
                        valueSpliceToStorage.push(value)
                    }
                    valueSpliceToStorage.push(thisKanapObject)
                    valueSpliceToStorage.sort(compare)

                    // let index = valueSpliceToStorage.findIndex(el => el.id === item._id && el.color !== color)
                    // valueSpliceToStorage.splice(index, 1)

                    localStorage.removeItem('kanap')
                    addLocalStorage(valueSpliceToStorage)
                    checkOneIsSame = false
                }
                //If is not same name add localStorage and this couch
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

        valueToStorage = []
    })
}

