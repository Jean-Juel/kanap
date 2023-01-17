'use strict'
//Recover data of each kanap in API
import {renderCards} from "./render.js";
let body = document.querySelector('body');

//Async function getArticle use renderCars for each data recover
async function getArticle() {
    let response = await fetch("http://localhost:3000/api/products")
    if (response.ok) {
        let data = await response.json()
        if (body.classList.contains('homepage')) {
            renderCards(data)
        }
    } else {
        console.log("Error")
    }
}

getArticle()

export {getArticle}


// export default async function retrieveContent() {
//     const url = "https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1";
//
//     const response = await fetch(url);
//     return response.json();
// }
