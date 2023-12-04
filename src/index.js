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
