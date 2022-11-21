function msg() {
    alert("Abra a janela");

}
function abrir() {
    document.getElementById('janela').src = "src/janelaaberta.png";
}
function fechar() {
    document.getElementById('janela').src = "src/janelafechada.png";
}
function quebrar() {
    document.getElementById('janela').src = "src/janelaquebra.png";
}        