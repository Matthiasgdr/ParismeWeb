let parallax = document.querySelector('.parallax')

console.log(window.innerHeight);


window.addEventListener('scroll', () => {
    
    parallax.style.backgroundPosition = `50% ${50 - (((window.scrollY*50)/window.innerHeight)*1.5)}%`
})