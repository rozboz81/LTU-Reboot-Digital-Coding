function wearACoat(temperature){
    blnNotNumber = false;
    if(isNaN(temperature)){
        blnNotNumber = true;
    }
    if(!blnNotNumber){
         if(temperature < 0){
            console.log('Stay inside');
        } else if (temperature < 10){
            console.log('Wear a coat and hat');
        } else if (temperature < 15){
            console.log('Wear a coat');
        } else {
            console.log('You don\'t need a coat');
        }
    } else {
        console.log('temperature needs to be a number');
    }
}

wearACoat(20);
wearACoat(14);
wearACoat(5);
wearACoat(-3);
wearACoat('Alex');
wearACoat({});
wearACoat([]);