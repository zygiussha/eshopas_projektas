$(document).ready(function(){
    $("#pasirodymas").mouseover(function(){
        $("#uzrasymas").addClass("styliukas")
        $("#uzrasymas").text("In your cart 0 items")
    });
    $("#pasirodymas").mouseout(function(){
        $("#uzrasymas").removeClass("styliukas");
        $("#uzrasymas").empty("In your cart 0 items")
    });
});