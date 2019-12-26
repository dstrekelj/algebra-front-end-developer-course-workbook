function checkCountry(){    
    var isValid = document.querySelector('#checkout_form').reportValidity();
    if (isValid == false) {        
        document.getElementById("btn_hidden").click();              
    }    
    else {        
        var x = document.getElementById("img_container");
        x.innerHTML = "<img id='bottom' src='smd.gif' alt='Mario waving'>"
        //caching problem....
        setTimeout(function(){x.removeChild(x.childNodes[0])},4000);
        setTimeout(function(){document.getElementById("btn_hidden").click();}, 4000);    
    }
}

function hideCardDiv(){
    document.getElementById("card_extra").style.display = "none";
    document.getElementById("payment_card_holder").value = "";
    document.getElementById("payment_card_holder").required = false;
    document.getElementById("payment_card_number").value = "";
    document.getElementById("payment_card_number").required = false;
    document.getElementById("payment_card_expiration_month").value = "";
    document.getElementById("payment_card_expiration_month").required = false;
}

function showCardDiv(){
    document.getElementById("card_extra").style.display = "block";
    document.getElementById("payment_card_holder").required = true;
    document.getElementById("payment_card_number").required = true;
    document.getElementById("payment_card_expiration_month").required = true;   
}