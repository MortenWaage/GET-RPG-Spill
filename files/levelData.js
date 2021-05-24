// Klasse ved navn Level. Vi kan bruke denne til å lage an ny utgave av de samme variablene for hver level
// Tenk på det som et blueprint for en level som vi kan lage så mange kopier av som vi trenger.
class Level
{
    constructor()
    {

    }

    name;

    background;
    description;

    nextLevel;
    previousLevel;

    choice1;
    choice2;
    choice3;
    choice4;

}




function configureLevels()
{
    
    // Lager en ny utgave av level-klassen for hver av variablene vi satte i main.js
    level1 = new Level();
    level2 = new Level();
    level3 = new Level();
    level4 = new Level();




    
    // For hver av de nye levlene vi nå har laget så setter vi alle de relevant variablene for levelen.
    // Disse variablene er unike for hver "kopi" av en level, og kan nå hentes til ved å referer til den spesifikke levelen, punktum, og variabelnavnet.
    




    /**************************
     *          Level 1       *
     * ***********************/

    level1.name = "Level 1 - Hjemme.";

    level1.background = "files/maps/level1/background.png";
    level1.description = "Du våkner. Det er enda ikke blitt lyst ute. Hva gjør du?";

    level1.choice1 = new Dialog();
    level1.choice2 = new Dialog();
    level1.choice3 = new Dialog();

    // Oppsett av valg nr.1
    level1.choice1.enabled = true;
    level1.choice1.choiceTextList.push("Gå ut av huset");
    level1.choice1.eventLogTextList.push("Du gikk ut døren");
    level1.choice1.choiceFunctionList.push("loadLevel");    
    level1.choice1.choiceFunctionParameterList.push("2");

    // Oppsett av valg nr.2
    level1.choice2.enabled = true;
    level1.choice2.choiceTextList.push("Legg deg tilbake i sengen (Restart Game)");
    level1.choice2.eventLogTextList.push("Du la deg til å sove");
    level1.choice2.choiceFunctionList.push("resetGame");    
    level1.choice2.choiceFunctionParameterList.push("");

    // Oppsett av valg nr.3
    level1.choice3.enabled = false;
    level1.choice3.choiceTextList.push("Du ser en nøkkel på gulvet. Plukk den opp");
    level1.choice3.eventLogTextList.push("Du plukket opp nøkkelen");
    level1.choice3.choiceFunctionList.push("setNextDialogOption");      
    level1.choice3.choiceFunctionParameterList.push("3,2");

    level1.choice1.ready();
    level1.choice2.ready();
    level1.choice3.ready();
    




    /**************************
     *          Level 2       *
     * ***********************/

    level2.name = "Level 2 - Hagen";

    level2.background = "files/maps/level2/background.png";  
    level2.description = "Du er ute. Månen står på himmelen. Det er helt stille utenom vinden som rasler i gresset.<p></p>Hva gjør du?:";

    level2.choice1 = new Dialog();
    level2.choice2 = new Dialog();


    level2.choice1.enabled = true;
    level2.choice1.choiceTextList.push("Fortsett ned veien");
    level2.choice1.eventLogTextList.push("Du fortsatte nedover veien");
    level2.choice1.choiceFunctionList.push("loadLevel");    
    level2.choice1.choiceFunctionParameterList.push("3");

    level2.choice1.enabled = true;
    level2.choice2.choiceTextList.push("Gå tilbake i huset");
    level2.choice2.eventLogTextList.push("Du gikk tilbake inn i huset");
    level2.choice2.choiceFunctionList.push("loadLevel");   
    level2.choice2.choiceFunctionParameterList.push("1");

    level2.choice1.ready();
    level2.choice2.ready();





    /**************************
     *          Level 3       *
     * ***********************/

    level3.name = "Level 3 - Porten.";

    level3.background = "files/maps/level3/background.png";    
    level3.description = "Porten til skogen er låst. Du trenger en nøkkel, men hvor kan den være?";

    level3.choice1 = new Dialog();
    level3.choice2 = new Dialog();

    level3.choice1.enabled = true;
    level3.choice1.choiceTextList.push("Gå tilbake");
    level3.choice1.eventLogTextList.push("Du gikk tilbake til hagen");
    level3.choice1.choiceFunctionList.push("loadLevel");   
    level3.choice1.choiceFunctionParameterList.push("2");

    level3.choice2.enabled = true;
    level3.choice2.choiceTextList.push("Prøv å dytte opp porten");
    level3.choice2.eventLogTextList.push("Porten rikker seg ikke");
    level3.choice2.choiceFunctionList.push("changePropertyStatus");  
    level3.choice2.choiceFunctionParameterList.push("1,3,true");
    
    level3.choice2.choiceTextList.push("Sett i nøkkelen");
    level3.choice2.eventLogTextList.push("Porten lager en guffen lyd, men glir sakte opp");
    level3.choice2.choiceFunctionList.push("loadLevel"); 
    level3.choice2.choiceFunctionParameterList.push("4");

    console.log(level3.choice2.currentChoiceOption);

    level3.choice1.ready();
    level3.choice2.ready();





    /**************************
     *          Level 4       *
     * ***********************/

    level4.name = "Level 4 - Skogen";


    level4.background = "files/maps/level4/background.png";
    level4.description = "Du er ute i den store mørke skogen. Du hører ulver i det fjerne";
    
    level4.choice1 = new Dialog();

    level4.choice1.enabled = true;
    level4.choice1.choiceTextList.push("Gå tilbake");
    level4.choice1.eventLogTextList.push("Du gikk tilbake gjennom porten");
    level4.choice1.choiceFunctionList.push("loadLevel");   
    level4.choice1.choiceFunctionParameterList.push("3");

    level4.choice1.ready();
}




