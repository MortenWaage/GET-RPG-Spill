class Dialog
{
    constructor()
    {
        this.init();
    }

    currentChoiceOption;

    choiceText;
    eventLogText;
    choiceFunction;
    choiceFunctionParameter;

    choiceTextList;
    eventLogTextList;
    choiceFunctionList;
    choiceFunctionParameter;
    
    init()
    {
        this.choiceTextList = [];
        this.eventLogTextList = [];
        this.choiceFunctionList = [];
        this.choiceFunctionParameterList = [];
    }
    
    ready()
    {
        this.choiceText = this.choiceTextList[0];
        this.eventLogText = this.eventLogTextList[0];
        this.choiceFunction = this.choiceFunctionList[0];
        this.choiceFunctionParameter = this.choiceFunctionParameterList[0];
    }

    nextChoiceText()
    {
        this.currentChoiceOption++;

        this.choiceText = this.choiceTextList[currentChoiceOption];
        this.eventLogText = this.eventLogTextList[currentChoiceOption];
        this.choiceFunction = this.choiceFunctionList[currentChoiceOption];
        this.choiceFunctionParameter = this.choiceFunctionParameterList[currentChoiceOption]
    }
}