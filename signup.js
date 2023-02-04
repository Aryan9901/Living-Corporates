/** @format */

function loader() {
	function stop() {
		window.addEventListener("load", function () {
			setTimeout(() => {
				this.document.querySelector("#loader").style.display = "none";
				anima();
			}, 1000);
		});
	}
	setTimeout(stop(), 6000);
}
setTimeout(loader(), 1000);
var button = document.querySelector("#sign");
var h1 = document.querySelector("#form h1");
function swich() {
	document.querySelector("#r1").addEventListener("click", function (dets) {
		if (dets.target.id == "1") {
			h1.innerHTML = "LOG IN";
			button.innerHTML = "LOG IN";
		}
		if (dets.target.id == "0") {
			h1.innerHTML = "SIGN UP";
			button.innerHTML = "SIGN UP";
		}
	});
}
swich();
function anima() {
	var tl = gsap.timeline();
	tl.from("#sign-up-page", {
		height: 0,
		opacity: 1,
		duration: 1,
		ease: Expo.power1,
	}).from("#right", {
		left: "100%",
		opacity: 0,
		width: "0%",
		ease: Expo.power1,
	});
}
