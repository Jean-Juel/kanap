// import {sendForm} from "../cart/form";
function validOrder() {
    document.getElementById('orderId').innerHTML = localStorage.orderId
    localStorage.clear()
}
validOrder()

// export {validOrder}