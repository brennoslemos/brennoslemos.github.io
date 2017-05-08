$('.mobile-btn').click(function(){
	$(this).toggleClass('active');
	$('.mobile-menu').toggleClass('active');
});

$(window).scroll(function() {
      var topo = $(window).scrollTop();
      if (topo > 100) {
          $('.menu').css({"background-color": "#161616"});
          $('.nav.mobile-menu.active').css({"background-color": "##161616"});
      } else {
        $('.menu').css({"background-color": "transparent"});
        $('.nav.mobile-menu.active').css({"background-color": "transparent"});
      }
  });

Visibility.onVisible(function(){
	setTimeout(function () {
		$(".intro .logo").addClass("animated fadeInUpBig");
	}, 400);
	
  setTimeout(function () {
		$(".intro h1").addClass("animated fadeInUpBig");
	}, 800);
  
  setTimeout(function () {
		$(".intro h2").addClass("animated fadeInUpBig");
	}, 1200);
  
  setTimeout(function () {
		$(".intro-interna .icone-intro-interna").addClass("animated fadeInLeft");
	}, 400);
	
  setTimeout(function () {
		$(".intro-interna h1").addClass("animated fadeInLeft");
	}, 800);
  
  setTimeout(function () {
		$(".intro-interna p").addClass("animated fadeInLeft");
	}, 1200);
});

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout: 2000,
    autoplayHoverPause:true,
    margin:10,
    center:true,
    stagePadding:25,
    navigationText: ["<i class='fa fa-angle-left'>","<i class='fa fa-angle-right'>"],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            loop:true,
            autoplay:true,
            autoplayTimeout: 2000,
            autoplayHoverPause:true,
            center:true,
            stagePadding:25
        },
        768:{
            items:3,
            nav:true,
            loop:true,
            autoplay:true,
            autoplayTimeout: 2000,
            autoplayHoverPause:true,
            loop:true,
            center:true,
            navigationText: ["<img src='../img/back.png'>","<img src='../img/next.png>"],
            stagePadding:25
        },
        960:{
            items:5,
            nav:true,
            loop:true,
            autoplay:true,
            autoplayTimeout: 2000,
            autoplayHoverPause:true,
            navigationText: ["<img src='../img/back.png'>","<img src='../img/next.png>"],
            margin:10,
            center:true,
            stagePadding:25
        }
    }
    
})
  $( ".owl-prev").html('<i class="fa fa-2x fa-angle-left"></i>');
  $( ".owl-next").html('<i class="fa fa-2x fa-angle-right"></i>');
});

$('.menu-nav a[href^="#"]').click(function(e){
  e.preventDefault();
  var id = $(this).attr('href'),
      menuHeight = $('.menu').outerHeight();
      targetOffset = $(id).offset().top;
  
  $('html, body').animate({
    scrollTop: targetOffset - menuHeight
  }, 500);
});


