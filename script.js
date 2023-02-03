/** @format */

function execute() {
	/** @format */

	var cursor = document.querySelector("#cursor");
	var main = document.querySelector("#main");
	var cursor2 = document.querySelector("#cursor2");
	var navbar = document.querySelector("#navbar");
	var cirImg = document.querySelector("#cirimg");
	var fullscrtxt = document.querySelector("#full-btm");
	function part1to3() {
		function cursorChange() {
			main.addEventListener("mousemove", function (dets) {
				cursor.style.left = dets.pageX + "px";
				cursor.style.top = dets.pageY + "px";
				cursor2.style.left = dets.pageX + "px";
				cursor2.style.top = dets.pageY + 40 + "px";
			});
		}
		function navbarOpen() {
			var flag = true;
			document.querySelector("#nav-middle").addEventListener("click", function () {
				if (flag === true) {
					document.querySelector("#full-scr").style.height = "100%";
					document.querySelector("#navbar").style.color = "#fff";
					document.querySelector("#nr-right").style.backgroundColor = "#fff";
					document.querySelector("#nr-right").style.color = "#222";
					document.querySelector("#nav-middle").innerHTML = `<i class="ri-close-fill"></i>`;
					main.style.cursor = "default";
					cursor2.style.opacity = 0;
					navbar.style.backgroundColor = "transparent";
					fullscrtxt.style.display = "flex";
					flag = false;
				} else {
					document.querySelector("#full-scr").style.height = "0%";
					document.querySelector("#navbar").style.color = "#222";
					document.querySelector("#nr-right").style.backgroundColor = "#222";
					document.querySelector("#nr-right").style.color = "#fff";
					document.querySelector("#nav-middle").innerHTML = `<i class="ri-menu-line"></i>`;
					cursor2.style.opacity = 1;
					main.style.cursor = "none";
					navbar.style.backgroundColor = "#fef9f3";
					fullscrtxt.style.display = "none";
					flag = true;
				}
			});
		}
		var cirimg1 = document.querySelector("#cir-img1");
		var cirimg2 = document.querySelector("#cir-img2");
		var cirimg3 = document.querySelector("#cir-img3");
		var cirimg4 = document.querySelector("#cir-img4");
		var cirimg5 = document.querySelector("#cir-img5");
		var cirimg6 = document.querySelector("#cir-img6");
		var cirimg7 = document.querySelector("#cir-img7");

		var parahover = document.querySelector("#full-btm");
		parahover.addEventListener("mouseover", function (dets) {
			if (dets.target.id == "para1") {
				cirimg1.style.height = "100%";
				cirimg1.style.width = "100%";
				cirimg1.style.borderRadius = "0%";
				cirimg1.style.top = "0%";
				cirimg1.style.left = "0%";
			}
			if (dets.target.id == "para2") {
				cirimg2.style.height = "100%";
				cirimg2.style.width = "100%";
				cirimg2.style.borderRadius = "0%";
				cirimg2.style.top = "0%";
				cirimg2.style.left = "0%";
			}
			if (dets.target.id == "para3") {
				cirimg3.style.height = "100%";
				cirimg3.style.width = "100%";
				cirimg3.style.borderRadius = "0%";
				cirimg3.style.top = "0%";
				cirimg3.style.left = "0%";
			}
			if (dets.target.id == "para4") {
				cirimg4.style.height = "100%";
				cirimg4.style.width = "100%";
				cirimg4.style.borderRadius = "0%";
				cirimg4.style.top = "0%";
				cirimg4.style.left = "0%";
			}
			if (dets.target.id == "para5") {
				cirimg5.style.height = "100%";
				cirimg5.style.width = "100%";
				cirimg5.style.borderRadius = "0%";
				cirimg5.style.top = "0%";
				cirimg5.style.left = "0%";
			}
			if (dets.target.id == "para6") {
				cirimg6.style.height = "100%";
				cirimg6.style.width = "100%";
				cirimg6.style.borderRadius = "0%";
				cirimg6.style.top = "0%";
				cirimg6.style.left = "0%";
			}
			if (dets.target.id == "para7") {
				cirimg7.style.height = "100%";
				cirimg7.style.width = "100%";
				cirimg7.style.borderRadius = "0%";
				cirimg7.style.top = "0%";
				cirimg7.style.left = "0%";
			}
			if (dets.target.id == "full-btm") {
				cirimg1.style.height = "0%";
				cirimg1.style.width = "0%";
				cirimg1.style.borderRadius = "50%";
				cirimg2.style.height = "0%";
				cirimg2.style.width = "0%";
				cirimg2.style.borderRadius = "50%";
				cirimg3.style.height = "0%";
				cirimg3.style.width = "0%";
				cirimg3.style.borderRadius = "50%";
				cirimg4.style.height = "0%";
				cirimg4.style.width = "0%";
				cirimg4.style.borderRadius = "50%";
				cirimg5.style.height = "0%";
				cirimg5.style.width = "0%";
				cirimg5.style.borderRadius = "50%";
				cirimg6.style.height = "0%";
				cirimg6.style.width = "0%";
				cirimg6.style.borderRadius = "50%";
				cirimg7.style.height = "0%";
				cirimg7.style.width = "0%";
				cirimg7.style.borderRadius = "50%";
				cirimg1.style.top = "22%";
				cirimg1.style.left = "19%";
				cirimg2.style.top = "78%";
				cirimg2.style.left = "15%";
				cirimg3.style.top = "78%";
				cirimg3.style.left = "67%";
				cirimg4.style.top = "58%";
				cirimg4.style.left = "39%";
				cirimg5.style.top = "77%";
				cirimg5.style.left = "42%";
				cirimg6.style.top = "85%";
				cirimg6.style.left = "69%";
				cirimg7.style.top = "50%";
				cirimg7.style.left = "50%";
			}
		});

		cursorChange();
		navbarOpen();

		var image = ["./images/1-2.jpg", "./images/LC-99.jpg", "./images/LC_Menu_Articles7.jpg", "./images/LC-LLN-main.jpg", "./images/6.jpg"];

		var imgContainer = document.querySelector("#page1-img-container");
		var count = document.querySelector("#count");
		var counter = 0;

		imgContainer.addEventListener("mousemove", function () {
			cursor.style.opacity = 1;
			cursor.style.color = "#222";
			cursor2.style.opacity = 0;
			cursor.innerHTML = "Read";
		});
		imgContainer.addEventListener("mouseleave", function () {
			cursor.style.opacity = 0;
			cursor.style.color = "#222";
			cursor2.style.opacity = 1;
			cursor.innerHTML = "Listen";
		});
		setInterval(() => {
			if (counter === 4) {
				counter = 0;
			} else {
				counter++;
			}
			imgContainer.style.backgroundImage = `url(${image[counter]})`;
			count.innerHTML = `${counter + 1}`;
		}, 5000);
		gsap.to("#status", {
			width: "100%",
			ease: Expo.linear,
			duration: 5,
			repeat: -1,
		});

		var time = gsap.timeline({
			repeat: -1,
		});
		time
			.fromTo(
				"#no1",
				{
					y: 30,
					ease: Expo.power2,
					opacity: 0,
				},
				{
					y: 0,
					ease: Expo.power2,
					opacity: 1,
					duration: 5,
					// delay: 20,
				}
			)
			.to("#no1", { opacity: 0, duration: 0 })
			.fromTo(
				"#no2",
				{
					y: 30,
					ease: Expo.power2,
					opacity: 0,
				},
				{
					y: 0,
					ease: Expo.power2,
					duration: 5,
					opacity: 1,
					// delay: 15,
				}
			)
			.to("#no2", { opacity: 0, duration: 0 })
			.fromTo(
				"#no3",
				{
					y: 30,
					ease: Expo.power2,
					opacity: 0,
				},
				{
					y: 0,
					ease: Expo.power2,
					duration: 5,
					opacity: 1,
					// delay: 10,
				}
			)
			.to("#no3", { opacity: 0, duration: 0 })
			.fromTo(
				"#no4",
				{
					y: 30,
					ease: Expo.power2,
					opacity: 0,
				},
				{
					y: 0,
					ease: Expo.power2,
					duration: 5,
					opacity: 1,
					// delay: 5,
				}
			)
			.to("#no4", { opacity: 0, duration: 0 })
			.fromTo(
				"#no5",
				{
					y: 30,
					ease: Expo.power2,
					opacity: 0,
				},
				{
					y: 0,
					ease: Expo.power2,
					duration: 5,
					opacity: 1,
					// delay: 0,
				}
			)
			.to("#no5", { opacity: 0, duration: 0 });
	}

	part1to3();
	function part4() {
		var part4Btn1 = document.querySelector("#btn1");
		var part4Btn2 = document.querySelector("#btn2");
		var btndiv = document.querySelector("#btn-idx");
		var part4img1 = document.querySelector("#part4-img1");
		var part4img2 = document.querySelector("#part4-img2");

		btndiv.addEventListener("click", function (dets) {
			if (dets.target.id == "btn1") {
				part4Btn1.style.backgroundColor = "#fef9f3";
				part4Btn2.style.backgroundColor = "transparent";
				gsap.to("#part4-img2", {
					width: "0%",
					ease: Expo.power1,
					duration: 1,
				});
				gsap.to("#part4-img1", {
					width: "100%",
					ease: Expo.power1,
					delay: 0.4,
					duration: 1,
				});
			}
			if (dets.target.id == "btn2") {
				part4Btn1.style.backgroundColor = "transparent";
				part4Btn2.style.backgroundColor = "#fef9f3";
				gsap.to("#part4-img2", {
					width: "100%",
					ease: Expo.power1,
					delay: 0.4,
					duration: 1,
				});
				gsap.to("#part4-img1", {
					width: "0%",
					ease: Expo.power1,
					duration: 1,
				});
			}
		});
	}
	part4();

	var row = document.querySelectorAll(".row");

	row.forEach(function (elem, ind) {
		elem.addEventListener("mousemove", function (dets) {
			// console.log(dets.target.children[2].id);
			var curr = document.getElementById(dets.target.children[2].id);
			// console.log(curr);
			curr.style.opacity = 1;
			// console.log(dets);
			curr.style.left = dets.pageX - 60 + "px";
		});
	});
	row.forEach(function (elem, ind) {
		elem.addEventListener("mouseleave", function (det) {
			// console.log(dets.target.children[2].id);
			var curr = document.getElementById(det.target.children[2].id);
			// console.log(curr);
			curr.style.opacity = 0;
			// console.log(dets);
			curr.style.left = "40%";
		});
	});
	// console.log("hii");

	document.querySelector("#part-4-right").addEventListener("mousemove", function () {
		cursor.style.opacity = 1;
		cursor.innerHTML = "WATCH";
		console.log("hii");
		cursor1.style.opacity = 0;
	});
	document.querySelector("#part-4-right").addEventListener("mouseleave", () => {
		cursor.style.opacity = 0;
		cursor.innerHTML = "LISTEN";
		cursor1.style.opacity = 1;
	});
}

function loader() {
	/*
	var progress = 0;
	document.onreadystatechange = function () {
		if (document.readyState == "interactive") {
			var allElement = $("*");
			var length = allElement.length;
			for (var i = 0; i < length; i++) {
				set_element(allElement[i].length);
			}
		}
	};
	function set_element(element, totalElement) {
		var percentage = 100 / totalElement;
		if ($(element).length == 1) {
			$("#fill").animate({ width: progress + percentage + "%" }, 1000, function () {
				if (document.getElementById("fill").style.width == "100%") {
					$(".main").fadeOut(500);
				}
			});
			progress = progress + percentage;
		}
	}
	*/

	function stop() {
		window.addEventListener("load", function () {
			setTimeout(() => {
				this.document.querySelector("#loader").style.display = "none";
				execute();
			}, 5000);
		});
	}
	setTimeout(stop(), 6000);
}
setTimeout(loader(), 1000);
// loader();
