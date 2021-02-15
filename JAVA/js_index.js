function move(){
	if (this.scrollY > this.innerHeight / 6){
		document.querySelector(".header_image").classList.remove("clip-up");

			var element, name, arr;
			element = document.querySelector(".header_image");
			name = "clip-down";
			arr = element.className.split(" ");
			if (arr.indexOf(name) == -1) {
			    element.className += " " + name;
			}

			}else{

			document.querySelector(".header_image").classList.remove("clip-down");
			var element, name, arr;
		  element = document.querySelector(".header_image");
		  name = "clip-up";
		  arr = element.className.split(" ");
		  if (arr.indexOf(name) == -1) {
		    element.className += " " + name;
			}
		}

	
}
 window.addEventListener("scroll", move);




