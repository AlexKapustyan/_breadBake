$(document).ready(function () {

	$('.navbar-toggler').click(function () { //===change the background of the dropdown navigation menu
		$('.fixed-top').toggleClass('darck');
	});

	// $('.navbar-toggler').click(function () { //===change the background of the dropdown navigation menu
	// 	$('.navbar').toggleClass('fixed-top');

	// });

	$('.navbar-nav a').click(function () { //===remove the background and hide the drop-down menu by clicking on the navigation link
		$('.navbar-collapse').removeClass('show');
		$('.navbar').removeClass('darck');
	});

	$('header .navbar-brand').click(function () { //===remove the background and hide the drop-down menu by clicking on the navigation link
		$('.navbar-collapse').removeClass('show');
		$('.navbar').removeClass('darck');
	});

	var scrolled;
	window.onscroll = function () {
		scrolled = window.pageYOffset || document.documentElement.scrollTop;//===changing the background and padding of the header when scrolling the page
		if (scrolled > 50) {
			$(".navbar").css({ "background": "rgba(0, 0, 0, 0.521)" });
			$("header .container").css({ "max-width": "1600px" });
			$("header .container").css({ "padding": "1rem 0.9375rem" });
		}
		if (50 > scrolled) {
			$(".navbar").css({ "background": "rgba(0, 0, 0, 0)" });
			$("header .container").css({ "max-width": "1140px" });
			$("header .container").css({ "padding": "4.0625rem 0.9375rem" });
		}
		var widthWind = $(this).width();
		if (widthWind <= 991) {
			$("header .container").css({ "padding": "1rem 0.9375rem" });
		}
	}



});

