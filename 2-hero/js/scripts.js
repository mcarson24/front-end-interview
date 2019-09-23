const heroDiv = document.querySelector('.hero');

heroDiv.style.color = "#000";

document.addEventListener('DOMContentLoaded', () => {
	heroDiv.style.color = "#FFF";
	heroDiv.classList.add('image');
});
