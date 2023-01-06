class Raider{

	constructor(clase, main, nombrePlayer, nombreReal, disponibilidad,color){
		this.clase = clase;
		this.main = main;
		this.nombreReal = nombreReal;
		this.nombrePlayer = nombrePlayer;
		this.disponibilidad = disponibilidad;
		this.color = color;
	}

	/* Getters*/
	getClase(){
		return this.clase;
	}
	getMain(){
		return this.main;
	}
	getNombreReal(){
		return this.nombreReal;
	}
	getNombrePlayer(){
		return this.nombrePlayer;
	}
	getDisponibilidad(){
		return this.disponibilidad;
	}
	getColor(){
		return this.color;
	}

	/* Setters*/
	setClase(clase){
		this.clase = clase;
	}
	setMain(main){
		this.main = main;
	}
	setNombreReal(nombreReal){
		this.nombreReal = nombreReal;
	}
	setNombrePlayer(nombrePlayer){
		this.nombrePlayer = nombrePlayer;
	}
	setDisponibilidad(disponibilidad){
		this.disponibilidad = disponibilidad;
	}
	setColor(color){
		this.color = color;
	}
}