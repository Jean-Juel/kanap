// Rendu page product
// import render from render.js;
let array = [];
let idArray = [];
let local = localStorage
console.log(local)

function addLocalStorage(kanap, value) {
    localStorage.setItem(kanap, JSON.stringify(value))
}

console.log('product manager')
function viewProduct(item) {
    console.log('price' + item.price)

    let id = item._id;
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
        let quantity = input.getAttribute('value');
        console.log(color)
        console.log(quantity)
        console.log(id)

        array.push({
            "id": id,
            "color": color,
            "quantity": quantity
        })


        for (let local of array) {
            // if () {

        // }
        }

        console.log(array)

        addLocalStorage(id, array)
        window.location.href = `./cart.html`
    })
}

// console.log('length' + keys.length)

// function getProduct() {
//     return localStorage.getItem('keys');
// }
//
// console.log(getProduct(localStorage))


console.log(array)

function getAllIdProduct() {
    for (let i = 0; i < localStorage.length;i++) {
        let key = localStorage.key(i)
        idArray.push(key)
        // let localProduct = localStorage.key(i)
        // return JSON.parse(localProduct)
    }
}



// let keys = Object.keys(localStorage)
function showLocal() {
    for (let i = 0; i < localStorage.length;i++) {
        let key = localStorage.key(i)
        idArray.push(key)


        // let localProduct = localStorage.key(i)
        // return JSON.parse(localProduct)
    }
}

showLocal()
console.log(idArray[1])





// function addProduct(product) {
//     let kanap = getProduct();
//     let foundProduct = kanap.find(p => p.id === product.id);
//     if (foundProduct !== undefined) {
//         foundProduct.quantity++;
//     } else {
//         product.quantity = 1;
//         kanap.push(product)
//     }
//     addLocalStorage(kanap);
// }

// function removeFromKanap(product) {
//     let kanap = getProduct();
//     kanap = kanap.filter(p => p.id !== product.id);
//     addLocalStorage(kanap);
// }

