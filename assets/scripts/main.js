const ufoImg = document.getElementById("ufo-img");

 document.getElementById("loginBtn").addEventListener("click", function(event) {
   const phone = document.getElementById("phoneNumber").value;
   const pin = document.getElementById("pinNumber").value;
    event.preventDefault();

    if(phone === "019" && pin === "1234") {  
      // window.location.assign("home.html");
      window.location.href = "home.html";
    } else {
      alert("please input a valid phone number or pin");
    };

 });

 //ufo image animation
 document.getElementById("phoneNumber").addEventListener("focusin", function() {
    ufoImg.classList.add("animate-bounce");
 })

 document.getElementById("phoneNumber").addEventListener("focusout", function() {
    ufoImg.classList.remove("animate-bounce");
 });

 document.getElementById("pinNumber").addEventListener("focusin", function() {
    ufoImg.classList.add("animate-bounce");
 })

 document.getElementById("pinNumber").addEventListener("focusout", function() {
    ufoImg.classList.remove("animate-bounce");
 });