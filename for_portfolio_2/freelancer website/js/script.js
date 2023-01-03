var links = document.querySelectorAll('.navlist li a');

links.forEach(li => {
	li.addEventListener('click',()=> {
		resetLinks();
		li.classList.add('active');
	})
})

function resetLinks() {
	links.forEach(li => {
		li.classList.remove('active')
	})
}

const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');
};