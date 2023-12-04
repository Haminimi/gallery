import { images, showImage, left, right } from '.';
import { publish } from './pubsub';
import { createCircles, circlesParent } from './createCircles';

let deleteButtons;

//Pub
function updateImages() {
	const newImages = document.querySelectorAll('.slide');
	publish('imagesUpdated', newImages);
}

export function createDeleteButtons() {
	if (deleteButtons === null || deleteButtons === undefined) {
		images.forEach((image) => {
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
		images.forEach((image) => {
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
