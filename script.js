function validate(e) {
    var main = document.querySelector("main"),
        success = document.querySelector("article");
    e.preventDefault(); // prevents auto submission i.e email= in the url

    // logic in here 

    var mail = document.getElementById("email").value;
    var regex = /^([a-zA-Z0-9\._]+)@(gmail|proton|outlook|hotmail|yahoo|mail|aol|zoho|icloud|gmx|yandex|hushmail|fastmail|tutanota)+.([a-z]+)(.[a-z]+)?$/;

    if (mail.match(regex)) {
        main.style.display = "none";
        success.style.display = "block";
    } else {
        alert("Invalid email address");
    }

}
var form = document.querySelector("#main__form");
form.addEventListener("submit",validate);