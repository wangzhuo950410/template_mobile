	$(function() {
	  var banner = new Swiper('.banner .swiper-container ', {
	    slidesPerView: 'auto',
	    spaceBetween: 20,
	    autoplay: true,
	  });

	});

	// 产品滚动 
	$(function() {


	  var mySwiper2 = new Swiper('#topProducts', {
	    watchSlidesProgress: true,
	    watchSlidesVisibility: true,
	    slidesPerView: 3,
	    navigation: {
	      nextEl: '.swiper-button-next',
	      prevEl: '.swiper-button-prev',
	    },
	    on: {
	      tap: function() {
	        mySwiper3.slideTo(mySwiper2.clickedIndex)
	      }
	    }
	  })
	  var mySwiper3 = new Swiper('#swiper-container3', {

	    on: {
	      slideChangeTransitionStart: function() {
	        updateNavPosition()
	      }
	    }

	  })

	  function updateNavPosition() {
	    $('#topProducts .active-nav').removeClass('active-nav')
	    var activeNav = $('#topProducts .swiper-slide').eq(mySwiper3.activeIndex).addClass('active-nav');


	    if (!activeNav.hasClass('swiper-slide-visible')) {
	      console.log(1);
	      if (activeNav.index() > mySwiper2.activeIndex) {
	        console.log(2);
	        var thumbsPerNav = Math.floor(mySwiper2.width / activeNav.width()) - 1
	        mySwiper2.slideTo(activeNav.index() - thumbsPerNav)
	      } else {
	        console.log(3);
	        mySwiper2.slideTo(activeNav.index())
	      }
	    }
	  }


	});

	// 优势


	$(function() {
				$('.ys .left-swiper .swiper-wrapper').html($('.ys .current-swiper .swiper-wrapper').html());
				$('.ys .left-swiper .swiper-wrapper').prepend($('.ys .left-swiper .swiper-wrapper .swiper-slide').last())
				$('.ys .right-swiper .swiper-wrapper').html($('.ys .left-swiper .swiper-wrapper').html());
				$('.ys .right-swiper .swiper-wrapper').prepend($('.ys .right-swiper .swiper-wrapper .swiper-slide').last())
				var currentSwiper = new Swiper('.ys .current-swiper', {
					loop: true,
					pagination: {
						el: '.ys .swiper-pagination',
						type: 'fraction',
					},
					   navigation: {
	      nextEl: '.swiper-button-next',
	      prevEl: '.swiper-button-prev',
	    }

				});
				var leftSwiper = new Swiper('.ys .left-swiper', {
					loop: true,
					simulateTouch: false
				});
				var rightSwiper = new Swiper('.ys .right-swiper', {
					loop: true,
					simulateTouch: false
				});
		

		currentSwiper.controller.control = [leftSwiper, rightSwiper];

			});


	// 产品滚动 结束 


	// 案例 

	$(function() {

	  var tabsCase = new Swiper('#tabs-case', {
	    speed: 500,
	    parallax: true,

	  });
	});
	// 案例名称



	// 案例 

	$(function() {

	  var tabsKehu = new Swiper('#tabs-kehu', {
	    speed: 500,
	    parallax: true,

	  });
	});
	// 案例名称


  // 新闻
  $(function() {
      var tabsNews = new Swiper('#tabs-news', {
          speed: 500,
          parallax : true,
          on: {
            slideChangeTransitionStart: function() {
              $(".news .tabs .active").removeClass('active');
              $(".news .tabs a").eq(this.activeIndex).addClass('active');
            }
          }
        });
  });
  // 新闻结束

 
	new Inertia(document.getElementById('kefu-ball'));