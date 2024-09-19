document.getElementById("addMoneyBtn").addEventListener("click", function(event) {
    event.preventDefault();

    const inputAmount = getInputValueById("amount");
    const pinNumber = getInnerTextById("pinNumber");
    const totalAmount = getInnerTextById("total");

    setCashInHistory(inputAmount.value);

    if(pinNumber.value === "1234") {
        let total = parseInt(inputAmount.value) + parseInt(totalAmount.innerText);
        totalAmount.innerText = total;
        inputAmount.value = "";
        pinNumber.value = "";
    } else {
        alert("incorrect pin! Try Again!");
    };

});