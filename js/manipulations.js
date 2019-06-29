// fadeOut the loader for Berline bot with jQuery

// <![CDATA[ 
$(window).on('load', function () {
    $("#chat-container").ready(function() {
        $(".loader").fadeOut(600);
        $("#chat-container").fadeIn(600);
    });
});

// ]]> 

$(document).ready(function() {

    //Toggle SideNav Description when Title is clicked
    $("#t1,#bug").click(function() {
        $("#d1").toggleClass("displayNone");
    });
    $("#t2,#feature").click(function() {
        $("#d2").toggleClass("displayNone");
    });
    $("#t3,#contact").click(function() {
        $("#d3").toggleClass("displayNone");
    });
    $("#t4,#terms").click(function() {
        $("#d4").toggleClass("displayNone");
    });
    $("#t5,#pricacy").click(function() {
        $("#d5").toggleClass("displayNone");
    });


/***********************************
    Control Nav description     
***********************************/

// Hide other nav description when #t1 is clicked

    $("#t1,#bug").click(function() {
        $("#d2").addClass("displayNone");
        $("#d3").addClass("displayNone");
        $("#d4").addClass("displayNone");
        $("#d5").addClass("displayNone");
    });

// Hide other nav description when #t2 is clicked

    $("#t2,#feature").click(function() {
        $("#d1").addClass("displayNone");
        $("#d3").addClass("displayNone");
        $("#d4").addClass("displayNone");
        $("#d5").addClass("displayNone");
    });


// Hide other nav description when #t3 is clicked


    $("#t3,#contact").click(function() {
        $("#d2").addClass("displayNone");
        $("#d1").addClass("displayNone");
        $("#d4").addClass("displayNone");
        $("#d5").addClass("displayNone");
    });


// Hide other nav description when #t4 is clicked


    $("#t4,#terms").click(function() {
        $("#d2").addClass("displayNone");
        $("#d3").addClass("displayNone");
        $("#d1").addClass("displayNone");
        $("#d5").addClass("displayNone");
    });


// Hide other nav description when #t5 is clicked


    $("#t5,#privacy").click(function() {
        $("#d2").addClass("displayNone");
        $("#d3").addClass("displayNone");
        $("#d4").addClass("displayNone");
        $("#d1").addClass("displayNone");
    });



/***********************************
        Control Nav description end!            
   ***********************************/


/************************************ 
Display Menu when JS is enabled in browser
************************************/
// <![CDATA[ 
    $("#menu").fadeIn(600); // FadeIn in 600ms
    $("div").removeClass("hideMenu").delay(600);


// ]]> 

/**********************************
            Hide() the menu when Berline's image is clicked.
            Show() the menu when #closeModals clicked.
   ***********************************/
//For BerlineImg1
// <![CDATA[ 
    $("#BerlineImg1").click(function() {
        $("#menu").hide();
        $("#chat-container").hide();
        $("#about-container").hide();
    });
    $("#closeModal").click(function() {
        $("#chat-container").show();
        $("#about-container").hide();
        $("#menu").show();
        $("#chat").addClass("active");
        $("#about").removeClass("active");

        //Special case for chat
        if ($(".active").attr('id') == "chat") {
            smoothScrollBottom();
        }
        //Close the sideNav Desc
        $("#d1").addClass("displayNone");
        $("#d2").addClass("displayNone");
        $("#d3").addClass("displayNone");
        $("#d4").addClass("displayNone");
        $("#d5").addClass("displayNone");

    });

// ]]> 
//For BerlineImg2
// <![CDATA[ 
    $("#BerlineImg2").click(function() {
        $("#menu").hide();
        $("#chat-container").hide();
        $("#about-container").hide();
    });
    $("#closeModal").click(function() {
        $("#chat-container").show();
        $("#about-container").hide();
        $("#menu").show();
        $("#chat").addClass("active");
        $("#about").removeClass("active");

        //Special case for chat
        if ($(".active").attr('id') == "chat") {
            smoothScrollBottom();
        }
        //Close the sideNav Desc
        $("#d1").addClass("displayNone");
        $("#d2").addClass("displayNone");
        $("#d3").addClass("displayNone");
        $("#d4").addClass("displayNone");
        $("#d5").addClass("displayNone");

    });

// ]]> 

// hide and show the menu for Berline bot with jQuery
// <![CDATA[ 
    $("#chat").click(function() {
        $("#about-container").hide();
        $("#chat-container").show();
        $("#closeNav").hide();
        $("#openNav").show();
        $("#chat").addClass("active");
        $("#about").removeClass("active");

        //Special case for chat
        if ($(".active").attr('id') == "chat") {
            smoothScrollBottom();
        }

        // Close the SideNav
        $("#d1").addClass("displayNone");
        $("#d2").addClass("displayNone");
        $("#d3").addClass("displayNone");
        $("#d4").addClass("displayNone");
        $("#d5").addClass("displayNone");
    });
    $("#about").click(function() {
        $("#chat-container").hide();
        $("#about-container").show();
        $("#about-container").removeClass("displayOff");
        $("#closeNav").hide();
        $("#openNav").show();

        //Close the sideNav Desc
        $("#d1").addClass("displayNone");
        $("#d2").addClass("displayNone");
        $("#d3").addClass("displayNone");
        $("#d4").addClass("displayNone");
        $("#d5").addClass("displayNone");
    });


// ]]> 

// hide and show the Navigation for Berline bot with jQuery
// <![CDATA[ 
    $("#openNav").click(function() {
        $("#openNav").hide();
        $("#closeNav").show();
        $("#chat-container").hide();
        $("#about-container").hide();
        $("#closeNav").removeClass("displayOff");
    });

    $("#closeNav").click(function() {
        $("#closeNav").hide();
        $("#openNav").show();
        $("#chat-container").show();
        $("#about-container").show();
        $("#about-container").addClass("displayOff");
        $("#chat").addClass("active");
        $("#about").removeClass("active");

        //Special case for chat
        if ($(".active").attr('id') == "chat") {
            smoothScrollBottom();
        }

        //Close the sideNav Desc
        $("#d1").addClass("displayNone");
        $("#d2").addClass("displayNone");
        $("#d3").addClass("displayNone");
        $("#d4").addClass("displayNone");
        $("#d5").addClass("displayNone");
    });


/****************************
    Fullscreen Mode Start 
*******************************/
    $(".openFullScreen").click(function() {
        $("body").fullscreen();
        $(".closeFullScreen").show();
        $("a").removeClass("hideScreen");
        $(".openFullScreen").hide();
        $("#chat-container").addClass("chatPadding"); // Add padding so your mobile keyboard can...
    });
    $(".closeFullScreen").click(function() {
        $.fullscreen.exit();
        $(".openFullScreen").show();
        $(".closeFullScreen").hide();
        $("body").fullscreen().css("background-color", "#ffffff");
        $("#chat-container").removeClass("chatPadding"); // Remove padding since you can...
    });

/****************************
    FullScreen Mode Stop
*****************************/

});

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// ]]> 