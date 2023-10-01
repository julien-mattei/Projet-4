const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let image = document.querySelector(".banner-img")
let txt = document.querySelector("#banner p")
console.log(txt)
let i = 0

let flecheGauche = document.querySelector('.arrow_left')
flecheGauche.addEventListener("click", () => {
    console.log("Vous avez cliqué sur la flèche gauche")
    i--
    image.src = "./assets/images/slideshow/" + slides[i].image
    txt.innerHTML = slides[i].tagLine 
})


let flecheDroite = document.querySelector('.arrow_right')
flecheDroite.addEventListener("click", () => {
    console.log("Vous avez cliqué sur la flèche droite")
    i++ 
    image.src = "./assets/images/slideshow/" + slides[i].image
    txt.innerHTML = slides[i].tagLine
})

let nbSlides = slides.length
console.log(nbSlides)

let dots = document.querySelector(".dots")
console.log(dots)


for(let i=0; i < slides.length; i++) {
    dot = document.createElement("div")
    dots.appendChild(dot)
    dot.classList.add("dot")
}
