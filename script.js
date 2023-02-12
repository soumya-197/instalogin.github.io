function switchdiv() {
    if(document.getElementById("signup").style.display=="none"){
        document.getElementById("login").style.display="none";
        document.getElementById("signup").style.display="flex";
        document.getElementById("2").style.display="flex";
        document.getElementById("1").style.display="none";
    }
    else{
        document.getElementById("login").style.display="flex";
        document.getElementById("signup").style.display="none";
        document.getElementById("1").style.display="flex";
        document.getElementById("2").style.display="none";
    }
}