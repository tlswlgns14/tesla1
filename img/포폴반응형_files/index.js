$('.slideInner').slick({
    autoplay:true,
    arrows:true,
    dots:true,
    fade:true,
    speed:1000,
    autoplaySpeed:5000,
    pauseOnHover:false,
    prevArrow : '<button><i class="fas fa-chevron-left"></i></button>',
    nextArrow :'<button><i class="fas fa-chevron-right"></i></button>'
})
 
$('.slideOuter .plpa').on('click', function(){
    if ( $(this).find('i').hasClass('fa-pause') ) {
        $('.slideInner').slick("slickPause")
        $(this).find('i').removeClass('fa-pause').addClass('fa-play')
    } else {
        $('.slideInner').slick("slickPlay")
        $(this).find('i').removeClass('fa-play').addClass('fa-pause')
    }
})

// 베스트 테슬라 팔파
$('.slideOuter1 .plpa1').on('click', function(){
    if ( $(this).find('i').hasClass('fa-pause') ) {
        $('.slideInner1').slick("slickPause")
        $(this).find('i').removeClass('fa-pause').addClass('fa-play')
    } else {
        $('.slideInner1').slick("slickPlay")
        $(this).find('i').removeClass('fa-play').addClass('fa-pause')
    }
})
// 배스트 테슬라(미니슬라이드)
$('.slideInner1').slick({
    autoplay:true,
    arrows:true,
    dots:true,
    slidesToShow:3,
    slidesToScroll:3,
    centerMode:true,
    centerPadding:"100px",
    prevArrow:'<button class="arrows parr"><i class="fas fa-angle-left"></i></button>',
    nextArrow:'<button class="arrows narr"><i class="fas fa-angle-right"></i></button>',
})



// 에너지 슬라이드

$('.eneso').slick({
    autoplay:true,
    arrows:false,
    dots:true,
    fade:false,
    speed:600,
    autoplaySpeed:5000,
    pauseOnHover:false,
})
 
$('.energy .enepa').on('click', function(){
    if ( $(this).find('i').hasClass('fa-pause') ) {
        $('.eneso').slick("slickPause")
        $(this).find('i').removeClass('fa-pause').addClass('fa-play')
    } else {
        $('.eneso').slick("slickPlay")
        $(this).find('i').removeClass('fa-play').addClass('fa-pause')
    }
})

$(window).on('scroll',function(){
    var sct = $(this).scrollTop()
    if( sct>10 ){
        $('#header .headerbottombg').addClass('on')
    } else {
        $('#header .headerbottombg').removeClass('on')
    } 
})

 
