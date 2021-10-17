$(document).ready(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 1000,
    }); // Statement end
    $(".game-container").slick({
        slidesToShow: 3,
        autoplay: true,
        slidesToScroll: 1,
        arrows: false,
        responsive:[
            {
                breakpoint: 992,
                settings:{
                    slidesToShow: 3,
                    autoplay: true,
                    
                }
            },
            {
                breakpoint: 768,
                settings:{
                    slidesToShow: 2,
                    autoplay: true,
                }
            },
            {
                breakpoint: 576,
                settings:{
                    slidesToShow: 1,
                    autoplay: true,
                }
            }
        ]
    }); // statment end

    $('#countdown').countdown({
        year: 2021,
        month: 10,
        day: 15,
        hour: 12,
        minute: 59,
        second: 60,
    }); //statement end
    // wow js
    new WOW().init();
      
   
});