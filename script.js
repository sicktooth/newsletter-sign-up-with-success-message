const main = document.querySelector("main"),
    success = document.querySelector("article"),
    replace = document.querySelector("b")
    errorLabel = document.querySelector(".error__message"),
    errorInput = document.querySelector("#email");
function validate(e) {
    
    e.preventDefault(); // prevents auto submission i.e email= in the url

    // logic in here 

    var mail = document.getElementById("email").value;
    var regex = /^([a-zA-Z0-9\._]+)@(gmail|proton|outlook|hotmail|yahoo|mail|aol|zoho|icloud|gmx|yandex|hushmail|fastmail|tutanota)+.([a-z]+)(.[a-z]+)?$/;

    if (mail.match(regex)) {
        main.style.display = "none";
        success.style.display = "block";
        replace.innerHTML = mail;
        errorLabel.style.display = "none";
    } else {
        errorLabel.style.display = "block";
        errorInput.classList.add("error__input");
    }

}
function reset(){
    main.style.display = "grid";
    success.style.display = "none";
}
var form = document.querySelector("#main__form"),
    dismiss = document.querySelector(".button");
form.addEventListener("submit",validate);
dismiss.addEventListener("click",reset);