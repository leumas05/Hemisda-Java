var antalMobil = 0;

function Mobil(){
    document.getElementById('text').innerHTML = 'quantity:'
    plats = 'quantityMobil'
}

function beställmobil(){
    basketMobil[2] += parseInt(antalMobil)
    mobil[2] -= antalMobil
    Shop();

    if(intagning > 0){
        basketMobil[4] = 'true'
    }
}