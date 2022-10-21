var antalDator = 0;

function Dator(){
    document.getElementById('text').innerHTML = 'quantity:'
    plats = 'quantityDator'
}

function beställdator(){
    basketDator[2] += parseInt(antalDator)
    dator[2] -= antalDator
    Shop();

    if(intagning > 0){
        basketDator[4] = 'true'
    }
}