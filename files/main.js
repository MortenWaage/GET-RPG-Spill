var eventLog;
var artArea;
var objectList;
var inputBar;


var eventLogList = [];
var eventNumber = 1;
var maxDisplayedEvents = 12;


var currentLevel;
var level1;
var level2;
var level3;


var description
var choice1;
var choice2;
var choice3;
var choice4;


// Denne funksjonen kjøres når siden først lastes. Lager en referanse til de forskjellige elementene så
// Vi lett kan referere til de senere i koden.
function init()
{
    document.addEventListener("keydown", getPlayerInput);
    document.addEventListener("keyup", enablePlayerInput);

    eventLog = document.getElementById("eventLog");
    artArea = document.getElementById("artArea");
    objectList = document.getElementById("objectList");
    inputBar = document.getElementById("inputBar");

    configureLevels(); 
    loadLevel(1);

    updateInputBar();

    console.log("Finished Initializing");
}




// Oppdaterer hendelsesloggen med hva som har skjedd i spillet
function updateEventLog()
{
    eventLog.innerHTML = "Hendelseslogg:" + '<p></p>';

    if (eventLog == null)
        return;

    for (e = eventLogList.length-1; e > (eventLogList.length-1) - maxDisplayedEvents; e--)
    {
        if (eventLogList[e] != null)
            eventLog.innerHTML += '<p></p>' + eventLogList[e];       
    }
}





// Laster inn en level basert på argumentet i funksjonen
function loadLevel(level)
{
    currentLevel = window["level" + level.toString()];
    updateInputBar();

    artArea.innerHTML = currentLevel.name;
    artArea.style.background = 'url(' + currentLevel.background + ')';

}





// Oppdaterer informasjon på Inputbaren i forhold til hva som er spesifisert i hver level.
function updateInputBar()
{
    if (currentLevel.description != null)
        description = currentLevel.description;

    inputBar.innerHTML = description + '<p></p>' + " --- Valg --- <p></p>";


    if (currentLevel.choice1 != null)
    {
        choice1 = currentLevel.choice1;
        inputBar.innerHTML +=  "1) " + choice1 + '<p></p>';
    }        
        
    if (currentLevel.choice2 != null)
    {
        choice2 = currentLevel.choice2;
        inputBar.innerHTML +=  "2) " + choice2 + '<p></p>';
    }     
    
    if (currentLevel.choice3 != null)
    {
        choice3 = currentLevel.choice3;
        inputBar.innerHTML +=  "3) " + choice3 + '<p></p>';
    }
        
    if (currentLevel.choice4 != null)
    {
        choice4 = currentLevel.choice4;
        inputBar.innerHTML +=  "4) " + choice4;
    }     

}



// Resetter spillet til slik det var ved start uansett hvor funksjonen kalles fra.
function resetGame()
{
    alert("Spillet er over!");

    eventLogList = [];
    eventNumber = 0;

    configureLevels();
    loadLevel(1);
    updateInputBar();
}