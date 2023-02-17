(function($) {
    "use strict";

	
		
		
		/* ----------------------------------------------------------- */
		/*  Back to top
		/* ----------------------------------------------------------- */

		$(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                 $('.backtotop').fadeIn();
            } else {
                 $('.backtotop').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('.backto').on('click', function () {
             $('.backtotop').tooltip('hide');
             $('body,html').animate({
                  scrollTop: 0
             }, 800);
             return false;
        });

		/*--------------------------------------------
            Search Popup
        ---------------------------------------------*/
        var bodyOvrelay =  $('#body-overlay');
        var searchPopup = $('#search-popup');

        $(document).on('click','#body-overlay',function(e){
            e.preventDefault();
        bodyOvrelay.removeClass('active');
            searchPopup.removeClass('active');
        });

        $(document).on('click','.search-box-btn',function(e){
            e.preventDefault();
            searchPopup.addClass('active');
        bodyOvrelay.addClass('active');
        });	

        

		jQuery('.mainmenu ul.theme-main-menu').slicknav({
            allowParentLinks: true,
			prependTo: '.liondar-responsive-menu',
			closedSymbol: "&#8594",
			openedSymbol: "&#8595",
        });



  var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    mousewheel: true,
    keyboard: true,
  });


if($('.menu-sidebar').length){
    //Show Form
    $('.menu-sidebar button').on('click', function(e) {
        e.preventDefault();
        $('body').toggleClass('side-content-visible');
    });
    //Hide Form
    $('.hidden-bar .inner-box .cross-icon,.form-back-drop,.close-menu').on('click', function(e) {
        e.preventDefault();
        $('body').removeClass('side-content-visible');
    });
}


jQuery(window).load(function() {
    jQuery("#preloader").fadeOut();
});



/* ----------------------------------------------------------- */
  /*  Video popup
/* ----------------------------------------------------------- */

  if ($('.video-play-btn').length > 0) {
   $('.video-play-btn').magnificPopup({
       type: 'iframe',
       mainClass: 'mfp-with-zoom',
       zoom: {
           enabled: true, // By default it's false, so don't forget to enable it

           duration: 300, // duration of the effect, in milliseconds
           easing: 'ease-in-out', // CSS transition easing function

           opener: function (openerElement) {
               return openerElement.is('img') ? openerElement : openerElement.find('img');
           }
       }
   });
}



  jQuery("ul.tab-custom-dropdown-nav li a").click(function(){
    jQuery("a.dropdown-toggle:first-child").text($(this).text());
    jQuery("a.dropdown-toggle:first-child").val($(this).text());
  });


	/* ----------------------------------------------------------- */
		/*  Sticky Header
	/* ----------------------------------------------------------- */
	
	// $(window).on('scroll', function(event) {
 //        var scroll = $(window).scrollTop();
 //        if (scroll < 120) {
 //            $(".stick-top").removeClass("sticky");
 //        } else {
 //            $(".stick-top").addClass("sticky");
 //        }
 //    });

    var windowOn = $(window);

        windowOn.on('scroll', function () {
        var scroll = windowOn.scrollTop();
        if (scroll < 350) {
            $("#theme-header-one").removeClass("sticky");
        } else {
            $("#theme-header-one").addClass("sticky");
        }
    });




	
})(jQuery);