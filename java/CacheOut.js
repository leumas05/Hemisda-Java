var kostnad
var kostnadMat
var kostnadMobil
var kostnadBil
var kostnadDator

function cacheOut(){
    plats = 'CashOut'
    kostnadMat = basketMat[2] * mat[3]
    kostnadMobil = basketMobil[2] * mobil[3]
    kostnadBil = basketBil[2] * bil[3]
    kostnadDator = basketDator[2] * dator[3]
    kostnad = kostnadMat + kostnadMobil + kostnadBil + kostnadDator
    document.getElementById('text').innerHTML = 'That will be: ' + kostnad + '<br> 1.Pay <br> 0.Back to menu'
}

function leaveAndPay(){
        emptyLeavenAndPay();
        leaveText();
        plats = 'leaveAndPay'
}

function emptyLeavenAndPay(){
    basketMat = ['mat1', 'Mat', 0, 0, 'false']
    basketMobil = ['mobil1', 'Mobil', 0, 0, 'false']
    basketBil = ["bil1","Bil", 0, 0,'false']
    basketDator = ["Dator1", "Dator", 0, 0,'false']

    mat = ['mat1', 'Mat', 5000, 21]
    mobil = ['mobil1', 'Mobil', 1, 19999]
    bil = ["bil1","Bil", 400, 500000]
    dator = ["Dator1", "Dator", 10000, 15000]
}