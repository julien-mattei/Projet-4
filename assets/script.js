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

const nbSlides = slides.length
const image = document.querySelector(".banner-img")
const txt = document.querySelector("#banner p")
const dots = document.querySelector(".dots")
let i = 0

for(let i=0; i < slides.length; i++) {
    const dot = document.createElement("div")
    dots.appendChild(dot)
    dot.classList.add("dot")
}

const points = document.querySelectorAll(".dot")
dot = points[0].classList.add("dot_selected")

let flecheDroite = document.querySelector('.arrow_right')
flecheDroite.addEventListener("click", () => {
    console.log("Vous avez cliqué sur la flèche droite")
    i++
	if(i > slides.length -1){
		i = 0
		dot = points[points.length-1].classList.remove("dot_selected")
		dot = points[0].classList.add("dot_selected")
	}
    document.querySelector(".banner-img").src = "./assets/images/slideshow/" + slides[i].image
    txt.innerHTML = slides[i].tagLine
	dot = points[i].classList.add("dot_selected")
	dot = points[i-1].classList.remove("dot_selected")
})


let flecheGauche = document.querySelector('.arrow_left')
flecheGauche.addEventListener("click", () => {
    console.log("Vous avez cliqué sur la flèche gauche")
    i--
	if(i < 0){
		i = slides.length - 1
		dot = points[0].classList.remove("dot_selected")
		dot = points[points.length-1].classList.add("dot_selected")
	}
    document.querySelector(".banner-img").src = "./assets/images/slideshow/" + slides[i].image
    txt.innerHTML = slides[i].tagLine
	dot = points[i].classList.add("dot_selected")
	dot = points[i+1].classList.remove("dot_selected")
})
