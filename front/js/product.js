console.log('product')
let here = window.location.href

function getId() {
    let url = new URL(here);
    return url.searchParams.get("id");
}

function getProduct() {
    if (here.indexOf("id") > -1) {
        console.log("content")

        let id = getId();
        console.log(id)
        const header = new Headers();

        const options = {
            method: "GET",
            headers: header,
        };
        //Fetch with paste id in api road
        fetch(`http://localhost:3000/api/products/${id}`, options)
            .then(function (res) {
                if (res.ok) {
                    res.json()
                        .then(function (data) {
                            if (data._id === id) {
                                console.log('view product')
                                viewProduct(data);
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
getProduct()

