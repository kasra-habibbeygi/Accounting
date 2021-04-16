// remove alert when user click on the times
$('.remove_error').click(function(){

    $('.error_handler').removeClass('show');

})

// warning error
function AWE($text){

    $('.error_handler').addClass('show').addClass('warning_error').removeClass('success_error');
    $('.error_handler .alert_icon').removeClass('fa-check-circle').addClass('fa-exclamation-triangle');
    $('.error_handler p').text($text);

}

// success error
function ASE($text){

    $('.error_handler').addClass('show').removeClass('warning_error').addClass('success_error');
    $('.error_handler .alert_icon').removeClass('fa-exclamation-triangle').addClass('fa-check-circle');
    $('.error_handler p').text($text);

}