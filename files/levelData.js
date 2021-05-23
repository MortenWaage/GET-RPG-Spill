function configureLevels()
{
    level1 = new Level();
    level2 = new Level();
    level3 = new Level();


    // Level 1
    level1.name = "Level 1 - Hjemme."

    level1.background = "files/maps/level1/background.png";    
    level1.description = "Du våkner. Det er enda ikke blitt lyst ute. Hva gjør du?";
    level1.choice1 = "Gå ut av huset";
    level1.choice2 = "Legg deg tilbake i sengen (Restart Game)";

    level1.nextLevel = 2;
    level1.previousLevel = 0;

    level1.logEvent1 = "Du gikk ut døren";
    level1.logEvent2 = "Du la deg til å sove";

    level1.choiceResult1 = "loadLevel";
    level1.choiceParameter1 = level1.nextLevel;
    
    level1.choiceResult2 = "resetGame";


    
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

    level2.choiceResult1 = "loadLevel";
    level2.choiceParameter1 = level2.nextLevel;
    level2.choiceResult2 = "loadLevel";
    level2.choiceParameter2 = level2.previousLevel;


    // Level 3
    level3.name = "Level 3 - Porten."

    level3.background = "files/maps/level3/background.png";    
    level3.description = "Porten til skogen er låst. Du trenger en nøkkel, men hvor kan den være?";
    level3.choice1 = "Gå tilbake";

    level3.nextLevel = 4;
    level3.previousLevel = 2;

    level3.logEvent1 = "Du gikk tilbake";

    level3.choiceResult1 = "loadLevel";
    level3.choiceParameter1 = level3.previousLevel;
}



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

    choiceResult1;
    choiceResult2;
    choiceResult3;
    choiceResult4;

    choiceParameter1;
    choiceParameter2;
    choiceParameter3;
    choiceParameter4;
}
