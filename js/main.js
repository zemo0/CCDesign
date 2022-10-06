var x = window.matchMedia("(max-width: 990px)")
$(window).scroll(function () {
    $scroll = $(window).scrollTop();
    
    if ($scroll > 0 && !x.matches) {
        $('#navbar').css('background', "#212529");
    } else if($scroll >= 0 && x.matches) {
        $('#navbar').css('background', '#212529');
    }
    else if($scroll <= 0 && !x.matches) {
        $('#navbar').css('background', 'transparent');
    }
    else if($scroll <= 0 && x.matches){
        $('#navbar').css('background', 'transparent');
    }
});

//Reviews
$('.reviews-carousel').owlCarousel({
    loop:true,
    margin:50,
    nav:false,
    items:1,
    smartSpeed: 600,
});

$('.blog-carousel').owlCarousel({
    loop:true,
    margin:32,
    items:1,
    nav:false,
    smartSpeed: 600,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
    }
});



