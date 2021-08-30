let fillIn = document.getElementById('fillIn');
let button = document.getElementById('button');
let counts = document.getElementById('counts');

const wordCount =() =>{
    let arr = fillIn.value.split(' ');
    arr = arr.filter(val => !!val)
    counts.innerHTML= ' is ' + arr.length + ' word';
    if (arr.length > 1) {
        counts.innerHTML = ' are ' + arr.length + '  words'
    }


}
button.addEventListener('click', wordCount);