$(document).ready(function () {

	//===change the background of the dropdown navigation menu===//
	$('.navbar-toggler').click(function () {
		$('.navbar').toggleClass('darck');
	});

	//===remove the background and hide the drop-down menu by clicking on the navigation link===//
	$('.navbar-nav a').click(function () {
		$('.navbar-collapse').removeClass('show');
		$('.navbar').removeClass('darck');
	});

	//===changing the background and padding of the header when scrolling the page===//
	var scrolled;
	window.onscroll = function () {
		scrolled = window.pageYOffset || document.documentElement.scrollTop;
		if (scrolled > 50) {
			$(".navbar").css({ "background": "rgba(0, 0, 0, 0.85)" });
			$(".navbar").css({ "max-width": "100%" });
			$(".navbar").css({ "padding": "1rem 5rem" });
		}
		if (50 > scrolled) {
			$(".navbar").css({ "background": "rgba(0, 0, 0, 0)" });
			$(".navbar").css({ "max-width": "1170px" });
			$(".navbar").css({ "padding": "3.4rem 1.58rem" });
		}	
	}
});

