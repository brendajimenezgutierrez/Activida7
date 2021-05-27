$("#ventajasydesventajas").mouseover(function(){
    $(this).css("background", "Gray");
    $(this).css("color","white")
})

$("#ventajasydesventajas").mouseout(function(){
    $(this).css("background", "rgb(12, 94, 94)");
    $(this).css("color","rgb(246, 248, 248)")
})

$('.sbuton4').click(function(){
    $(this).css("background","rgb(12, 94, 94)");
    $(this).css("font-size","20px");
    $(this).css("color","white");