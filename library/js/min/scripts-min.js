$(function(){function e(){$(".dot").each(function(){t($(this))})}function t(e){var t=$(e.attr("data-dot-from")),i=$(e.attr("data-dot-to"));i.css("top",0);var s=t.offset().top+t.height()+6,o=i.offset().top,a=o-s,n=a%10;a-=n,0!==n&&i.css("top",-n),e.css({top:s,height:a})}function i(){$(".nav-burger").click(function(){n.is(":visible")?($(this).removeClass("active"),n.slideUp()):($(this).removeClass("active"),$(this).addClass("active"),n.slideDown())})}function s(e){var t=b.find("li:eq("+e+")");b.find("li").hasClass("active")&&b.find("li").removeClass("active"),t.addClass("active")}var o=$(window).width(),a=$("#header"),n=$("#main-nav"),l=$("#intro"),d=$("#page1"),r=$("#page2"),c=$("#page3"),f=$("#page4"),w=$("#page5"),b=$(".bullet-nav");$(window).resize(function(){$(window).width()!==o&&(window.clearTimeout(window.resizeEvent),window.resizeEvent=window.setTimeout(function(){e()},0),$(".dot").slideDown(),o=$(window).width())}),i(),window.setTimeout(function(){e()},100),b.find("li").click(function(){var e=$(this).index(),t=$($(".main-section").get(e)).offset().top;$("html, body").animate({scrollTop:t},1e3)});var u=-1;l.waypoint(function(e){"down"===e?(a.css("display","block"),s(++u)):(a.css("display","none"),s(--u))},{offset:-100}),d.waypoint(function(e){"down"===e?(a.addClass("appear bg-blue"),s(++u)):(a.removeClass("appear bg-blue"),768>o&&n.is(":visible")&&window.setTimeout(function(){n.hide()},200),s(--u))},{offset:a.outerHeight()}),r.waypoint(function(e){"down"===e?(a.removeClass("bg-blue"),a.addClass("bg-christalle"),s(++u)):(a.removeClass("bg-christalle"),a.addClass("bg-blue"),s(--u))},{offset:a.outerHeight()}),c.waypoint(function(e){"down"===e?(a.removeClass("bg-christalle"),a.addClass("bg-blackberry"),s(++u)):(a.removeClass("bg-blackberry"),a.addClass("bg-christalle"),s(--u))},{offset:a.outerHeight()}),f.waypoint(function(e){"down"===e?(a.removeClass("bg-blackberry"),a.addClass("bg-purple"),s(++u)):(a.addClass("bg-blackberry"),a.removeClass("bg-purple"),s(--u))},{offset:a.outerHeight()}),w.waypoint(function(e){"down"===e?(a.removeClass("bg-purple"),a.addClass("bg-brown"),s(++u)):(a.removeClass("bg-brown"),a.addClass("bg-purple"),s(--u))},{offset:a.outerHeight()})});