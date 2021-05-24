// KeyCodes for hver knapp. Setter verdien her slik at det blir lettere å bytte hvilke knapper som brukes til hva.
// KeyCodes kan fåes fra https://keycode.info/
ButtonOne = "Digit1";
ButtonTwo = "Digit2";
ButtonThree = "Digit3";
ButtonFour = "Digit4";




// Holder styr på hvilke knapper som kan trykkes på. Om verdien er false vil det si at knappen er trykket på, men ikke sluppet enda.
var canPressOne = true;
var canPressTwo = true;
var canPressThree = true;
var canPressFour = true;

function resetInput()
{
    canPressOne = true;
    canPressTwo = true;
    canPressThree = true;
    canPressFour = true;
}


// Her sjekker vi om spilleren har sluppet knappen.
function enablePlayerInput(e)
{
    if(e.code == ButtonOne)
    {
        canPressOne = true;
    }
    if(e.code == ButtonTwo)
    {
        canPressTwo = true;
    }
    if(e.code == ButtonThree)
    {
        canPressThree = true;
    }
    if(e.code == ButtonFour)
    {
        canPressFour = true;
    }
}





// Sjekk hvilken knapp som blir trykket på, og sett deretter canPressKNAPP til false.
// Dette hindrer at Inputtet leses flere ganger om knappen blir holdt nede.
function getPlayerInput(e)
{
    if(e.code == ButtonOne && canPressOne) 
    {
        canPressOne = false;
        selectMenuItem(1);
    } 
    if(e.code == ButtonTwo && canPressTwo) 
    {
        canPressTwo = false;
        selectMenuItem(2);
    }  
    if(e.code == ButtonThree && canPressThree) 
    {
        canPressThree = false;
        selectMenuItem(3);
    }  
    if(e.code == ButtonFour && canPressFour) 
    {
        canPressFour = false;
        selectMenuItem(4);
    }         
}




// Utfører funksjonen til den knappen som ble trykket på
function selectMenuItem(choice)
{    

    let _choice = "choice" + choice.toString();  

    if (currentLevel[_choice] != null)
    {
        if (currentLevel[_choice].enabled == false)
            return;

        eventLogList.push(eventNumber + ': ' + currentLevel[_choice].eventLogText);

        if (currentLevel[_choice].choiceFunction != null)
            window[currentLevel[_choice].choiceFunction](currentLevel[_choice].choiceFunctionParameter.toString());
    }

    else
        return;

    eventNumber++;
    updateEventLog();
}



