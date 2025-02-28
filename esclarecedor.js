document.getElementById("BuscarBtn").addEventListener("click", filtrarArtigos);
document.getElementById("Buscar").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        filtrarArtigos();
    }
});
    
function filtrarArtigos() {
    let query = document.getElementById("Buscar").value.toLowerCase();

    document.querySelectorAll("article").forEach(article => {
        let title = article.querySelector("h2").innerText.toLowerCase();
        let content = article.querySelector("p").innerText.toLowerCase();

        article.style.display = title.includes(query) || content.includes(query) ? "block" : "none"
    });
}