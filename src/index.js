export let images = document.querySelectorAll('.slide');
export const left = document.getElementById('left');
export const right = document.getElementById('right');
const addImage = document.getElementById('image-input');
const gitHubIcon = document.querySelector('.fa-github');

//Github icon animation
gitHubIcon.addEventListener('mouseover', () => {
	gitHubIcon.classList.remove('mouseout');
	gitHubIcon.classList.add('rotate');
});
gitHubIcon.addEventListener('mouseout', () => {
	gitHubIcon.classList.remove('rotate');
	gitHubIcon.classList.add('mouseout');
});

//Subscribe for images update
subscribe('imagesUpdated', (newImages) => {
	images = newImages;
});

//Show image
let currentIndex = 0;
let transformValue;
let previousTransformValue = 0;

export function showImage(index, callingContext) {
	currentIndex = index;
	transformValue = `${-index * 100}%`;

	images.forEach((image, i) => {
		image.style.transform = `translateX(${transformValue})`;
		const circles = document.querySelectorAll('.nav-circle');
		if (i === index) {
			image.classList.add('switch-animation');
			circles[index].classList.add('active-circle');
		} else {
			image.classList.remove('switch-animation');
		}

		circles.forEach((otherCircle, otherIndex) => {
			if (otherIndex !== index) {
				otherCircle.classList.remove('active-circle');
			}
		});

		if (callingContext === 'show') {
			if (
				parseFloat(transformValue) -
					parseFloat(previousTransformValue) <=
					-400 ||
				parseFloat(transformValue) -
					parseFloat(previousTransformValue) >=
					400
			) {
				image.style.transitionDuration = '1.5s';
			} else {
				image.style.transitionDuration = '0.4s';
			}
		} else if (callingContext === 'remove') {
			image.style.transitionDuration = '0.4s';
		}
	});
	previousTransformValue = transformValue;
}

function showNextImage() {
	currentIndex = (currentIndex + 1) % images.length;
	showImage(currentIndex, 'show');
}

function showPrevImage() {
	currentIndex = (currentIndex - 1 + images.length) % images.length;
	showImage(currentIndex, 'show');
}

function addListenersForLeftAndRight() {
	left.addEventListener('click', showPrevImage);
	right.addEventListener('click', showNextImage);
}

function addListenersForImageInput() {
	addImage.addEventListener('input', (event) => {
		handleImageSelection(event);
		createDeleteButtons();
		addListenersToDeleteButtons();
	});
}

function addDeleteButtons() {
	createDeleteButtons();
	addListenersToDeleteButtons();
}

function initialize() {
	createCircles();
	addDeleteButtons();
	addListenersForLeftAndRight();
	addListenersForImageInput();
}

initialize();
