var show = document.querySelector('.hamburger')
var meh = document.querySelector('.hanburger_links')
function Addclass(){
    show.classList.toggle("me")
    meh.classList.toggle("app")
}


window.addEventListener('scroll',() =>{
    document.querySelector('header').classList.toggle
    ('window-scroll', window.scrollY > 0)
})