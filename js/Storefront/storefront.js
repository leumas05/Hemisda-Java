var start = true
var input = document.getElementById('Input');
input.focus();

document.onclick = function clicked(){
    input.focus();
}


if(start = true){
    document.getElementById('text').innerHTML = ""
    document.getElementById('Input').placeholder = 'Type: /Start'
    start = false
}

function startTillbaka(){
    plats = 'start'
    document.getElementById('text').innerHTML = ""
    document.getElementById('Input').placeholder = 'Type: /Start'
}