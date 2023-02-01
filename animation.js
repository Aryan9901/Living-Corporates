/** @format */

var tl = gsap.timeline();

tl.from("#navbar", {
	height: "0%",
	ease: Expo.power2,
	opacity: 0,
	// duration: 1,
})

	.from("#page1-left", {
		height: 0,
		bottom: 0,
		ease: Expo.easeOut.power2,
		opacity: 0,
	})
	.from("#page1-progress-bar", {
		y: 30,
		ease: Expo.easeOut.power2,
		opacity: 0,
	})
	.from("#progress", {
		y: 30,
		ease: Expo.easeOut.power2,
		opacity: 0,
	})
	.from("#page1-img-container", {
		scale: 0,
		ease: Expo.easeOut.power2,
		// opacity: 0,
	});
