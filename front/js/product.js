let here = window.location.href
function getId() {
    let url = new URL(here);
    return url.searchParams.get("id");
}

function getProduct() {
    //if
    if (here.indexOf("id") > -1) {
        let id = getId();
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
                                viewProduct(data);
                            }
                        })
                } else {
                    console.log("Error on fetch API")
                }
            })
    }
}
getProduct()

