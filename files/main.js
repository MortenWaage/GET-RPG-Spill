var eventLog;
var artArea;
var objectList;
var inputBar;



var eventLogList = [];
var eventNumber = 1;
var maxDisplayedEvents = 12;



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


function updateInputBar()
{
    inputBar.innerHTML = inputOptions;
}




