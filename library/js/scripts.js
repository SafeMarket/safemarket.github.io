

$(function() {
	var $header = $('#header');
	var $intro = $('#intro');
	var $page1 = $('#page1');
	var $page2 = $('#page2');
	var $page3 = $('#page3');
	var $page4 = $('#page4');
	var $page5 = $('#page5');

	$page1.waypoint(function(direction) {
		if (direction === "down") {
			$header.addClass('appear bg-blue');
		} else {
			$header.removeClass('appear bg-blue');
		}
	}, {
		offset: $header.outerHeight(),
	});

	$page2.waypoint(function(direction) {
		if (direction === "down") {
			$header.removeClass('bg-blue');
			$header.addClass('bg-christalle');
		} else {
			$header.removeClass('bg-christalle');
			$header.addClass('bg-blue');
		}
	}, {
		offset: $header.outerHeight(),
	});

	$page3.waypoint(function(direction) {
		if (direction === "down") {
			$header.removeClass('bg-christalle');
			$header.addClass('bg-blackberry');
		} else {
			$header.removeClass('bg-blackberry');
			$header.addClass('bg-christalle');
		}
	}, {
		offset: $header.outerHeight(),
	});

	$page4.waypoint(function(direction) {
		if (direction === "down") {
			$header.removeClass('bg-blackberry');
			$header.addClass('bg-purple');
		} else {
			$header.addClass('bg-blackberry');
			$header.removeClass('bg-purple');
		}
	}, {
		offset: $header.outerHeight(),
	});

	$page5.waypoint(function(direction) {
		if (direction === "down") {
			$header.removeClass('bg-purple');
			$header.addClass('bg-brown');
		} else {
			$header.removeClass('bg-brown');
			$header.addClass('bg-purple');
		}
	}, {
		offset: $header.outerHeight(),
	});
});
