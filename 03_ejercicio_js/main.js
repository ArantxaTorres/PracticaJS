
$("#elem1").on("mouseover", function(){
    $("#elem1").addClass("destacar")
    $("img").attr("src", "img/arbol.jpg")
    
});

$("#elem1").on("mouseout", function(){
    $("#elem1").removeClass("destacar")
    $("img").attr("src", "img/blanco.jpg")
});


$("#elem2").on("mouseover", function(){
    $("#elem2").addClass("destacar")
    $("img").attr("src", "img/lago.jpg")
    
});

$("#elem2").on("mouseout", function(){
    $("#elem2").removeClass("destacar")
    $("img").attr("src", "img/blanco.jpg")
    
});

$("#elem3").on("mouseover", function(){
    $("#elem3").addClass("destacar")
    $("img").attr("src", "img/rio.jpg")
    
});

$("#elem3").on("mouseout", function(){
    $("#elem3").removeClass("destacar")
    $("img").attr("src", "img/blanco.jpg")
});

$("#elem4").on("mouseover", function(){
    $("#elem4").addClass("destacar")
    $("img").attr("src", "img/sol.jpg")
    
});

$("#elem4").on("mouseout", function(){
    $("#elem4").removeClass("destacar")
    $("img").attr("src", "img/blanco.jpg")

});






//Condicional: cuando pos encima del li entonces si el atributo del il es element1 entonces añadele la clase del 1º,2º o 3º
$("#elem1").hover(function(){

    //Se mosttrará    
    $("#elem1").show("src", "img/arbol.jpg")
    //Que es lo que va a hacer cuando salga
    }, function(){
    
    //No se mostrará
    //$(".destacar").hide()
    })
    $("#elem1").removeClass("destacar")

$("#elem1").on("mouseover", function(){
    $("#elem1").addClass("destacar")
    
});

$("#elem1").on("mouseout", function(){
    $("#elem1").removeClass("destacar")
});

//$("#img1").on("mouseout", function(){
    $("#img1").attr("src", "img/arbol.jpg")
//})