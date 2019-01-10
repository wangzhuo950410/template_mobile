
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

				var tabsProduct = new Swiper('#tabs-product', {
					speed: 500,
					parallax : true,
					on: {
						slideChangeTransitionStart: function() {
							$(".product-center .tabs .active").removeClass('active');
							$(".product-center .tabs a").eq(this.activeIndex).addClass('active');
						}
					}
				});

			var bannerSwiper = new Swiper('.banner-swiper', {
					loop: true,
					pagination: {
						el: '.banner .banner-pagination',
					}
				});

					var ys_bg = new Swiper('.ys_bg .swiper-container', {
						slidesPerView:'auto',
					spaceBetween: 25,
					loop: true,
					effect: 'flip',
					//autoplay: true,
					pagination: {
						el: '.ys_bg .swiper-pagination'
					}

				});

					$(function() {
				$('.anli_cont .left-swiper .swiper-wrapper').html($('.anli_cont .current-swiper .swiper-wrapper').html());
				$('.anli_cont .left-swiper .swiper-wrapper').prepend($('.anli_cont .left-swiper .swiper-wrapper .swiper-slide').last())
				$('.anli_cont .right-swiper .swiper-wrapper').html($('.anli_cont .left-swiper .swiper-wrapper').html());
				$('.anli_cont .right-swiper .swiper-wrapper').prepend($('.anli_cont .right-swiper .swiper-wrapper .swiper-slide').last())
				var currentSwiper = new Swiper('.current-swiper', {
					loop: true,
					pagination: {
						el: '.anli_cont .swiper-pagination',
					}
				});
				var leftSwiper = new Swiper('.left-swiper', {
					loop: true,
					simulateTouch: false
				});
				var rightSwiper = new Swiper('.right-swiper', {
					loop: true,
					simulateTouch: false
				});
				currentSwiper.controller.control = [leftSwiper, rightSwiper];
			});

			//下拉动画
	
	new Inertia(document.getElementById('kefu-ball'));
			




