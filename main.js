var bread;
var filling;
var strSandwhich;

function getIngredients() {
    bread = document.getElementById("bread").value;
    document.getElementById("breadtype").innerHTML = bread;
    filling = document.getElementById("filling").value;
    document.getElementById("fillingtype").innerHTML = filling;
    strSandwhich = bread.substring(0,2) + filling + bread.substring(2);
    document.getElementById("strSand").innerHTML = strSandwhich;
}
function makeAstrSandwich(){
    getIngredients();
    console.log(strSandwhich);
}
