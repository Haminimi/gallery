import { images, showImage } from '.';

export const circlesParent = document.querySelector('.nav-circles-container');

export function createCircles() {
	images.forEach(() => {
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
