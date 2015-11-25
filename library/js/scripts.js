$(function() {
	var windowWidth = $(window).width();
	var $header = $('#header');
	var $mainNav = $('#main-nav');
	var $intro = $('#intro');
	var $page1 = $('#page1');
	var $page2 = $('#page2');
	var $page3 = $('#page3');
	var $page4 = $('#page4');
	var $page5 = $('#page5');
	var $bulletNav = $('.bullet-nav');

	$(window).resize(function() {
		if ($(window).width() !== windowWidth) {
			window.clearTimeout(window.resizeEvent);
			window.resizeEvent = window.setTimeout(function () {
				placeDots();
			}, 10);

			if (windowWidth <= 800 && $bulletNav.is(':visible')) {
				$bulletNav.hide();
			} else if(window.scrollY >= $page1.offset().top) {
				$bulletNav.show();
			}

			windowWidth = $(window).width();
		}
	});

	mobileNavigation();

	window.setTimeout(function () {
		placeDots();
	}, 100);

	function placeDots() {
		$('.dot').each(function() {
			placeDot($(this));
		});
	}

	function placeDot($dot) {
		// The elements we are calculating our values
		var $fromElement = $($dot.attr('data-dot-from'));
		var $untilElement = $($dot.attr('data-dot-to'));

		// Removing previously added top value of the $untilElement. This is
		// useful in case of resize event.
		$untilElement.css('top', 0);

		// Calculating the values the dots should be
		var from = $fromElement.offset().top + $fromElement.height() + 6;
		var until = $untilElement.offset().top;
		var height = until - from;

		var diff = height % 10;
		height = height - diff;

		if (diff !== 0) {
			$untilElement.css('top', -diff);
		}

		$dot.css({
			'top': from,
			'height': height
		});
	}

	function mobileNavigation() {

		$('.nav-burger').click(function () {
			if ($mainNav.is(':visible')) {
				$(this).removeClass('active');
				$mainNav.slideUp();
			} else {
				$(this).removeClass('active');
				$(this).addClass('active');
				$mainNav.slideDown();
			}
		});
	}

	function updateBulletNav(i) {
		var $currentBullet = $bulletNav.find('li:eq(' + i + ')');
		if ($bulletNav.find('li').hasClass('active')) {
			$bulletNav.find('li').removeClass('active');
		}
		$currentBullet.addClass('active');
	}

	$bulletNav.find('li').click(function() {
		var i = $(this).index();
		var scrollTo = $($('.main-section').get(i)).offset().top;
		$('html, body').animate({
			scrollTop: scrollTo,
		}, 1000);
	});

	$('#intro-action2').click(function() {
		$('html, body').animate({
			scrollTop: $page1.offset().top - $header.height()
		}, 1000)
	});

	var i = 0;
	// Init the active bullet
	updateBulletNav(i);

	$intro.waypoint(function(direction) {
		if (direction === "down") {
			$header.css('display', 'block');
		} else {
			$header.css('display', 'none');
		}
	}, {
		offset: -100
	});

	$page1.waypoint(function(direction) {
		if (direction === "down") {
			$header.addClass('appear bg-blue');
			if (windowWidth >= 800) {
				$bulletNav.show();
			}
			updateBulletNav(++i);
		} else {
			$header.removeClass('appear bg-blue');
			if (windowWidth < 768 && $mainNav.is(':visible')) {
				window.setTimeout(function() {
					$mainNav.hide();
				}, 200);
			}

			if (windowWidth >= 800) {
				$bulletNav.fadeOut();
			}
			updateBulletNav(--i);
		}
	}, {
		offset: $header.outerHeight(),
	});

	$page2.waypoint(function(direction) {
		if (direction === "down") {
			$header.removeClass('bg-blue');
			$header.addClass('bg-christalle');
			updateBulletNav(++i);
		} else {
			$header.removeClass('bg-christalle');
			$header.addClass('bg-blue');
			updateBulletNav(--i);
		}
	}, {
		offset: $header.outerHeight(),
	});

	$page3.waypoint(function(direction) {
		if (direction === "down") {
			$header.removeClass('bg-christalle');
			$header.addClass('bg-blackberry');
			updateBulletNav(++i);
		} else {
			$header.removeClass('bg-blackberry');
			$header.addClass('bg-christalle');
			updateBulletNav(--i);
		}
	}, {
		offset: $header.outerHeight(),
	});

	$page4.waypoint(function(direction) {
		if (direction === "down") {
			$header.removeClass('bg-blackberry');
			$header.addClass('bg-purple');
			updateBulletNav(++i);
		} else {
			$header.addClass('bg-blackberry');
			$header.removeClass('bg-purple');
			updateBulletNav(--i);
		}
	}, {
		offset: $header.outerHeight(),
	});

	$page5.waypoint(function(direction) {
		if (direction === "down") {
			$header.removeClass('bg-purple');
			$header.addClass('bg-brown');
			updateBulletNav(++i);
		} else {
			$header.removeClass('bg-brown');
			$header.addClass('bg-purple');
			updateBulletNav(--i);
		}
	}, {
		offset: $header.outerHeight(),
	});
});
