$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .menu-nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
});