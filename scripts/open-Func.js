let closeButton = document.querySelector(".close-button");

let orderButton = document.querySelector('#orderButton');
let orderForm = document.querySelector('#orderForm');

orderButton.onclick = function(){
	orderForm.classList.add('show-func');
	orderForm.classList.remove('close-func');
}

closeButton.onclick = function(){
	orderForm.classList.add('close-func');
	orderForm.classList.remove('show-func');
}

