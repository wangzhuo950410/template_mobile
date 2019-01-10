			$(function() {
				var ban = new Swiper('.ban', {
					slidesPerView: 'auto',
					spaceBetween: 30,
					loop:true,
				});

			});

			$(function() {
				var ho1c2 = new Swiper('.hon1c3', {
					slidesPerView: 'auto',
					spaceBetween: 20,
				});

			});

			$(function() {
				var case1 = new Swiper('.case2', {
					slidesPerView: 'auto',
					spaceBetween: 0,
				});

			});


var ys3 = new Swiper('.ys2',{
  effect : 'flip',
})

	var news = new Swiper('.newscon', {
					speed: 500,
					parallax : true,
					on: {
						slideChangeTransitionStart: function() {
							$(".news .newsbt .active").removeClass('active');
							$(".news .newsbt a").eq(this.activeIndex).addClass('active');
						}
					}
				});

				
			new Inertia(document.getElementById('kefu-ball'));


		


