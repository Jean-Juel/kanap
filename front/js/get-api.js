//Récuperation de l'API url = (http://localhost:3000/api/products)

fetch("http://localhost:3000/api/products")
    .then(data => data.json())
    .then(jsonListArticle => {
        for (let jsonArticle of jsonListArticle) {
            let article = new Article(jsonArticle);
            const {descrition, imagesUrl, name} = article;
            document.getElementById("item").innerHTML +=
                `<a href='./product.html?id=42'>
                <article>
                    <img src=${imagesUrl} alt='Lorem ipsum dolor sit amet, Kanap name1'>
                    <h3 class='productName'>${name}</h3>
                    <p class='productDescription'>${descrition}</p>
                </article>
            </a>`
            console.log(jsonArticle)
        }
    })