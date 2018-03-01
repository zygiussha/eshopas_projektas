 
$(document).scroll(function() {
    if($(document).scrollTop() >= 63) {
        $('#headerWrapper').addClass('fixedHeader');
    } else {
        $('#headerWrapper').removeClass('fixedHeader');
    }
});

$(document).scroll(function() {
    if($(document).scrollTop() >= 103) {
        $(document).ready(function(){
            $('#logo').addClass('emblemas');
        })
    } else {
        $('#logo').removeClass('emblemas');
    }
}); 
