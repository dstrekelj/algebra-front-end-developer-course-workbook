function checkCountry(){
    var country = document.getElementById("sender_country").value;
    if (country == "none") {
        alert("Select country!");
        returnToPreviousPage();              
    }    
    else {
        document.getElementById("btn_hidden").click();
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