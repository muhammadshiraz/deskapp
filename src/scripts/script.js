jQuery(document).ready(function(){
	"use strict";

	// tooltip init
	$('[data-toggle="tooltip"]').tooltip()

	// popover init
	$('[data-toggle="popover"]').popover()

	// sidebar menu icon
	$('.menu-icon, [data-toggle="left-sidebar-close"]').on('click', function(){
		//$(this).toggleClass('open');
		$('.left-side-bar').toggleClass('open');
		$('.mobile-menu-overlay').toggleClass('show');
	});	

	var w = $(window).width();
	$(document).on('touchstart click', function(e){
		if($(e.target).parents('.left-side-bar').length == 0 && !$(e.target).is('.menu-icon, .menu-icon img'))
		{
			$('.left-side-bar').removeClass('open');
			$('.menu-icon').removeClass('open');
			$('.mobile-menu-overlay').removeClass('show');
		};
	});
	$(window).on('resize', function() {
		var w = $(window).width();
		if ($(window).width() > 1200) {
			$('.left-side-bar').removeClass('open');
			$('.menu-icon').removeClass('open');
			$('.mobile-menu-overlay').removeClass('show');
		}
	});

	// sidebar menu Active Class
	$('#accordion-menu').each(function(){
		var vars = window.location.href.split("/").pop();
		$(this).find('a[href="'+vars+'"]').addClass('active');
	});

	$( "#accordion-menu li" ).on("click", function() {
		$("#accordion-menu li").removeClass('active');
  		$(this).addClass('active');
	});

	$( "#accordion-menu li img" ).on("click", function() {
		$("#accordion-menu li img").addClass('op0-5');
  		$(this).removeClass('op0-5');
	});

	$( "#agenda-card-header .icon-copy" ).on("click", function() {
  		$(this).toggleClass('rotate');
		$("#agenda-content").slideToggle();
	});

	$.get("https://ipinfo.io", function (response) {
		$("#country").html(response.country + ", " + response.region);
		$("#continent").html(response.timezone);
	}, "jsonp");
});