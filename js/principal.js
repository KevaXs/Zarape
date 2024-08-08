//async: 
//fetch: es una función que permite hacer peticiones al servidor para obtener
//  documentos tanto del dominio de la aplicación web como de otros.
//await: Espera a que se ejecute primero una operación/función.
//Para abrir la consola "ctrl + shift + i"
let cm = null; // Módulo Actual (current module)

async function cargarModuloUsuarios()
{
    let url = "modulos/usuario.html";
    let resp = await fetch(url);
    let contenido = await resp.text();
    document.getElementById("contenedorPrincipal").innerHTML = contenido;
}

async function cargarModuloSucursales()
{
    let url = "modulos/sucursal.html";
    let resp = await fetch(url);
    let contenido = await resp.text();
    document.getElementById("contenedorPrincipal").innerHTML = contenido;
    
    import('./modulos/sucursal.js').then(obj => {
        cm = obj;
        cm.inicializarModuloSucursal();
    });
}

async function cargarModuloAlimentos()
{
    //Se define la url de dónde está el código de HTML:
    let url = "modulos/alimento.html";

    //Se hace la petición del documento del módulo:
    let resp = await fetch(url);

    //Se convierte la respuesta del servidor en texto HTML:
    let contenido = await resp.text();

    //Insertamos el código HTML dentro del contenedor principal:
    document.getElementById("contenedorPrincipal").innerHTML = contenido;

    // " ./ " se usa para especificar que estás en esa misma ruta

    // " => "operador flecha (arrow function)
    import('./modulos/alimento.js').then(obj => {
        cm = obj;
        cm.inicializarModulo();
    });

}

async function cargarModuloBebidas()
{
    let url = "modulos/bebida.html";
    let resp = await fetch(url);
    let contenido = await resp.text();
    document.getElementById("contenedorPrincipal").innerHTML = contenido;
}

async function cargarModuloCombos()
{
    let url = "modulos/combo.html";
    let resp = await fetch(url);
    let contenido = await resp.text();
    document.getElementById("contenedorPrincipal").innerHTML = contenido;
    
    import('./modulos/combo.js').then(obj => {
        cm = obj;
        cm.inicializarModuloCombo();
    });
}

async function cargarModuloComanda()
{

}

async function cargarModuloPagos()
{

}
