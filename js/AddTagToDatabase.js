const addTagBtn = document.querySelector(".add-tag")
const addTagPanel = document.querySelector(".add-tag-panel")
const nameTag = document.querySelector(".name-tag")
const descriptionTag = document.querySelector(".description-tag")
const submitTag = document.querySelector(".tag-submit")
const nameTagError = document.querySelector(".name-tag-error")
const descriptionTagError = document.querySelector(".description-tag-error")

const exitTag = document.querySelector(".exit-add-tag")

const successAddTag = document.querySelector(".success-add")

const successTextTag = document.querySelector(".success-text")
addTagBtn.addEventListener("click",() => {
    addTagPanel.style.display = "flex"
    dashboard.style.display = "none"
    sideBar.style.display = "none"
})
exitTag.addEventListener("click",() => {
    exitHandlingTag()
})

const exitHandlingTag = () => {
    addTagPanel.style.display = "none"
    dashboard.style.display = "block"
    sideBar.style.display = "block"
}

submitTag.addEventListener("click",(e) => {
    e.preventDefault()
    stepValidation = 0
    if(nameTag.value == ""){
        nameTagError.textContent = "Pole jest wymagane!"
    }
    else{
        stepValidation++
        nameTagError.textContent = ""
    }
    if(descriptionTag.value == ""){
        descriptionTagError.textContent = "Pole jest wymagane!"
    }
    else{
        stepValidation++
        descriptionTagError.textContent = ""
    }
    if(stepValidation == 2){
        addDataTag()
    }
})

function getTag(){
    $.ajax({
        url: "../admin_pages/getData/get-tags.php",
        method: 'POST'
    }).done(function( data ) {
        $('#tag-body').html(data);
    })
}

addDataTag = () => {
    $.ajax({
		url: "../admin_pages/pushData/add-tag-to-database.php",
		type: "POST",
		data: {
			nazwa_parametru: nameTag.value,
            opis_parametru: descriptionTag.value
		 },
		cache: false,
		success: function(){
            exitHandlingTag()
            getTag()
            successAddTag.style.opacity = "1"
            successTextTag.textContent = "Udało się dodać rozmiar!"
            setInterval(() => {
                successAddTag.style.opacity = "0"
            },5000)
            }
	    })
}