const swiper1 = document.querySelector(".slider-container"),
	swiper2 = document.querySelector('.swiper-container'),
	burger = document.querySelector(".burger"),
	close = document.querySelector(".menu__close"),
	menu = document.querySelector(".menu"),
	playButtonFirst = document.querySelectorAll('.main-slider__play');


let swiperSlider1 = new Swiper(swiper1, {
	centeredSlides: true,
	slidesPerView: "auto",
	loop: true,
	spaceBetween: 105,
});

let swiperSlider2 = new Swiper(swiper2, {
	centeredSlides: true,
	slidesPerView: 1,
	loop: true,
	spaceBetween: 10,
	fadeEffect: {
		crossFade: true,
	},
	effect: "fade",
	navigation: {
		nextEl: ".btn-right",
		prevEl: ".btn-left",
	},
});

swiperSlider2.on("transitionEnd", function () {
	let videos = document.querySelectorAll('.first__slider video');
	videos.forEach((el) => {
		el.pause();
		el.currentTime = 0;
	});
	playButtonFirst.forEach((el) => {
		el.style.display = "block";
	});
});

burger.addEventListener('click', () => {
	menu.classList.add("menu--visible");
});

close.addEventListener('click', () => {
	menu.classList.remove("menu--visible");
});


playButtonFirst.forEach((el) => {
	el.addEventListener('click', (e) => {
		let video = e.currentTarget.closest('.main-slider__media').querySelector('video');
		video.play();
		e.currentTarget.style.display = 'none';
		setTimeout(() => {
			video.volume = 1;
		}, 1000);
	});
});
