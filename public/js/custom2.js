var draw = SVG('tablero')

draw.attr({id: 'prueba'})

var group_casillas = draw.group()

var cas_obj = [];

var casillas_class = [];
var flecha;

/*
Objetos de casillas creados con las posiciones 
Insertadas flechas que indican direccion de movimiento, ademas de una animación
*/
var cas0 = new casillas_obj(100,200,60,80, 'cas0', 'img/casillas/inicio.svg', 1);
cas0.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(160,210).rotate(-90);
flecha.animate(800).move(160,213).loop();

var cas1 = new casillas_obj(200,200,60,80, 'cas1', 'img/casillas/lucha.svg', 2);
cas1.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(260,210).rotate(-90);
flecha.animate(800).move(260,213).loop();

var cas2 = new casillas_selec(300,200,60,80, 'cas2', 'img/casillas/vacia.svg', 3, 19);
cas2.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(310,160).rotate(-180);
flecha.animate(800).move(310,163).loop();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(310,260);
flecha.animate(800).move(310,263).loop();

var cas3 = new casillas_selec(300,100,60,80, 'cas3', 'img/casillas/lucha.svg', 4);
cas3.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(310,60).rotate(-180);
flecha.animate(800).move(310,62).loop();

var cas4 = new casillas_obj(300,0,60,80, 'cas4', 'img/casillas/bonus.svg', 5);
cas4.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(360,10).rotate(-90);
flecha.animate(800).move(360,12).loop();

var cas5 = new casillas_obj(400,0,60,80, 'cas5', 'img/casillas/bonus.svg', 6);
cas5.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(460,10).rotate(-90);
flecha.animate(800).move(460,12).loop();

var cas6 = new casillas_obj(500,0,60,80, 'cas6', 'img/casillas/lucha.svg', 7);
cas6.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(510,60);
flecha.animate(800).move(510,62).loop();

var cas7 = new casillas_obj(500,100,60,80, 'cas7', 'img/casillas/vacia.svg', 8);
cas7.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(560,110).rotate(-90);
flecha.animate(800).move(560,112).loop();

var cas8 = new casillas_obj(600,100,60,80, 'cas8', 'img/casillas/lucha.svg', 9);
cas8.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(660,110).rotate(-90);
flecha.animate(800).move(660,112).loop();

var cas9 = new casillas_selec(700,100,60,80, 'cas9', 'img/casillas/vacia.svg', 10, 14);
cas9.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(710,60).rotate(-180);
flecha.animate(800).move(710,63).loop();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(710,160);
flecha.animate(800).move(710,163).loop();

var cas10 = new casillas_obj(700,0,60,80, 'cas10', 'img/casillas/vacia.svg', 11);
cas10.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(760,10).rotate(-90);
flecha.animate(800).move(760,12).loop();

var cas11 = new casillas_obj(800,0,60,80, 'cas11', 'img/casillas/bonus.svg', 12);
cas11.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(860,10).rotate(-90);
flecha.animate(800).move(860,12).loop();

var cas12 = new casillas_obj(900,0,60,80, 'cas12', 'img/casillas/bonus.svg', 13);
cas12.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(910,60);
flecha.animate(800).move(910,62).loop();

var cas13 = new casillas_obj(900,100,60,80, 'cas13', 'img/casillas/jefe.svg', 31);
cas13.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(960,110).rotate(-90);
flecha.animate(800).move(960,112).loop();

var cas14 = new casillas_obj(700,200,60,80, 'cas14', 'img/casillas/bonus.svg', 15);
cas14.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(710,260);
flecha.animate(800).move(710,262).loop();

var cas15 = new casillas_obj(700,300,60,80, 'cas15', 'img/casillas/lucha.svg', 16);
cas15.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(760,310).rotate(-90);
flecha.animate(800).move(760,312).loop();

var cas16 = new casillas_obj(800,300,60,80, 'cas16', 'img/casillas/vacia.svg', 17);
cas16.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(860,310).rotate(-90);
flecha.animate(800).move(860,312).loop();

var cas17 = new casillas_obj(900,300,60,80, 'cas17', 'img/casillas/lucha.svg', 18);
cas17.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(910,260).rotate(-180);
flecha.animate(800).move(910,262).loop();

var cas18 = new casillas_obj(900,200,60,80, 'cas18', 'img/casillas/bonus.svg', 13);
cas18.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(910,160).rotate(-180);
flecha.animate(800).move(910,162).loop();

var cas19 = new casillas_obj(300,300,60,80, 'cas19', 'img/casillas/bonus.svg', 20);
cas19.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(310,360);
flecha.animate(800).move(310,362).loop();

var cas20 = new casillas_obj(300,400,60,80, 'cas20', 'img/casillas/bonus.svg', 21);
cas20.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(360,410).rotate(-90);
flecha.animate(800).move(360,412).loop();

var cas21 = new casillas_obj(400,400,60,80, 'cas21', 'img/casillas/lucha.svg', 22);
cas21.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(460,410).rotate(-90);
flecha.animate(800).move(460,412).loop();

var cas22 = new casillas_selec(500,400,60,80, 'cas22', 'img/casillas/vacia.svg', 23, 25);
cas22.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(510,360).rotate(-180);
flecha.animate(800).move(510,363).loop();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(510,460);
flecha.animate(800).move(510,463).loop();

var cas23 = new casillas_obj(500,300,60,80, 'cas23', 'img/casillas/lucha.svg', 24);
cas23.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(560,310).rotate(-90);
flecha.animate(800).move(560,312).loop();

var cas24 = new casillas_obj(600,300,60,80, 'cas24', 'img/casillas/bonus.svg', 15);
cas24.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(660,310).rotate(-90);
flecha.animate(800).move(660,312).loop();

var cas25 = new casillas_obj(500,500,60,80, 'cas25', 'img/casillas/lucha.svg', 26);
cas25.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(560,510).rotate(-90);
flecha.animate(800).move(560,512).loop();

var cas26 = new casillas_obj(600,500,60,80, 'cas26', 'img/casillas/vacia.svg', 27);
cas26.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(660,510).rotate(-90);
flecha.animate(800).move(660,512).loop();

var cas27 = new casillas_obj(700,500,60,80, 'cas27', 'img/casillas/lucha.svg', 28);
cas27.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(760,510).rotate(-90);
flecha.animate(800).move(760,512).loop();

var cas28 = new casillas_obj(800,500,60,80, 'cas28', 'img/casillas/bonus.svg', 29);
cas28.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(860,510).rotate(-90);
flecha.animate(800).move(860,512).loop();

var cas29 = new casillas_obj(900,500,60,80, 'cas29', 'img/casillas/lucha.svg', 30);
cas29.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(910,460).rotate(-180);
flecha.animate(800).move(910,462).loop();

var cas30 = new casillas_obj(900,400,60,80, 'cas30', 'img/casillas/vacia.svg', 17);
cas30.draw();
flecha = draw.image('img/casillas/arrow.svg',40,60).move(910,360).rotate(-180);
flecha.animate(800).move(910,362).loop();

var cas31 = new casillas_obj(1000,100,60,80, 'cas31', 'img/casillas/inicio.svg', 31);
cas31.draw();


//Instanciamos el objeto del avatar
var ava;
ava = new avatar(110, 160, url);

//Creamos un viewbox para realizar el efecto de zoom
var view = draw.viewbox(ava.x, ava.y-150, 550, 500);
view.zoom;
$("#zoom").change(function(){
	view.viewbox(ava.x-150, ava.y-300, $(this).val(), $(this).val());
})
/*Desactivar introducción manual del Viewbox*/
$("[type='number']").keypress(function (evt) {
    evt.preventDefault();
});