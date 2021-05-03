/* SELECT ITEMS */

let change = 0;
let moneyInserted = 0;

totalPaid = 0;

const currencyTwo = 2;
const currencyOne = 1;
const currencyFifty = 0.5;
const currencyTwenty = 0.2;
const currencyTen = 0.1;

/* FUNCTIONS */

function getTotal() {
    let insertedTwo = Number(document.querySelector('#two').value);
    let insertedOne = Number(document.querySelector('#one').value);
    let insertedFifty = Number(document.querySelector('#fifty').value);
    let insertedTwenty = Number(document.querySelector('#twenty').value);
    let insertedTen = Number(document.querySelector('#ten').value);


    if (insertedTwo > 0) {
        insertedTwo = insertedTwo * currencyTwo
    }

    if (insertedOne > 0) {
        insertedOne = insertedOne * currencyOne
    }

    if (insertedFifty > 0) {
        insertedFifty = insertedFifty * currencyFifty
    }

    if (insertedTwenty > 0) {
        insertedTwenty = insertedTwenty * currencyTwenty
    }

    if (insertedTen > 0) {
        insertedTen = insertedTen * currencyTen
    }

    totalPaid = insertedTwo + insertedOne + insertedFifty + insertedTwenty + insertedTen;

    return totalPaid.toFixed(2);

}

console.log(getTotal());


function tally() {
    moneyInserted = getTotal();
    document.querySelector('#paid').innerHTML = moneyInserted;
}