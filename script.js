function convertText() {
    var input = document.getElementById("inputText").value;
    var output = document.getElementById("outputText");
    output.style.fontFamily = "cr"; // Replace "YourCustomFont" with the name of your font
    output.innerText = input;
}
