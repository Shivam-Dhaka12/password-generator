
function pass() {
    let characters = "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
    let password = ""
    for (let index = 0; index < 9; index++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}

function generate() {
    let password1El = document.getElementById("password-1");
    let password2El = document.getElementById("password-2");
    let password3El = document.getElementById("password-3");
    let password4El = document.getElementById("password-4");
    password1El.textContent = pass();
    password2El.textContent = pass();
    password3El.textContent = pass();
    password4El.textContent = pass();
}