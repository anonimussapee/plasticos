/* este programa esta diseñado en funcion al negocio de plasticos*/
/*función para mostrar todo lo que hay en stock y tambien lo que no hay*/
function mostrar_todo(){
	stock.map(item=>{if(item.cant>0){console.log(item.producto,item.cant);}else{
		console.log("este producto esta vacio y debes comprar ",item.producto,item.cant);
	}});
	}
//	mostrar_todo();
function mostrar_faltantes(){
	stock.map(item=>{if(item.cant===0){
		console.log("producto faltante",item.producto,item.cant);
}	});
}
//funcion para mostar en tabla html datos
export function mostrar_en_tabla(donde){
    var th="<tr><th>Nombre producto</th><th>Cantidad</th><th>Costo</th><th>Ofertas</th></tr>";
	for(let item of stock){
		th +="<tr><td>"+item.producto+"</td><td>"+item.cant+"</td><td>"+item.costo+"</td><td>"+item?.oferta+"</td></tr>";
	donde.innerHTML=th;}
}
export function busqueda(donde,palabra){
	var tc="<h2>Tu busqueda esta aqui</h2>";
	 tc+="<tr><th>Nombre producto</th><th>Cantidad</th><th>Costo</th><th>Ofertas</th></tr>";
	for(let item of stock){
		if(item.producto.includes(palabra)){
		tc +="<tr><td>"+item.producto+"</td><td>"+item.cant+"</td><td>"+item.costo+"</td><td>"+item?.oferta+"</td></tr>";
		}
	donde.innerHTML=tc;}
}
//mostrar_faltantes();
 let stock=[/*inicio funda*/{producto:"funda 2",cant:63,costo:0.60,oferta:""},{producto:"funda 5",cant:35,costo:1.00,oferta:""},{producto:"funda 7",cant:15,costo:1.30,oferta:""},{producto:"funda 9",cant:3,costo:3.00,oferta:""},{producto:"funda 10",cant:4,costo:3.00,oferta:""},/* fundas fin y inicio funda basura */{producto:"funda basura industrial",cant:3,costo:1.00,oferta:""},{producto:"funda basura cebra",cant:17,costo:1.00,oferta:""},/*funda basura fin y inicio servilleta*/{producto:"servilleta 75 u",cant:16,costo:0.40, oferta:"si lleva 3 el precio a pagar es 1$"},{producto:"servilleta 300 u",cant:4,costo:1.75,oferta:""},{producto:"servilleta de papel cortado",cant:4,costo:0.35,oferta:""},/*servilletas fin y inicio funda quintalera*/{producto:"funda costalera",cant: 0,costo:0.70,oferta:""},{producto:"funda arrobera",cant:92,costo:0.25,oferta:"si lleva 5 el precio a pagar 1$"},{producto:"funda quintalera",cant: 33,costo:0.60,oferta:""},/*fin funda quintalera, inicio costal*/ {producto:"costal rayado",cant: 10,costo:0.75,oferta:""},{producto:"costal de mano",cant: 5,costo:0.75,oferta:""},/* fin costal, inicio plato*/{producto:"plato 9",cant:8,costo:1.10,oferta:""},{producto:"plato 8",cant:4,costo:1.00,oferta:""},{producto:"plato 7",cant:3,costo:0.80,oferta:""},{producto:"plato hondo",cant:4,costo:1.00,oferta:""},{producto:"bandeja",cant:4,costo:1.30,oferta:""},{producto:"tarrina 1 litro",cant: 33,costo:2.00,oferta:""},{producto:"tarrina medio litro",cant: 33,costo:2.00,oferta:""},/*fin plato, inicio de tapa*/{producto:"tapa tarrina",cant:4,costo:1.00,oferta:""},/*fin tapa,inicio bolsa empanada*/{producto:"bolsa para empanada",cant:2,costo:2.00,oferta:""},/*fin bolsa empanada, inicio plasticos transparente*/{producto:"transparente 5x8",cant:5,costo:0.50,oferta:""},{producto:"transparente 5x9",cant:7,costo:0.60,oferta:""},{producto:"transparente 5x15",cant:4,costo:0.75,oferta:""},{producto:"transparente 5x20",cant:2,costo:1.00,oferta:""},{producto:"transparente 6x8",cant:4,costo:0.60,oferta:""},{producto:"transparente 6x10",cant:7,costo:0.65,oferta:""},{producto:"transparente 6x12",cant:3,costo:0.75,oferta:""},{producto:"transparente 6x14",cant:15,costo:0.85,oferta:""},{producto:"transparente 6x18",cant:5,costo:1.00,oferta:""},{producto:"transparente 7x10",cant:6,costo:0.80,oferta:""},{producto:"transparente 7x11",cant:6,costo:0.80,oferta:""},{producto:"transparente 7x14",cant:2,costo:0.85,oferta:""},{producto:"transparente 7x18",cant:7,costo:1.10,oferta:""},{producto:"transparente 8x12",cant:4,costo:1.00,oferta:""},{producto:"transparente 8x14",cant:6,costo:1.00,oferta:""},{producto:"transparente 8x16",cant:2,costo:1.10,oferta:""},{producto:"transparente 9x14",cant:3,costo:1.10,oferta:""},{producto:"transparente 10x16",cant:0,costo:1.30,oferta:""},{producto:"transparente 12x18",cant:0,costo:2.00,oferta:""},/*fin plástico transparente, inicio funda salchipapa*/{producto:"funda salchipapa pequeña",cant:3,costo:0.40,oferta:""},{producto:"funda salchipapa 6x5",cant:4,costo:0.50,oferta:""},{producto:"funda salchipapa grande",cant:1,costo:0.75,oferta:""},/* fin funda salchipapa, inicio rollo plastico transparente*/{producto:"rollo transparente 8x12",cant:2,costo:2.00,oferta:""},{producto:"rollo transparente 10x16",cant:3,costo:2.00,oferta:""},/*fin rollo plastico transparente, inicio rollo aluminio*/{producto:"rollo papel aluminio",cant:1,costo:1.00,oferta:""},/*fin rollo aluminio, inicio funda colores*/{producto:"funda color 2 libras",cant:4,costo:0.50,oferta:""},{producto:"funda color 4 libras",cant:6,costo:0.60,oferta:""},{producto:"funda color 5 libras",cant:3,costo:0.75,oferta:""},/*fin funda de colores, inicio */];


