$("h1").addClass("big-title"); //manipulating styles

$("h1").text("bye"); //manipulating text

$("a").attr("href", "https://www.youtube.com/"); //manipulating atributes

$("h1").click(function() {
    $("h1").css("color", "purple");
}) //adding event listeners

$("button").click(function() {
    $("h1").css("color", "purple");;
})