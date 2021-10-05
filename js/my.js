$(document).ready(function () {

	$('.navbar-toggler').click(function () { //===change the background of the dropdown navigation menu
		$('.fixed-top').toggleClass('darck');
	});

	$('.navbar-toggler').click(function () { //===change the background of the dropdown navigation menu
		$('.navbar').toggleClass('fixed-top');

	});

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
			$(".navbar").css({ "background": "rgba(0, 0, 0, 0.7)" });
			$("header .container").css({ "max-width": "100%" });
			$("header .container").css({ "padding": "1rem 5rem" });
		}
		if (50 > scrolled) {
			$(".navbar").css({ "background": "rgba(0, 0, 0, 0)" });
			$("header .container").css({ "max-width": "1170px" });
			$("header .container").css({ "padding": "3.4rem 0.9375rem" });
		}
		var widthWind = $(this).width();
		if (widthWind <= 991) {
			$("header .container").css({ "padding": "1rem 1.8rem" });			
		}
	}
});

