var basketMat = ['mat1', 'Mat', 0, 0, 'false']
var basketMobil = ['mobil1', 'Mobil', 0, 0, 'false']
var basketBil = ["bil1","Bil", 0, 0,'false']
var basketDator = ["Dator1", "Dator", 0, 0,'false']

var antaltabortmat
var antaltabortmobil
var antaltabortbil
var antaltabortdator


function basket(){
    plats = 'basket'
    //document.getElementById('text').innerHTML = 'Your Basket: <br>' + basketMat[1] + ' : ' + basketMat[3] + 'kr - ' + basketMat[2] + '<br>'+ basketMobil[1] + ' : ' + basketMobil[3] + 'kr - ' + basketMobil[2] + '<br>'+ basketBil[1] + ' : ' + basketBil[3] + 'kr - ' + basketBil[2] + '<br>'+ basketDator[1] + ' : ' + basketDator[3] + 'kr - ' + basketDator[2] + '<br>'
    document.getElementById('text').innerHTML = 'You\'r Basket: <br>'
    
    if(basketMat[4] == 'true'){
        basketMat[3] = basketMat[2] * mat[3]
        document.getElementById('text').innerHTML += basketMat[1] + ' : ' + basketMat[3] + 'kr - ' + basketMat[2] + 'st<br>'
    }
    if(basketMobil[4] == 'true'){
        basketMobil[3] = basketMobil[2] * mobil[3]
        document.getElementById('text').innerHTML += basketMobil[1] + ' : ' + basketMobil[3] + 'kr - ' + basketMobil[2] + 'st<br>'
    }
    if(basketBil[4] == 'true'){
        basketBil[3] = basketBil[2] * bil[3]
        document.getElementById('text').innerHTML += basketBil[1] + ' : ' + basketBil[3] + 'kr - ' + basketBil[2] + 'st<br>'
    }
    if(basketDator[4] == 'true'){
        basketDator[3] = basketDator[2] * dator[3]
        document.getElementById('text').innerHTML += basketDator[1] + ' : ' + basketDator[3] + 'kr - ' + basketDator[2] + 'st<br>'
    }
    if(basketMat[4] == 'false' && basketMobil[4] == 'false' && basketBil[4] == 'false' && basketDator[4] == 'false'){
        document.getElementById('text').innerHTML += '\"Emtpy\" <br>'
    }
    document.getElementById('text').innerHTML += '1.Remove Product <br>'
    document.getElementById('text').innerHTML += '2.Empty basket <br>'
    document.getElementById('text').innerHTML += '0.Back to menu <br>'
}

function taBortCheck(){
    if(basketMat[4] == 'true' || basketMobil[4] == 'true' || basketBil[4] == 'true' || basketDator[4] == 'true'){
        plats = 'borttagning'
        taBortText();
    }
    else{
        alert('You don\'t have any products in you\r basket!')
        mainTillbaka();
    }
}

function taBortText(){
    document.getElementById('text').innerHTML = 'Choose product: <br>'
    if(basketMat[4] == 'true'){
        basketMat[3] = basketMat[2] * mat[3]
        document.getElementById('text').innerHTML += basketMat[1] + ' : ' + basketMat[3] + 'kr - ' + basketMat[2] + 'st<br>'
    }
    if(basketMobil[4] == 'true'){
        basketMobil[3] = basketMobil[2] * mobil[3]
        document.getElementById('text').innerHTML += basketMobil[1] + ' : ' + basketMobil[3] + 'kr - ' + basketMobil[2] + 'st<br>'
    }
    if(basketBil[4] == 'true'){
        basketBil[3] = basketBil[2] * bil[3]
        document.getElementById('text').innerHTML += basketBil[1] + ' : ' + basketBil[3] + 'kr - ' + basketBil[2] + 'st<br>'
    }
    if(basketDator[4] == 'true'){
        basketDator[3] = basketDator[2] * dator[3]
        document.getElementById('text').innerHTML += basketDator[1] + ' : ' + basketDator[3] + 'kr - ' + basketDator[2] + 'st<br>'
    }
}

function taBortMat(){
    document.getElementById('text').innerHTML = 'Choose quantity:'
    plats = 'tabortMat'
}
function taBortMobil(){
    document.getElementById('text').innerHTML = 'Choose quantity:'
    plats = 'tabortMobil'
}
function taBortBil(){
    document.getElementById('text').innerHTML = 'Choose quantity:'
    plats = 'tabortBil'
}
function taBortDator(){
    document.getElementById('text').innerHTML = 'Choose quantity:'
    plats = 'tabortDator'
}

function empty(){
    basketMat = ['mat1', 'Mat', 0, 0, 'false']
    basketMobil = ['mobil1', 'Mobil', 0, 0, 'false']
    basketBil = ["bil1","Bil", 0, 0,'false']
    basketDator = ["Dator1", "Dator", 0, 0,'false']

    mat = ['mat1', 'Mat', 5000, 21]
    mobil = ['mobil1', 'Mobil', 1, 19999]
    bil = ["bil1","Bil", 400, 500000]
    dator = ["Dator1", "Dator", 10000, 15000]

    plats = 'main'

    Main = 'true'

    basket();
}

function removeMat(){
    basketMat[2] -= antaltabortmat
    mat[2] += parseInt(antaltabortmat)

    if(basketMat[2] == 0){
        basketMat[4] = 'false'
    }
    basket();
}
function removeMobil(){
    basketMobil[2] -= antaltabortmobil
    mobil[2] += parseInt(antaltabortmobil)

    if(basketMobil[2] == 0){
        basketMobil[4] = 'false'
    }
    basket();
}
function removeBil(){
    basketBil[2] -= antaltabortbil
    bil[2] += parseInt(antaltabortbil)

    if(basketBil[2] == 0){
        basketBil[4] = 'false'
    }
    basket();
}
function removeDator(){
    basketDator[2] -= antaltabortdator
    dator[2] += parseInt(antaltabortdator)

    if(basketDator[2] == 0){
        basketDator[4] = 'false'
    }
    basket();
}