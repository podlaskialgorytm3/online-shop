editOrderBtns = document.querySelectorAll(".edit-order")
changeStatusPanel = document.querySelector(".change-status")
submitStatus = document.querySelector(".change-status-btn")
orderStatus = document.querySelector("#status-select")
exitBtn = document.querySelector(".exit-order-edit")
successAdd = document.querySelector(".success-add")
successText = document.querySelector(".success-text")
showEditPanel = () => {
    dashboard.style.display = "none"
    sideBar.style.display = "none"
    changeStatusPanel.style.display = "flex"
}
exitEditPanel  = () => {
    dashboard.style.display = "block"
    sideBar.style.display = "block"
    changeStatusPanel.style.display = "none"
}
sumplementingInput = (id) => {
    const ajax = new XMLHttpRequest();
    ajax.open("GET","../components/fetch-order.php" , true);
    ajax.send();
    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let database = JSON.parse(this.responseText);
            for(let i = 0; i < database.length; i++){
                if(database[i].Id_zamowienia == id){
                    orderStatus.value = database[i].status
                } 
            }
    }}
}
changeStatus = (id) => {
    $.ajax({
        url: "../admin_pages/pushData/edit-order-to-database.php",
        type: "POST",
        data: {
            id: id,
            status: orderStatus.value
        },
        cache: false,
        success: function(){
            exitEditPanel()
            getOrder()
            successAdd.style.opacity = "1"
            successText.textContent = "Udało się zmienić status!"
            setInterval(() => {
                successAdd.style.opacity = "0"
            },5000)
            }
        }) 
}
exitBtn.addEventListener("click",() => {
    exitEditPanel()
})
editOrderBtns.forEach(button => {
    button.addEventListener("click",() => {
        showEditPanel()
        sumplementingInput(button.dataset.id)
        let i = 0
        submitStatus.addEventListener("click",(e) => {
            if(i == 0){
            e.preventDefault()
            changeStatus(button.dataset.id)
            }
            i+=1
        })
        
    })
})
