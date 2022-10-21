var antalmat = 0;

function Mat(){
    document.getElementById('text').innerHTML = 'Choose quantity:'
    plats = 'quantityMat'
}

function beställMat(){
    basketMat[2] += parseInt(antalmat)
    mat[2] -= antalmat
    Shop();

    if(intagning > 0){
        basketMat[4] = 'true'
    }
}

