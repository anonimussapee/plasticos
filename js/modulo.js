var tabla=document.getElementById("tabla_id");
window.addEventListener('load',async function (){
    var datos= await import('./sistema_plasticos.js');
    datos.mostrar_en_tabla(tabla);
    } 
    );
var btn_buscarref=document.getElementById("btn_buscar");
var tabla2=document.getElementById("tabla_buscar");
btn_buscarref.addEventListener('click',async function(){
    var input_buscar=document.getElementById("busqueda_id");
    var buscalo=input_buscar.value;
    var buscar_func=await import('./sistema_plasticos.js');
    buscar_func.busqueda(tabla2,buscalo);
})