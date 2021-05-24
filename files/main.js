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
var level4;

var description
var choice = [];


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
    updateEventLog();
    updateLevel();



}


function updateLevel()
{
    artArea.innerHTML = currentLevel.name;
    artArea.style.background = 'url(' + currentLevel.background + ')';
}





// Oppdaterer informasjon på Inputbaren i forhold til hva som er spesifisert i hver level.
function updateInputBar()
{
    if (currentLevel.description != null)
        description = currentLevel.description;

    inputBar.innerHTML = description + '<p></p>' + " --- Valg --- <p></p>";    

    
    for (c = 0; c < 4; c++)
    {
        let _choice = "choice" + c.toString();   

        if (currentLevel[_choice] != null)
        {
            if (currentLevel[_choice].enabled == false)
                return;
                        
            choice[c] = currentLevel[_choice].choiceText;
            
            if(choice[c] != null)
                inputBar.innerHTML +=  c + ") " + choice[c] + '<p></p>';
        } 
    }  
}



// Resetter spillet til slik det var ved start
function resetGame()
{
    alert("Spillet er over!");

    eventLogList = [];
    eventNumber = 0;

    configureLevels();
    loadLevel(1);
    updateInputBar();
}






function changeProperty(string) //"3,0,files/maps/level3/background2.png,background"
{
    let _arguments = [a, b, c, d] = string.split(","); 
    let _value = _arguments[2];

    console.log(_arguments[2]);


    if (_arguments[2] == "true")
        _value = true;
    if (_arguments[2] == "false")
        _value = false;

    level = ["level" + _arguments[0]];
    choice = ["choice" + _arguments[1]];
    
    if (_arguments[1] == 0)
    {
        window["level" + _arguments[0]][_arguments[3]] = _value;
    }
    else
        window["level" + _arguments[0]]["choice" + _arguments[1]][_arguments[3]] = _value;
    //window["level" + _arguments[0]]["choice" + _arguments[1]][_arguments[3]] = _value;

    updateLevel()
}


function setNextDialogOption(string)
{
    let _arguments = [a, b] = string.split(",");
    console.log(_arguments[0] + ":" + _arguments[1]);    

    window["level" + _arguments[0]]["choice" + _arguments[1]].setNextChoice();

    
}