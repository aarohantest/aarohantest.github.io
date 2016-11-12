$(document).ready(function () {
    $("body").restive({
        breakpoints: ['10000'],
        classes: ['mit'],
        turbo_classes: 'is_mobile=mobile,is_phone=phone,is_tablet=tablet,is_landscape-landscape'
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
            theme: "dark-2"
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

        seconds%=60; //Calculating remaining seconds

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
    //     var $bar = [$(".hero_section"),$(".about_us"),$(".throwback"),$("contact_us")];
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
    //   Throwback image popup
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
    $("#acting_slab").magnificPopup({
        items: [
            {
                src: $("<div id='acting_content'> \
                                <div id='competitions_content'>\
                                    <span id='head'>Dramatics</span>\
                                    <p>Drama is the specific mode of fiction represented in performance.It is a loud and larger than life exchange of ideologies, catchy songs, humour, energy, emotions and the roar of audience.Drama as a form of communication is deeply rooted in the Indian tradition.This year come and showcase your talent and move the audience.</p>\
                                    <div id='competitions_list'>\
                                        <div>\
                                            <div><span id='head'>Dastaak</span><p>Street play competition</p></div>\
                                            <div><span id='head'>Mad Ads</span><p>Solo acting competition</p></div>\
                                            <div><span id='head'>PLatform</span><p>Talent hunt competition</p></div>\
                                        </ul>\
                                    </div>\
                                    <p>Details will be updated soon.</p>\
                                    <div id='social_media_icons'>\
                                        <ul>\
                                            <li id='facebook'><a href='https://www.facebook.com/aarohanfest/' target='_blank'><img src='images/facebook_icon.png' alt='https://www.facebook.com/aarohanfest/'></a></li>\
                                            <li id='instagram'><a href='https://www.instagram.com/mitaarohanfest/' target='_blank'><img src='images/instagram_icon.png' alt='https://www.facebook.com/aarohanfest/'></a></li>\
                                        </ul>\
                                </div>\
                            </div>"),
                type: 'inline'
            }
        ]
    });
    $("#langaming_slab").magnificPopup({
        items: [
            {
                src: $("<div id='acting_content'> \
                                <div id='competitions_content'>\
                                    <span id='head'>Lan Gaming</span>\
                                    <p>“I don’t need to get a life, I’m a gamer, I have lots of lives!”.The ultimate gaming arena! Escape the reality and land into the virtual world of survival. Team up! Push yourself further than you have ever before to see the face of your next nemesis.</p>\
                                    <div id='competitions_list'>\
                                        <div>\
                                            <div><span id='head'>Dota 2</span><p>Group competition</p></div>\
                                            <div><span id='head'>Counter Strike</span><p>Group competition</p></div>\
                                            <div><span id='head'>Fifa 2015</span><p>Solo competition</p></div>\
                                        </ul>\
                                    </div>\
                                    <p>Details will be updated soon.</p>\
                                    <div id='social_media_icons'>\
                                        <ul>\
                                            <li id='facebook'><a href='https://www.facebook.com/aarohanfest/' target='_blank'><img src='images/facebook_icon.png' alt='https://www.facebook.com/aarohanfest/'></a></li>\
                                            <li id='instagram'><a href='https://www.instagram.com/mitaarohanfest/' target='_blank'><img src='images/instagram_icon.png' alt='https://www.facebook.com/aarohanfest/'></a></li>\
                                        </ul>\
                                </div>\
                            </div>"),
                type: 'inline'
            }
        ]
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
                                            <div><span id='head'>In-Sync</span><p>Group dance competition</p></div>\
                                            <div><span id='head'>Inner Flame</span><p>Solo dance competition</p></div>\
                                            <!--<div><span id='head'>Foot Loose</span><p>Street dance competition</p></div>-->\
                                        </ul>\
                                    </div>\
                                    <p>Details will be updated soon.</p>\
                                    <div id='social_media_icons'>\
                                        <ul>\
                                            <li id='facebook'><a href='https://www.facebook.com/aarohanfest/' target='_blank'><img src='images/facebook_icon.png' alt='https://www.facebook.com/aarohanfest/'></a></li>\
                                            <li id='instagram'><a href='https://www.instagram.com/mitaarohanfest/' target='_blank'><img src='images/instagram_icon.png' alt='https://www.facebook.com/aarohanfest/'></a></li>\
                                        </ul>\
                                </div>\
                            </div>"),
                type: 'inline'
            }
        ]
    });
    $("#sports_slab").magnificPopup({
        items: [
            {
                src: $("<div id='sports_content'> \
                                <div id='competitions_content'>\
                                    <span id='head'>Sports</span>\
                                    <p>A competition held to determine the best teams and greatest achivements. The ultimate platform to showcase your skills. Defeat your opponents and rise above all in this ultimate showdown.</p>\
                                    <div id='competitions_list'>\
                                        <div>\
                                            <div><span id='head'>Paintball</span><p>Group & solo competition</p></div>\
                                            <div><span id='head'>Box Football</span><p>Group competition</p></div>\
                                        </ul>\
                                    </div>\
                                    <p>Details will be updated soon.</p>\
                                    <div id='social_media_icons'>\
                                        <ul>\
                                            <li id='facebook'><a href='https://www.facebook.com/aarohanfest/' target='_blank'><img src='images/facebook_icon.png' alt='https://www.facebook.com/aarohanfest/'></a></li>\
                                            <li id='instagram'><a href='https://www.instagram.com/mitaarohanfest/' target='_blank'><img src='images/instagram_icon.png' alt='https://www.facebook.com/aarohanfest/'></a></li>\
                                        </ul>\
                                </div>\
                            </div>"),
                type: 'inline'
            }
        ]
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
                                            <div><span id='head'>Cursor stroke</span><p>Graphic design competition</p></div>\
                                            <div><span id='head'>Capture</span><p>Photography competition</p></div>\
                                            <div><span id='head'>Lit up</span><p>Creative writing competition</p></div>\
                                        </ul>\
                                    </div>\
                                    <p>Details will be updated soon.</p>\
                                    <div id='social_media_icons'>\
                                        <ul>\
                                            <li id='facebook'><a href='https://www.facebook.com/aarohanfest/' target='_blank'><img src='images/facebook_icon.png' alt='https://www.facebook.com/aarohanfest/'></a></li>\
                                            <li id='instagram'><a href='https://www.instagram.com/mitaarohanfest/' target='_blank'><img src='images/instagram_icon.png' alt='https://www.facebook.com/aarohanfest/'></a></li>\
                                        </ul>\
                                </div>\
                            </div>"),
                type: 'inline'
            }
        ]
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
                                            <div><span id='head'>Art Marathon</span><p>Spot painting competition</p></div>\
                                        </ul>\
                                    </div>\
                                    <p>Details will be updated soon.</p>\
                                    <div id='social_media_icons'>\
                                        <ul>\
                                            <li id='facebook'><a href='https://www.facebook.com/aarohanfest/' target='_blank'><img src='images/facebook_icon.png' alt='https://www.facebook.com/aarohanfest/'></a></li>\
                                            <li id='instagram'><a href='https://www.instagram.com/mitaarohanfest/' target='_blank'><img src='images/instagram_icon.png' alt='https://www.facebook.com/aarohanfest/'></a></li>\
                                        </ul>\
                                </div>\
                            </div>"),
                type: 'inline'
            }
        ]
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
        new Vivus("langaming", {
                duration: 2000,
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
});
$(window).load(function () {
    $(".preloader").delay(2000).fadeOut("slow");
});
