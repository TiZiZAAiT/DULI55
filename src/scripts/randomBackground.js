import asd from '../pictures/asd1.jpg'
import resort from '../pictures/resort.jpg'
import activities from '../pictures/activities.jpg'
import resbac from '../pictures/resbac.jpg'
import contbac from '../pictures/contbac.jpg'

function getRandomBackground() {
	const backgrounds = [
	{asd},
	{resort},
	{activities},
	{resbac},
	{contbac}
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