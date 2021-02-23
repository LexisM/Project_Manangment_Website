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


//Get the button:
mybutton = document.querySelector(".go-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



