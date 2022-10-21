function Shop(){
    plats = 'Shop'
    document.getElementById('text').innerHTML = "Shop: <br>1.buy <br>0.back to menu"
}

function producter(){
    plats = 'välj'
    document.getElementById('text').innerHTML = mat[1] +": "+ mat[3] + "kr - " + mat[2] + "st<br>" + mobil[1] +": "+ mobil[3] + "kr - " + mobil[2] + "st<br>" +bil[1] +": "+ bil[3] + "kr - " + bil[2] + "st<br>" +dator[1] +": "+ dator[3] + "kr - " + dator[2] + "st<br>" + "Choose product:"
}