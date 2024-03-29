const main = $("main"),
    success = $("article"),
    replace = $("b"),
    errorLabel = $(".error__message"),
    errorInput = $("#email"),
    input = $("#email"),
    form = $("#main__form"),
    dismiss = $(".button"),
    regex = /^([\w\._]+)@(gmail|proton|outlook|hotmail|yahoo|mail|aol|zoho|icloud|gmx|yandex|hushmail|fastmail|tutanota)+.([a-z]+)(.[a-z]+)?$/; // only popular email services are supported
    
function validate(e) {

    e.preventDefault(); // prevents auto submission i.e email= in the url

    // logic in here 
    var mail = input.val();
    if (mail.match(regex)) { // checks the input against the regex
        main.hide().fadeOut(1000);
        success.fadeIn(1000);
        replace.text(mail);
        errorLabel.css("display", "none");
    } else {
        errorLabel.css("display", "block");
        errorInput.addClass("error__input");
    }
}
const inputValidator = () => {
    const inputValue = input.val();
    if (inputValue.match(regex)) {
        errorLabel.css("display", "none");
        errorInput.removeClass("error__input");
    }
}
function reset(){
    success.fadeOut(1000);
    main.fadeIn(1000);
    errorInput.val("");
    errorInput.removeClass("error__input");
}

//Event Listeners
    
input.on("input",inputValidator);
form.on("submit",validate);
dismiss.on("click",reset);