$('.popover_parent > a').click(function() {
    $('.popover_parent > a').not(this).parent().removeClass('active_search');
    $(this).parent().toggleClass('active_search');
    $('.search input[type="text"]').focus();
});
//Hide the menu when clicked off
$('html').click(function() {
    $('.popover_parent.active_search').removeClass('active_search');
});
//Don't include button or menu in 'html' click function
$('.popover, .popover_parent > a').click(function(event) {
    event.stopPropagation();
});

//-------------------

$('.popover_Login > a').click(function() {
    $('.popover_Login > a').not(this).parent().removeClass('active_Login');
    $(this).parent().toggleClass('active_Login');
    $('.search input[type="text"]').focus();
});
//Hide the menu when clicked off
$('html').click(function() {
    $('.popover_Login.active_Login').removeClass('active_Login');
});
//Don't include button or menu in 'html' click function
$('.Login, .popover_Login > a').click(function(event) {
    event.stopPropagation();
});