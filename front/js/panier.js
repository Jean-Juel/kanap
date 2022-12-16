console.log('basket')


// removeArticle.addEventListener('clic', function(e) {
//     e.preventDefault()
//     console.log('click')
// })
function showLocal() {
    let localProduct = getProduct(localStorage)
    return JSON.parse(localProduct)
}


function viewBasket(item) {
    let local = showLocal(item)
    let kanap = local[0]
    console.log(kanap)
    console.log(kanap.id)
    console.log("function get basket")
    const headers = new Headers();

    const options = {
        method: "GET",
        headers: headers,
    };

    fetch("http://localhost:3000/api/products", options)
        .then(function (res) {
            if (res.ok) {
                res.json().then(function (data) {
                    for (const donne of data) {
                        let data_id = donne._id;
                        if (data_id === kanap.id  ) {
                            renderBasket(donne)
                        }
                    }
                })
            } else {
                console.log("Error")
            }
        })
}

viewBasket()




