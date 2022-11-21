var text;

function toUpper() {

    document.getElementById("inpText").value = document.getElementById("inpText").value.toUpperCase();
}

function toNormal() {
    document.getElementById("inpText").value = text
}

function toLow() {
    document.getElementById("inpText").value = document.getElementById("inpText").value.toLowerCase();
}

function getText() {
    text = document.getElementById("inpText").value
    console.log(document.getElementById("inpText").value)
}