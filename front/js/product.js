console.log('product')
let here = window.location.href

function getId() {
    let url = new URL(here);
    return url.searchParams.get("id");
}

function gettProduct() {
    if (here.indexOf("id") > -1) {
        console.log("content")

        let id = getId();
        console.log(id)
        const header = new Headers();

        const options = {
            method: "GET",
            headers: header,
        };

        fetch("http://localhost:3000/api/products", options)
            .then(function (res) {
                if (res.ok) {
                    res.json()
                        .then(function (data) {
                            for (const donne of data) {
                                let data_id = donne._id;
                                if (data_id === id) {
                                    console.log('view product')
                                    viewProduct(donne);
                                }
                            }
                        })
                } else {
                    console.log("Error")
                }
            })
    } else {
        console.log("no")
    }
}

gettProduct()

