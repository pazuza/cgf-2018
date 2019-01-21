$(window).on("load, resize", function() {
    var viewportWidth = $(window).width();
    if (viewportWidth <= 600) {
        $(".timeline-content").children().removeClass("is-size-4").addClass("is-size-5");
        $(".timeline-content").children().removeClass("is-size-3").addClass("is-size-5");
    }else{
        $(".timeline-content").children().removeClass("is-size-5").addClass("is-size-4");
    }
});