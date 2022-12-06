$(document).ready(function () {
    $(".card1").mouseover(function () {

        $(".card1").css("background-color", "blue");

        $(".subtitle").css("color", "white");

        $(".subtitle-2").css("color", "white");


    });
    $(".card1").mouseout(function () {
        $(".card1").css("background-color", "white");

        $(".subtitle").css("color", "blue");

        $(".subtitle-2").css("color", "black");


    });

    //$(".nav-link").toggleClass('liText', $(this).scrollTop() < 100);
    $(".nav-link").addClass("liText");
    $(window).scroll(function () {
          
          

       
        $(".main-nav ,.nav-link").toggleClass('scrolled', $(this).scrollTop() > 100,function(){
          
        });
        //$(".nav-link").toggleClass('scrolled',$(this).scrollTop()>100);
    });
    //  $(".centered").css("transform", "");
    //$(".main").css("margin-top", "220%");
    //alert("hi")

    /*$("#mainBtn").click(function () { 
    alert("worked")
    
  });*/
 
 
  $(".service ,.serviceMenu").mouseover(function () {
    //$(".service").css("color","rgb(115, 255, 0)");
    //alert("hello") 
    $(".serviceMenu").show();
  });
  $('.service ,.serviceMenu').mouseleave(function () { 
    $(".serviceMenu").hide();
    //$(".service").css("color","white");
  });
  $(".aboutUs,.aboutUsMenu").mouseover(function () {
    //alert("hello") 
    $(".aboutUsMenu").show();
    // $(".aboutUs").css("color","rgb(115, 255, 0)");
  });
  $(".aboutUs,.aboutUsMenu").mouseleave(function () {
    //alert("hello") 
    $(".aboutUsMenu").hide();
    // $(".aboutUs").css("color","white");
  });
  
  $(".technology,.techMenu").mouseover(function () {
    //alert("hello") 
    $(".techMenu").show();
    // $(".technology").css("color","rgb(115, 255, 0)");
  });
  $(".technology,.techMenu").mouseleave(function () {
    //alert("hello") 
    $(".techMenu").hide();
    //$(".technology").css("color","white");
  });
  
  
  //$(".dropdown-toggle").mouseover($(".dropdown-toggle").toggleClass(".dropdown-item"))

});