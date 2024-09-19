const cashInBtn = getElement("cashIn");
const cashOutBtn = getElement("cashOut");
const increaseBtn = getElement("addMoneyBtn");
const decreaseBtn = getElement("decreaseBtn");
const transactionBtn = getElement("transaction");
const form = getElement("form");
const transactionContainer = getElement("transactionContainer");

cashOutBtn.addEventListener("click", function () {
    addStyles(cashOutBtn, "bg-red-500");
    removeStyles(cashInBtn, "bg-primary");
    removeStyles(transactionBtn, "bg-purple-500");
    //cashIn Btn
    increaseBtn.classList.add("hidden");
    //CashOut Btn
    decreaseBtn.classList.remove("hidden");
    //show form
    form.classList.remove("hidden");
});

cashInBtn.addEventListener("click", function () {
    addStyles(cashInBtn, "bg-primary");
    removeStyles(cashOutBtn, "bg-red-500");
    removeStyles(transactionBtn, "bg-purple-500");
    //cashIn Btn
    increaseBtn.classList.remove("hidden");
    //CashOut Btn
    decreaseBtn.classList.add("hidden");
    //show form
    form.classList.remove("hidden");
});

transactionBtn.addEventListener("click", function () {
    addStyles(transactionBtn, "bg-purple-500");
    removeStyles(cashInBtn, "bg-primary");
    removeStyles(cashOutBtn, "bg-red-500");

    //hide form
    form.classList.add("hidden");

    //show transactions
    transactionContainer.classList.remove("hidden");
});

function addStyles(btnName, BgColor) {
    btnName.classList.add(BgColor);
    btnName.classList.remove("border");
    btnName.children[1].classList.add("text-white");
    btnName.children[1].classList.remove("text-stone-700");
}

function removeStyles(btnName, BgColor) {
    btnName.classList.remove(BgColor);
    btnName.classList.add("border");
    btnName.children[1].classList.remove("text-white");
    btnName.children[1].classList.add("text-stone-700");
}
