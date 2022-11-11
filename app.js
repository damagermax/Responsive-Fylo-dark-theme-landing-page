const errorView=document.getElementById("error")
const emailInput=document.getElementById("emailInput")

emailInput.addEventListener("input",()=>{
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(emailInput.value.match(validRegex)){
        errorView.style.display="none"
    }else{
        errorView.style.display="block"
    }

})

