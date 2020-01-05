function addToTotalP101(){
    var a, b, c, a_num, b_num;
    a = document.getElementById("P101_count").value;
    a_num = + a;
    b = document.getElementById("P101_total").value;
    b_num = + b;
    c = a_num + b_num;
    document.getElementById("P101_total").value = c;
    document.getElementById("cart").innerHTML = "Items in your cart:";
    document.getElementById("P101_cart").innerHTML = "Great green goblin: " + c;
    document.getElementById("P101_count").value = 1;   
}

function addToTotalP102(){
    var a, b, c, a_num, b_num;
    a = document.getElementById("P102_count").value;
    a_num = + a;
    b = document.getElementById("P102_total").value;
    b_num = + b;
    c = a_num + b_num;
    document.getElementById("P102_total").value = c;
    document.getElementById("cart").innerHTML = "Items in your cart:";
    document.getElementById("P102_cart").innerHTML = "Many mini millipedes: " + c;
    document.getElementById("P102_count").value = 1;  
}

function addToTotalP103(){
    var a, b, c, a_num, b_num;
    a = document.getElementById("P103_count").value;
    a_num = + a;
    b = document.getElementById("P103_total").value;
    b_num = + b;
    c = a_num + b_num;
    document.getElementById("P103_total").value = c;
    document.getElementById("cart").innerHTML = "Items in your cart:";
    document.getElementById("P103_cart").innerHTML = "Prickly pink pufferfish: " + c;
    document.getElementById("P103_count").value = 1;     
}

function emptyCart(){
    document.getElementById("P101_cart").innerHTML = "";
    document.getElementById("P101_total").value = 0;
   
    document.getElementById("P102_cart").innerHTML = "";
    document.getElementById("P102_total").value = 0;
   
    document.getElementById("P103_cart").innerHTML = "";
    document.getElementById("P103_total").value = 0;

    document.getElementById("cart").innerHTML = "Your cart is empty!";
}

function proceed(){
    var cart = document.getElementById("cart").innerHTML;
    if (cart != "Items in your cart:") {
        alert("You haven't done much shopping, have you?");
        returnToPreviousPage();              
    }    
    else {
    document.getElementById("img_lr").innerHTML = "<img class='ltr2' src='blt.gif' alt='bullet left'> <img class='ltry1' src='yor.gif' alt='yoshi'>"
    setTimeout(function(){document.getElementById("submit").click();}, 2000);
    }  
}

