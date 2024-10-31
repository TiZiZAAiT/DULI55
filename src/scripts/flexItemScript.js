function flexItemScript() {

	var boxes = document.querySelectorAll('.flex-item-left, .flex-item-right, .flex-item-center')

	for (var i = 0; i < boxes.length; i++) {
		boxes[i].addEventListener('mouseenter', enlargeBox);
		boxes[i].addEventListener('mouseleave', originalBox);
	}

	function enlargeBox() {
        	if (this.classList.contains('flex-item-left')) {
            		var hoverText = this.querySelector('.hover-text');
            	if (hoverText) {
                	hoverText.style.display = 'block';
            	}
            	this.style.height = 'auto';
        	} else if (this.classList.contains('flex-item-right')) {
            		var hoverText = this.querySelector('.hover-text');
            		if (hoverText) {
                		hoverText.style.display = 'block';
            		}
            	this.style.height = 'auto';
        	} else if (this.classList.contains('flex-item-center')) {
            		var hoverText = this.querySelector('.hover-text');
            		if (hoverText) {
                		hoverText.style.display = 'block';
            		}
            	this.style.height = 'auto';
        	}
	}	

	function originalBox() {
    		var hoverText = this.querySelector('.hover-text');
    		if (hoverText) {
        		hoverText.style.display = 'none';
    		}
    		this.style.height = '';
	}
}
window.flexItemScript = flexItemScript;