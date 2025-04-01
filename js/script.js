$("#menu").load("./componente/menu.html");
$("#rodape").load("./componente/rodape.html");
function menu(link) {
    // alert("./pages/"+link+".html");
    $("#conteudo").load("./pages/" + link + ".html");

}