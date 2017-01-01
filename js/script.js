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
    $.each([$("#about_content"),$("#message")], function () {
        $(this).mCustomScrollbar({
            theme: "dark-2",
            documentTouchScroll: true
        });
    });
    function countdown() {
        var eventDate = new Date(2017, 0, 11);
        var now = new Date();
        //Get current and event time in milliseconds
        var currentTime = now.getTime();
        var eventTime = eventDate.getTime();

        var remTime = eventTime - currentTime; //Calculate remaining time in milliseconds
        //Calculate denominations
        var seconds = Math.floor(remTime/1000);
        var minutes = Math.floor(seconds/60);
        var hours = Math.floor(minutes/60);
        var days = Math.floor(hours/24);

        //seconds%=60; //Calculating remaining seconds

        seconds = (seconds<10) ? "0" + seconds : seconds;
        hours = (hours<10) ? "0" + hours : hours;
        days = (days<10) ? "0" + days : days;

        //Replace text of html
        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("seconds").textContent = seconds;
        //for IE8 and below
        document.getElementById("days").innerText = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("seconds").innerText = seconds;
        //Update everyt second
        setTimeout(countdown, 1000);
    }
    countdown();

    function blinker() {
        $('#blinking_text #blinker').fadeOut(200);
	    $('#blinking_text #blinker').fadeIn(200);
    }
    setInterval(blinker, 1000);

    var $firstLine = $('#first_line');
    var $secondLine = $('#second_line');
    var $secondLine = $('#third_line');
    var $about_content = $('#about_content');
    $('#about').click(function () {
        /*var cssVar = $('#first_line').css('opacity');
        if (cssVar == "1") {
            $firstLine.css({
                'opacity' : '0'
            });
        }
        else {*/
            $firstLine.css({
                'opacity' : '1'
            });
            // $(".au").css({
            //     "color": "#663333"
            // });
            // $(".h").css({
            //     "color": "#000"
            // });
            // $(".tb").css({
            //     "color": "#000"
            // });
            // $(".cu").css({
            //     "color": "#000"
            // });

            // $('.h').parent().css({"background-color": "none"});
            // $('.au').parent().css({"background-color": "#F5F5DC"});
            // $('.tb').parent().css({"background-color": "none"});
            // $('.cu').parent().css({"background-color": "none"});
        //}
    });
    // $('.h').click(function () {
    //         $(".au").css({"color": "#000"});
    //         $(".h").css({"color": "#663333"});
    //         $(".tb").css({"color": "#000"});
    //         $(".cu").css({"color": "#000"});
    //
    //         $('.h').parent().css({"background-color": "#F5F5DC"});
    //         $('.au').parent().css({"background-color": "#FFF"});
    //         $('.tb').parent().css({"background-color": "none"});
    //         $('.cu').parent().css({"background-color": "none"});
    // });
    // $('.tb').click(function () {
    //         $(".au").css({"color": "#000"});
    //         $(".h").css({"color": "#000"});
    //         $(".tb").css({"color": "#663333"});
    //         $(".cu").css({"color": "#000"});
    //
    //         $('.h').parent().css({"background-color": "none"});
    //         $('.au').parent().css({"background-color": "none"});
    //         $('.tb').parent().css({"background-color": "#F5F5DC"});
    //         $('.cu').parent().css({"background-color": "none"});
    // });
    // $('.cu').click(function () {
    //         $(".au").css({"color": "#000"});
    //         $(".h").css({"color": "#000"});
    //         $(".tb").css({"color": "#000"});
    //         $(".cu").css({"color": "#663333"});
    //
    //         $('.h').parent().css({"background-color": "none"});
    //         $('.au').parent().css({"background-color": "none"});
    //         $('.tb').parent().css({"background-color": "none"});
    //         $('.cu').parent().css({"background-color": "#F5F5DC"});
    // });

    /*$('#nav_bar ul li a').click(function () {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        var elementHeight = $firstLine.outerHeight();
        var elementTopPosition = $firstLine.offset().top;
        var elementBottomPosition = elementHeight + elementTopPosition;

        if((elementBottomPosition >= window_top_position) && (elementTopPosition <= window_bottom_position)) {
            $firstLine.addClass('in-view');
            console.log("hi");
        }
        else {
            $firstLine.removeClass('in-view');
            console.log("hi");
        }
    });*/
    // var mynav = setInterval(myNav, 1000);
    // function myNav() {
    //     var $bar = [$(".hero_section"),$(".about_us"),$(".Gallery"),$("contact_us")];
    //     $.each($bar, function () {
    //         var bool = $(this).isOnScreen(0.1,0.1);
    //         console.log(bool);
    //         if(bool) {
    //             $("#nav_bar a").each(function () {
    //                 if($(this).attr("href") == window.location.href.slice(22)) {
    //                     console.log("hi");
    //                     $(this).css({
    //                         "color": "#FFF"
    //                     });
    //                 }
    //             });
    //         }
    //     });
    // }
    var myVar = setInterval(myTimer, 1000);
	function myTimer() {
	    var boo = $('#wrapper_circles').isOnScreen(1, 0.2);
		if(boo) {
            $("#wrapper_circles").css({
                'opacity' : '1'
            });

            $('.Count').each(function () {
                var $this = $(this);
                jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            var $elems = [$("#circle1"),$("#circle2"),$("#circle3"),$("#circle4"),$("#circle5")];
            $.each($elems, function () {
                $(this).circleProgress({
                    value: 12000/20000,
                    size: 205,
                    thickness: 8,
                    startAngle: -Math.PI / 4 * 2,
                    fill: {
                        color: "#A60000"
                    }
                });
            });
			clearInterval(myVar);
		}
	  }
    //   Gallery image popup
    var $elem = [$(".place1"),$(".place2"),$(".place3"),$(".place4"),$(".place5"),$(".place6")];
    $.each($elem, function() { // the containers for all your galleries
        $(this).magnificPopup({
            type: 'image',
            delegate: 'a', // the selector for gallery item
            gallery:{
                enabled:true,
                preload: [0,2], // read about this option in next Lazy-loading section
                navigateByImgClick: true,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
                tPrev: 'Previous (Left arrow key)', // title for left button
                tNext: 'Next (Right arrow key)', // title for right button
                tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
            }
        });
    });
    var item = $("#competitions_list #act1>a");
    $("#acting_slab").magnificPopup({
        items: [
            {
                src: $("<div id='acting_content'> \
                                <div id='competitions_content'>\
                                    <span id='head'>Dramatics</span>\
                                    <p>Drama is the specific mode of fiction represented in performance.It is a loud and larger than life exchange of ideologies, catchy songs, humour, energy, emotions and the roar of audience.Drama as a form of communication is deeply rooted in the Indian tradition.This year come and showcase your talent and move the audience.</p>\
                                    <div id='competitions_list'>\
                                        <div id='act1'>\
                                            <a  class='dastaak'><div><span id='head'>Dastaak</span><p style='text-align: center'>Street play competition</p></div><div id='details'>\
                                            <div id=con>\
                                                <a id='reg_button' href='registration.html' style='cursor: pointer' target='_blank'><img src='images/register_button.png'></a>\
                                                <p id='head'>Prize</p><p>Winner-Cash Prize of Rs.6,000</p>\
                                                <p id='head'>Entry fee</p><p>Rs.600</p>\
                                                <p id='head'>Rules</p>\
                                                <ol>\
                                                    <li>The time limit for the performance, from empty stage to empty stage, is 15 minutes.</li>\
                                                    <li>The maximum group limit is 16.</li>\
                                                    <li>Naked flames and live animals are not allowed for the performance.</li>\
                                                    <li>Any props or other materials that have to be used will have to be managed by the participating team itself. The organizers will not provide any properties or materials.</li>\
                                                    <li>Teams exceeding 15 minutes will lose all the points allocated for the time criteria and any other points lost will be by the discretion of the judges.</li>\
                                                    <li>In case your performance is interrupted due to any commotion caused in the performance area or any audio/light related problem then the team will be allowed to restart or continue the performance based on their preference and the judge's discretion.</li>\
                                                    <li>Due to any unforeseeable event, if the participating team has to stop their performance, any one of the team members can signal a person from the organising team. Restarting, continuing or terminating the performance will then be by the judge's discretion.</li>\
                                                    <li>If the participating team does not show up at their allocated time then the team will be disqualified. In case of unavoidable circumstances please contact the organizers. The participation fee will not be refunded under any circumstances.</li>\
                                                    <li>Decisions made by the organizers and judges will be binding and final.</li>\
                                                </ol>\
                                            </div>\
                                            </div></a>\
                                            <a  class='improv'><div><span id='head'>Spotlight</span><p style='text-align: center'>Mono acting competition</p></div>\
                                                <div id='details'>\
                                                <div id='con'>\
                                                    <a id='reg_button' href='registration.html' style='cursor: pointer' target='_blank'><img src='images/register_button.png'></a>\
                                                    <p id='head'>Prize</p><p>Winner-Cash Prize of Rs.3,000</p>\
                                                    <p id='head'>Entry fee</p><p>Rs.100</p>\
                                                    <p id='head'>Rules</p>\
                                                    <ol>\
                                                        <li>The time limit for the performance, from empty stage to empty stage, is 6 minutes (5 mins performance time).</li>\
                                                        <li>This event consists of one round.</li>\
                                                        <li>Participants have to perform a script or passage of their choice.</li>\
                                                        <li>The script should be submitted for censoring 5 days before the event at aarohan.competitions@gmail.com with subject “&lt;Name&gt;: Spotlight script”.</li>\
                                                        <li>Act should be in Hindi, Marathi or English.</li>\
                                                        <li>Participants would be provided with a chair and table.</li>\
                                                        <li>Individual properties are allowed but the organisers hold the discretion of allowing its inclusion on stage.</li>\
                                                        <li>The performance will be judged purely on acting, so no music will be allowed. Basic lights may be provided.</li>\
                                                        <li>Participant exceeding 5 minutes will lose all the points allocated for the time criteria and any other points lost will be by the discretion of the judges.</li>\
                                                        <li>In case your performance is interrupted due to any commotion caused in the performance area or any audio/light related problem then the team will be allowed to restart or continue the performance based on their preference.</li>\
                                                        <li>Due to any unforeseeable event, if the participating team has to stop their performance, any one of the team members can signal a person from the organising team. Restarting, continuing or terminating the performance will then be by the judge&#39;s discretion.</li>\
                                                        <li>If the participating team does not show up at their allocated time then the team will be disqualified. In case of unavoidable circumstances please contact the organizers. The participation fee will not be refunded under any circumstances.</li>\
                                                        <li>Decisions made by the organizers and judges will be binding and final.</li>\
                                                    </ol>\
                                                </div>\
                                                </div></a>\
                                            <a  class='platform'><div><span id='head'>PLatform</span><p style='text-align: center'>Talent hunt competition</p></div>\
                                                <div id='details'>\
                                                <div id='con'>\
                                                <a id='reg_button' href='registration.html' style='cursor: pointer' target='_blank'><img src='images/register_button.png'></a>\
                                                <p id='head'>Prize</p><p>Winner-Cash Prize of Rs.5,000</p>\
                                                <p id='head'>Entry fee</p><p>Rs.300</p>\
                                                <p id='head'>Rules</p>\
                                                <ol>\
                                                    <li>The time limit for the performance, from empty stage to empty stage, is 5 minutes.</li>\
                                                    <li>Naked flames and live animals are not allowed for the performance.</li>\
                                                    <li>Any props or other materials that have to be used will have to be managed by the participating team itself. The organizers will not provide any properties or materials.</li>\
                                                    <li>Participants exceeding 15 minutes will lose all the points allocated for the time criteria and any other points lost will be by the discretion of the judges.</li>\
                                                    <li>In case your performance is interrupted due to any commotion caused in the performance area or any audio/light related problem then the team will be allowed to restart or continue the performance based on their preference and the judge's discretion.</li>\
                                                    <li>Due to any unforeseeable event, if the participating team has to stop their performance, any one of the team members can signal a person from the organising team. Restarting, continuing or terminating the performance will then be by the judge's discretion.</li>\
                                                    <li>If the participating team does not show up at their allocated time then the team will be disqualified. In case of unavoidable circumstances please contact the organizers. The participation fee will not be refunded under any circumstances.</li>\
                                                    <li>Decisions made by the organizers and judges will be binding and final.</li>\
                                                </ol>\
                                                </div>\
                                                </div></a>\
                                        </div>\
                                    </div>\
                                    <div id='social_media_icons'>\
                                        <ul>\
                                            <li id='facebook'><a href='https://www.facebook.com/aarohanfest/' target='_blank'><img src='images/facebook_icon.png' alt='https://www.facebook.com/aarohanfest/'></a></li>\
                                            <li id='instagram'><a href='https://www.instagram.com/mitaarohanfest/' target='_blank'><img src='images/instagram_icon.png' alt='https://www.facebook.com/aarohanfest/'></a></li>\
                                        </ul>\
                                </div>\
                            </div>"),
                type: 'inline'
            }
        ],
        callbacks: {
            open: function() {
                $("#competitions_content").mCustomScrollbar({
                    theme: "dark-2",
                    documentTouchScroll: true
                });
            }
        }
    });
    $("#music_slab").magnificPopup({
        items: [
            {
                src: $("<div id='acting_content'> \
                                <div id='competitions_content'>\
                                    <span id='head'>Music</span>\
                                    <p>A competition held to determine the best teams and the greatest voice. The ultimate platform to showcase your skills. Compose an original song or perform on an existing track in your way and mesmerize the crowd.</p>\
                                    <div id='competitions_list'>\
                                        <div>\
                                            <a class='hum'><div><span id='head'>Humming</span><p style='text-align: center'>Solo singing competition</p></div>\
                                                <div id='details'>\
                                                <div id='con'>\
                                                <a id='reg_button' href='registration.html' style='cursor: pointer' target='_blank'><img src='images/register_button.png'></a>\
                                                <p id='head'>Prize</p><p>Winner-Cash Prize of Rs.5,000</p>\
                                                <p id='head'>Entry fee</p><p>Rs.300</p>\
                                                <p id='head'>Rules</p>\
                                                <ol>\
                                                    <li>The time limit for the performance, from empty stage to empty stage, is 3 minutes.</li>\
                                                    <li>Please get a copy of your karaoke track (if you are using any) on a CD and flash drive. The flash drive will be tried and if not then we'll use the CD. As a backup, it would be advisable to keep a copy on your phone and on the mail too.</li>\
                                                    <li>Any instruments or other materials that have to be used will have to be managed by the participating team itself.</li>\
                                                    <li>Performances exceeding 3 minutes will lose all the points allocated for the time criteria and any other points lost will be by the discretion of the judges.</li>\
                                                    <li>In case your performance is interrupted due to any commotion caused in the performance area or any audio/light related problem then the team will be allowed to restart or continue the performance based on their preference and the judge's discretion.</li>\
                                                    <li>Due to any unforeseeable event, if the participating team has to stop their performance, any one of the team members can signal a person from the organising team. Restarting, continuing or terminating the performance will then be by the judge's discretion.</li>\
                                                    <li>If the participating team does not show up at their allocated time then the team will be disqualified. In case of unavoidable circumstances please contact the organizers. The participation fee will not be refunded under any circumstances.</li>\
                                                    <li>Decisions made by the organizers and judges will be binding and final.</li>\
                                                </ol>\
                                                </div>\
                                                </div></a>\
                                            <a class='bang'><div><span id='head'>Head Bang</span><p style='text-align: center'>Rock band competition</p></div>\
                                                <div id='details'>\
                                                <div id='con'>\
                                                <a id='reg_button' href='registration.html' style='cursor: pointer' target='_blank'><img src='images/register_button.png'></a>\
                                                <p id='head'>Prize</p><p>Winner-Cash Prize of Rs.15,000</p>\
                                                <p id='head'>Entry fee</p><p>Rs.1,200</p>\
                                                <p id='head'>Rules</p>\
                                                <ol>\
                                                    <li>The time limit for the performance, from empty stage to empty stage, is 15 minutes.</li>\
                                                    <li>The organizers will provide teams with a drum set. Any other instrument to be used will have to be managed by the participating team itself.</li>\
                                                    <li>Teams exceeding 15 minutes will lose all the points allocated for the time criteria and any other points lost will be by the discretion of the judges.</li>\
                                                    <li>In case your performance is interrupted due to any commotion caused in the performance area or any audio/light related problem then the team will be allowed to restart or continue the performance based on their preference and the judge's discretion.</li>\
                                                    <li>Due to any unforeseeable event, if the participating team has to stop their performance, any one of the team members can signal a person from the organising team. Restarting, continuing or terminating the performance will then be by the judge's discretion.</li>\
                                                    <li>If the participating team does not show up at their allocated time then the team will be disqualified. In case of unavoidable circumstances please contact the organizers. The participation fee will not be refunded under any circumstances.</li>\
                                                    <li>Decisions made by the organizers and judges will be binding and final.</li>\
                                                </ol>\
                                                </div>\
                                                </div></a>\
                                        </ul>\
                                    </div>\
                                    <div id='social_media_icons'>\
                                        <ul>\
                                            <li id='facebook'><a href='https://www.facebook.com/aarohanfest/' target='_blank'><img src='images/facebook_icon.png' alt='https://www.facebook.com/aarohanfest/'></a></li>\
                                            <li id='instagram'><a href='https://www.instagram.com/mitaarohanfest/' target='_blank'><img src='images/instagram_icon.png' alt='https://www.facebook.com/aarohanfest/'></a></li>\
                                        </ul>\
                                </div>\
                            </div>"),
                type: 'inline'
            }
        ],
        callbacks: {
            open: function() {
                $("#competitions_content").mCustomScrollbar({
                    theme: "dark-2",
                    documentTouchScroll: true
                });
            }
        }
    });
    $("#dance_slab").magnificPopup({
        items: [
            {
                src: $("<div id='acting_content'> \
                                <div id='competitions_content'>\
                                    <span id='head'>Dance</span>\
                                    <p>Dance is a performance art form consisting of purposefully selected sequences of human movement. This movement has aesthetic and symbolic value, and is acknowledged as dance by performers and observers within a particular culture.This year come and showcase your talent and dazzle the audience.</p>\
                                    <div id='competitions_list'>\
                                        <div>\
                                            <a class='insy'><div><span id='head'>In-Sync</span><p style='text-align: center'>Group dance competition</p></div>\
                                                <div id='details'>\
                                                <div id='con'>\
                                                <a id='reg_button' href='registration.html' style='cursor: pointer' target='_blank'><img src='images/register_button.png'></a>\
                                                <p id='head'>Prize</p><p>Winner-Cash Prize of Rs.13,000</p>\
                                                <p id='head'>Entry fee</p><p>Rs.800</p>\
                                                <p id='head'>Rules</p>\
                                                <ol>\
                                                    <li>The time limit for the performance, from empty stage to empty stage, is 8 minutes.</li>\
                                                    <li>The maximum group limit is 16.</li>\
                                                    <li>Please get a copy of your track on a CD and flash drive. The flash drive will be tried and if not then we'll use the CD. As a backup, it would be advisable to keep a copy on your phone and on the mail too.</li>\
                                                    <li>Naked flames and live animals are not allowed for the performance.</li>\
                                                    <li>Any props or other materials that have to be used will have to be managed by the participating team itself. The organizers will not provide any properties or materials.</li>\
                                                    <li>Teams exceeding 10 minutes will lose all the points allocated for the time criteria and any other points lost will be by the discretion of the judges.</li>\
                                                    <li>In case your performance is interrupted due to any commotion caused in the performance area or any audio/light related problem then the team will be allowed to restart or continue the performance based on their preference and the judge's discretion.</li>\
                                                    <li>Due to any unforeseeable event, if the participating team has to stop their performance, any one of the team members can signal a person from the organising team. Restarting, continuing or terminating the performance will then be by the judge's discretion.</li>\
                                                    <li>If the participating team does not show up at their allocated time then the team will be disqualified. In case of unavoidable circumstances please contact the organizers. The participation fee will not be refunded under any circumstances.</li>\
                                                    <li>Decisions made by the organizers and judges will be binding and final.</li>\
                                                </ol>\
                                                </div>\
                                                </div></a>\
                                            <a class='infla'><div><span id='head'>Inner Flame</span><p style='text-align: center'>Solo dance competition</p></div>\
                                                <div id='details'>\
                                                <div id='con'>\
                                                <a id='reg_button' href='registration.html' style='cursor: pointer' target='_blank'><img src='images/register_button.png'></a>\
                                                <p id='head'>Prize</p><p>Winner-Cash Prize of Rs.5,000</p>\
                                                <p id='head'>Entry fee</p><p>Rs.300</p>\
                                                <p id='head'>Rules</p>\
                                                <ol>\
                                                    <li>The time limit for the performance, from empty stage to empty stage, is 5 minutes.</li>\
                                                    <li>Please get a copy of your track on a CD and flash drive. The flash drive will be tried and if not then we'll use the CD. As a backup, it would be advisable to keep a copy on your phone and on the mail too.</li>\
                                                    <li>Naked flames and live animals are not allowed for the performance.</li>\
                                                    <li>Any props or other materials that have to be used will have to be managed by the participating team itself. The organizers will not provide any properties or materials.</li>\
                                                    <li>Performances exceeding 5 minutes will lose all the points allocated for the time criteria and any other points lost will be by the discretion of the judges.</li>\
                                                    <li>In case your performance is interrupted due to any commotion caused in the performance area or any audio/light related problem then the team will be allowed to restart or continue the performance based on their preference and the judge's discretion.</li>\
                                                    <li>Due to any unforeseeable event, if the participating team has to stop their performance, any one of the team members can signal a person from the organising team. Restarting, continuing or terminating the performance will then be by the judge's discretion.</li>\
                                                    <li>If the participating team does not show up at their allocated time then the team will be disqualified. In case of unavoidable circumstances please contact the organizers. The participation fee will not be refunded under any circumstances.</li>\
                                                    <li>Decisions made by the organizers and judges will be binding and final.</li>\
                                                </ol>\
                                                </div>\
                                                </div></a>\
                                            <!--<div><span id='head'>Foot Loose</span><p>Street dance competition</p></div>-->\
                                        </ul>\
                                    </div>\
                                    <div id='social_media_icons'>\
                                        <ul>\
                                            <li id='facebook'><a href='https://www.facebook.com/aarohanfest/' target='_blank'><img src='images/facebook_icon.png' alt='https://www.facebook.com/aarohanfest/'></a></li>\
                                            <li id='instagram'><a href='https://www.instagram.com/mitaarohanfest/' target='_blank'><img src='images/instagram_icon.png' alt='https://www.facebook.com/aarohanfest/'></a></li>\
                                        </ul>\
                                </div>\
                            </div>"),
                type: 'inline'
            }
        ],
        callbacks: {
            open: function() {
                $("#competitions_content").mCustomScrollbar({
                    theme: "dark-2",
                    documentTouchScroll: true
                });
            }
        }
    });
    $("#sports_slab").magnificPopup({
        items: [
            {
                src: $("<div id='sports_content'> \
                                <div id='competitions_content'>\
                                    <span id='head'>Gaming & Sports</span>\
                                    <p>“I don’t need to get a life, I’m a gamer, I have lots of lives!”.The ultimate gaming arena! Escape the reality and land into the virtual world of survival. Team up! Push yourself further than you have ever before to see the face of your next nemesis.</p>\
                                    <div id='competitions_list'>\
                                        <div>\
                                        <div id='con' style='margin-bottom: 40px;'>\
                                            <div><span id='head'>Paintball</span><p style='text-align: center;'>Group & solo competition</p></div>\
                                            <div><span id='head'>Box Football</span><p style='text-align: center;'>Group competition</p></div>\
                                            <div><span id='head'>Dota 2</span><p style='text-align: center;'>Group competition</p></div>\
                                            <div><span id='head'>Counter Strike</span><p style='text-align: center;'>Group competition</p></div>\
                                            <div><span id='head'>Fifa 2015</span><p style='text-align: center;'>Solo competition</p></div>\
                                        </div>\
                                        <a id='reg_butt' href='registration.html' style='cursor: pointer' target='_blank'><img src='images/register_button.png'></a>\
                                        </ul>\
                                    </div>\
                                    <div id='social_media_icons'>\
                                        <ul>\
                                            <li id='facebook'><a href='https://www.facebook.com/aarohanfest/' target='_blank'><img src='images/facebook_icon.png' alt='https://www.facebook.com/aarohanfest/'></a></li>\
                                            <li id='instagram'><a href='https://www.instagram.com/mitaarohanfest/' target='_blank'><img src='images/instagram_icon.png' alt='https://www.facebook.com/aarohanfest/'></a></li>\
                                        </ul>\
                                </div>\
                            </div>"),
                type: 'inline'
            }
        ],
        callbacks: {
            open: function() {
                $("#competitions_content").mCustomScrollbar({
                    theme: "dark-2",
                    documentTouchScroll: true
                });
            }
        }
    });
    $("#online_slab").magnificPopup({
        items: [
            {
                src: $("<div id='online_content'> \
                                <div id='competitions_content'>\
                                    <span id='head'>Online</span>\
                                    <p>A competition held to showcase your creative mind.It is an exchange of ideologies, catchy phrases, humour, energy, emotions and imagination.</p>\
                                    <div id='competitions_list'>\
                                        <div>\
                                            <a class='curstroke'><div><span id='head'>Cursor stroke</span><p style='text-align:center'>Graphic design competition</p></div>\
                                                <div id='details'>\
                                                <div id='con'>\
                                                <a id='reg_button' href='registration.html' style='cursor: pointer' target='_blank'><img src='images/register_button.png'></a>\
                                                <p id='head'>Prize</p><p>Winner-Cash Prize of Rs.2,500</p>\
                                                <p id='head'>Entry fee</p><p>Free</p>\
                                                <p id='head'>Theme</p><p>Humor.</p>\
                                                <p id='head'>Rules</p>\
                                                <ol>\
                                                    <li>The entry can be hand drawn or made on a PC.</li>\
                                                    <li>One entry per participant.</li>\
                                                    <li style='list-style:none'>Entries will be evaluated on the basis of:\
                                                        <ol>\
                                                            <li>Relevance to theme.</li>\
                                                            <li>Originality of ideas.</li>\
                                                            <li>Design.</li>\
                                                            <li>Content.</li>\
                                                            <li>Visual Impact.</li>\
                                                        </ol>\
                                                    </li>\
                                                </ol>\
                                                </div>\
                                                </div></a>\
                                            <a class='capt'><div><span id='head'>Capture</span><p style='text-align: center'>Photography competition</p></div>\
                                                <div id='details'>\
                                                <div id='con'>\
                                                <a id='reg_button' href='registration.html' style='cursor: pointer' target='_blank'><img src='images/register_button.png'></a>\
                                                <p id='head'>Prize</p><p>Winner-Cash Prize of Rs.2,500</p>\
                                                <p id='head'>Entry fee</p><p>Free</p>\
                                                <p id='head'>Theme</p><p>Harmony.</p>\
                                                <p id='head'>Rules</p>\
                                                <ol>\
                                                    <li>The camera resolution should be more than 5MP.</li>\
                                                    <li>One entry per participant.</li>\
                                                    <li>If the photo is edited the participant must mail the original as well as the edited photograph.</li>\
                                                    <li>Participant may include description of the photo in the mail content, not the photo.</li>\
                                                    <li style='list-style:none'>Entries will be evaluated on the basis of:\
                                                        <ol>\
                                                            <li>Relevance to theme.</li>\
                                                            <li>Creative ideation.</li>\
                                                            <li>Composition, arrangement.</li>\
                                                            <li>Focus, sharpness and other technical details.</li>\
                                                        </ol>\
                                                    </li>\
                                                </ol>\
                                                </div>\
                                                </div></a>\
                                            <a class='litt'><div><span id='head'>Lit up</span><p style='text-align: center'>Creative writing competition</p></div>\
                                                <div id='details'>\
                                                <div id='con'>\
                                                <a id='reg_button' href='registration.html' style='cursor: pointer' target='_blank'><img src='images/register_button.png'></a>\
                                                <p id='head'>Prize</p><p>Winner-Cash Prize of Rs.2,500</p>\
                                                <p id='head'>Entry fee</p><p>Free</p>\
                                                <p id='head'>Theme</p><p>Outdated.</p>\
                                                <p id='head'>Rules</p>\
                                                <ol>\
                                                    <li>Languages allowed :- English, Marathi or Hindi.</li>\
                                                    <li>Word limit - 1500 words.</li>\
                                                    <li>Genre - Fiction/Non-Fiction/Any other.</li>\
                                                    <li>One entry per participant.</li>\
                                                    <li style='list-style:none'>Entries will be evaluated on the basis of:\
                                                        <ol>\
                                                            <li>Originality.</li>\
                                                            <li>Execution.</li>\
                                                            <li>Form.</li>\
                                                        </ol>\
                                                    </li>\
                                                </ol>\
                                                </div>\
                                                </div></a>\
                                            <a class='short'><div><span id='head'>Short Film</span><p style='text-align: center'>Film making competition</p></div>\
                                                <div id='details'>\
                                                <div id='con'>\
                                                <a id='reg_button' href='registration.html' style='cursor: pointer' target='_blank'><img src='images/register_button.png'></a>\
                                                <p id='head'>Prize</p><p>Winner-Cash Prize of Rs.2,500</p>\
                                                <p id='head'>Entry fee</p><p>Free</p>\
                                                <p id='head'>Theme</p><p>No theme: Open to you imagination.</p>\
                                                <p id='head'>Rules</p>\
                                                <ol>\
                                                    <li>Time limit is 20 minutes.</li>\
                                                    <li style='list-style:none'>Entries will be evaluated on the basis of:\
                                                        <ol>\
                                                            <li>Screenplay.</li>\
                                                            <li>Story.</li>\
                                                            <li>Cinematography.</li>\
                                                            <li>Editing.</li>\
                                                            <li>Acting.</li>\
                                                            <li>Direction.</li>\
                                                        </ol>\
                                                    </li>\
                                                </ol>\
                                                </div>\
                                                </div></a>\
                                        </ul>\
                                    </div>\
                                    <div id='social_media_icons'>\
                                        <ul>\
                                            <li id='facebook'><a href='https://www.facebook.com/aarohanfest/' target='_blank'><img src='images/facebook_icon.png' alt='https://www.facebook.com/aarohanfest/'></a></li>\
                                            <li id='instagram'><a href='https://www.instagram.com/mitaarohanfest/' target='_blank'><img src='images/instagram_icon.png' alt='https://www.facebook.com/aarohanfest/'></a></li>\
                                        </ul>\
                                </div>\
                            </div>"),
                type: 'inline'
            }
        ],
        callbacks: {
            open: function() {
                $("#competitions_content").mCustomScrollbar({
                    theme: "dark-2",
                    documentTouchScroll: true
                });
            }
        }
    });
    $("#finearts_slab").magnificPopup({
        items: [
            {
                src: $("<div id='finearts_content'> \
                                <div id='competitions_content'>\
                                    <span id='head'>Fine Arts</span>\
                                    <p>A competition held to showcase your creative mind.It is an exchange of ideologies, catchy phrases, humour, energy, emotions and imagination.Move the audience with colors or just plain old black and white.</p>\
                                    <div id='competitions_list'>\
                                        <div>\
                                            <a class='artmar'><div><span id='head'>Art Maestro</span><p style='text-align: center'>Spot painting competition</p></div>\
                                                <div id='details'>\
                                                <div id='con'>\
                                                <a id='reg_button' href='registration.html' style='cursor: pointer'><img src='images/register_button.png'></a>\
                                                <p id='head'>Prize</p><p>Winner-Cash Prize of Rs.3,000</p>\
                                                <p id='head'>Entry fee</p><p>Rs.200</p>\
                                                <p id='head'>Rules</p>\
                                                <ol>\
                                                    <li>The time limit for the performance is 40 minutes.</li>\
                                                    <li>The organizers will provide the canvas, poster colours, charcoal, pencils (4B, 2B, HB), eraser, brushes (size 3) and water for the competition.</li>\
                                                    <li>Participants exceeding 5 minutes will lose all the points allocated for the time criteria and any other points lost will be by the discretion of the judges.</li>\
                                                    <li>In case your performance is interrupted due to any problem then you will be allowed to restart or continue the performance based on the organizers’ preference and the judge's discretion.</li>\
                                                    <li>Due to any unforeseeable event, if the participating team has to stop their performance, any one of the team members can signal a person from the organising team. Restarting, continuing or terminating the performance will then be by the judge's discretion.</li>\
                                                    <li>If the participating team does not show up at their allocated time then the team will be disqualified. In case of unavoidable circumstances please contact the organizers. The participation fee will not be refunded under any circumstances.</li>\
                                                    <li>Decisions made by the organizers and judges will be binding and final.</li>\
                                                </ol>\
                                                </div>\
                                                </div></a>\
                                        </ul>\
                                    </div>\
                                    <div id='social_media_icons'>\
                                        <ul>\
                                            <li id='facebook'><a href='https://www.facebook.com/aarohanfest/' target='_blank'><img src='images/facebook_icon.png' alt='https://www.facebook.com/aarohanfest/'></a></li>\
                                            <li id='instagram'><a href='https://www.instagram.com/mitaarohanfest/' target='_blank'><img src='images/instagram_icon.png' alt='https://www.facebook.com/aarohanfest/'></a></li>\
                                        </ul>\
                                </div>\
                            </div>"),
                type: 'inline'
            }
        ],
        callbacks: {
            open: function() {
                $("#competitions_content").mCustomScrollbar({
                    theme: "dark-2",
                    documentTouchScroll: true
                });
            }
        }
    });
    // $("#after_movie").magnificPopup({
    //     items: [
    //         {
    //             src: 'https://www.youtube.com/embed/KDuOECrlBYs',
    //             type: 'iframe' // this overrides default type
    //         }
    //     ],
    // });
    $(".hero_section #whatsapp").hover(function () {
        $(".hero_section #tooltiptext").css({
            'visibility':'visible',
            'opacity':'1'
        });
    }, function () {
        $(".hero_section #tooltiptext").css({
            'visibility':'hidden',
            'opacity':'0'
        });
    });
    $("#connect_with_us #whatsapp").hover(function () {
        $("#connect_with_us #tooltiptext").css({
            'visibility':'visible',
            'opacity':'1'
        });
    }, function () {
        $("#connect_with_us #tooltiptext").css({
            'visibility':'hidden',
            'opacity':'0'
        });
    });
    $(".co").click(function () {
        new Vivus("acting", {
                duration: 400,
                delay: 350,
                start: "inViewport",
                pathTimingFunction: Vivus.EASE_OUT,
                animTimingFunction: Vivus.EASE_OUT
            }, function () {
                $("#acting path").attr("fill","#000");
        });
        new Vivus("music", {
                duration: 1000,
                delay: 350,
                start: "inViewport",
                pathTimingFunction: Vivus.EASE_OUT,
                animTimingFunction: Vivus.EASE_OUT
            }, function () {
                $("#acting path").attr("fill","#000");
        });
        new Vivus("dance", {
                duration: 1000,
                delay: 350,
                start: "inViewport",
                pathTimingFunction: Vivus.EASE_OUT,
                animTimingFunction: Vivus.EASE_OUT
            }, function () {
                $("#acting path").attr("fill","#000");
        });
        new Vivus("sports", {
                duration: 3000,
                delay: 350,
                start: "inViewport",
                pathTimingFunction: Vivus.EASE_OUT,
                animTimingFunction: Vivus.EASE_OUT
            }, function () {
                $("#acting path").attr("fill","#000");
        });
        new Vivus("online", {
                duration: 3000,
                delay: 350,
                start: "inViewport",
                pathTimingFunction: Vivus.EASE_OUT,
                animTimingFunction: Vivus.EASE_OUT
            }, function () {
                $("#acting path").attr("fill","#000");
        });
        new Vivus("finearts", {
                duration: 400,
                delay: 350,
                start: "inViewport",
                pathTimingFunction: Vivus.EASE_OUT,
                animTimingFunction: Vivus.EASE_OUT
            }, function () {
                $("#acting path").attr("fill","#000");
        });
    });
    $("#send").click(function() {
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();
        // $("#returnmessage").empty(); // To empty previous error/success message.
        // Checking for blank fields.
        if (name == '' || email == '' || message == '') {
            alert("Please Fill Required Fields");
        } else {
            // Returns successful data submission message when the entered information is sent.
            $.post("contact.php", {
                name1: name,
                email1: email,
                message1: message
            }, function(data) {
                // $("#returnmessage").append(data); // Append returned message to message paragraph.
                if (data == "Message sent Successfully") {
                    alert("Your Query has been received, We will contact you soon.");
                    $("#form")[0].reset(); // To reset form fields on success.
                }
            });
        }
    });
    response();
    function response() {
        if ($(window).width() >= 400 && $(window).width() <= 430) {
    		$('#name').css('top','1.8em');
            $('#email').css('top','1.8em');
            $('#message').css('top','1.8em');
            $('.mobile #contact_details h2').css('font-size','16px');
            $('.mobile #contact_details p').css('font-size','14px');
    	}
        if ($(window).width() >= 700 && $(window).width() <= 750) {
    		$('.mobile.landscape #contact_form #name').css({'top':'3.5em', 'left':'28%'});
            $('.mobile.landscape #contact_form #email').css('top','3.9em');
            $('.mobile.landscape #contact_form #message').css('top','3.5em');
            $('.mobile #contact_details').css('line-height','22px');
            $('.mobile #contact_details').css('width','30%');
            $('.mobile.landscape #contact_details>div').css('width','100%');
            $('.mobile.landscape #contact_details h2').css('font-size','13px');
            $('.mobile.landscape #contact_details p').css('font-size','12px');
            $('.mobile.landscape #slab_row>div').css('max-height','40%');
    	}
        if ($(window).width() >= 650 && $(window).width() <= 680) {
            $('.mobile #contact_details').css('line-height','22px');
            $('.mobile #contact_details').css('width','30%');
            $('.mobile.landscape #contact_details>div').css('width','100%');
            $('.mobile.landscape #slab_row>div').css('max-height','40%');
    	}
        if ($(window).width() >= 560 && $(window).width() <= 580) {
            $('.mobile.landscape #contact_form #name').css({'top':'2.7em', 'left':'29%','font-size':'11px'});
            $('.mobile.landscape #contact_form #email').css({'top':'3em','font-size':'11px'});
            $('.mobile.landscape #contact_form #message').css({'top':'2em','font-size':'11px'});
            $('.mobile.landscape #contact_details').css('line-height','18px');
            $('.mobile.landscape #contact_details').css({'width':'35%','top':'15px'});
            $('.mobile.landscape #contact_details h2').css('font-size','11px');
            $('.mobile.landscape #contact_details p').css('font-size','10px');
            $('.mobile.landscape #contact_details>div').css('width','100%');
            $('.mobile.landscape #slab_row>div').css('max-height','40%');
            $('.mobile.landscape #social_media_icons img').css('width','18%');
            $('.mobile.landscape #social_media_icons #whatsapp img').css('width','22%');
            $('.mobile.landscape .nav_bar ul').css('padding-top','12px');
            $('.mobile.landscape .nav_bar ul li').css('padding-top','8px');
            $('.mobile.landscape #about_content #first_line').css({'transform':'translate(300px,0)','width':'30%'});
            $('.mobile #competitions_content p').css('font-size','14px');
            $('.mobile.landscape #social_content #head').css('margin-bottom','8px');
            $('.mobile.landscape #social_content p').css('font-size','0.55em');
    	}
        if ($(window).width() >= 310 && $(window).width() <= 330) {
            $('#name').css('top','1.8em');
            $('#email').css('top','1.8em');
            $('#message').css('top','1.3em');
            $('.mobile #contact_details h2').css('font-size','12px');
            $('.mobile #contact_details p').css('font-size','10px');
            $('.mobile.css-320 .nav_bar ul').css('top','6%');
    	}
        if (sizeCalcWidth() >= 1500 && sizeCalcWidth() <= 1520) {
            $('#name').css({'top':'1.4em','font-size':'22px'});
            $('#email').css({'top':'2.4em','font-size':'22px'});
            $('#message').css({'top':'1.8em','font-size':'22px'});
            $('.mobile #contact_details h2').css('font-size','24px');
            $('.mobile #contact_details p').css('font-size','22px');
            $('.mobile #contact_details').css('line-height','25px');
    	}
        if (sizeCalcWidth() >= 1270 && sizeCalcWidth() <= 1290) {
            $('#name').css({'top':'1.5em'});
            $('#email').css({'top':'2.4em'});
            $('#message').css({'top':'2.4em'});
    	}
        if (sizeCalcHeight() >= 460 && sizeCalcHeight() <= 490) {
    		$('#name').css('top','0em');
            $('#email').css('top','0em');
            $('#message').css('top','0em');
            $('.mobile #contact_details h2').css('font-size','12px');
            $('.mobile #contact_details p').css('font-size','10px');
            $('.mobile .nav_bar').css('font-size','14px');
            $('.mobile .nav_bar ul li').css('margin-bottom','0');
            $('.mobile.css-320 .nav_bar #asset_wrapper_li').css({'font-size':'14px'});
            $('.mobile #slab_row>div').css('max-height','32%');
            $('.mobile.css-320 #slab_container #slab_row').css('top','15%');
            $('.mobile #photo #text').css('font-size','10px');
            $('.place1').css('z-index','20');
            $('.place2').css('z-index','18');
            $('.place3').css('z-index','16');
            $('.place4').css('z-index','16');
            $('.place5').css('z-index','15');
    	}
        if (sizeCalcWidth() >= 350 && sizeCalcWidth() <= 370) {
    		$('#name').css('top','0.4em');
            $('#email').css('top','0.3em');
            $('#message').css('top','0em');
            $('.mobile #contact_details h2').css('font-size','12px');
            $('.mobile #contact_details p').css('font-size','10px');
            $('.mobile #social_content #head').css('font-size','18px');
            $('.mobile #social_content p').css('font-size','0.85em');
            $('.mobile .nav_bar').css('font-size','14px');
            $('.mobile #social_media_icons>div').css('width','230px');
            $('.mobile #social_media_icons img').css('width','28%');
            $('.mobile #social_media_icons #whatsapp img').css('width','32%');
            $('.mobile .nav_bar ul li').css('margin-bottom','0');
            $('.mobile.css-320 .nav_bar #asset_wrapper_li').css({'font-size':'14px'});
            $('.mobile #slab_row>div').css('max-height','32%');
            $('.mobile.css-320 #slab_container #slab_row').css('top','15%');
            $('.mobile #photo #text').css('font-size','10px');
            $('.place1').css('z-index','20');
            $('.place2').css('z-index','18');
            $('.place3').css('z-index','16');
            $('.place4').css('z-index','16');
            $('.place5').css('z-index','15');
    	}
        if (sizeCalcWidth() >= 365 && sizeCalcWidth() <= 385 && sizeCalcHeight() >= 550 && sizeCalcHeight() <= 570) {
    		$('#name').css('top','0em');
            $('#email').css('top','0em');
            $('#message').css('top','-1em');
            $('.mobile #contact_details h2').css('font-size','12px');
            $('.mobile #contact_details p').css('font-size','10px');
            $('.mobile #social_content #head').css('font-size','18px');
            $('.mobile #social_content p').css('font-size','0.85em');
            $('.mobile .nav_bar').css('font-size','14px');
            $('.mobile #social_media_icons>div').css('width','230px');
            $('.mobile #social_media_icons img').css('width','28%');
            $('.mobile #social_media_icons #whatsapp img').css('width','32%');
            $('.mobile .nav_bar ul li').css('margin-bottom','0');
            $('.mobile.css-320 .nav_bar #asset_wrapper_li').css({'font-size':'14px'});
            $('.mobile #slab_row>div').css('max-height','32%');
            $('.mobile.css-320 #slab_container #slab_row').css('top','15%');
            $('.mobile #photo #text').css('font-size','10px');
            $('.place1').css('z-index','20');
            $('.place2').css('z-index','18');
            $('.place3').css('z-index','16');
            $('.place4').css('z-index','16');
            $('.place5').css('z-index','15');
    	}
        if (sizeCalcWidth() >= 310 && sizeCalcWidth() <= 330 && sizeCalcHeight() >= 450 && sizeCalcHeight() <= 470) {
    		$('#name').css('top','-0.5em');
            $('#email').css('top','-0.5em');
            $('#message').css('top','-1em');
            $('.mobile #contact_details h2').css({'font-size':'11px','margin-bottom':'2px'});
            $('.mobile #contact_details p').css('font-size','10px');
            $('.mobile #social_content #head').css({'font-size':'16px','margin-bottom':'10px'});
            $('.mobile #social_content p').css('font-size','0.75em')
            $('.mobile #social_media_icons>div').css('width','200px');
            $('.mobile #social_media_icons img').css('width','28%');
            $('.mobile #pro_content #head').css('font-size','16px');
            $('.mobile #pro_content p').css('font-size','14px');
            $('.mobile #social_media_icons #whatsapp img').css('width','32%');
            $('.mobile .nav_bar').css('font-size','12px');
            $('.mobile .nav_bar ul li').css({'margin-bottom':'0','padding-top':'8px'});
            $('.mobile.css-320 .nav_bar #asset_wrapper_li').css({'font-size':'12px'});
            $('.mobile #slab_row>div').css('max-height','32%');
            $('.mobile.css-320 #slab_container #slab_row').css('top','15%');
            $('.mobile #photo #text').css('font-size','10px');
            $('.place1').css('z-index','20');
            $('.place2').css('z-index','18');
            $('.place3').css('z-index','16');
            $('.place4').css('z-index','16');
            $('.place5').css('z-index','15');
    	}
        if (sizeCalcWidth() >= 404 && sizeCalcWidth() <= 424 && sizeCalcHeight() >= 618 && sizeCalcHeight() <= 638) {
            $('#name').css('top','0.4em');
            $('#email').css('top','0.4em');
            $('#message').css('top','0.3em');
            $('.mobile #contact_details h2').css('font-size','16px');
            $('.mobile #contact_details p').css('font-size','14px');
            $('.mobile #social_content #head').css({'font-size':'20px','margin-bottom':'10px'});
            $('.mobile #social_content p').css('font-size','1em')
            $('.mobile .nav_bar').css('font-size','16px');
            $('.mobile .nav_bar ul li').css({'margin-bottom':'5px','padding-top':'8px'});
            $('.mobile.css-320 .nav_bar #asset_wrapper_li').css({'font-size':'16px'});
            $('.mobile #slab_row>div').css('max-height','32%');
            $('.mobile.css-320 #slab_container #slab_row').css('top','15%');
            $('.mobile #photo #text').css('font-size','12px');
            $('.place1').css('z-index','20');
            $('.place2').css('z-index','18');
            $('.place3').css('z-index','16');
            $('.place4').css('z-index','16');
            $('.place5').css('z-index','15');
    	}
    }
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
