const inputs = document.querySelectorAll("input[name=delivery]")

supplier = JSON.parse(localStorage.getItem('supplier')) || 0;

inputs.forEach(input => {
    input.addEventListener("click",() => {
        supplier = input.value
        console.log(supplier)
    })
})