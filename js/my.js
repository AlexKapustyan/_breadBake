$(document).ready(function () {

	$('.navbar-toggler').click(function () { //===change the background of the dropdown navigation menu
		$('.navbar').toggleClass('darck');
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
		if (scrolled > 500) {
			$(".navbar").css({ "background": "rgba(0, 0, 0, 0.521)" })
			$("header .container").css({ "max-width": "85%" })
			$("header .container").css({ "padding": "1rem 20rem" })
		}
		if (500 > scrolled) {
			$(".navbar").css({ "background": "rgba(0, 0, 0, 0)" })
			$("header .container").css({ "max-width": "960px" })
			$("header .container").css({ "padding": "4.0625rem 0" })
		}
	}
});

