function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        // console.log(pin);
        return pin;
    }else{
        // console.log("Get pin is calling when pin " + pin);
        return getPin();
    }
}

function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}


document.getElementById('typed-pin').addEventListener('click',function(event){

    const number = event.target.innerText;
    const inputNumber =  document.getElementById('display-typed');

    if(isNaN(number)){
        
        if(number == 'C'){
            inputNumber.value = '';
        }

        // delete last character from string js 
        if(number == '<')
            inputNumber.value = inputNumber.value.slice(0,-1);
            

    }else{

        const previousNumber = inputNumber.value;
        const newNumber = previousNumber + number;
        inputNumber.value = newNumber;

    }
    
})

function checkPinMatching(){
    const pin = document.getElementById('display-pin').value;
    const typedPin = document.getElementById('display-typed').value;
    const notifySuccess = document.getElementById('notify-success');
    const notifyFail= document.getElementById('notify-fail');

    if(pin == typedPin){
        notifySuccess.style.display = 'block';
        notifyFail.style.display = 'none';
    }else{
        notifySuccess.style.display = 'none';
        notifyFail.style.display = 'block';
    }
}