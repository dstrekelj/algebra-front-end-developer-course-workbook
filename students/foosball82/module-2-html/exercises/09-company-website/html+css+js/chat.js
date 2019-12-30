function openChatPopup(){
    var chat = document.getElementById("main-container").style;
    chat.display = "block";
    chat.animation = "showChatBox 350ms ease-in";
    chat.webkitAnimation = "showChatBox 350ms ease-in";
    document.getElementById("icon-open-chat").style.opacity = "0";    
    setTimeout (function(){document.getElementById("icon-open-chat").style.display = "none";}, 250);
    setTimeout (function(){document.getElementById("icon-close-chat").style.display = "block";}, 250);
    setTimeout (function(){document.getElementById("icon-close-chat").style.opacity = "1";}, 350);     
}

function closeChatPopup(){
    var chat = document.getElementById("main-container").style;
    chat.animation = "hideChatBox 350ms ease-out";
    chat.webkitAnimation = "hideChatBox 350ms ease-out";
    setTimeout (function(){chat.display = "none"}, 300);   
    document.getElementById("icon-close-chat").style.opacity = "0";    
    setTimeout (function(){document.getElementById("icon-close-chat").style.display = "none";}, 400);
    setTimeout (function(){document.getElementById("icon-open-chat").style.display = "block";}, 950);
    setTimeout (function(){document.getElementById("icon-open-chat").style.opacity = "1";}, 1000);
}

