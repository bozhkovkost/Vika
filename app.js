$(function() {

	let header = $("#header");
	let intro = $("#header__link");
	let headerH = header.innerHeight();
	let scrollPos = $(window).scrollTop();
   let nav = $("#nav");
   let navToggle = $("#navToggle");


	checkScroll (scrollPos, headerH)

	$(window).on("scroll resize", function() {
		headerH = header.innerHeight();
		scrollPos = $(this).scrollTop();

		checkScroll (scrollPos, headerH)
	})

	function checkScroll (scrollPos, headerH) {
		if (scrollPos > headerH) {
			intro.addClass("fixed");
		} else {
			intro.removeClass("fixed");
		}
	}


    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        console.log(elementOffset);

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 70
        }, 700);
    });

    /* Nav Toggle */
    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });



});
