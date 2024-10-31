function getRandomBackground() {
	const backgrounds = [
	"url('/src/pictures/asd1.jpg')",
	"url('/src/pictures/resort.jpg')",
	"url('/src/pictures/activities.jpg')",
	"url('/src/pictures/resbac.jpg')",
	"url('/src/pictures/contbac.jpg')"
	];

	const randomIndex = Math.floor(Math.random() * backgrounds.length);
	return backgrounds[randomIndex];
}

function setRandomBackground() {
	const backgroundImage = getRandomBackground();
    	document.body.style.backgroundImage = backgroundImage;
    	document.body.style.backgroundSize = 'cover';
	document.body.style.backgroundRepeat = 'noRepeat';
	document.body.style.backgroundAttachment = 'fixed';
}

window.setRandomBackground = setRandomBackground;