function getRandomBackground() {
	const backgrounds = [
	"url('../pictures/asd1.jpg')",
	"url('../pictures/resort.jpg')",
	"url('../pictures/activities.jpg')",
	"url('../pictures/resbac.jpg')",
	"url('../pictures/contbac.jpg')"
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