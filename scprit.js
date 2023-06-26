let openBtn = document.querySelector('i[name="open"]')
let closeBtn = document.querySelector('i[name="close"]')
let nav = document.querySelector('header ul')

openBtn.addEventListener('click',()=>{
    
    nav.classList.toggle("active")
    openBtn.classList.toggle("no-display")
    closeBtn.classList.toggle("no-display")
})
closeBtn.addEventListener('click',()=>{
    
    nav.classList.toggle("active")
    openBtn.classList.toggle("no-display")
    closeBtn.classList.toggle("no-display")
})