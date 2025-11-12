// Cache the DOM

var button = document.getElementById("button")

var nume = document.getElementById("nume")

var anNastere = document.getElementById("anNastere")

var prenume = document.getElementById("prenume")

var asteptari = document.getElementById("asteptari")

var img = document.querySelector("round-img")

constd d = new Date()

var year = d.getFullYear()

// Add event listener to button

button.addEventListener("click", altaViata)
an.addEventListener("mouseover", displayAge)

// Define function

function displayAge() {
		an.innerHTML = year - an.innerHTML
}

// Define function

function altaViata() {

	nume.innerHTML = "Software Engineer"
	prenume.innerHTML = "Software INC"

	body.style.color = "purple"
	body.style.fontFamily = "Monteserrat" 

	asteptari.innerHTML = "<ul><li>Bani multi</li><li>Timp liber</li></ul>"

	img.src = "images/engineer.webp"
	
}