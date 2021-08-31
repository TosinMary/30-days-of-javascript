let btn = document.querySelector("button");
let span = document.getElementById("output");
let error = document.getElementById("error");
let text1 = document.getElementById("fig1");
let text2 = document.getElementById("fig2");
let text3 = document.getElementById("fig3");

const change =() =>{
    let red = fig1.value;
    let green = fig2.value;
    let blue = fig3.value;
    if (red > 255 || green > 255 || blue > 255 || red === "" || green === "" || blue === "") {
        error.innerHTML = "Wrong input!"
       //alert("this is a wrong input")
    }
    else{
        let space1 = hex(red);
        let space2 = hex(green);
        let space3 = hex(blue);

        let output = "#" + space1 + space2 + space3;
        document.body.style.backgroundColor = output;
        span.innerHTML = "this page has an hexadecimal color of " + output;
        error.innerHTML = ""
    }
}

const hex = (rgb) =>{
    let outcome = Number(rgb).toString(16)
    if(outcome.length < 2){
        outcome = '0' + code;
    }
    return outcome;
}
btn.addEventListener("click", change);

