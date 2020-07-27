
jQuery(function ($) {
    "use strict";

    // 1. preloader
    $(window).ready(function () {
        $("#preloader").delay(200).fadeOut("fade");
    });

    // 2. fixed navbar
    $(window).on("scroll", function () {
        // checks if window is scrolled more than 500px, adds/removes solid class
        if ($(this).scrollTop() > 58) {
            $(".navbar").addClass("affix");
            $(".scroll-to-target").addClass("open");
        } else {
            $(".navbar").removeClass("affix");
            $(".scroll-to-target").removeClass("open");
        }
    });

    //
});