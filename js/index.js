
var vocal = ["a","i","u","e","o"]

function encriptar(vocal) {
    if(vocal == "a"){
        a = "ai"
        return a;
    } else if (vocal == "e"){
        e = "enter"
        return e;
    } else if(vocal == "i"){
        i = "imes"
        return i;
    } else if(vocal == "u"){
        o = "ober"
        return o;
    } else if(vocal == "o"){
        u = "ufat"
        return u;
    }
}
console.log(encriptar(vocal));

function desencriptar(params) {
    if(vocal == "ai"){
        a = "a"
        return a;
    } else if (vocal == "e"){
        e = "enter"
        return e;
    } else if(vocal == "i"){
        i = "imes"
        return i;
    } else if(vocal == "u"){
        o = "ober"
        return o;
    } else if(vocal == "o"){
        u = "ufat"
        return u;
    }
}

var input = document.querySelector("input");