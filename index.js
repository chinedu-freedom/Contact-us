let firstNameInput = document.getElementById("first-name")
let lastNameInput = document.getElementById("last-name")
let button = document.getElementById("submit-button")
let errorMessage = document.getElementById("first-name-error-message")


button.addEventListener("click",() => {
    if(firstNameInput.value.trim() === ""){
        errorMessage.style.display = "block"
        errorMessage.textContent = "First name is required"
        errorMessage.style.marginBottom = "10px"
    }
    else{
        errorMessage.style.display = "none"
    }
    // if(lastNameInput.value.trim() === ""){
    //     errorMessage.style.display = "block"
    //     errorMessage.textContent = "Last name is required"
    //     errorMessage.style.marginBottom = "10px"
    // }
    // else{
    //     errorMessage.style.display = "none"
    // }
})
console.log(firstNameInput);
