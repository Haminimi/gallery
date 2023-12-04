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

function getDeleteButtons() {
	deleteButtons = document.querySelectorAll('.delete-button');
}

export function addListenersToDeleteButtons() {
	getDeleteButtons();

	deleteButtons.forEach((button, index) => {
		button.addEventListener('click', () => {
			const parentSlide = button.parentNode;
			const gallery = parentSlide.parentNode;
			gallery.removeChild(parentSlide);
			updateImages();

			if (images.length === 0) {
				const emptyGallery = document.createElement('div');
				emptyGallery.classList.add('empty-gallery');
				emptyGallery.textContent = 'Your gallery is empty 😭';
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
