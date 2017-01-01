$(document).ready(function () {
    $("body").restive({
        breakpoints: ['240', '320', '480', '640', '960', '1024', '1280','10000'],
        classes: ['css-240', 'css-320', 'css-480', 'css-640', 'css-960', 'css-1024', 'css-1280','mit'],
        force_dip: true,
        turbo_classes: 'is_mobile=mobile,is_phone=phone,is_tablet=tablet,is_landscape=landscape'
    });
    $(window).resize( function() {
        window.location.href = window.location.href;
        response();
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
    $("#submit").click(function() {
        console.log("hi");
        var name = $("#reg_name").val();
        var email = $("#reg_email").val();
        var phone = $("#reg_phone").val();
        var choice = $("#competitionslist").val();
        // $("#returnmessage").empty(); // To empty previous error/success message.
        // Checking for blank fields.
        if (name == '' || email == '' || phone == '' || choice == '' || phone.length != 10) {
            alert("Please fill all the Fields");
        } else {
            // Returns successful data submission message when the entered information is sent.
            $.post("contact_reg.php", {
                name1: name,
                email1: email,
                phone1: phone,
                choice1: choice
            }, function(data) {
                // $("#returnmessage").append(data); // Append returned message to message paragraph.
                if (data == "Message sent Successfully") {
                    alert("Your application has been received, We will contact you soon.");
                    $("#form")[0].reset(); // To reset form fields on success.
                }
            });
        }
    });
    response();
    function response() {
        if (sizeCalcWidth() >= 360 && sizeCalcWidth() <= 380) {
    		$('.social_icons').css({'display':'none'});
            $('#bar').css('top','7px');
            $('#horizontal').css('display','none');
            $('#vertical').css('display','none');
    	}
        if ($("body").hasClass("landscape")) {
            $('.social_icons').css({'display':'none'});
            $('#bar').css('top','7px');
            $('#horizontal').css('display','none');
            $('#vertical').css('display','none');
        }
        if ($(window).width() >= 400 && $(window).width() <= 430) {
    		$('.social_icons').css('display','none');
            $('#bar').css('top','7px');
            $('#horizontal').css('display','none');
            $('#vertical').css('display','none');
    	}
        if ($(window).width() >= 700 && $(window).width() <= 750) {
            $('.social_icons').css('display','none');
            $('#bar').css('top','7px');
            $('#horizontal').css('display','none');
            $('#vertical').css('display','none');
        }
        if ($(window).width() >= 650 && $(window).width() <= 680) {
            $('.social_icons').css('display','none');
            $('#bar').css('top','7px');
            $('#horizontal').css('display','none');
            $('#vertical').css('display','none');
        }
        if ($(window).width() >= 560 && $(window).width() <= 580) {
            $('.social_icons').css('display','none');
            $('#bar').css('top','7px');
            $('#horizontal').css('display','none');
            $('#vertical').css('display','none');
        }
        if ($(window).width() >= 310 && $(window).width() <= 330) {
            $('.social_icons').css('display','none');
            $('#bar').css('top','7px');
            $('#horizontal').css('display','none');
            $('#vertical').css('display','none');
            $('#contact_container #reg_contact_form form label').css('font-size','13px');
            $('#contact_container #reg_contact_form form button').css('margin-top','6%');
            $('#contact_container #hori').css('margin-bottom','20px');
        }
        if (sizeCalcWidth() >= 1500 && sizeCalcWidth() <= 1520) {
            $('.social_icons').css('display','none');
            $('#bar').css('top','7px');
            $('#horizontal').css('display','none');
            $('#vertical').css('display','none');
        }
        if (sizeCalcWidth() >= 1270 && sizeCalcWidth() <= 1290) {
            $('.social_icons').css('display','none');
            $('#bar').css('top','7px');
            $('#horizontal').css('display','none');
            $('#vertical').css('display','none');
        }
        if (sizeCalcHeight() >= 460 && sizeCalcHeight() <= 490) {
            $('.social_icons').css('display','none');
            $('#bar').css('top','7px');
            $('#horizontal').css('display','none');
            $('#vertical').css('display','none');
        }
        if (sizeCalcWidth() >= 350 && sizeCalcWidth() <= 370) {
            $('.social_icons').css('display','none');
            $('#bar').css('top','7px');
            $('#horizontal').css('display','none');
            $('#vertical').css('display','none');
        }
        if (sizeCalcWidth() >= 365 && sizeCalcWidth() <= 385 && sizeCalcHeight() >= 550 && sizeCalcHeight() <= 570) {
            $('.social_icons').css('display','none');
            $('#bar').css('top','7px');
            $('#horizontal').css('display','none');
            $('#vertical').css('display','none');
        }
        if (sizeCalcWidth() >= 310 && sizeCalcWidth() <= 330 && sizeCalcHeight() >= 450 && sizeCalcHeight() <= 470) {
            $('.social_icons').css('display','none');
            $('#bar').css('top','7px');
            $('#horizontal').css('display','none');
            $('#vertical').css('display','none');
        }
        if (sizeCalcWidth() >= 404 && sizeCalcWidth() <= 424 && sizeCalcHeight() >= 618 && sizeCalcHeight() <= 638) {
            $('.social_icons').css('display','none');
            $('#bar').css('top','7px');
            $('#horizontal').css('display','none');
            $('#vertical').css('display','none');
            $('#contact_container #reg_contact_form form label').css('font-size','16px');
        }
        if (sizeCalcWidth() >= 730 && sizeCalcWidth() <= 770 && sizeCalcHeight() >= 900 && sizeCalcHeight() <= 940) {
            $('.registration_section').css('background-size','750px 920px');
            $('body').removeClass('phone');
            $('body').removeClass('landscape');
            $('#contact_container #contact_head').css('font-size','28px');
            $('#contact_container #reg_contact_form form input').css({'width':'87%','font-size':'18px'});
            $('#contact_container #reg_contact_form form label').css({'font-size':'20px','left':'6.5%'});
            $('#contact_container #hori').css({'width':'87%','left':'50%','margin-bottom':'65px','position':'relative','transform':'translate(-50%,0)'});
            $('#contact_container #reg_contact_form form select').css('width','87%');
        }
        if (sizeCalcWidth() >= 1000 && sizeCalcWidth() <= 1020 && sizeCalcHeight() >= 650 && sizeCalcHeight() <= 670) {
            $('body').removeClass('mobile');
            $('body').removeClass('landscape');
            $('.registration_section').css('background-size','1200px 640px');
            $('#contact_container').css('width','37%');
        }
    };
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
                 // let it happen, dont do anything
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
function sizeCalcHeight() {
    var sizeDiff = $(window).outerHeight() - $("body").height();
    var actualSize = $(window).outerHeight() - sizeDiff;
    return actualSize;
}
function sizeCalcWidth() {
    var sizeDiff = $(window).outerWidth() - $("body").width();
    var actualSize = $(window).outerWidth() - sizeDiff;
    return actualSize;
}
