const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const notes = [2000,500,100,20,10,5,1];

// console.log(billAmount.value);
// console.log("it is working")

checkButton.addEventListener("click" ,function validateBillAndCashAmount(){
    hideMessage();
    if(billAmount.value > 0){

        if(billAmount.value <= cashGiven.value || billAmount.value == 50){
            const diff = cashGiven.value - billAmount.value;
            calculateChange(diff);
            
        }
        else{
            showErrorMessage("Cash given should be greater than or equal to bill value");
        }
    }
    else{
        showErrorMessage("the bill amount should be greater than 0");
    }
});

function hideMessage(){
    message.style.display = "none"; //change the display value to none everytime the button is clicked
}

function calculateChange(diff)
{
    for(let i=0;i<notes.length;i++)
    {
        const numberOfNotes = Math.trunc(diff/notes[i]);
        diff%=notes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function showErrorMessage(string){
    message.style.display = "block";
    message.innerText = string;
}
