const USER_ID = document.querySelector("input[type=hidden]").value

const getAndFill = (value,text) => {
    document.querySelector(value).textContent = text
}

const elements = [".nick",".name",".surname",".email",".address",".note"]

let fullPrice = 0

const ajax = new XMLHttpRequest();
    ajax.open("GET","../components/fetch-data.php" , true);
    ajax.send();
    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let database = JSON.parse(this.responseText);
            for(let i = 0; i < database.length; i++){
                if(database[i].ID_USER == USER_ID){
                    getAndFill(".nick",database[i].username)
                    getAndFill(".name",database[i].imie)
                    getAndFill(".surname",database[i].nazwisko)
                    getAndFill(".email",database[i].email)
                    getAndFill(".address",database[i].adres)
                    getAndFill(".note",database[i].notatka)
                } 
            }
    }}
const ajax2 = new XMLHttpRequest();
ajax2.open("GET","../components/fetch-revenues.php" , true);
ajax2.send();
ajax2.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let database = JSON.parse(this.responseText);
         for(let i = 0; i < database.length; i++){
            fullPrice += parseFloat(database[i].cena_zamowienia)
        }
        getAndFill(".revanues",`  ${fullPrice}zł`)
}}

