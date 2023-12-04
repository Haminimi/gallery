import { images, showImage, left, right } from '.';
import { publish } from './pubsub';
import { createCircles, circlesParent } from './createCircles';

//Pub
function updateImages() {
	const newImages = document.querySelectorAll('.slide');
	publish('imagesUpdated', newImages);
}

export function handleImageSelection(event) {
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

		if (images.length === 0) {
			gallery.appendChild(left);
			gallery.appendChild(right);
			gallery.appendChild(circlesParent);
			const emptyGallery = document.querySelector('.empty-gallery');
			gallery.removeChild(emptyGallery);
		}

		updateImages();

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
