(function ($) {
	"use strict";
	////////////////////////////////////////////////////
	// 03. Search Js
	$(".search-open-btn").on("click", function () {
		$(".search__popup").addClass("search-opened");
	});
	
	$(".search-close-btn").on("click", function () {
		$(".search__popup").removeClass("search-opened");
	});
	
	$(".job-form-open-btn").on("click", function () {
		$(".job__form").slideToggle("job__form");
	});

	$('.it-service-2-item').on('mouseenter', function () {
		$(this).addClass('active').parent().siblings().find('.it-service-2-item').removeClass('active');
	});

	let device_width = window.innerWidth;


	var windowOn = $(window)
	///////////////////////////////////////////////////
	// 01. PreLoader Js
	windowOn.on('load',function () {
		$('#loading').fadeOut(500);
	});

    ///////////////////////////////////////////////////
	// 03. scroll-to-target 
	windowOn.on('scroll', function () {
		var scroll = windowOn.scrollTop();
		if (scroll < 500) {
			$('.scroll-to-target').removeClass('open');

		} else {
			$('.scroll-to-target').addClass('open');
		}
	});
	
	///////////////////////////////////////////////////
	// 04. Scroll Up Js
	if ($('.scroll-to-target').length) {
		$(".scroll-to-target").on('click', function () {
		var target = $(this).attr('data-target');
		// animate
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 1000);
	
		});
	}

	// 04. Scroll Up Js
	if ($('.scroll-to-target-2').length) {
		$(".scroll-to-target-2").on('click', function () {
		var target = $(this).attr('data-target');
		// animate
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 1000);
	
		});
	}
	function smoothSctollTop() {
		$('.smooth a').on('click', function (event) {
			var target = $(this.getAttribute('href'));
			if (target.length) {
				event.preventDefault();
				$('html, body').stop().animate({
					scrollTop: target.offset().top - 150
				}, 1000);
			}
		});
	}
	smoothSctollTop();
	
    ///////////////////////////////////////////////////
	// 05. wow animation
	var wow = new WOW(
		{
		  mobile: true,
		}
	  );
	  wow.init();
	var windowOn = $(window);

	///////////////////////////////////////////////////
	// 06. PreLoader Js
	windowOn.on('load',function() {
		$("#loading").fadeOut(500);

	});

	///////////////////////////////////////////////////
	// 07. Sticky Header Js
	windowOn.on('scroll', function () {
		var scroll = windowOn.scrollTop();
		if (scroll < 400) {
			$("#header-sticky").removeClass("header-sticky");
		} else {
			$("#header-sticky").addClass("header-sticky");
		}
	});

	
	$(window).on('load', function () {

		$('#preloader').delay(350).fadeOut('slow');

		$('body').delay(350).css({ 'overflow': 'visible' });

	})

	////////////////////////////////////////////////////
	// 09. Sidebar Js
	$(".it-menu-bar").on("click", function () {
		$(".itoffcanvas").addClass("opened");
		$(".body-overlay").addClass("apply");
	});
	$(".close-btn").on("click", function () {
		$(".itoffcanvas").removeClass("opened");
		$(".body-overlay").removeClass("apply");
	});
	$(".body-overlay").on("click", function () {
		$(".itoffcanvas").removeClass("opened");
		$(".body-overlay").removeClass("apply");
	});


	if($('.it-menu-content').length && $('.it-menu-mobile').length){
		let navContent = document.querySelector(".it-menu-content").outerHTML;
		let mobileNavContainer = document.querySelector(".it-menu-mobile");
		mobileNavContainer.innerHTML = navContent;
	
		let arrow = $(".it-menu-mobile .has-dropdown > a");
	
		arrow.each(function () {
			let self = $(this);
			let arrowBtn = document.createElement("BUTTON");
			arrowBtn.classList.add("dropdown-toggle-btn");
			arrowBtn.innerHTML = "<i class='fal fa-angle-right'></i>";
			self.append(function () {
			  return arrowBtn;
			});
	
			self.find("button").on("click", function (e) {
			  e.preventDefault();
			  let self = $(this);
			  self.toggleClass("dropdown-opened");
			  self.parent().toggleClass("expanded");
			  self.parent().parent().addClass("dropdown-opened").siblings().removeClass("dropdown-opened");
			  self.parent().parent().children(".it-submenu").slideToggle();
			});
	
		});
	}

	///////////////////////////////////////////////////
	// 10. Magnific Js
	$(".popup-video").magnificPopup({
		type: "iframe",
	});
	
	////////////////////////////////////////////////////
	// 14. magnificPopup Js
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});


	////////////////////////////////////////////////////
	// 11. Data CSS Js
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});

		////////////////////////////////////////////////////
	// 08. Nice Select Js
	$('.it-header-search-category select, .it-shop-area select, .it-checkout-area select, .profile__area select').niceSelect();


	////////////////////////////////////////////////////
	// 12. Counter Js
	if ($(".purecounter").length) {
		new PureCounter({
			filesizing: true,
			selector: ".filesizecount",
			pulse: 2,
		});
		new PureCounter();
	}

	function mediaSize() { 
		/* Set the matchMedia */
		if (window.matchMedia('(min-width: 768px)').matches) {
			const panels = document.querySelectorAll('.col-custom')
			panels.forEach(panel => {
				panel.addEventListener('mouseenter', () => {
					removeActiveClasses()
					panel.classList.add('active')
				})
			})
		
			function removeActiveClasses() {
				panels.forEach(panel => {
					panel.classList.remove('active')
				})
			}

		} else {
		/* Reset for CSS changes â€“ Still need a better way to do this! */
			$(".col-custom ").addClass("active");
		}
	};
	/* Call the function */
	mediaSize();
	/* Attach the function to the resize event listener */
	  window.addEventListener('resize', mediaSize, false); 

	////////////////////////////////////////////////////
	// 13. Swiper Js
	const slider2swiper = new Swiper('.it-slider-2-active', {
		// Optional parameters
		speed:1500,
		slidesPerView: 1,
		loop: true,
		autoplay:true,
		effect:'fade',
		breakpoints: {
			'1400': {
				slidesPerView: 1,
			},
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		navigation: {
			prevEl: '.slider-prev',
			nextEl: '.slider-next',
		},
		
	  });

	  	////////////////////////////////////////////////////
	// 14. Swiper Js
	const projectswiper = new Swiper('.it-project-active', {
		// Optional parameters
		speed:1500,
		slidesPerView: 4,
		spaceBetween: 30,
		loop: true,
		autoplay:true,
		effect:'slide',
		breakpoints: {
			'1600': {
				slidesPerView: 4,
			},
			'1400': {
				slidesPerView: 3,
			},
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		navigation: {
			prevEl: '.project-prev',
			nextEl: '.project-next',
		},
		pagination: {
			el: ".it-project-slider-dots",
			clickable:true,
		  },
		
	  });
	  	////////////////////////////////////////////////////
	// 14. Swiper Js
	const relatedProjectswiper = new Swiper('.it-related-project-active', {
		// Optional parameters
		speed:1000,
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		autoplay:true,
		effect:'slide',
		breakpoints: {
			'1600': {
				slidesPerView: 3,
			},
			'1400': {
				slidesPerView: 3,
			},
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		navigation: {
			prevEl: '.project-prev',
			nextEl: '.project-next',
		},
		pagination: {
			el: ".it-project-slider-dots",
			clickable:true,
		  },
		
	  });

	////////////////////////////////////////////////////
	// 15. Swiper Js
	const teamswiper = new Swiper('.it-team-active', {
		// Optional parameters
		speed:1500,
		loop: true,
		slidesPerView: 3,
        spaceBetween: 30,
		autoplay: true,
		breakpoints: {
			'1400': {
				slidesPerView: 3,
			},
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		pagination: {
			el: ".it-team-slider-dots",
			clickable:true,
		  },
	  });
	////////////////////////////////////////////////////

	////////////////////////////////////////////////////
	// 13. Swiper Js
	const serviceswiper = new Swiper('.it-service-active', {
		// Optional parameters
		speed:1500,
		loop: true,
		slidesPerView: 4,
        spaceBetween: 30,
		autoplay: true,
		roundLengths: true,
		breakpoints: {
			'1400': {
				slidesPerView: 4,
			},
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 4,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 2,
			},
		},
	  });

	  ////////////////////////////////////////////////////
	  // 13. Swiper Js
	  const testiswiper = new Swiper('.it-testimonial-active', {
		  // Optional parameters
		  speed:1500,
		  loop: true,
		  slidesPerView: 1,
		  spaceBetween: 30,
		  autoplay: true,
		  centeredSlides: true,
		  roundLengths: true,
		  breakpoints: {
			  '1400': {
				  slidesPerView: 1,
			  },
			  '1200': {
				  slidesPerView: 1,
			  },
			  '992': {
				  slidesPerView: 1,
			  },
			  '768': {
				  slidesPerView: 1,
			  },
			  '576': {
				  slidesPerView: 1,
			  },
			  '0': {
				  slidesPerView: 1,
			  },
		  },
		  navigation: {
			  prevEl: '.slider-prev',
			  nextEl: '.slider-next',
		  },
		});


	  ////////////////////////////////////////////////////
	  // 13. Swiper Js
	  const test3iswiper = new Swiper('.it-testimonial-active-3', {
		  // Optional parameters
		  speed:1500,
		  loop: true,
		  slidesPerView: 1,
		  spaceBetween: 30,
		  autoplay: true,
		  roundLengths: true,
		  breakpoints: {
			  '1400': {
				  slidesPerView: 1,
			  },
			  '1200': {
				  slidesPerView: 1,
			  },
			  '992': {
				  slidesPerView: 1,
			  },
			  '768': {
				  slidesPerView: 1,
			  },
			  '576': {
				  slidesPerView: 1,
			  },
			  '0': {
				  slidesPerView: 1,
			  },
		  },
		  navigation: {
			  prevEl: '.testimonial-prev',
			  nextEl: '.testimonial-next',
		  },
		});
	  
	////////////////////////////////////////////////////
	// 13. Swiper Js
	const brandswiper = new Swiper('.it-brand-active', {
		// Optional parameters
		speed:15000,
		loop: true,
		slidesPerView: 5,
        spaceBetween: 30,
		autoplay: true,
		breakpoints: {
			'1400': {
				slidesPerView: 5,
			},
			'1200': {
				slidesPerView: 5,
			},
			'992': {
				slidesPerView: 4,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 2,
			},
		},
		
	  });



// testimonial

//   testimonial slick 
if ($(".it-testimonial__slider-active").length > 0) {
	$('.it-testimonial__slider-active').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: false,
		cssEase: 'linear',
		asNavFor: '.it-testimonial__slider-nav',
	});
}

if ($(".it-testimonial__slider-nav").length > 0) {
	$('.it-testimonial__slider-nav').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		asNavFor: '.it-testimonial__slider-active',
		dots: false,
		centerMode: false,
		focusOnSelect: true,
		autoplay: true,
		speed: 100,
		autoplaySpeed: 8000,
		cssEase: 'linear',
		loop: true,
		prevArrow: '<button type="button" class="slick-prev testimonial-2-button-prev"><i class="fa-light fa-arrow-left-long"></i></button>',
		nextArrow: '<button type="button" class="slick-next testimonial-2-button-next"><i class="fa-light fa-arrow-right-long"></i></button>',
		appendArrows: $('.it-testimonial__slider-arrow'),
		responsive: [
			{
				breakpoint: 1400,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				},
			},
			{
				breakpoint: 1200,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				},
			},
			{
				breakpoint: 992,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				},
			},
			{
				breakpoint: 576,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				},
			},
			{
				breakpoint: 0,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				},
			},
			],
	});

}





	$('.it-funtact-item').on('mouseenter', function () {
		$(this).addClass('active').parent().siblings().find('.it-funtact-item').removeClass('active');
	});


	$('.it-service-2-item').on('mouseenter', function () {
		$(this).addClass('active').parent().siblings().find('.it-service-2-item').removeClass('active');
	});

	$('.it-funfact-3-item-box').on('mouseenter', function () {
		$(this).addClass('active').parent().siblings().find('.it-funfact-3-item-box').removeClass('active');
	});

	$('.it-project-3-item-bg').on('mouseenter', function () {
		$(this).addClass('active').parent().siblings().find('.it-project-3-item-bg').removeClass('active');
	});

	// $('.it-project-3-item-bg').on("mouseenter", function () {
	// 	$('.it-project-3-item-bg').addClass('active')
	// });
	// $('.it-project-3-item-bg').on("mouseleave", function () {
	// 	$('.it-project-3-item-bg').removeClass('active')
	// });

	////////////////////////////////////////////////////
	// 14. magnificPopup Js
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});


	// 20. Show Login Toggle Js
	$('#showlogin').on('click', function () {
		$('#checkout-login').slideToggle(900);
	});

	/*-------------------------

		showcoupon toggle function

	--------------------------*/

	$('#showcoupon').on('click', function () {

		$('#checkout_coupon').slideToggle(900);
	});


/*-------------------------

	Create an account toggle function

--------------------------*/

$('#cbox').on('click', function () {

	$('#cbox_info').slideToggle(900);

});



/*-------------------------

	Create an account toggle function

--------------------------*/

$('#ship-box').on('click', function () {

	$('#ship-box-info').slideToggle(1000);

});


	////////////////////////////////////////////////////
	// 15. MagnificPopup video view Js
	$(".popup-video").magnificPopup({
	   type: "iframe",
    });

	////////////////////////////////////////////////////
	//26.isotope
	$('.grid').imagesLoaded(function () {
		// init Isotope
		var $grid = $('.grid').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			masonry: {
				columnWidth: '.grid-item',
			},
			
		});
		// filter items on button click
		$('.masonary-menu').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ 
				filter: filterValue,
				animationOptions: {
					duration: 100,
					easing: "linear",
					queue: true
				}
			});
			
		});
		//for menu active class
		$('.masonary-menu button').on('click', function (event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});

	});	
		
	// 05. Search Js
	$(".accordion-items").on("click", function () {
		$(".accordion-items").toggleClass("open");
	});
	$(".accordion-items").on("click", function () {
		$(".accordion-items").removeClass("open");
	});

	////////////////////////////////////////////////////
	// 16. Cart Quantity Js
	$('.it-cart-minus, .cart-minus').on('click', function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});

	$('.it-cart-plus, .cart-plus').on('click', function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});

	// jarallax
	if ($('.jarallax').length > 0) {
		$('.jarallax').jarallax({
			speed: 0.2,
			imgWidth: 1366,
			imgHeight: 768,
		});
		
	};

	if($('.it-main-menu-content').length && $('.it-main-menu-mobile').length){
	let navContent = document.querySelector(".it-main-menu-content").outerHTML;
	let mobileNavContainer = document.querySelector(".it-main-menu-mobile");
	mobileNavContainer.innerHTML = navContent;


	let arrow = $(".it-main-menu-mobile .has-dropdown > a");

	arrow.each(function () {
		let self = $(this);
		let arrowBtn = document.createElement("BUTTON");
		arrowBtn.classList.add("dropdown-toggle-btn");
		arrowBtn.innerHTML = "<i class='fal fa-angle-right'></i>";

		self.append(function () {
			return arrowBtn;
		});

		self.find("button").on("click", function (e) {
			e.preventDefault();
			let self = $(this);
			self.toggleClass("dropdown-opened");
			self.parent().toggleClass("expanded");
			self.parent().parent().addClass("dropdown-opened").siblings().removeClass("dropdown-opened");
			self.parent().parent().children(".it-submenu").slideToggle();
		});

	});
}


})(jQuery);