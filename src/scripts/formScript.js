function formScript() {

	var areas = document.querySelectorAll('.small, textarea');

	for (var i = 0; i < areas.length; i++) {
		areas[i].addEventListener('focus', isFocused);
		areas[i].addEventListener('blur', noFocus);
	}

	function isFocused() {
		for (var j = 0; j < areas.length; j++) {
			if (areas[j] !== this) {
				areas[j].classList.add('blur');
			}
		}
	}

	function noFocus() {
		var nothingFocused = true;
		for (var k = 0; k < areas.length; k++) {
			if (areas[k] === document.activeElement) {
				nothingFocused = false;
				break;
			}
		}
		if (nothingFocused) {
			for (var l = 0; l < areas.length; l++) {
				areas[l].classList.remove('blur');
			}
		}
	}
}
window.formScript = formScript;