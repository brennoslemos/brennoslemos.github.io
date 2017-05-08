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

