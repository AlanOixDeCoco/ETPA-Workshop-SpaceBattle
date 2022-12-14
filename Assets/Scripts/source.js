// faces sprites
const ATTACK_DIE = [
    "attack",
    "attack", 
    "attack",
    "critic",
    "concentration",
    "concentration",
    "null",
    "null"
];

const DEFENSE_DIE = [
    "dodge",
    "dodge", 
    "dodge",
    "concentration",
    "concentration",
    "null",
    "null",
    "null"
];

const DICE_DEFAULT_AMOUNT = 3;

// returns a random int between min and max values
function RandomInt(min, max){
    return (Math.floor(Math.random() * (max-min)) + min);
}

let lst_attackDice = [];
let lst_defenseDice = [];

let attackDieDiv = document.createElement("div");
attackDieDiv.className = "die attack_die";
let attackDieHtml = document.getElementsByClassName("attack_die")[0].innerHTML;


let defenseDieDiv = document.createElement("div");
defenseDieDiv.className = "die defense_die";
let defenseDieHtml = document.getElementsByClassName("defense_die")[0].innerHTML;

let attackDiceContainer;
attackDiceContainer = document.getElementById("attack_dice");
let defenseDiceContainer;
defenseDiceContainer = document.getElementById("defense_dice");

let diceCount = 0;

function InitDice(){
    // reset dice containers
    attackDiceContainer.innerHTML = "";
    defenseDiceContainer.innerHTML = "";

    // append desired amount of dice
    for(i = 0; i < DICE_DEFAULT_AMOUNT; i++){
        AddDie("attack");
        AddDie("defense");
    }

    diceCount = DICE_DEFAULT_AMOUNT;
}

function AddDie(dieType){
    if(diceCount < 6){
        if(dieType == "attack"){
            console.log("add attack die!");
            lst_attackDice.push(attackDieDiv.cloneNode());
            lst_attackDice[lst_attackDice.length - 1].innerHTML = attackDieHtml;
            attackDiceContainer.appendChild(lst_attackDice[lst_attackDice.length - 1]);
        }
        else if(dieType == "defense"){
            console.log("add defense die!");
            lst_defenseDice.push(defenseDieDiv.cloneNode());
            lst_defenseDice[lst_attackDice.length - 1].innerHTML = defenseDieHtml;
            defenseDiceContainer.appendChild(lst_defenseDice[lst_attackDice.length - 1]);
        }
        diceCount++;
    }
    else console.log("Can't have more than 6 dice!");
}

function RemoveDie(dieType){
    if(diceCount > 1){
        if(dieType == "attack"){
            attackDiceContainer.removeChild(lst_attackDice[lst_attackDice.length - 1]);
            lst_attackDice.pop();
        }
        else if(dieType == "defense"){
            lst_defenseDice.pop();
        }
        diceCount--;
    }
    else console.log("Can't have less than 1 die!");
}

function RollDie(die){
    if(lst_attackDice.includes(die)){
        console.log("roll die!");
        newFace = ATTACK_DIE[RandomInt(0, ATTACK_DIE.length)];
        die.getElementsByTagName("img")[0].src = `../Assets/Sprites/Dice/${newFace}.png`;
    }
    else if(lst_defenseDice.includes(die)){
        console.log("roll die!");
        newFace = DEFENSE_DIE[RandomInt(0, DEFENSE_DIE.length)];
        die.getElementsByTagName("img")[0].src = `../Assets/Sprites/Dice/${newFace}.png`;
    }
    else {
        console.log("Die doesn't exist!");
    }
}

function RollDice(diceList){
    diceList.forEach(die => {
        RollDie(die);
    });
}

// Program start
InitDice();

document.getElementById("remove_attack_die").onclick = () => {
    RemoveDie("attack");
};
document.getElementById("remove_defense_die").onclick = () => {
    RemoveDie("defense");
};

document.getElementById("add_attack_die").onclick = () => {
    AddDie("attack");
};
document.getElementById("add_defense_die").onclick = () => {
    AddDie("defense");
};

document.getElementById("roll_attack_dice").onclick = () => {
    RollDice(lst_attackDice);
};
document.getElementById("roll_defense_dice").onclick = () => {
    RollDice(lst_defenseDice);
};