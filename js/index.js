			$(function(){
	var certifySwiper = new Swiper('#banner .swiper-container', {
	watchSlidesProgress: true,
	slidesPerView: 'auto',
	centeredSlides: true,
	loop: true,
	loopedSlides: 3,
	autoplay: true,
	on: {
		progress: function(progress) {
			for (i = 0; i < this.slides.length; i++) {
				var slide = this.slides.eq(i);
				var slideProgress = this.slides[i].progress;
				modify = 1;
				if (Math.abs(slideProgress) > 1) {
					modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
				}
				translate = slideProgress * modify * 260 + 'px';
				scale = 1 - Math.abs(slideProgress) / 5;
				zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
				slide.transform('translateX(' + translate + ') scale(' + scale + ')');
				slide.css('zIndex', zIndex);
				slide.css('opacity', 1);
				if (Math.abs(slideProgress) > 3) {
					slide.css('opacity', 0);
				}
			}
		},
		setTransition: function(transition) {
			for (var i = 0; i < this.slides.length; i++) {
				var slide = this.slides.eq(i)
				slide.transition(transition);
			}

		}
	}

})
			});
			$(function() {
				var hotProduct = new Swiper('.pro .menu-content .swiper-container ', {
					slidesPerView: 'auto',
					spaceBetween: 20,
					autoplay: true
//					on: {
//						touchEnd: function(event) {
//							var width = -(this.slides.css('width').replace('px', '') * (this.slides.length - 1) + 195 - this.slides.css('width').replace('px', '') * 2);
//							var href = this.slides.find('.last-slide a').attr('href');
//							if(width > this.translate) {
//								window.location.href = href;
//								this.slides.find('.last-slide a').text('即将跳转')
//							}
//						},
//						touchMove: function(event) {
//							var width = -(this.slides.css('width').replace('px', '') * (this.slides.length - 1) + 195 - this.slides.css('width').replace('px', '') * 2);
//							var href = this.slides.find('.last-slide a').attr('href');
//							if(width > this.translate) {
//								this.slides.find('.last-slide a').text('即将跳转')
//							} else {
//								this.slides.find('.last-slide a').text('左滑查看更多')
//							}
//						}
//					}
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
				var ys = new Swiper('.ys .swiper-container', {
					loop: true,
					effect: 'flip',
					//autoplay: true,
					pagination: {
						el: '.ys .swiper-pagination',
					}

				});
				var caseShow = new Swiper('.adv .swiper-container', {
					watchSlidesProgress: true,
					slidesPerView: 'auto',
					centeredSlides: false,
					loop: true,
					loopedSlides: 4,
					//autoplay: true,
					on: {
						progress: function(progress) {
							for(i = 0; i < this.slides.length; i++) {
								var slide = this.slides.eq(i);
								var slideProgress = this.slides[i].progress;
								modify = 1;
								if(Math.abs(slideProgress) > (-1)) {
									modify = (Math.abs(slideProgress) - 1) * 0.2+1;
								}
								translate = slideProgress * modify * 400+ 'px';
								scale = 1 - Math.abs(slideProgress) / 15;
								zIndex = 999 - Math.abs(Math.round(15 * slideProgress));
								slide.transform('translateX(' + translate + ') scale(' + scale + ')');
								slide.css('zIndex', zIndex);
								slide.css('opacity', 1);
								if(Math.abs(slideProgress) > 4) {
									slide.css('opacity', 0);
								}
							}
						},
						setTransition: function(transition) {
							for(var i = 0; i < this.slides.length; i++) {
								var slide = this.slides.eq(i)
								slide.transition(transition);
							}

						}
					}

				});
				var swiper = new Swiper('.khall .swiper-container', {
      				effect: 'flip'
    			});
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
			var wow = new WOW({
				boxClass: 'wow',
				animateClass: 'animated',
				offset: 0,
				mobile: true,
				live: true
			});
			wow.init();
     		new Inertia(document.getElementById('kefu-ball'));