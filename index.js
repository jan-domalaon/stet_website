// Select radio buttons to switch carousel slides
$('.audience-btn').click(function() {
    $('#carousel-audience').carousel($(this).index());
});

// Show features smoothly
function scrollAppear(cssClassName) {
    var textToAppear = document.querySelector(cssClassName);
    var textPosition = textToAppear.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;

    if (textPosition < screenPosition - 200) {
        textToAppear.classList.add('appear');
    }
}

window.addEventListener('scroll', function() {
    scrollAppear(".disappeared-left");
});

window.addEventListener('scroll', function() {
    scrollAppear(".disappeared-right");
});