
function generatePassword() {
    const length = document.getElementById("length").value;
    const useUpper = document.getElementById("uppercase").checked;
    const useLower = document.getElementById("lowercase").checked;
    const useNumbers = document.getElementById("numbers").checked;
    const useSymbols = document.getElementById("symbols").checked;

    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:',.<>?/";

    let charSet = "";
    if (useUpper) charSet += upperCase;
    if (useLower) charSet += lowerCase;
    if (useNumbers) charSet += numbers;
    if (useSymbols) charSet += symbols;

    let password = "";
    for (let i = 0; i < length; i++) {
        password += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }

    document.getElementById("password").value = password;
}

function copyToClipboard() {
    const passwordField = document.getElementById("password");
    passwordField.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}

function updateLength() {
    document.getElementById("lengthValue").textContent = document.getElementById("length").value;
}
