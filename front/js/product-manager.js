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
    let name = item.name;
    let pric = item.price;
    let imageUrl = item.imageUrl;
    let descr = item.description;
    console.log(pric)
    console.log(imageUrl)
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
            "name": name,
            "color": color,
            "quantity": quantity,
            "price": pric,
            "description": descr,
            "imageUrl": imageUrl
        })

        console.log('id'+ '' + id)

        addLocalStorage(id, array)
        console.log(array)
        window.location.href = `./cart.html`
    })
}
let kanap = localStorage;

Object.keys(kanap).forEach(function (key){
    return kanap.getItem(key)
})


function getProduct(product) {
    for (let i = 0; i < kanap.length;i++) {
        let localProduct = localStorage.key(i)
        // return JSON.parse(localProduct)
    }
}
getProduct(kanap)


let keys = Object.keys(localStorage)

function showLocal() {
    for (let i = 0; i < localStorage.length;i++) {
        let key = localStorage.key(i)
        idArray.push(key)
        return key
        // let localProduct = localStorage.key(i)
        // return JSON.parse(localProduct)
    }
}
