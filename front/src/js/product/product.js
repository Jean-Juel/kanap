import {viewProduct} from "./product-manager.js";
function getId() {
    let url = new URL(window.location.href);
    return url.searchParams.get("id");
}
async function getProduct() {
    //if id is on URL
    if (window.location.href.indexOf("id") > -1) {
        let id = getId();
        //Fetch with paste id in api road
        let res = await fetch(`http://localhost:3000/api/products/${id}`)
        if (res.ok) {
            let data = await res.json()
            if (data._id === id) {
                viewProduct(data);
            }
        }
    }
}

getProduct()
