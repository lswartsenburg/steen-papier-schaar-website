// $('#yournav').bind('click', 'ul li a', function(event) {
//     $.scrollTo(event.target.hash, 250);
// });

$(function () {

    $("ul.nav li a[href^='#']").on('click', function (e) {

        // prevent default anchor click behavior
        e.preventDefault();

        // store hash
        var hash = this.hash;
        console.log()
        // animate
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 300, function () {

            // when done, add hash to url
            // (default click behaviour)
            window.location.hash = hash;
        });

        return false;
    });
    $(".header-bg").lazyload({
        effect: "fadeIn",
        threshold : 300
    });    
});



if (document.location.hash.length == 0) {
    $("ul.nav li:eq(0)").addClass("active");
} else {
    $("#indicator-" + document.location.hash.replace("#", "")).parent("li").addClass("active");
}