// variables

// start new date
var today = new Date()
// year
var year = today.getFullYear()
// month
var month = (today.getMonth() + 1)
// day
var day = today.getDate()
// todays date
var todaysDate = String(month) + " " + String(day) + " " + String(year);
// the saved date
// if no saved date then saved date is today
var saveDate = String(month) + " " + String(day) + " " + String(year);
if(!localStorage.savedDate){localStorage.setItem("savedDate",saveDate);}
saveDate = localStorage.savedDate
// the saved coding challenge
// if no saved coding challenge then saved saved coding challenge to nothing
var saveCC = "";
if(!localStorage.savedCC){localStorage.setItem("savedCC",saveCC);}
saveCC = localStorage.savedCC
// an random number
var rand = 0

// nodes

// cctext
// in the middle of the screen
let ccNode = document.getElementById("codingChallengeText");

// update function
// updates the cctext (coding challenge text)
function update(){
    // checks if the save date is no the same to todays date
    if(todaysDate != saveDate){
        rand = Math.floor(Math.random() * challenges.length)
        saveCC = String(rand)
        localStorage.savedCC = saveCC
        saveDate = todaysDate
        localStorage.savedDate = saveDate;
        ccNode.innerHTML = challenges[saveCC]
    }
    // checks if savecc is equal to nothing
    else if(saveCC == ""){
        rand = Math.floor(Math.random() * challenges.length)
        saveCC = String(rand)
        localStorage.savedCC = saveCC
        ccNode.innerText = challenges[saveCC]
    }
    // else runs if the date is the save as today and savecc is not equal to nothing
    else{
        ccNode.innerText = challenges[saveCC]
    }
}