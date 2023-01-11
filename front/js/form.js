
function sendForm() {
    const submitForm = document.getElementById('order')
    submitForm.addEventListener("click", (event) => {
        event.preventDefault();

        const contact = {
            // create an object contact with the values given by the user with the form
            firstName: document.getElementById("firstName").value,
            lastName: document.getElementById("lastName").value,
            address: document.getElementById("address").value,
            city: document.getElementById("city").value,
            email: document.getElementById("email").value,
        };
        console.log(contact);

        function formFirstName() {
            // REGEX for the first name and validate the conditions of the imputs
            const validFirstName = contact.firstName;
            let regExpFirstName =
                /^[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{3,20}$/.test(validFirstName);
            if (regExpFirstName) {
                document.querySelector("#firstNameErrorMsg").innerHTML = "";
                return true;
            } else {
                let firstNameErrorMsg = document.getElementById("firstNameErrorMsg");
                firstNameErrorMsg.innerHTML =
                    "Votre prénom doit contenir entre 3 et 20 caractères et ne pas contenir de chiffres";
            }
        }

        function formLastName() {
            // REGEX for the last name and validate the conditions of the inputs
            const validLastName = contact.lastName;
            let regExpLastName =
                /^[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{3,20}$/.test(validLastName);
            if (regExpLastName) {
                document.querySelector("#lastNameErrorMsg").innerHTML = "";
                return true;
            } else {
                let lastNameErrorMsg = document.getElementById("lastNameErrorMsg");
                lastNameErrorMsg.innerHTML =
                    "Votre nom doit contenir entre 3 et 20 caractères";
            }
        }

        function formAddress() {
            // REGEX for the address and validate the conditions of the inputs
            const validAddress = contact.address;
            let regExpAddress =
                /^[0-9]{1,3}(?:(?:[,. ]){1}[-a-zA-Zàâäéèêëïîôöùûüç]+)+/.test(
                    validAddress
                );
            if (regExpAddress) {
                document.querySelector("#addressErrorMsg").innerHTML = "";
                return true;
            } else {
                let addressErrorMsg = document.getElementById("addressErrorMsg");
                addressErrorMsg.innerHTML = "Votre adresse est invalide.";
            }
        }

        function formCity() {
            // REGEX for the city and validate the conditions of the inputs
            const validCity = contact.city;
            let regExpCity =
                /^[a-zA-Zàâäéèêëïîôöùûüç]+(?:[- ][a-zA-Zàâäéèêëïîôöùûüç]+)*$/.test(
                    validCity
                );
            if (regExpCity) {
                document.querySelector("#cityErrorMsg").innerHTML = "";
                return true;
            } else {
                let cityErrorMsg = document.getElementById("cityErrorMsg");
                cityErrorMsg.innerHTML = "Votre ville est invalide.";
            }
        }
        function formEmail() {
            // REGEX for email and validate the conditions of the inputs
            const validEmail = contact.email;
            let regExpEmail =
                /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/.test(
                    validEmail
                );
            if (regExpEmail) {
                document.querySelector("#emailErrorMsg").innerHTML = "";
                return true;
            } else {
                let emailErrorMsg = document.getElementById("emailErrorMsg");
                emailErrorMsg.innerHTML = "Votre email est invalide.";
            }
        }

        function formValidation() {
            // if the form is correctly filled, it will create an item "contact" in the localStorage
            if (
                formFirstName() === true &&
                formLastName() === true &&
                formAddress() === true &&
                formCity() === true &&
                formEmail() === true
            ) {
                localStorage.setItem("contact", JSON.stringify(contact));
                return true;
            } else {
                event.preventDefault();
                alert("Merci de remplir correctement le formulaire");
            }
        }
        formValidation();

        let products = [];
        for (let i = 0; i < products.length; i++) {
            products.push(products[i].id);
        }

        if (formValidation() === true) {
            // Creation an object order with the informations of "contact" and "products"
            const order = {
                contact,
                products,
            };

            async function postForm(object) {
                return await fetch("http://localhost:3000/api/products/order", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(object),
                })
            }

            //Post with function postForm
             postForm(order)
                .then((response) => response.json())
                .then((data) => {
                    localStorage.clear();
                    localStorage.setItem("orderId", data.orderId);
                    document.location.href = "confirmation.html";
                })
                .catch((error) => console.log(error));
        } else {
            event.preventDefault();
        }
    });
}
sendForm()
