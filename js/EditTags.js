editButtonTag = document.querySelectorAll(".edit-tag")
nameTagEdit = document.querySelector(".name-tag-edit")
descriptionTagEdit = document.querySelector(".description-tag-edit")
descriptionTagErrorEdit = document.querySelector(".description-tag-error-edit")
submitTagEdit = document.querySelector(".tag-edit-submit")
exitEditTag = document.querySelector(".exit-edit-tag")
editTagPanel = document.querySelector(".edit-tag-panel")



editButtonTag.forEach(button => {
    button.addEventListener("click", () => {
        editTagPanel.style.display = "flex"
        dashboard.style.display = "none"
        sideBar.style.display = "none"
        supplementingInputTag(button.dataset.id)
        validationTag(button.dataset.id)
        
    })
})
exitEditTag.addEventListener("click",() => {
    exitEditPanelHandlerTag()
})

supplementingInputTag = (id) =>{
    const ajax = new XMLHttpRequest();
    ajax.open("GET","../components/fetch-tag.php" , true);
    ajax.send();
    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let database = JSON.parse(this.responseText);
            for(let i = 0; i < database.length; i++){
                if(database[i].id_parametru == id){
                    nameTagEdit.value = database[i].typ_parametru
                    descriptionTagEdit.value = database[i].wartosc_parametru
                } 
            }
    }}
}

function editDataTag(id){
    $.ajax({
		url: "../admin_pages/pushData/edit-tag-to-database.php",
		type: "POST",
		data: {
            id: id,
			nazwa_parametru: nameTagEdit.value,
            opis_parametru: descriptionTagEdit.value
		 },
		cache: false,
		success: function(){
            getTag()
            successText.textContent = "Udało się zedytować rozmiar!"
            nameTagEdit.value = ""
            descriptionTagEdit.value = ""
            exitEditPanelHandlerTag()
            successAddCategory.style.opacity = "1"
            setInterval(() => {
                successAddCategory.style.opacity = "0"
            },5000)
            }
	    })
}

exitEditPanelHandlerTag = () => {
    editTagPanel.style.display = "none"
    dashboard.style.display = "block"
    sideBar.style.display = "block"
}
validationTag = (id) => {
    let i = 0
    document.querySelector(".tag-edit-submit").addEventListener("click",(e) => {
        e.preventDefault()
        if(i == 0){
        stepValidation = 0
        if(descriptionTagEdit.value == ""){
            descriptionTagErrorEdit.textContent = "Pole jest wymagane!"
        }
        else{
            stepValidation++
            descriptionTagErrorEdit.textContent = ""
        }
        if(stepValidation == 1){
            editDataTag(id)
        }}
        i++
    })
}
