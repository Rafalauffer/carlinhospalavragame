function clebinhodograu() {
    nome1=document.getElementById("player1NameInput").value;
    nome2=document.getElementById("player2NameInput").value;
    localStorage.setItem("player1", nome1);
    localStorage.setItem("player2", nome2);
    window.location="Saladogamedopalavra.html";
}