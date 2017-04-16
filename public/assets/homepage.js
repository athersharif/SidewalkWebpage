/**
 * Created by anthony on 4/1/17.
 */

var autoAdvanceLaptop = true;
function playVideo(){
    document.getElementById("vidembed").innerHTML = '<div class="video-container"><iframe id="youtubeframe" width="853" height="480" src="https://www.youtube.com/embed/wAdGXqRunQs?autoplay=1" frameborder="0" allowfullscreen</iframe</div>';
    var vidheight = $('#youtubeframe').height();
    $('#vidembed').height(vidheight);
}
$( window ).resize(function() {
    var vidheight = $('#youtubeframe').height();
    $('#vidembed').height(vidheight);
});

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(numbersInView);

function numbersInView(){
    if (isScrolledIntoView($("#percentage"))){
        if(percentageAnim && labelsAnim) {
            percentageAnim.start();
            labelsAnim.start();
            milesAnim.start();
        }
    }
}

function switchToVideo(vidnum){


    if(vidnum === 1) {
        // console.log("Switching to video 1");
        document.getElementById("vid1").style.display = "block";
        document.getElementById("vid2").style.display = "none";
        document.getElementById("vid3").style.display = "none";
        document.getElementById("word1").style.textDecoration = "underline";
        document.getElementById("word2").style.textDecoration = "none";
        document.getElementById("word3").style.textDecoration = "none";

        document.getElementById("word1").style.fontFamily = "Raleway-bold,sans-serif";
        document.getElementById("word2").style.fontFamily = "Raleway,sans-serif";
        document.getElementById("word3").style.fontFamily = "Raleway,sans-serif";

        document.getElementById("firstnumbox").style.backgroundColor = "#58CEAB";
        document.getElementById("secondnumbox").style.backgroundColor = "#F1F1F1";
        document.getElementById("thirdnumbox").style.backgroundColor = "#F1F1F1";

        document.getElementById("number1").style.color = "#fff";
        document.getElementById("number2").style.color = "#C0BEBF";
        document.getElementById("number3").style.color = "#C0BEBF";


    }
    else if(vidnum === 2) {
        // console.log("Switching to video 2");
        document.getElementById("vid1").style.display = "none";
        document.getElementById("vid2").style.display = "block";
        document.getElementById("vid3").style.display = "none";
        document.getElementById("word1").style.textDecoration = "none";
        document.getElementById("word2").style.textDecoration = "underline";
        document.getElementById("word3").style.textDecoration = "none";

        document.getElementById("word1").style.fontFamily = "Raleway,sans-serif";
        document.getElementById("word2").style.fontFamily = "Raleway-bold,sans-serif";
        document.getElementById("word3").style.fontFamily = "Raleway,sans-serif";

        document.getElementById("firstnumbox").style.backgroundColor = "#F1F1F1";
        document.getElementById("secondnumbox").style.backgroundColor = "#58CEAB";
        document.getElementById("thirdnumbox").style.backgroundColor = "#F1F1F1";

        document.getElementById("number1").style.color = "#C0BEBF";
        document.getElementById("number2").style.color = "#fff";
        document.getElementById("number3").style.color = "#C0BEBF";
    }
    else if(vidnum === 3) {
        // console.log("Switching to video 3");
        document.getElementById("vid1").style.display = "none";
        document.getElementById("vid2").style.display = "none";
        document.getElementById("vid3").style.display = "block";
        document.getElementById("word1").style.textDecoration = "none";
        document.getElementById("word2").style.textDecoration = "none";
        document.getElementById("word3").style.textDecoration = "underline";

        document.getElementById("word1").style.fontFamily = "Raleway,sans-serif";
        document.getElementById("word2").style.fontFamily = "Raleway,sans-serif";
        document.getElementById("word3").style.fontFamily = "Raleway-bold,sans-serif";

        document.getElementById("firstnumbox").style.backgroundColor = "#F1F1F1";
        document.getElementById("secondnumbox").style.backgroundColor = "#F1F1F1";
        document.getElementById("thirdnumbox").style.backgroundColor = "#58CEAB";

        document.getElementById("number1").style.color = "#C0BEBF";
        document.getElementById("number2").style.color = "#C0BEBF";
        document.getElementById("number3").style.color = "#fff";
    }
    /*
    var e = document.getElementById("vid"+vidnum);
    e.style.opacity = 0;

    var vid = document.getElementById("vid"+vidnum);
    vid.oncanplaythrough = function() {
        setTimeout(function() {
            var e = document.getElementById("vid"+vidnum);
            fade(e);
        }, 10);
    };

    function fade(element) {
        var op = 0;
        var timer = setInterval(function() {
            if (op >= 1) clearInterval(timer);
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += op * 0.1 || 0.1;
        }, 10);
    }
    */
}

$( document ).ready(function() {
    // console.log( "ready!" );
    switchToVideo(1)
    function autoAdvanceLaptopVideos(){
        if (autoAdvanceLaptop) switchToVideo(1);
        setTimeout(function () {
            if (autoAdvanceLaptop) switchToVideo(2);
            setTimeout(function () {
                if (autoAdvanceLaptop) switchToVideo(3);
                setTimeout(function () {
                    autoAdvanceLaptopVideos()

                }, 7000);

            }, 4000);
        }, 10000);
    }
    autoAdvanceLaptopVideos();



});