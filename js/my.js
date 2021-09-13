$(document).ready(function () {

	$('.navbar-toggler').click(function () { //===change the background of the dropdown navigation menu
		$('.navbar').toggleClass('darck');
	});

	$('.navbar-nav a').click(function () { //===change the background of the dropdown navigation menu
		$('.navbar-collapse').removeClass('show');
		$('.navbar').removeClass('darck');
	});
});

