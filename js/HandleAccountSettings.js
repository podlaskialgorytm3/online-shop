const mainContent = document.querySelector(".main-content")
const emailContent = document.querySelector(".email-content")
const getID = () => {
    return new Promise((resolve, reject) => {
        let xmlhttp = new XMLHttpRequest();
        let url = "../user_pages/get_data/get-id.php";
        
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    let data = JSON.parse(this.responseText);
                    resolve(data);
                } else {
                    reject(new Error('Request failed with status ' + this.status));
                }
            }
        };

        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    });
}
const suplmenetingMainDataUser = async () =>{
    let id = await getID()
    const ajax = new XMLHttpRequest();
    ajax.open("GET","../components/fetch-data.php" , true);
    ajax.send();
    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let database = JSON.parse(this.responseText);
            for(let i = 0; i < database.length; i++){
                if(database[i].ID_USER == id){
                    mainContent.innerHTML = `
                    <p><b>Nick:</b> ${database[i].username}</p>
                    <p><b>Imię:</b> ${database[i].imie}</p>
                    <p><b>Nazwisko:</b> ${database[i].nazwisko}</p>
                    <p><b>Adres:</b> ${database[i].adres}</p>
                `
                } 
            }
    }}
}
document.addEventListener("DOMContentLoaded",() => {
    suplmenetingMainDataUser()
})