// spinScript

$(document).ready(function() {
	$('.social a').click(function(event) {
	    event.preventDefault();
	    const img = $(this).find('img');
	    const link = $(this).attr('href');
	    img.addClass('spin');
	    setTimeout(function() {
		window.open(link, '_blank');
		img.removeClass('spin');
	    }, 500);
	});
    });