let here = window.location.href
console.log(here)

console.log('product')
function gettProduct() {
    if (here.indexOf("id") > -1) {
        console.log("content")
        let url = new URL(here);
        let id = url.searchParams.get("id");
        // console.log(id)
        const header = new Headers();

        const options = {
            method: "GET",
            headers: header,
        };

        fetch("http://localhost:3000/api/products", options)
            .then(function (res) {
                if (res.ok) {
                    res.json().then(function (data) {
                        for (const donne of data) {
                            let data_id = donne._id;
                            if (data_id === id  ) {
                                viewProduct(donne);
                            }
                        }
                    })
                } else {
                    console.log("Error")
                }
            })
    }
    else {
        console.log("no")
    }
}

gettProduct()