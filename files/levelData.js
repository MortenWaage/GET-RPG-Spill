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

    logEvent1;
    logEvent2;
    logEvent3;
    logEvent4;

    choiceFunction1;
    choiceFunction2;
    choiceFunction3;
    choiceFunction4;

    choiceParameter1;
    choiceParameter2;
    choiceParameter3;
    choiceParameter4;
}




function configureLevels()
{
    // Lager en ny utgave av level-klassen for hver av variablene vi satte i main.js
    level1 = new Level();
    level2 = new Level();
    level3 = new Level();


    // For hver av de nye levlene vi nå har laget så setter vi alle de relevant variablene for levelen.
    // Disse variablene er unike for hver "kopi" av en level, og kan nå hentes til ved å referer til den spesifikke levelen, punktum, og variabelnavnet.
    
    // Level 1
    level1.name = "Level 1 - Hjemme."

    level1.background = "files/maps/level1/background.png";    
    level1.description = "Du våkner. Det er enda ikke blitt lyst ute. Hva gjør du?";
    level1.choice1 = "Gå ut av huset";
    level1.choice2 = "Legg deg tilbake i sengen (Restart Game)";

    level1.nextLevel = 2;

    level1.logEvent1 = "Du gikk ut døren";
    level1.logEvent2 = "Du la deg til å sove";

    level1.choiceFunction1 = "loadLevel";
    level1.choiceParameter1 = level1.nextLevel;
    
    level1.choiceFunction2 = "resetGame";
    level1.choiceParameter2 = '';


    




    //Level 2
    level2.name = "Level 2 - Hagen"

    level2.background = "files/maps/level2/background.png";    
    level2.description = "Du er ute. Månen står på himmelen. Det er helt stille utenom vinden som rasler i gresset.<p></p>Hva gjør du?:";
    level2.choice1 = "Fortsett ned veien";
    level2.choice2 = "Gå tilbake i huset";

    level2.nextLevel = 3;
    level2.previousLevel = 1;

    level2.logEvent1 = "Du fortsatte nedover veien";
    level2.logEvent2 = "Du gikk tilbake inn i huset";

    level2.choiceFunction1 = "loadLevel";
    level2.choiceParameter1 = level2.nextLevel;
    level2.choiceFunction2 = "loadLevel";
    level2.choiceParameter2 = level2.previousLevel;





    // Level 3
    level3.name = "Level 3 - Porten."

    level3.background = "files/maps/level3/background.png";    
    level3.description = "Porten til skogen er låst. Du trenger en nøkkel, men hvor kan den være?";
    level3.choice1 = "Gå tilbake";

    level3.previousLevel = 2;

    level3.logEvent1 = "Du gikk tilbake";

    level3.choiceFunction1 = "loadLevel";
    level3.choiceParameter1 = level3.previousLevel;
}




