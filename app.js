function displayAlert(){
    alert("You have clicked a Link !")
}

function displayThanks(){
    alert("Thank you for purchasing This item !")
}

var counterDisplay = document.getElementById("counter");
let count = 0;
function increaseValue(){
    count++;
    counterDisplay.innerHTML = count
}
function decreaseValue(){
    count--;
    counterDisplay.innerHTML = count
}

function rowDeletion(givenId){
    document.getElementById(givenId).remove()
}