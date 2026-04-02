var overlay=document.querySelector(".popup-overlay")
var box=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup-btn")

addpopupbutton.addEventListener("click",function(){
    overlay.style.display="block"
    box.style.display="block"
})

var canclebtn=document.getElementById("cancle-book")

canclebtn.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display="none"
    box.style.display="none"
})

var contain=document.querySelector(".container")
var add=document.getElementById("add-book")
var title=document.getElementById("book-title-input")
var author=document.getElementById("book-author-input")
var descriptione=document.getElementById("book-description-input")

add.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${title.value}</h2>
            <h4>${author.value}</h4>
            <p>${descriptione.value}</p>
            <button onclick="deletebook(event)" >Delete</button>`
    contain.append(div)
    overlay.style.display="none"
    box.style.display="none"
})

function deletebook(event){
    event.target.parentElement.remove()
}