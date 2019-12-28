function openChatPopup(){
    var chat = document.getElementById("main-container").style;
    chat.display = "block";
    chat.animation = "showChat 350ms ease-in";       
    document.getElementById("icon-open-chat").style.display = "none";
    document.getElementById("icon-close-chat").style.display = "block";
}

function closeChatPopup(){
    var chat = document.getElementById("main-container").style;
    chat.animation = "hideChat 350ms ease-out";
    setTimeout (function(){chat.display = "none"}, 300);   
    document.getElementById("icon-open-chat").style.display = "block";
    document.getElementById("icon-close-chat").style.display = "none";    
}

