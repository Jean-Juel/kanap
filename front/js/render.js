// function rendu des carts produits côté client

console.log('render');

//For render Homepage
const cartContainer = document.getElementById("items");


function renderCarts(products) {
    for (let product of products) {
        cartContainer.innerHTML +=  `
                <a href='./product.html?id=${product._id}' class="item-link" data-id="${product._id}">
                    <article>
                        <img src='${product.imageUrl}'
                             alt='${product.altTxt}'>
                        <h3 class='productName'>${product.name}</h3>
                        <p class='productDescription'>${product.description}</p>
                    </article>
                </a>`;

    }
}





const links = document.getElementsByClassName("item-link");

function clickFunction(data) {
    let id = "";

    for (const link of links) {
        link.addEventListener("click", function () {
            id = this.getAttribute("data-id");

            for (const donne of data) {
                let data_id = donne._id;

                if (data_id === id) {

                    addLocalStorage(donne)
                }
            }
        });
    }
}






