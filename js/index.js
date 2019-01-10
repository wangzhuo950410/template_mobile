
			$(function() {
				var banner = new Swiper('.banner .swiper-container', {
					initialSlide :3,
					autoplay:true,
					direction : 'vertical',
					watchSlidesProgress: true,
					pagination: {
						el: '.banner .swiper-pagination',
					},
					on: {
						progress: function(progress) {
							for(i = 0; i < this.slides.length; i++) {
								var slide = this.slides.eq(i);
								var slideProgress = this.slides[i].progress;
								modify = 1;
								if(Math.abs(slideProgress) > 1) {
									modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
								}
								translate = slideProgress * 300 + 'px';
								scale = 1 - Math.abs(slideProgress) / 10;
								zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
								slide.transform('translateY(' + translate + ') scale(' + scale + ')');
								slide.css('zIndex', zIndex);
								slide.css('opacity', 1);
								if(Math.abs(slideProgress) > 3) {
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
			});



			$(function() {
				var hotProduct = new Swiper('.hot-product .swiper-container ', {
					slidesPerView: 'auto',
					spaceBetween: 25,
					autoplay:true,

				});



				var reason = new Swiper('.reason .swiper-container', {
					loop: true,
					effect: 'cube',
					autoplay: true,
					navigation: {
					    nextEl: '.swiper-button-next',
					    prevEl: '.swiper-button-prev',
					  },

				});
				var Case = new Swiper('.case  .swiper-container', {
					slidesPerView: 'auto',
					effect: 'coverflow',
					centeredSlides:true,
					initialSlide:1,
					loop:true,
					pagination: {
						el: '.case .swiper-pagination',
					},
					autoplay: true,

				});

				var news = new Swiper('.news  .swiper-container', {
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
			wow.init();
			new Inertia(document.getElementById('kefu-ball'));