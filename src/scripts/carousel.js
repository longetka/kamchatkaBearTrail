const carousel = document.querySelector('.carousel');
const testisCarousel = document.querySelector('.testis-carousel');
const flkty = new Flickity( carousel, {
	wrapAround: true,
	setGallerySize: false,
	autoPlay: 5000,
});
const flkty1 = new Flickity( testisCarousel, {
	// wrapAround: true,
	setGallerySize: false,
	groupCells: 4
});