
$('.slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000
});



$('.customSlider').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  autoplay: false,
  speed: 900,
  nextArrow: '<button class="btn btn-light arrowBtn nextBtn"><i class="fa fa-angle-right"></i></button>',
  prevArrow: '<button class="btn btn-light arrowBtn prevBtn"><i class="fa fa-angle-left"></i></button>'
});




$('.benifits .card').mouseenter(function () {
  $('.benifits .card img, .benifits .card p ').css("filter", "blur(5px)")
  $(this).children('img').css("filter", "blur(0)")
  $(this).children('.card-body').children('p').css("filter", "blur(0)")
  $(this).children('img').css("transform", "scale(1.2)")
  $('.benifits .card .card-body').removeClass('acctive')
  $(this).children('.card-body').addClass('acctive')
})
$('.benifits .card').mouseleave(function () {
  $(this).children('img').css("transform", "scale(1)")
  $(this).children('.card-body').removeClass('acctive')
  $('.benifits .card img, .benifits .card p ').css("filter", "blur(0)")
})


var c = 0;

$('.btn.btn-light.playBtn.slick-arrow').click(function () {
  c++
  console.log(c)
  $('.customSlider').slick('refresh');
  $('.sliderHide').hide()
  $('.sliderShow').css("flex", "0 0 100%")
  $('.customSlider').css("transform", "scale(1)").css("top", "").css("right", "0")
  $('.btn.btn-light.playBtn.slick-arrow').css("transform", "scale(1.2) translatey(-50%)").css("left", "unset").css("right", "40px")
})


$('.Slider_close').click(function () {
  $('.customSlider').slick('refresh');
  $('.sliderHide').show()
  $('.sliderShow').css("flex", "0 0 auto").css("width", "58.33333333%")
  $('.customSlider').css("transform", "scale(1.7)").css("top", "-37px").css("right", "-80%")
  $('.btn.btn-light.playBtn.slick-arrow').css("transform", "scale(0.7) translate(-50%,-50%)").css("left", "50%").css("right", "unset")
})


$('.btns.tabBtns button').click(function () {
  $('.btns.tabBtns button').removeClass('active')
  $(this).addClass('active')
})


$('.tbBtn').click(function () {
  $('.tabc').hide(100)
})
$('.tbBtn1').click(function () {
  $('.monthly').show(100)
})
$('.tbBtn2').click(function () {
  $('.quaterly').show(100)
})
$('.tbBtn3').click(function () {
  $('.yearly').show(100)
})


$('.allBtn').click(function () {
  $('.all').hide(200)
  $('.all').show(200)
})

$('.speechBtn').click(function () {
  $('.all').hide(200)
  $('.speech').show(200)
})

$('.artificalBtn').click(function () {
  $('.all').hide(200)
  $('.artificial').show(200)
})

$('.gamingBtn').click(function () {
  $('.all').hide(200)
  $('.gaming').show(200)
})

$('.updatesBtn').click(function () {
  $('.all').hide(200)
  $('.updates').show(200)
})

$('.newBtn').click(function () {
  $('.all').hide(200)
  $('.new').show(200)
})

$('.softwareBtn').click(function () {
  $('.all').hide(200)
  $('.software').show(200)
})



