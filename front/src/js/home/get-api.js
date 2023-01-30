'use strict'
//Recover data of each kanap in API
import {renderCards} from "./render.js";

//Async function getArticle use renderCars for each data recover
async function getArticle() {
    let body = document.querySelector('body');
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
