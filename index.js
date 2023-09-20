var ranNumb = Math.round(Math.random()*5)+1;
var ranNumb1 = Math.round(Math.random()*5)+1;
var dic1 = document.querySelector("img.img1");
var dic2 = document.querySelector("img.img2");
var a = "./images/dice" + String(ranNumb)+".png"
var b = "./images/dice" + String(ranNumb1)+".png"
dic1.setAttribute("src",a);
dic2.setAttribute("src",b);

if(ranNumb>ranNumb1)
{
    document.querySelector("h2").textContent="Player one won !!!!"
}
else if (ranNumb===ranNumb1)
{
    document.querySelector("h2").textContent="It's a Tie!!!"
}
else{
    document.querySelector("h2").textContent="Player two won !!!!"
}