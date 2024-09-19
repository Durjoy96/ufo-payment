document.getElementById("addMoneyBtn").addEventListener("click", function(event) {
    event.preventDefault();

    const inputAmount = getInputValueById("amount");
    const pinNumber = getInnerTextById("pinNumber");
    const totalAmount = getInnerTextById("total");

    if(pinNumber.value === "1234") {
        let total = parseInt(inputAmount.value) + parseInt(totalAmount.innerText);
        totalAmount.innerText = total;
        setCashInHistory(inputAmount.value);
        inputAmount.value = "";
        pinNumber.value = "";
    } else {
        alert("incorrect pin! Try Again!");
    };

});