// Rendu page product
// import render from render.js;

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

    // colors.addEventListener('change', function () {
    //     console.log(this.value)
    //     let options = document.querySelectorAll('#colors > option');
    //     options.setAttribute('selected', "selected");
    // })

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

        let array = [];
        array.push({
            "id": id,
            "color": color,
            "quantity": quantity
        })
        addLocalStorage(array)
        window.location.href = `./cart.html`
    })
}

// class Kanap {
//     constructor() {
//         // this.id = data.id;
//         // this.color = [data.colors];
//         // this.url = data.imageUrl;
//         let kanap = localStorage.getItem("kanap");
//         console.log(kanap)
//         this.kanap = JSON.parse(kanap)
//         // if (kanap == null) {
//         //     console.log("null");
//         //     this.kanap = [];
//         // } else {
//         //     this.kanap = JSON.parse(kanap)
//         // }
//     }
//     saveLocalStorage() {
//         localStorage.setItem('kanap', JSON.stringify(this.kanap))
//     }
//
//     addProduct(product) {
//         let foundProduct = this.kanap.find(p => p.id === product.id);
//         if (foundProduct !== undefined) {
//             foundProduct.quantity++;
//             return this.kanap;
//         } else {
//             product.quantity = 1;
//             this.kanap.push(product)
//         }
//         this.saveLocalStorage();
//     }
//
//     getId() {
//         let id = "";
//         for (let product of this.kanap) {
//             id += product.id
//         }
//     }
// }

//
function addLocalStorage(kanap) {
    localStorage.setItem('kanap', JSON.stringify(kanap))
}

function getProduct() {
    let kanap = localStorage;
    if (kanap == null) {
        return[];
    } else {
        return kanap.getItem("kanap");
    }
}

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

function removeFromKanap(product) {
    let kanap = getProduct();
    kanap = kanap.filter(p => p.id !== product.id);
    addLocalStorage(kanap);
}

