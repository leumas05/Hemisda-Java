var plats = 'start'
var intagning

function main(){
    intagning = document.getElementById('Input').value
  
    switch(plats){
        case 'start':
            switch(intagning){
                case '/start':
                case '/Start':
                    document.getElementById('Input').placeholder = ''
                    plats = 'main'
                    Main();
                    break;
            }
        case 'main':
            switch(intagning){
                case '1':
                    Shop();
                       break;
              case '2':
                    basket();
                       break;
               case '3': 
                   cacheOut();
                        break;
                case '0':
                    startTillbaka();
                    break;
        }
                        break;
        case 'Shop':
            switch(intagning){
                case '1':
                    producter();
                break;
                case '0':
                    mainTillbaka();
                break;
            }
            break;
        case 'välj':
            switch(intagning){
                case 'Mat':
                case 'mat':
                Mat();
                    break;
                case 'Mobil':
                case 'mobil':
                Mobil();
                    break;
                case 'Bil':
                case 'bil':
                Bil();
                    break;
                case 'Dator':
                case 'dator':
                Dator();
                    break;
                case '/back':
                case '/Back':
                    mainTillbaka();
                    break;
            }
        break;
        case 'quantityMat':
            if(intagning <= mat[2] && intagning >= 0){
            antalmat = intagning
            beställMat();
            }
            else {
                alert('It doesn\'t exist that many')
                Shop();
            }
        break;
        case 'quantityMobil':
            if(intagning <= mobil[2] && intagning >= 0){
            antalMobil = intagning
            beställmobil();
            }
            else {
                alert('It doesn\'t exist that many')
                Shop();
            }
        break;
        case 'quantityBil':
            if(intagning <= bil[2] && intagning >= 0){
            antalBil = intagning
            beställbil();
            }
            else {
                alert('It doesn\'t exist that many')
                Shop();
            }
        break;
        case 'quantityDator':
            if(intagning <= dator[2] && intagning >= 0){
            antalDator = intagning
            beställdator();
            }
            else {
                alert('It doesn\'t exist that many')
                Shop();
            }
        break;
        case 'basket':
            switch(intagning){
                case '1':
                    taBortCheck();
                    break;
                case '2':
                    empty();
                    break;
                case '0':
                    mainTillbaka();
                    break;
            }
        break;       
        case 'borttagning':
            switch(intagning){
                case 'Mat':
                case 'mat':
                    taBortMat();
                    break;
                case 'Mobil':
                case 'mobil':
                    taBortMobil();
                    break;
                case 'Bil':
                case 'bil':
                    taBortBil();
                    break;
                case 'Dator':
                case 'dator':
                    taBortDator();
                    break;
                case '/back':
                case '/Back':
                    mainTillbaka();
                    break;
            }
            break;
        case 'tabortMat':
            if(intagning <= basketMat[2] && intagning >= 0){
                antaltabortmat = intagning
                removeMat();
                }
                else {
                    alert('You don\'t have this many in you\'r basket!')
                    basket();
                }
            break;
        case 'tabortMobil':
            if(intagning <= basketMobil[2] && intagning >= 0){
                antaltabortmobil = intagning
                removeMobil();
                }
                else {
                    alert('You don\'t have this many in you\'r basket!')
                    basket();
                }
            break;
        case 'tabortBil':
            if(intagning <= basketBil[2] && intagning >= 0){
                antaltabortbil = intagning
                removeBil();
                }
                else {
                    alert('You don\'t have this many in you\'r basket!')
                    basket();
                }
            break;
        case 'tabortDator':
            if(intagning <= basketDator[2] && intagning >= 0){
                antaltabortdator = intagning
                removeDator();
                }
                else {
                    alert('You don\'t have this many in you\'r basket!')
                    basket();
                }
            break;  
        case 'CashOut':
            switch(intagning){
                case '1':
                if(kostnad > 0){
                    leaveAndPay();
                }
                else{
                    alert('You don\'t have anything in you\'r basket!')
                    mainTillbaka();
                }
                    break;
                case '0':
                    mainTillbaka();
                    break;
            }
            break;
        case 'leaveAndPay':
            switch(intagning){
                case '/Restart':
                case '/restart':
                    startTillbaka();
                    break;
            }
            break;

        }
    }
