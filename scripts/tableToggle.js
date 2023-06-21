let buttons = document.querySelectorAll('.choice');
let pages = document.querySelectorAll('.MobileTable');

for(let button of buttons){
	button.onclick = function(){
		console.log(button.dataset.choice);
		let block = document.querySelector('.'+button.dataset.choice);
		for (let page of pages) {
			page.classList.add('hidden');
			page.classList.remove('show');
		}
		block.classList.remove('hidden');
		block.classList.add('show');
	}
}