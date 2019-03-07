var questright=0;
var questworng=0;
var GameQuest;



function quest(ask, multi, final){
    quest.ask=ask;
    quest.multi=multi;
    quest.final=final;

}

for (i=0; i < 11 ; i++)

document.getElementById(<p id='quest'></p>)
 

function rightchoice () {
    if (multi === final)
        qestsright++     
}
if else{
    questwrong++

}




// this ii the Questions
var GameQuest = [
        quest("What is the name of Han Solo's ship?", ['A: Millennium Eagle', 'B: Millennium Falcon','C: The Hunk of Junk'], "b"),
        quest("What class of fighter did Luke Skywalker Fly?",["A: Y-Wing", "B: A-Wing", "C: X-Wing"], "c"),
        quest("What is a Parsec?",["A: A unt of time", "B: A unit of distance", "C: A made up phrase"], "b"),
        quest("What is the name of the Star Wars Holliday Special?",["A: There never was a specail","B: Star Wars Holliday Special", "C: Yoda is Comming to Town"], "b"),
        quest("What is Ben (Obi-Wan) Kenobi's rank durring the Clone Wars",["A: General", "B: Privet First Class", "C: Jedi Knight"], "a"),
        quest( "What was Luke's home planet", ["A: Hoth", "B:Dagobah", "C: Tatooine"], "c"),
        quest("Who/What is Yoda", ["A: Great warior / Jedi Master", "B: Sith", "C: Something you add Strawberries to for breakfast"], "a"),
        quest("What were Han's odds for navigating the astroid field", ["A: 7284 : 1","B: 10,000 : 1","C: 3720 : 1"], "c'"),
        quest("What did Luke's uncle do on Tatooine",["A: Moisture Farmer", "B: Droid repair", "C: Blue Milk farmer"], "a"),
        quest("When is Star Wars Day",["A: 18th of June", "B: 25th of December", "C: 4th of May"], "c"),


        
];
// stat functions
