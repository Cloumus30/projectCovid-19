// window.pageYOffset = mengembalikan nilai angka berapa banyak layar telah discroll
// object.offsetTop = mengembalikan nilai angka koordinat vertikal relatif posisi atas (paling atas 0) dari object
let prevScrollpos = window.pageYOffset;
let currentWindowY = document.querySelector("nav").offsetTop;
let dua=document.querySelector(".dua");
let tiga = document.querySelectorAll(".tigaContent");
let empat= document.querySelectorAll(".empatContent");
dua.style.overflow="hidden";
window.onscroll = function(){
	let currentScrollPos = window.pageYOffset;
	
	if(currentScrollPos==currentWindowY){
		document.querySelector("nav").style.backgroundColor ="transparent";	
	}
	else if (prevScrollpos>currentScrollPos){
		document.querySelector("nav").style.top ="0";
		document.querySelector("nav").style.backgroundColor ="black";
	}
	
	else {
		document.querySelector("nav").style.top = "-60px";

	}
	prevScrollpos = currentScrollPos;
// effek opacity dari div 2 ketika pada posisi maka akan menjelas tulisannya
	if(currentScrollPos>=574){
		dua.style.opacity="1";
	}
	else if(currentScrollPos<574){
		dua.style.opacity="0";
	}

	if(currentScrollPos>=1324){
		for (var i = 0; i <tiga.length; i++) {
			tiga[i].style.opacity="1";
		}
	}
	else if(currentScrollPos<1324){
		for (var i = 0; i < tiga.length; i++) {
			tiga[i].style.opacity="0";
		}
	}

	if(currentScrollPos>=2198){
		for (var i = 0; i <empat.length; i++) {
			empat[i].style.opacity="1";
		}
	}
	else if(currentScrollPos<2198){
		for (var i = 0; i < empat.length; i++) {
			empat[i].style.opacity="0";
		}
	}
}
