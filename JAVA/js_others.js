function toogle_stadium() {
	let coll = document.getElementsByClassName("collapsible");
	let i;

		for (i = 0; i < coll.length; i++) {
	  		coll[i].addEventListener("click", function() {
	    this.classList.toggle("active");
	    	var content = this.nextElementSibling;
	    if (content.style.maxHeight){
	      	content.style.maxHeight = null;
	     	document.getElementById("show-arrow").innerHTML = "<i class='fas fa-chevron-down'></i>";

	    } else {
	     	 content.style.maxHeight = content.scrollHeight + "px";
	     	document.getElementById("show-arrow").innerHTML = "<i class='fas fa-chevron-right'></i>";
	    }
	  });
	}
}

let Tickets = [
		{
			category: "Premium",
			price: 200,
			inCart: 0,
			match:"",
			area:""
		},
		{
			category: "Cat 1",
			price: 125,
			inCart: 0,
			match:"",
			area:""
		},
		{
			category: "Cat 2",
			price: 100,
			inCart: 0,
			match:"",
			area:""
		},
		{
			category: "Cat 3",
			price: 75,
			inCart: 0,
			match:"",
			area:""
		},
		{
			category: "Cat 4",
			price: 50,
			inCart:0,
			match:"",
			area:""
		},
		{
			category: "Box",
			price: 250,
			inCart:0,
			match:"",
			area:""
		},
		{
			category: "VIP",
			price: 350,
			inCart:0,
			match:"",
			area:""
		}
	
]

function purchase(){

	let ticketQty = document.getElementById("ticket_quantity").value;
	let ticketMatch = document.getElementById("ticket_match").value;
	let ticketCat = document.getElementById("ticket_category").value;
	let ticketArea = document.getElementById("ticket_area").value;
	let i = Number(ticketCat) - 1;

	

	// if (ticketQty != 0 && ticketMatch != " " && ticketCat != " " && ticket_area != " "){

	// 	localStorage.setItem("ticketMatch",ticketMatch);
	// 	localStorage.setItem("ticketCat",Tickets[i].category);
	// 	localStorage.setItem("ticketPrice",Tickets[i].price);
	// 	localStorage.setItem("ticketArea",ticketArea);
	// 	localStorage.setItem("totalPrice", Number(ticketQty) * Number(Tickets[i].price));
	// 	localStorage.setItem("ticketQty",ticketQty);

		let totalTicket = localStorage.getItem("totalTicket");

		totalTicket = Number(totalTicket);

		if (totalTicket) {
			localStorage.setItem("totalTicket", (Number(ticketQty) + totalTicket));
		}else{
			localStorage.setItem("totalTicket", ticketQty);
		}

	// }else{
	// 	alert("ERROR!");
	// }

	

	setTicket(Tickets[i],ticketQty,ticketArea,ticketMatch);
	totalPrice(Tickets[i],ticketQty);
	
	onLoadCart();
}


function setTicket(Tickets,ticketQty,ticketArea,ticketMatch){

	Tickets.area = ticketArea;
	Tickets.match = ticketMatch;
	

	let cartTickets = localStorage.getItem("TicketsInCart");
	cartTickets = JSON.parse(cartTickets);

	if(cartTickets != null){

		if(cartTickets[Tickets.match + ','+Tickets.area + ","+ Tickets.category] == undefined){
			cartTickets = {
				...cartTickets,             //los 3 puntos agarra lo que ya existe en el objeto
				[Tickets.match + ','+Tickets.area + ","+ Tickets.category]:Tickets  // añade el nuevo array
			}
			Tickets.inCart = ticketQty;
		}else{
			cartTickets[Tickets.match + ','+Tickets.area + ","+ Tickets.category].inCart = Number(cartTickets[Tickets.match + ','+Tickets.area + ","+ Tickets.category].inCart) + Number(ticketQty);
		}

	}else{

		Tickets.inCart = ticketQty;
		cartTickets = {
		[Tickets.match + ','+Tickets.area + ","+ Tickets.category]: Tickets
		}
	}
	
	
	localStorage.setItem("TicketsInCart", JSON.stringify(cartTickets));
}

function totalPrice(Tickets,ticketQty){
	let totalCartPrice = localStorage.getItem("totalCartPrice");
	totalCartPrice = Number(totalCartPrice);

	if(totalCartPrice){
		localStorage.setItem("totalCartPrice",(Number(ticketQty) * Number(Tickets.price) + totalCartPrice));
	}else{
		localStorage.setItem("totalCartPrice",Number(ticketQty) * Number(Tickets.price));
	}
}

function onLoadCart(){
	let totalTicket = localStorage.getItem("totalTicket");

	if(totalTicket){
		document.querySelector(".qtyCart").innerText = totalTicket;
	}
}


function ShowCartOFF(){
	document.querySelector(".cart-items").style.display = "block";
	document.getElemenstByTagName("body")[0].style.filter = "blur(10px)";

}
function ShowCartON(){
	document.querySelector(".cart-items").style.display = "none";
	document.getElementsByTagName("body")[0].style.filter = "none";
}
function displayCart(){
	let cartTickets = localStorage.getItem("TicketsInCart");
	cartTickets = JSON.parse(cartTickets);
	let ticketsInfo = document.querySelector(".tickets-info");
	if(cartTickets && ticketsInfo){
		ticketsInfo.innerHTML = "";

		 Object.values(cartTickets).map(items => {
		 	ticketsInfo.innerHTML += `
		 	<div class="tickets flex">
		 	<div class="t-match">${items.match}</div>
		 	<div class="t-category">${items.category}</div>
		 	<div class="t-area">${items.area}</div>
		 	<div class="t-qty">${items.inCart}</div>
		 	<div class="t-price">${items.price}</div>
		 	<div class="t-total">${items.price}</div>
		 	<div class="t-del"><i class="fas fa-trash-alt"></i></div>


		 	



		 	</div>
		 	`
		 })
	}
}






// function setTickets(){
	
// }
// setTickets();
// function addCArt(){
// 	let quantity = localStorage.getItem('ticketQty');
// 	quantity = Number(quantity);
// 	if(quantity){
// 		localStorage.setItem("ticketQty",);
// 	}
// }
displayCart();
onLoadCart();