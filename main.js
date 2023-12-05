/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Wc: () => (/* binding */ src_images),
  t$: () => (/* binding */ left),
  F2: () => (/* binding */ right),
  od: () => (/* binding */ showImage)
});

;// CONCATENATED MODULE: ./src/pubsub.js
const subscribers = {};

function subscribe(event, callback) {
	if (!subscribers[event]) {
		subscribers[event] = [];
	}

	subscribers[event].push(callback);
}

function publish(event, data) {
	const eventSubscribers = subscribers[event];
	if (eventSubscribers) {
		eventSubscribers.forEach((callback) => {
			callback(data);
		});
	}
}

;// CONCATENATED MODULE: ./src/createCircles.js


const circlesParent = document.querySelector('.nav-circles-container');

function createCircles() {
	src_images.forEach(() => {
		const circle = document.createElement('div');
		circle.classList.add('nav-circle');
		circlesParent.appendChild(circle);
	});

	const circles = document.querySelectorAll('.nav-circle');
	if (circles.length > 0) {
		circles[0].classList.add('active-circle');
	}

	circles.forEach((circle, index) => {
		circle.addEventListener('click', () => {
			showImage(index, 'show');

			circles.forEach((otherCircle, otherIndex) => {
				if (otherIndex !== index) {
					otherCircle.classList.remove('active-circle');
				}
			});
			circle.classList.add('active-circle');
		});
	});
}

;// CONCATENATED MODULE: ./src/createDeleteButtons.js




let deleteButtons;

//Pub
function updateImages() {
	const newImages = document.querySelectorAll('.slide');
	publish('imagesUpdated', newImages);
}

function createDeleteButtons() {
	if (deleteButtons === null || deleteButtons === undefined) {
		src_images.forEach((image) => {
			const deleteButton = document.createElement('span');
			deleteButton.classList.add(
				'material-symbols-outlined',
				'delete-button'
			);
			deleteButton.textContent = 'delete';
			image.appendChild(deleteButton);
		});
	} else {
		deleteButtons = document.querySelectorAll('.delete-button');
		const deleteButtonsArray = Array.from(deleteButtons);
		deleteButtonsArray.forEach((button) => {
			const parentSlide = button.parentNode;
			parentSlide.removeChild(button);
		});
		src_images.forEach((image) => {
			const deleteButton = document.createElement('span');
			deleteButton.classList.add(
				'material-symbols-outlined',
				'delete-button'
			);
			deleteButton.textContent = 'delete';
			image.appendChild(deleteButton);
		});
	}
}

function getDeleteButtons() {
	deleteButtons = document.querySelectorAll('.delete-button');
}

function addListenersToDeleteButtons() {
	getDeleteButtons();

	deleteButtons.forEach((button, index) => {
		button.addEventListener('click', () => {
			const parentSlide = button.parentNode;
			const gallery = parentSlide.parentNode;
			gallery.removeChild(parentSlide);
			updateImages();

			if (src_images.length === 0) {
				const emptyGallery = document.createElement('div');
				emptyGallery.classList.add('empty-gallery');
				/* emptyGallery.textContent = 'Your gallery is empty 😭'; */
				emptyGallery.textContent =
					' Houston, we have an empty gallery! 🚀';
				gallery.appendChild(emptyGallery);
				gallery.removeChild(circlesParent);
				gallery.removeChild(left);
				gallery.removeChild(right);
			}

			circlesParent.innerHTML = '';
			createCircles('delete');

			if (index === 0) {
				showImage(0);
			} else {
				showImage(index - 1, 'remove');
			}

			createDeleteButtons();
			addListenersToDeleteButtons();
		});
	});
}

;// CONCATENATED MODULE: ./src/handleImageSelection.js




//Pub
function handleImageSelection_updateImages() {
	const newImages = document.querySelectorAll('.slide');
	publish('imagesUpdated', newImages);
}

function handleImageSelection(event) {
	const selectedImage = event.target.files[0];
	const gallery = document.querySelector('#gallery');

	if (selectedImage) {
		const img = document.createElement('img');
		const imageURL = URL.createObjectURL(selectedImage);
		img.src = imageURL;
		img.classList.add('img');
		const slide = document.createElement('div');
		slide.classList.add('slide');
		slide.classList.add('new-image');
		slide.appendChild(img);
		gallery.appendChild(slide);

		if (src_images.length === 0) {
			gallery.appendChild(left);
			gallery.appendChild(right);
			gallery.appendChild(circlesParent);
			const emptyGallery = document.querySelector('.empty-gallery');
			gallery.removeChild(emptyGallery);
		}

		handleImageSelection_updateImages();

		circlesParent.innerHTML = '';
		createCircles();

		const circles = document.querySelectorAll('.nav-circle');
		circles[circles.length - 1].classList.add('active-circle');

		//Show loading spinner
		const spinner = document.querySelector('.loading-spinner');
		spinner.classList.add('load');
		setTimeout(() => {
			spinner.classList.remove('load');
		}, 1500);

		showImage(circles.length - 1, 'show');
	}
}

;// CONCATENATED MODULE: ./src/index.js






let src_images = document.querySelectorAll('.slide');
const left = document.getElementById('left');
const right = document.getElementById('right');
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
	src_images = newImages;
});

//Show image
let currentIndex = 0;
let transformValue;
let previousTransformValue = 0;

function showImage(index, callingContext) {
	currentIndex = index;
	transformValue = `${-index * 100}%`;

	src_images.forEach((image, i) => {
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
	currentIndex = (currentIndex + 1) % src_images.length;
	showImage(currentIndex, 'show');
}

function showPrevImage() {
	currentIndex = (currentIndex - 1 + src_images.length) % src_images.length;
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

/******/ })()
;
//# sourceMappingURL=main.js.map