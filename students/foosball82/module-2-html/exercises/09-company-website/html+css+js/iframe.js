window.onload = delayIframe();

function delayIframe(){
    setTimeout(function(){
        var x = document.getElementById("chat").style;
        x.display = "block";
        x.animation = "showChat 150ms ease-in";
    }, 2000);
}