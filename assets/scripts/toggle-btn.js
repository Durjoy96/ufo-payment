const cashInBtn = document.getElementById("cashIn");
const cashOutBtn = document.getElementById("cashOut");

cashOutBtn.addEventListener("click", function() {
    //cashIn styles
    cashInBtn.classList.remove("bg-primary");
    cashInBtn.classList.add("border");
    cashInBtn.children[1].classList.remove("text-white");
    cashInBtn.children[1].classList.add("text-stone-700");

    //cashOut styles
   cashOutBtn.classList.add("bg-red-500");
   cashOutBtn.classList.remove("border");
   cashOutBtn.children[1].classList.add("text-white");
   cashOutBtn.children[1].classList.remove("text-stone-700");
});

cashInBtn.addEventListener("click", function() {
    //cashOut styles
   cashOutBtn.classList.remove("bg-red-500");
   cashOutBtn.classList.add("border");
   cashOutBtn.children[1].classList.remove("text-white");
   cashOutBtn.children[1].classList.add("text-stone-700");

    //cashIn styles
    cashInBtn.classList.add("bg-primary");
    cashInBtn.classList.remove("border");
    cashInBtn.children[1].classList.add("text-white");
    cashInBtn.children[1].classList.remove("text-stone-700");

});