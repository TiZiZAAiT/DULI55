// Book Now Slide Script


function bookNowSlide () {
	$('.booknowBIG').animate({ bottom: '15%' }, 600, function() {
	    $('.booknowBIG').animate({ backgroundColor: '#aaddff' }, 80, function() {
		$('.booknowBIG').animate({ backgroundColor: '#FFFAC9' }, 80, function() {
		    $('.booknowBIG').animate({ backgroundColor: '#aaddff' }, 80, function() {
			$('.booknowBIG').animate({ backgroundColor: '#FFFAC9' }, 80, function() {
			    $('.booknowBIG').animate({ backgroundColor: '#aaddff' }, 80, function() {
				$('.booknowBIG').animate({ backgroundColor: '#FFFAC9' }, 80, function() {
				    $('.booknowBIG').animate({ backgroundColor: '#aaddff' }, 80, function() {
					$('.booknowBIG').animate({ backgroundColor: '#FFFAC9' }, 80);
				    });
				});
			    });
			});
		    });
		});
	    });
	});
};
window.bookNowSlide = bookNowSlide;