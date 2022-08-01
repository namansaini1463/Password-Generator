"use strict";

//? JS variables
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";
const symbols = "!@#$%^&*()_+-*/";

//? DOM elements
const displayPassword = document.querySelector(".generated-password");
const btnGeneratePassword = document.querySelector(".btn--generate-password");
const copyToClipboard = document.querySelector(".icon--clipboard");

//? Functions
const randomNumber = function (maxPossibleNumber) {
    return Math.trunc(Math.random() * maxPossibleNumber + 1);
};

const randomLetter = function (string) {
    const randomArray = string.split("");
    return randomArray[randomNumber(string.length) - 1];
};

//? Event listener
btnGeneratePassword.addEventListener("click", function () {
    const isIncludeLowercase = document.getElementById("lowercase").checked;
    const isIncludeUppercase = document.getElementById("uppercase").checked;
    const isIncludeNumbers = document.getElementById("numbers").checked;
    const isIncludeSymbols = document.getElementById("symbols").checked;
    const passwordLength = document.querySelector(".password-length").value;

    if (
        isIncludeLowercase ||
        isIncludeUppercase ||
        isIncludeNumbers ||
        isIncludeSymbols
    ) {
        let passwordGeneratorString = "";

        if (isIncludeLowercase) passwordGeneratorString += lowercase;
        if (isIncludeUppercase) passwordGeneratorString += uppercase;
        if (isIncludeNumbers) passwordGeneratorString += numbers;
        if (isIncludeSymbols) passwordGeneratorString += symbols;

        let password = "";

        while (password.length != passwordLength) {
            password += randomLetter(passwordGeneratorString);
        }

        displayPassword.value = password;
    } else {
        alert("Please choose atleast one !");
    }
});

copyToClipboard.addEventListener("click", function () {
    displayPassword.select();
    document.execCommand("copy");
    document.getSelection().removeAllRanges();

    let copiedTextEle = document.querySelector(".copied-text");
    copiedTextEle.classList.remove("copied-text--hidden");

    setTimeout(function () {
        copiedTextEle.classList.add("copied-text--hidden");
    }, 10000);
});
