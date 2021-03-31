const burger = document.querySelectorAll('#burger');
const navList = document.getElementsByClassName('navbar__list');

burger.forEach((button) => {
	button.addEventListener('click', () => {
		for (let item of navList) {
			item.classList.toggle('open');
		}
	})
});




