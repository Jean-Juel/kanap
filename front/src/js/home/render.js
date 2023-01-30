// function render card produits Homepage

//For each data take by fetch create HTML card elements
//Use createElement and append child
function addElement(product) {
const cardContainer = document.getElementById("items");
    let link = document.createElement("a")
    link.setAttribute("href", `./product.html?id=${product._id}`)
    link.setAttribute("data-id", product._id)
    link.classList.add("item-link")

    let article = document.createElement('article')

    let img = document.createElement('img')
    img.setAttribute("src", product.imageUrl)
    img.setAttribute("alt", product.altTxt)

    let title = document.createElement('h3')
    let textTitle = document.createTextNode(product.name)
    title.classList.add("productName")
    title.appendChild(textTitle)

    let p = document.createElement('p')
    let text = document.createTextNode(product.description)
    p.classList.add("productDescription")
    p.appendChild(text)

    cardContainer.appendChild(link)
    link.appendChild(article)
    article.appendChild(img)
    article.appendChild(title)
    article.appendChild(p)
}

function renderCards(products) {
    for (let product of products) {
        //For all product in API use addElement
        addElement(product);
    }
}

//Export renderCards to get-api
export {renderCards};

