class dadico {
  constructor(num_i) {
    $(".wrap").append("<div id='dice_mask'></div>");
  	this.i = num_i;
  }


  random(){
  	
    $('#dice').animate({left: '+2px'}, 100,function(){
			$('#dice').addClass("dice_t");
		}).delay(200).animate({top:'-2px'},100,function(){
			var sound = new Audio("sounds/dice.wav");
			sound.play();
			$('#dice').removeClass("dice_t").addClass("dice_s");
		}).delay(200).animate({opacity: 'show'},600,function(){
			$('#dice').removeClass("dice_s").addClass("dice_e");
		}).delay(100).animate({left:'-2px',top:'2px'},100,function(){
		      var random = Math.floor(Math.random()*6+1);
		      this.num = random;

		    $('#dice').removeClass();
		    $('#dice').addClass("dice");
			$('#dice').addClass("dice_"+this.num);
			$("#result").html("Numero de movimientos: <span>"+this.num+"</span>");
			$('#dice').css('cursor','pointer');
			$("#dice_mask").remove();
			if(this.num){
				//Una vez hemos obtenido un numero aleatorio activa el evento de movimento	
				ava.move(this.num);
				//Obtenemos el numero de casilla en el que caemos
				var evento = ava.getCasilla();
				//Segun el numero de casilla activa ciertos eventos
				if(evento == 1 || evento == 3 || evento == 6 || evento == 8 || evento == 21 || evento == 23 || evento == 25 || evento == 27 || evento == 29 || evento == 17){
					ava.lucha();	
				} else if(evento == 4 || evento == 5 || evento == 11 || evento == 12 || evento == 14 || evento == 18 || evento == 24 || evento == 28 || evento == 19 || evento == 20){
					ava.bonus();
				} else if (evento == 13){
					ava.lucha_boss();
				} else if(evento == 31){
					ava.fin();
				}
			}
			
		});
  	}
}

$('#dice').click(function(){
	var dice = new dadico(0);
	dice.random();
});