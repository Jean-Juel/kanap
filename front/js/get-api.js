//Récuperation de l'API url = (http://localhost:3000/api/products)
let body = document.querySelector('body');

function callApi() {
    let data = null;
}

function getArticle() {
    console.log("function get articles")
    const headers = new Headers();

    const options = {
        method: "GET",
        headers: headers,
    };

    fetch("http://localhost:3000/api/products", options)
        .then(function (res) {
            if (res.ok) {
                res.json().then(function (data) {
                    if (body.classList.contains('homepage')) {
                        renderCarts(data)
                    }
                })
            } else {
                console.log("Error")
            }
        })
}

getArticle()


// const getArticle = async function () {
//     const res = await fetch(`http://localhost:3000/api/products`);
//     console.log(res);
//     const data = await res.json();
//     data.forEach(element => element.renderCart(data.element))
//
// }
//
// getArticle();
//


//Exemple img
// const item = document.getElementById("item");
// const img = document.getElementById("item");

// fetch("http://localhost:3000/api/products")
//     .then(res => {
//         if (res.ok) {
//             res.json().then(data => {
//                 item.innerHTML += `<a href='./product.html?id=42'>
//                      <article>
//                        <img src='${imagesUrl}'
//                             alt='Lorem ipsum dolor sit amet, Kanap name1'>
//                           <h3 class='productName'>${article.name}</h3>
//                           <p class='productDescription'>${article.descrition}</p>
//                   </article>
//                </a>`
//             })
//         }
//     })