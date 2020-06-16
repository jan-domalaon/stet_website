// Select radio buttons to switch carousel slides
$('.audience-btn').click(function() {
    $('#carousel-audience').carousel($(this).index());
});

// Detect scroll to slide in features
$(window).scroll(function(e) {
    var scroll = window.scrollTop();
    if (scroll > 500) {
        $("#first-feature").slide();
    }
});