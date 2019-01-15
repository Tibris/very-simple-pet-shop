const whiteMouse = document.getElementById("white-mouse");
const mouseQuote = document.getElementById("mouse-quote");

function mouseShow() {
    setTimeout(function(){ whiteMouse.style.visibility="visible"; }, 2000);
}

function quoteShow() {
    setTimeout(function(){ mouseQuote.style.visibility="visible";},2000);
}
function main() {

whiteMouse.addEventListener("onload", mouseShow());
mouseQuote.addEventListener("onload", quoteShow());

}

main();