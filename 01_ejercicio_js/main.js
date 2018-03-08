$("img").on("mouseover", function(){
    $("#img1").attr("src", "img/rio.jpg")
});

$("#img1").on("mouseout", function(){
    $("img").attr("src", "img/arbol.jpg")

});

