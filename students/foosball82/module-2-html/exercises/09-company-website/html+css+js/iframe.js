window.onload = delayIframe();

function delayIframe(){
    /*promjena display propertyja ne radi na iPadu..*/
    setTimeout(function(){         
        var x = document.getElementById("chat").style;             
        x.display = "block";
        x.animation = "showChatInitial 150ms ease-in";
        x.webkitAnimation = "showChatInitial 150ms ease-in";
    }, 2000);
}