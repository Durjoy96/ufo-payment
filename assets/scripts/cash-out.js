document.getElementById("decreaseBtn").addEventListener("click", function(event) {
    event.preventDefault();

    const inputAmount = document.getElementById("amount");
    const pinNumber = document.getElementById("pinNumber");
    const totalAmount = document.getElementById("total");

    if(pinNumber.value === "1234") {
        let total = parseInt(totalAmount.innerText) - parseInt(inputAmount.value);
        totalAmount.innerText = total;
        inputAmount.value = "";
        pinNumber.value = "";
    } else {
        alert("incorrect pin! Try Again!");
    };
});