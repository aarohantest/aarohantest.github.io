$(document).ready(function () {
    $("#about_content").mCustomScrollbar({
        theme: "dark-2"
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
        days = (days<10) ? "0" + days : days;

        //Replace text of html
        document.getElementById("days").textContent = days;
        document.getElementById("seconds").textContent = seconds;
        //for IE8 and below
        document.getElementById("days").innerText = days;
        document.getElementById("seconds").innerText = seconds;
        //Update everyt second
        setTimeout(countdown, 1000);
    }
    countdown();
    var $firstLine = $('#first_line');
    var $window = $('window');
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
        //}
    });

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

});

