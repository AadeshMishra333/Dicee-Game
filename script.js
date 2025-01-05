var p1 = Math.floor(Math.random()*6) + 1;
var p2 = Math.floor(Math.random()*6) + 1;
var res = "";

if (p1 == p2){
    res = "Drawwww"
}
else{
    if(p1>p2){
        res = "Player 1 wins!!"
    }
    else{
        res = "Player 2 wins!!"
    }
}

document.querySelector(".img1").setAttribute("src","./images/dice"+p1+".png");
document.querySelector(".img2").setAttribute("src","./images/dice"+p2+".png");
document.querySelector("h1").innerText = res;