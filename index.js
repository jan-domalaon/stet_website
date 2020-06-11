// Select radio buttons to switch carousel slides
$('.audience-btn').click(function() {
    $('#carousel-audience').carousel($(this).index());
});