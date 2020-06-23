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

// Handle mobile screen HTML ordering
$(document).ready(function() {
    if(window.matchMedia("(max-width: 768px)").matches){
        $(".features-2 .feature-text-right").insertBefore($(".features-2 .feature-img"));
        handleTeamOrderOnMobileOrTablet();
    } else if (window.matchMedia("(max-width: 992px)").matches) {
        handleTeamOrderOnMobileOrTablet();
    }
})

// Handle navbar making background transparent on top of window
window.addEventListener("scroll", function() {
    if (window.scrollY == 0) {
        $("nav").removeClass("navbar-colored bottom-shadow");
        $(".logo").removeClass("logo-small");
        $(".logo").addClass("logo-big");
    } else {
        $("nav").addClass("navbar-colored bottom-shadow");
        $(".logo").addClass("logo-small");
        $(".logo").removeClass("logo-big");
    }
})

function handleTeamOrderOnMobileOrTablet() {
    $(".row").toggleClass("bottom-team-row");
}

window.addEventListener('scroll', function() {
    scrollAppear(".disappeared-left");
});

window.addEventListener('scroll', function() {
    scrollAppear(".disappeared-right");
});