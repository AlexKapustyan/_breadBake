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
});

