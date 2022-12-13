// JavaScript Document
console.log("hi");

const hamburger = document.getElementsByClassName('hamburger')[0]
const navbarlinks = document.getElementsByClassName('navbar-links')[0]

hamburger.addEventListener('click', () => {
    navbarlinks.classList.toggle('active')
})