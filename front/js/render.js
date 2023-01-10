// function render card produits Homepage
const cardContainer = document.getElementById("items");

//For each data take by fetch create HTML card elements
function renderCards(products) {
    for (let product of products) {
        cardContainer.innerHTML += `
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

