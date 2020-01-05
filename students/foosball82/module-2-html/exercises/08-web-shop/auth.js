function storeCredentials(){
    var username = document.getElementById("email").value;    
    sessionStorage.setItem("username", username);

    var password = document.getElementById("password").value;    
    sessionStorage.setItem("password", password);
}

function getCredentials(){
    var username = sessionStorage.getItem("username");
    var password = sessionStorage.getItem("password");
    if (username != document.getElementById("email").value){
        alert("Wrong e-mail address!");
        returnToPreviousPage();        
    }
    else
    if (password != document.getElementById("password").value){
        alert("Wrong password!");
        returnToPreviousPage();
    }
    else {
        document.getElementById("btn_hidden").click();
    }
}