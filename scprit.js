let openBtn = document.querySelector('i[name="open"]')
let closeBtn = document.querySelector('i[name="close"]')
let nav = document.querySelector('header ul')
let header = document.querySelector('header')

openBtn.addEventListener('click',()=>{
    
    header.classList.toggle('headersactive')
    nav.classList.toggle("active")
    openBtn.classList.toggle("no-display")
    closeBtn.classList.toggle("no-display")
})
closeBtn.addEventListener('click',()=>{
    
    header.classList.toggle('headersactive')
    nav.classList.toggle("active")
    openBtn.classList.toggle("no-display")
    closeBtn.classList.toggle("no-display")
})