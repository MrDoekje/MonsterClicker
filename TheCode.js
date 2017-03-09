var geldMonsterStage;


function init(){
var geldMonsterFoto = new createjs.Shape();
var geldMonsterMaxHp = new createjs.Text(geldMonsterMaxHpJs,"20px Arial", "#ff7700");
geldMonsterMaxHp.x=30;
var geldMonsterCurrentHp = new createjs.Text(geldMonsterCurrentHpJs,"20px Arial", "#ff7700");
geldMonsterStage = new createjs.Stage("myCanvas");
createjs.Ticker.addEventListener("tick",levelUpFunction);
createjs.Ticker.addEventListener("tick", tick);
createjs.Ticker.setFPS(60);
var geldMonster = new createjs.Container();
geldMonster.addChild(geldMonsterFoto,geldMonsterMaxHp,geldMonsterCurrentHp);

geldMonster.x= 100;
geldMonster.on("pressup",function(evt) {
    evt.console.log("HELOP"); 
    evt.geldMonsterStage.update(event);         });
geldMonsterStage.addChild(geldMonster);
}

// variabelen.
var level= 0;
var levelupCost = 500;
var levelMultiplier = 1;
var aa = 0;
var dmgMultiplier = 1;
var dmg = 5;
var dmgMultiplierCost = 75;
var realHealth = 150;
var healthCost= 75;
var goldDrop = 1;
var i = 1;
var geldMonsterCurrentHpJs = 120;
var geldMonsterMaxHpJs = 150;
var geld = 0;
var bb = 1;
var health = 150;
var dmgdmg = 1;
var currentXp = 0;
var maxXp = 100;

// Hoeveel pijn je doet
function dmgMultiplierFunction(){
if (geld>= dmgMultiplierCost) {
geld = geld - dmgMultiplierCost;
dmgMultiplierCost= dmgMultiplierCost * 1.10;
dmg = dmg+10 * bb;
document.getElementById("dmgKost").innerHTML = Math.round(dmgMultiplierCost * 100) / 100;
document.getElementById("geld").innerHTML = Math.round(geld * 100) / 100;
document.getElementById("dmg").innerHTML = Math.round(dmg * 100)/ 100;
}

}
function slaan(event) {
console.log("HELOP");
}

// Functie om te bereken hoeveel geld het kost en hoeveel hp je krijgt bij het upgraden
function healthMultiplierFunction(){
if (geld>=healthCost) {
realHealth = realHealth + 5*bb;
geld = geld - healthCost;
healthCost = healthCost * 1.10;
document.getElementById("health").innerHTML = Math.round(realHealth * 100) / 100;
document.getElementById("geld").innerHTML = Math.round(geld * 100) / 100;
document.getElementById("maxHealth").innerHTML= Math.round(realHealth * 100) / 100;
document.getElementById("healthKost").innerHTML= Math.round(healthCost * 100) / 100;

} else {
alert("Niet genoeg geld");	
	
}

}
/* Kijken of ik een healthbar kan regelen 
edit: denk het toch maar niet Job */
// Hier komt de gold drop function zodat het niet al te lang duurt.
function goldMultiplierFunction(){
goldDrop = goldDrop + 1;		
}
// Hier komt het doodmaken van het monster


function tick(event){
if (geldMonsterCurrentHpJs<= 0) {
geld = geld + 15 * i; 
geldMonsterMaxHpJs = (geldMonsterMaxHpJs * ((i/25)+1));
geldMonsterCurrentHpJs = geldMonsterMaxHpJs;
i= i+0.10;
document.getElementById("geld").innerHTML = Math.round(geld * 100) / 100;
geldMonsterStage.update(event);
}
geldMonsterStage.update(event);
}
function levelUpFunction(event){
if (currentXp>=maxXp) {
geld = geld+(100*bb);
level=level+1;
realHealth = realHealth * 1.15;
dmg = dmg * 1.15;
bb = bb * 1.15;
maxXp = maxXp*(1.15+((0.01*bb)));
currentXp= 0;
document.getElementById("currentXpHTML").innerHTML = 0;
document.getElementById("maxXpHTML").innerHTML = Math.round(maxXp);
document.getElementById("level").innerHTML = Math.round(level * 100) / 100;
document.getElementById("geld").innerHTML = Math.round(geld * 100) / 100;
document.getElementById("maxHealth").innerHTML = Math.round(realHealth * 100)/100;
document.getElementById("health").innerHTML = Math.round(realHealth * 100)/100;
document.getElementById("dmg").innerHTML = Math.round(dmg*100)/100;
}
geldMonsterStage.update(event);
}


/* Hier zou een functie komen voor de shop maar ik heb het op een andere manier gedaan

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn'))	{
       
   	    var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0;  i < dropdowns.length; i++) {
    var openDropDown = dropdowns[i];
if (openDropDown.classList.contains('show')) {
openDropDown.classList.remove('show');	
}
}
}	
	
	
}*/
