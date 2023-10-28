const get = (element) =>{
    return document.querySelector(element)
}
get(".account").addEventListener("mouseover",() => {
    get(".login--wrapper").style.display = "flex"
})
get(".login--wrapper").addEventListener("mouseleave",() => {
    get(".login--wrapper").style.display = "none"
})