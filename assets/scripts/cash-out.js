document.getElementById("decreaseBtn").addEventListener("click", function(event) {
    event.preventDefault();

    const inputAmount = getInputValueById("amount");
    const pinNumber = getInputValueById("pinNumber");
    const totalAmount = getInnerTextById("total");

    if(pinNumber.value === "1234") {
        let total = parseInt(totalAmount.innerText) - parseInt(inputAmount.value);
        totalAmount.innerText = total;
        setCashOutHistory(inputAmount.value);
        inputAmount.value = "";
        pinNumber.value = "";
    } else {
        alert("incorrect pin! Try Again!");
    };
});