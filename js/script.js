// BOTTONE
let btnSend = document.getElementById ("genBtn");

console.log (btnSend);

// FUNZIONE BOTTONE
btnSend.addEventListener("click", function(){

    // VALORE USERNAME
    let name = document.getElementById("nameInput");
    let nameValue = name.value;
    console.log (nameValue, typeof nameValue);

    // VALORE KM
    let km = document.getElementById ("kmInput");
    let kmValue = parseInt(km.value);
    console.log (kmValue, typeof kmValue);

    // VALORE ETA
    let age = document.getElementById ("ageInput");
    let ageValue = parseInt(age.value);
    console.log (ageValue, typeof ageValue);

    // VALORE BASE TICKET
    let ticketType = 0

    // CALCOLO PREZZO A KM
    let price = kmValue * 0.21;
    console.log (price, typeof price);

    // SCONTO PER ETA'
    let discountPrice = price;

    if (ageValue < 18) {
        discountPrice = price - price * 0.2;
        console.log (discountPrice,typeof discountPrice);

        ticketType = "Minorenni"
        console.log (ticketType, typeof ticketType);
    }
    else if (ageValue >= 65) {
        discountPrice = price - price * 0.4;
        console.log (discountPrice,typeof discountPrice);

        ticketType = "Over65"
        console.log (ticketType, typeof ticketType);
    }
    else {
        ticketType = "Standard"
        console.log (ticketType, typeof ticketType);
    }

    // ARROTONDO A 2 DECIMALI
    let finalPrice = discountPrice.toFixed(2);

    // INSERIMENTO NOME
    document.getElementById("bottomName").innerHTML = nameValue;

    // INSERIMENTO TIPO TICKET
    document.getElementById("bottomTicket").innerHTML = ticketType;

    // INSERIMENTO PREZZO FINALE
    document.getElementById("bottomPrice").innerHTML = finalPrice;

    // VALORE + INSERIMENTO CARROZZA CASUALE
    var cart = Math.floor(Math.random() * 10) + 1;
    console.log(cart)
    document.getElementById("bottomCart").innerHTML = cart

    // VALORE + INSERIMENTO CODICE CASUALE
    let code =  Math.floor(Math.random() * 10).toString() + 
                Math.floor(Math.random() * 10).toString() + 
                Math.floor(Math.random() * 10).toString() + 
                Math.floor(Math.random() * 10).toString() + 
                Math.floor(Math.random() * 10).toString();

    console.log(code, typeof code);

    document.getElementById("bottomCode").innerHTML = code;

});



