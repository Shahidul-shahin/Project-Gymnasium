$(function(){
    //navbar link active
    $('.navbar .nav-item').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    
    //  bannner slider
    
    $('.banner-slider').slick({
        arrows: false,
    });
    
//    about video venobox
    $('.venobox').venobox({
        spinColor:'#e23e38',
        overlayColor:'rgba(226, 62, 56, 0.60)',
    });
    
    // Team Slider
    $('#team .team-slider').slick({
        slidesToShow:4,
        arrows:false,
        autoplay:true,
    });
});