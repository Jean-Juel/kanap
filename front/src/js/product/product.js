import {viewProduct} from "./product-manager.js";

let here = window.location.href

function getId() {
    let url = new URL(here);
    return url.searchParams.get("id");
}

async function getproduct() {
    //if id is on URL
    if (here.indexOf("id") > -1) {
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
    getproduct()

export {here, getId, getproduct}
