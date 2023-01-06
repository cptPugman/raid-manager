class Guild{
	constructor(players,numeroPlayersPug){
		this.players = players;
		this.numeroPlayersPug = numeroPlayersPug;
	}

	addPlayer(player){
		players.push(player);
	}

	getPlayer(num){
		return players[num];
	}
	getAllPlayers(){
		return players;
	}
	getNumeroPlayers(){
		return this.numeroPlayersPug;
	}
	addNumeroPlayers(){
		this.numeroPlayersPug++;
	}

}


let players = new Array();
let bratania = new Guild(players,0);
let raider1 = new Raider("Warrior", "main", "NofatChicks", "-", "martes",'red');
bratania.addPlayer(raider1);
let raider2 = new Raider("Hunter", "alter", "Turbopug", "tugbo", "everyday",'green' );
bratania.addPlayer(raider2);
let raider3 = new Raider("Druida", "alter", "Avals", "avalstalin", "entre semana", 'orange');
bratania.addPlayer(raider3);
let raider4 = new Raider("DK", "main", "Dkdence", "luiser", "martes", 'red');
bratania.addPlayer(raider4);
let raider5 = new Raider("Druida", "main", "Muñones", "-", "martes", 'orange');
bratania.addPlayer(raider5);
let raider6 = new Raider("Hunter", "main", "delagoodweed", "carliños", "martes", 'green');
bratania.addPlayer(raider6);
let raider7 = new Raider("Warrior", "main", "Geokill", "geo", "casisiempre", 'red');
bratania.addPlayer(raider7);
let raider8 = new Raider("Mago", "alter", "forno", "forno", "martes", 'cyan');
bratania.addPlayer(raider8);
let raider9 = new Raider("DK", "main", "Plague", "Pesti", "casisiempre", 'red');
bratania.addPlayer(raider9);
let raider10 = new Raider("Priest", "alter", "Delegadiña", "Leiro", "indefinido", 'white');
bratania.addPlayer(raider10);
let raider11 = new Raider("Warlock", "main", "Skunkcop", "Alvarito", "casisiempre", 'purple');
bratania.addPlayer(raider11);
cargarGuild();

console.log(bratania);
let playersPug = new Array();
let pug = new Guild(playersPug,0);

var table = document.getElementById("playersRaid");
var row = table.insertRow(0);



function cargarGuild(){
	var mytable = "<table><tr>";
	for (var CELL of bratania.getAllPlayers()) {  mytable += 
		"<td>" + CELL.getNombrePlayer() + "</td>"; }
	mytable += "</tr></table>";
	document.getElementById("listaPlayers").innerHTML = mytable;
}

function añadirPlayer(){
	var mytable = document.getElementById("playersRaid");
	if(pug.getNumeroPlayers() % 5 == 0 && pug.getNumeroPlayers() != 0){
		row = table.insertRow(-1);
	}
	var form = row.insertCell(-1);
	


	switch(document.getElementById("claseForm").value){
		case "warrior" : form.style.backgroundColor = 'brown';
					 			   form.style.color = 'white';
		break;
		case "shaman" : form.style.backgroundColor = 'blue';
							 form.style.fontcolor = 'white';
		break;
		case "mage" : form.style.backgroundColor = 'cyan';
						   form.style.fontcolor = 'black';
		break;
		case "warlock" : form.style.backgroundColor = 'purple';
							    form.style.fontcolor = 'white';
		break;
		case "priest" : form.style.backgroundColor = 'white';
							  form.style.fontcolor = 'black';
		break;
		case "rogue" : form.style.backgroundColor = 'yellow';
							  form.style.fontcolor = 'black';
		break;
		case "druid" : form.style.backgroundColor = 'orange';
							  form.style.fontcolor = 'black';
		break;
		case "hunter" : form.style.backgroundColor = 'green';
							  form.style.fontcolor = 'black';
		break;
		case "paladin" : form.style.backgroundColor = 'pink';
							  form.style.fontcolor = 'black';
		break;
		case "dk" : form.style.backgroundColor = 'red';
					 	form.style.fontcolor = 'white';
		break;
	}

	switch(document.getElementById("specForm").value){
		case "fire" : form.innerHTML = "<img src= 'images/fireMage.jpg'> " + document.getElementById("nombreForm").value;
		break;
		case "arcane" : form.innerHTML = "<img src= 'images/arcaneMage.jpg'> " + document.getElementById("nombreForm").value;
		break;
		case "holyPriest" : form.innerHTML = "<img src= 'images/holyPriest.jpg'> " + document.getElementById("nombreForm").value;
		break;
		case "discipline" : form.innerHTML = "<img src= 'images/discPriest.png'> " + document.getElementById("nombreForm").value;
		break;
		case "shadow" : form.innerHTML = "<img src= 'images/shadowPriest.jpg'> " + document.getElementById("nombreForm").value;
		break;
		case "demo" : form.innerHTML = "<img src= 'images/demolock.jpg'> " + document.getElementById("nombreForm").value;
		break;
		case "affli" : form.innerHTML = "<img src= 'images/AfflictionWarlock.jpg'> " + document.getElementById("nombreForm").value;
		break;
		case "restoD" : form.innerHTML = "<img src= 'images/restoDruid.jpg'> " + document.getElementById("nombreForm").value;
		break;
		case "feral" : form.innerHTML = "<img src= 'images/feralDruid.jpg'> " + document.getElementById("nombreForm").value;
		break;
		case "balance" : form.innerHTML = "<img src= 'images/balanceDruid.png'> " + document.getElementById("nombreForm").value;
		break;
		case "rogue" : form.innerHTML = "<img src= 'images/rogue.jpg'> " + document.getElementById("nombreForm").value;
		break;
		case "survival" : form.innerHTML = "<img src= 'images/survivalHunter.jpg'> " + document.getElementById("nombreForm").value;
		break;
		case "marksman" : form.innerHTML = "<img src= 'images/MMHunter.jpg'> " + document.getElementById("nombreForm").value;
		break;
		case "BM" : form.innerHTML = "<img src= 'images/BMHunter.jpg'> " + document.getElementById("nombreForm").value;
		break;
		case "restoS" : form.innerHTML = "<img src= 'images/restoShaman.jpg'> " + document.getElementById("nombreForm").value;
		break;
		case "enha" : form.innerHTML = "<img src= 'images/EnhShaman.jpg'> " + document.getElementById("nombreForm").value;
		break;
		case "elemental" : form.innerHTML = "<img src= 'images/elementalShaman.jpg'> " + document.getElementById("nombreForm").value;
		break;
		case "protW" : form.innerHTML = "<img src= 'images/protWarrior.jpg'> " + document.getElementById("nombreForm").value;
		break;
		case "arms" : form.innerHTML = "<img src= 'images/armsWarrior.png'> " + document.getElementById("nombreForm").value;
		break;
		case "fury" : form.innerHTML = "<img src= 'images/furyWarrior.jpg'> " + document.getElementById("nombreForm").value;
		break;
		case "unholy" : form.innerHTML = "<img src= 'images/unholyDK.jpg'> " + document.getElementById("nombreForm").value;
		break;
		case "frost" : form.innerHTML = "<img src= 'images/frostDK.jpg'> " + document.getElementById("nombreForm").value;
		break;
		case "blood" : form.innerHTML = "<img src= 'images/bloodDK.png'> " + document.getElementById("nombreForm").value;
		break;
		case "protP" : form.innerHTML = "<img src= 'images/protectionPaladin.jpg'> " + document.getElementById("nombreForm").value;
		break;
		case "retri" : form.innerHTML = "<img src= 'images/RetPaladin.jpg'> " + document.getElementById("nombreForm").value;
		break;
		case "holyPala" : form.innerHTML = "<img src= 'images/holyPaladin.jpg'> " + document.getElementById("nombreForm").value;
		break;
	}


	
	pug.addNumeroPlayers();
	console.log(pug.getNumeroPlayers());
}





