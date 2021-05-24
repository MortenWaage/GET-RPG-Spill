class Dialog
{
    constructor()
    {
        this.init();
    }

    enabled;
    repeat; // if false, choice will be removed upon selection

    currentDialogOption;    

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
        //this.repeat = true;
        this.currentDialogOption = 0;
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


    setNextChoice()
    {
        this.currentDialogOption += 1;

        this.choiceText = this.choiceTextList[this.currentDialogOption];
        this.eventLogText = this.eventLogTextList[this.currentDialogOption];
        this.choiceFunction = this.choiceFunctionList[this.currentDialogOption];
        this.choiceFunctionParameter = this.choiceFunctionParameterList[this.currentDialogOption]
    }
}