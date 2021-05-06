/* SELECT ITEMS */

let change = 0;
let moneyInserted = 0;
let saleMessage = "";

let messageElement = document.querySelector('#message');

let totalPaid = 0;

const currencyTwo = 2;
const currencyOne = 1;
const currencyFifty = 0.5;
const currencyTwenty = 0.2;
const currencyTen = 0.1;

let coffees = ['Americano', 'Cappucciono', 'Cortado', 'Espresso', 'Flat White', 'Latte', 'Macchiato', 'Mocha'];
const coffeePrice = 2.3;

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

function tally() {
    moneyInserted = getTotal();
    document.querySelector('#paid').innerHTML = moneyInserted;
}

function clearTally() {
    moneyInserted = 0;
    document.querySelector('#paid').innerHTML = moneyInserted;
}

function clearForm() {
    document.querySelector('#two').value = 0;
    document.querySelector('#one').value = 0;
    document.querySelector('#fifty').value = 0;
    document.querySelector('#twenty').value = 0;
    document.querySelector('#ten').value = 0;
}

function calculateChange() {
    let tempChange = 0;

    if (getTotal() != 0) {
        return (tempChange = (getTotal() - coffeePrice).toFixed(2));
    }

    return tempChange.toFixed(2);
}

function dispenseCoffee(coffee) {
    messageElement.innerHTML = "";
    change = 0;

    let selectedCoffee = coffees[coffee];

    change = calculateChange();

    if (change < 0) {
        saleMessage = "You did not pay enough.<br> €" + totalPaid.toFixed(2) + " has been returned to the coin return.";
        totalPaid = 0;
        change = 0;
        clearForm();
        clearTally();
        messageElement.innerHTML = saleMessage;
    } else if (change > 0) {
        saleMessage = selectedCoffee + " has been dispensed.<br> €" + change + " has been returned to the coin return.";
        totalPaid = 0;
        change = 0;
        clearForm();
        clearTally();
        messageElement.innerHTML = saleMessage;
    } else if (totalPaid == 0) {
        saleMessage = "Please pay before selected a coffee.";
        messageElement.innerHTML = saleMessage;
    } else if (change == 0) {
        saleMessage = selectedCoffee + " has been dispensed.";
        totalPaid = 0;
        change = 0;
        clearForm();
        clearTally();
        messageElement.innerHTML = saleMessage;
    }
}

/* EVENT LISTENERS */

let cancelTally = document.querySelector('#cancel');

cancelTally.addEventListener('click', () => {
    getTotal();
    if (totalPaid > 0) {
        saleMessage = "Transaction cancelled.<br> €" + totalPaid.toFixed(2) + " has been returned.";

        clearForm()
        clearTally()
        messageElement.innerHTML = saleMessage;
    } else if (totalPaid == 0) {
        saleMessage = "Insert money first. Select a coffee."

        messageElement.innerHTML = saleMessage;
    }
}
)