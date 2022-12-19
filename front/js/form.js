const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const adress = document.getElementById('address')
const city = document.getElementById('city')
const email = document.getElementById('email')
const button = document.getElementById('order')


function stringContainsNumber(string) {
    return /\d/.test(string)
}


function validForm() {
    let firstNameValue = firstName.value;

    firstName.addEventListener('input', function () {
        console.log(firstName.value)

        console.log('input')
        if (firstName.value === '') {
            firstName.style.background = "white"
            console.log('vide')
        }

        if (stringContainsNumber(firstNameValue)) {
            firstName.style.background = "red"
            console.log('red')

        } else  {
            firstName.style.background = "lightgreen"
            console.log('lightgreen')
        }

    })
}

validForm()