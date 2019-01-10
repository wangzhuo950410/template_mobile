$(function() {
	var ysheight = 604; //优势最高的一个slide的高度
    var banner = new Swiper('.banner .swiper-container', {
		autoplay:3000,
		speed:1000,
		autoplayDisableOnInteraction : false,
		loop:true,
		centeredSlides : true,
		slidesPerView:1,
		slidesOffsetBefore:40,
		spaceBetween:-40,
		width:560,
        on: {
            slideChangeTransitionStart: function() {
                for (i = 0; i < this.slides.length; i++) {
                    var slide = this.slides.eq(i);
                    if (i == this.activeIndex) {
                        slide.transform('scale(1)');
                    } else {
                        slide.transform('scale(0.8)');
                    }

                }
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
	
    var ys = new Swiper('.ys_qh .swiper-container', {
        initialSlide: 3,
		autoHeight: true, //高度随内容变化
        autoplay: true,
        direction: 'vertical',
        watchSlidesProgress: true,
        direction: 'vertical',
        height: ysheight,
        on: {
            progress: function(progress) {
                for (i = 0; i < this.slides.length; i++) {
                    var slide = this.slides.eq(i);
                    var slideProgress = this.slides[i].progress;
                    modify = 1;
                    if (Math.abs(slideProgress) > 1) {
                        modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
                    }
                    translate = slideProgress * (ysheight*0.92) + 'px';  //0.9为每个slide的间距，越小间距越大，等于1间距为0，取值范围0.1~1
                    scale = 1 - Math.abs(slideProgress) / 10;
                    zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
                    slide.transform('translateY(' + translate + ') scale(' + scale + ')');
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
    });
    var Case = new Swiper('.al_lb .swiper-container', {
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            loop: true,
        }
    });
	
	var Kh = new Swiper('.kh_tw .swiper-container', {
        spaceBetween: 30,
        pagination: {
           
            clickable: true,
            loop: true,
        }
    });
	
	
    var tabsNews = new Swiper('#tabs-news', {
        speed: 500,
        parallax: true,
        on: {
            slideChangeTransitionStart: function() {
                $(".news .tabs .active").removeClass('active');
                $(".news .tabs a").eq(this.activeIndex).addClass('active');
            }
        }
    });
});

new Inertia(document.getElementById('kefu-ball'));
