class avatar{

	constructor(pos_x, pos_y,url_ava){
		this.x = pos_x;
		this.y = pos_y;
		this.pj = draw.image(url_ava).attr({ 
			x: this.x,
			y: this.y,
			id: 'avatar'
		});	
		this.casilla = 0;
		this.cash = 0;
		this.lvl = 0;
	}

	move(x){

		for(var i=0; i<x; i++){
			if(this.x < 1000){
				if(this.casilla == 13 || this.casilla == 2 || this.casilla == 3 || this.casilla == 6 || this.casilla == 9 || this.casilla == 19 || this.casilla == 22 || this.casilla == 29 || this.casilla == 30 || this.casilla == 17 || this.casilla == 18 || this.casilla == 14|| this.casilla == 12){
				if(this.casilla == 2){
					var dire = prompt("Arriba o abajo");
					if(dire == "arriba" || dire == "Arriba"){
						this.y = this.y-100;
						this.casilla = 3;
					} else if(dire == "abajo" || dire == "Abajo"){
						this.y = this.y+100;
						this.casilla = 19;
					} else {
						alert("Al no escoger direccion iras arriba por defecto");
						this.y = this.y-100;
						this.casilla = 3;
					}
					this.pj.animate(500).attr({x : this.x.toString(), y: this.y.toString()});
					var view_auto = parseInt($('#prueba').attr('viewBox').split(" ")[0]) + parseInt($('#prueba').attr('viewBox').split(" ")[2]);
			
					if(this.x > view_auto){
						let viewbox = $('#prueba').attr('viewBox').split(" ");
						let new_view = this.x + " " + this.y + " " + viewbox[2] + " " + viewbox[3];
						$('#prueba').attr({
							viewBox : new_view
						});
					}
				} else if(this.casilla == 9){
					var dire = prompt("Arriba o abajo");
					if(dire == "arriba" || dire == "Arriba"){
						this.y = this.y-100;
						this.casilla = 10;
					} else if(dire == "abajo" || dire == "Abajo"){
						this.y = this.y+100;
						this.casilla = 14;
					} else {
						alert("Al no escoger direccion iras arriba por defecto");
						this.y = this.y-100;
						this.casilla = 10;
					}
					this.pj.animate(500).attr({x : this.x.toString(), y: this.y.toString()});
					var view_auto = parseInt($('#prueba').attr('viewBox').split(" ")[0]) + parseInt($('#prueba').attr('viewBox').split(" ")[2]);
			
					if(this.x > view_auto){
						let viewbox = $('#prueba').attr('viewBox').split(" ");
						let new_view = this.x + " " + this.y + " " + viewbox[2] + " " + viewbox[3];
						$('#prueba').attr({
							viewBox : new_view
						});
					}
				} else if(this.casilla == 22){
					var dire = prompt("Arriba o abajo");
					if(dire == "arriba" || dire == "Arriba"){
						this.y = this.y-100;
						this.casilla = 23;
					} else if(dire == "abajo" || dire == "Abajo"){
						this.y = this.y+100;
						this.casilla = 25;
					} else {
						alert("Al no escoger direccion iras arriba por defecto");
						this.y = this.y-100;
						this.casilla = 23;
					}
					this.pj.animate(500).attr({x : this.x.toString(), y: this.y.toString()});
					var view_auto = parseInt($('#prueba').attr('viewBox').split(" ")[0]) + parseInt($('#prueba').attr('viewBox').split(" ")[2]);
			
					if(this.x > view_auto){
						let viewbox = $('#prueba').attr('viewBox').split(" ");
						let new_view = this.x + " " + this.y + " " + viewbox[2] + " " + viewbox[3];
						$('#prueba').attr({
							viewBox : new_view
						});
					}
				} else if(this.casilla == 3){
					this.y = this.y-100;
					this.pj.animate(500).attr({x : this.x.toString(), y: this.y.toString()});
					var view_auto = parseInt($('#prueba').attr('viewBox').split(" ")[0]) + parseInt($('#prueba').attr('viewBox').split(" ")[2]);
			
					if(this.x > view_auto){
						let viewbox = $('#prueba').attr('viewBox').split(" ");
						let new_view = this.x + " " + this.y + " " + viewbox[2] + " " + viewbox[3];
						$('#prueba').attr({
							viewBox : new_view
						});
					}
					this.casilla++;
				} else if(this.casilla == 6){
					this.y = this.y+100;
					this.pj.animate(500).attr({x : this.x.toString(), y: this.y.toString()});
					var view_auto = parseInt($('#prueba').attr('viewBox').split(" ")[0]) + parseInt($('#prueba').attr('viewBox').split(" ")[2]);
			
					if(this.x > view_auto){
						let viewbox = $('#prueba').attr('viewBox').split(" ");
						let new_view = this.x + " " + this.y + " " + viewbox[2] + " " + viewbox[3];
						$('#prueba').attr({
							viewBox : new_view
						});
					}
					this.casilla++;
				} else if(this.casilla == 12){
					this.y = this.y+100;
					this.pj.animate(500).attr({x : this.x.toString(), y: this.y.toString()});
					var view_auto = parseInt($('#prueba').attr('viewBox').split(" ")[0]) + parseInt($('#prueba').attr('viewBox').split(" ")[2]);
			
						if(this.x > view_auto){
							let viewbox = $('#prueba').attr('viewBox').split(" ");
							let new_view = this.x + " " + this.y + " " + viewbox[2] + " " + viewbox[3];
							$('#prueba').attr({
								viewBox : new_view
							});
						}
					this.casilla++;
				}else if(this.casilla == 14){
					this.y = this.y+100;
					this.pj.animate(500).attr({x : this.x.toString(), y: this.y.toString()});
					var view_auto = parseInt($('#prueba').attr('viewBox').split(" ")[0]) + parseInt($('#prueba').attr('viewBox').split(" ")[2]);
			
						if(this.x > view_auto){
							let viewbox = $('#prueba').attr('viewBox').split(" ");
							let new_view = this.x + " " + this.y + " " + viewbox[2] + " " + viewbox[3];
							$('#prueba').attr({
								viewBox : new_view
							});
						}
					this.casilla++;
				} else if(this.casilla == 17){
					this.y = this.y-100;
					this.pj.animate(500).attr({x : this.x.toString(), y: this.y.toString()});
					var view_auto = parseInt($('#prueba').attr('viewBox').split(" ")[0]) + parseInt($('#prueba').attr('viewBox').split(" ")[2]);
			
					if(this.x > view_auto){
						let viewbox = $('#prueba').attr('viewBox').split(" ");
						let new_view = this.x + " " + this.y + " " + viewbox[2] + " " + viewbox[3];
						$('#prueba').attr({
							viewBox : new_view
						});
					}
					this.casilla++;
				} else if(this.casilla == 18){
					this.y = this.y-100;
					this.pj.animate(500).attr({x : this.x.toString(), y: this.y.toString()});
					var view_auto = parseInt($('#prueba').attr('viewBox').split(" ")[0]) + parseInt($('#prueba').attr('viewBox').split(" ")[2]);
			
					if(this.x > view_auto){
						let viewbox = $('#prueba').attr('viewBox').split(" ");
						let new_view = this.x + " " + this.y + " " + viewbox[2] + " " + viewbox[3];
						$('#prueba').attr({
							viewBox : new_view
						});
					}
					this.casilla = 13;
				} else if(this.casilla == 19){
					this.y = this.y+100;
					this.pj.animate(500).attr({x : this.x.toString(), y: this.y.toString()});
					var view_auto = parseInt($('#prueba').attr('viewBox').split(" ")[0]) + parseInt($('#prueba').attr('viewBox').split(" ")[2]);
			
					if(this.x > view_auto){
						let viewbox = $('#prueba').attr('viewBox').split(" ");
						let new_view = this.x + " " + this.y + " " + viewbox[2] + " " + viewbox[3];
						$('#prueba').attr({
							viewBox : new_view
						});
					}
					this.casilla++;
				} else if(this.casilla == 29){
					this.y = this.y-100;
					this.pj.animate(500).attr({x : this.x.toString(), y: this.y.toString()});
					var view_auto = parseInt($('#prueba').attr('viewBox').split(" ")[0]) + parseInt($('#prueba').attr('viewBox').split(" ")[2]);
			
					if(this.x > view_auto){
						let viewbox = $('#prueba').attr('viewBox').split(" ");
						let new_view = this.x + " " + this.y + " " + viewbox[2] + " " + viewbox[3];
						$('#prueba').attr({
							viewBox : new_view
						});
					}
					this.casilla++;
				} else if(this.casilla == 30){
					this.y = this.y-100;
					this.pj.animate(500).attr({x : this.x.toString(), y: this.y.toString()});
					var view_auto = parseInt($('#prueba').attr('viewBox').split(" ")[0]) + parseInt($('#prueba').attr('viewBox').split(" ")[2]);
			
					if(this.x > view_auto){
						let viewbox = $('#prueba').attr('viewBox').split(" ");
						let new_view = this.x + " " + this.y + " " + viewbox[2] + " " + viewbox[3];
						$('#prueba').attr({
							viewBox : new_view
						});
					}
					this.casilla = 17;
				} else if(this.casilla == 13){
					this.x = this.x + 100;
					this.pj.animate(500).attr({x : this.x.toString(), y: this.y.toString()});
					this.casilla=31;
				}
				console.log(this.casilla);
			}else{
				this.x = this.x + 100;
				this.pj.animate(500).attr({x : this.x.toString(), y: this.y.toString()});
				if(this.casilla==24){
					this.casilla=14;
				}
				this.casilla++;
				console.log(this.casilla);
			}
		}
	}
	}

	//Funcion que simulara una batalla
	lucha(){
		alert('Para derrotar al enemigo necesitas sacar entre 0 y 4');
		var random = Math.floor(Math.random()*5);
		if(random == 0 || random == 1 || random == 2 || random == 3 || random == 4){
			this.lvl = this.lvl + 1;
			$("#h2lvl").html(this.lvl);
			alert('Has ganado con un ' + random);
		} else {
			alert('Has perdido con un ' + random);
			window.location.replace('lucha');
		}
		
	}

	//Funcion que da dinero aleatoriamente
	bonus(){
		var dineros = [75,100,125,150,175,200];
		var random = Math.floor(Math.random()*5);
		this.cash = this.cash+dineros[random];
		$("#h2cash").html(this.cash);
	}

	//Funcion que sumulara una batalla con el jefe final
	lucha_boss(){
		alert('Para derrotar al jefe necesitas sacar entre 0 y 2');
		var random = Math.floor(Math.random()*10);
		if(random == 0 || random == 1 || random == 2){
			this.lvl = this.lvl + 5;
			$("#h2lvl").html(this.lvl);
			alert('Has ganado con un ' + random);
		} else {
			alert('Has perdido con un ' + random);
			window.location.replace('lucha');
		}
	}

	//Funcion que termina la partida 
	fin(){
		alert("Stage completado, avanzando al siguiente...");
		
		setTimeout(function(){
			window.location.replace('lucha');
		}, 2000);

	}

	//Nos devuelve la casilla en la que terminamos en la tirada anterior, en funcion del numero de casilla activará un evento u otro
	getCasilla(){
		return this.casilla;

	}
}