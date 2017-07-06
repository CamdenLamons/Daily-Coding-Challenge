// variables
var today = new Date()
var year = today.getFullYear()
var month = (today.getMonth() + 1)
var day = today.getDate()
var todaysDate = String(month) + " " + String(day) + " " + String(year);
var saveDate = String(month) + " " + String(day) + " " + String(year);
if(!localStorage.savedDate){localStorage.setItem("savedDate",saveDate);}
saveDate = localStorage.savedDate
var saveCC = "";
if(!localStorage.savedCC){localStorage.setItem("savedCC",saveCC);}
saveCC = localStorage.savedCC

// nodes
let ccNode = document.getElementById("codingChallengeText");

function update(){
    if(todaysDate != saveDate){
        ccNode.innerText = "Dates Not Equal";
        saveDate = todaysDate
        localStorage.savedDate = saveDate;
    }
    else if(saveCC == ""){
        ccNode.innerText = "Has No CC Yet"
    }
    else{
        ccNode.innerText = "Display CC For The Day"
    }
}