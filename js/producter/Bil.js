var antalBil = 0;

function Bil(){
    document.getElementById('text').innerHTML = 'quantity:'
    plats = 'quantityBil'
}

function beställbil(){
    basketBil[2] += parseInt(antalBil)
    bil[2] -= antalBil
    Shop();

    if(intagning > 0){
        basketBil[4] = 'true'
    }
}