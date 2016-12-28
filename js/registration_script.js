$(document).ready(function () {
    $("body").restive({
        breakpoints: ['240', '320', '480', '640', '960', '1024', '1280','10000'],
        classes: ['css-240', 'css-320', 'css-480', 'css-640', 'css-960', 'css-1024', 'css-1280','mit'],
        force_dip: true,
        turbo_classes: 'is_mobile=mobile,is_phone=phone,is_tablet=tablet,is_landscape=landscape'
    });
    $(".nav_bar ul li a").on("click", function () {
        $(".nav").toggleClass("open");
        $(".overlay").toggleClass("over");
        $(".nav_toggle").toggleClass("fa-times");
        if ($(".overlay").hasClass("over")) {
            $('.overlay').animate({opacity: '0.6'},"slow");
            $('.overlay').css({"display":"block"});
        }else {
            $('.overlay').animate({opacity: '0'},"slow");
            $('.overlay').css({"display":"none"});
        }
    });
    $(".nav_toggle").on("click", function() {
        $(".nav").toggleClass("open");
        $(".overlay").toggleClass("over");
        $(".nav_toggle").toggleClass("fa-times");
        if ($(".overlay").hasClass("over")) {
            $('.overlay').animate({opacity: '0.6'},"slow");
            $('.overlay').css({"display":"block"});
        }else {
            $('.overlay').animate({opacity: '0'},"slow");
            $('.overlay').css({"display":"none"});
        }
    });
    $("#reg_phone").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) ||
             // Allow: Ctrl+C
            (e.keyCode == 67 && e.ctrlKey === true) ||
             // Allow: Ctrl+X
            (e.keyCode == 88 && e.ctrlKey === true) ||
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
});
$(window).load(function () {
    $(".preloader").delay(2000).fadeOut("slow");
});
