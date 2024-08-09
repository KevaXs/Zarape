// Definimos un arreglo JSON de categoria:
let categorias =   [
                        {
                            id      : 1,
                            nombre  : "Refrescos"
                        },
                        {
                            id      : 2,
                            nombre  : "Aguas"
                        },
                        {
                            id      : 3,
                            nombre  : "Jugos"
                        },
                        {
                            id      : 4,
                            nombre  : "Cafés"
                        }
                    ];

//Definimos un arreglo JSON de bebidas de forma global:
let bebidas = [
                    {
                        id       :  1,
                        producto :  {
                                        id          : 1,
                                        nombre      : "Refresco ligero",
                                        descripcion : "600ml, refresco sin azucar.",
                                        foto        : "",
                                        precio      : 19.99,
                                        categoria   :   {
                                                            id : 1,
                                                            nombre : "Refrescos"
                                                        }
                                    }
                    },
                    {
                        id       :  2,
                        producto :  {
                                        id          : 2,
                                        nombre      : "Agua de horchata",
                                        descripcion : "Agua Fresca y Deliciosa",
                                        foto        : "",
                                        precio      : 25.00,
                                        categoria   :   {
                                                            id : 2,
                                                            nombre : "Aguas"
                                                        }
                                    }
                    },
                    {
                        id       :  3,
                        producto :  {
                                        id          : 3,
                                        nombre      : "Jugo de Naranja",
                                        descripcion : "100% extracto de naranja.",
                                        foto        : "",
                                        precio      : 34.99,
                                        categoria   :   {
                                                            id : 3,
                                                            nombre : "Jugos"
                                                        }
                                    }
                    },
                    {
                        id       :  4,
                        producto :  {
                                        id          : 4,
                                        nombre      : "Café negro",
                                        descripcion : "Café negro de olla.",
                                        foto        : "",
                                        precio      : 22.50,
                                        categoria   :   {
                                                            id : 4,
                                                            nombre : "Cafés"
                                                        }
                                    }
                    },
                    {
                        id       :  5,
                        producto :  {
                                        id          : 5,
                                        nombre      : "Refresco ",
                                        descripcion : "600 ml.",
                                        foto        : "",
                                        precio      : 19.99,
                                        categoria   :   {
                                                            id : 1,
                                                            nombre : "Refrescos"
                                                        }
                                    }
                    }
                ];
                
export function inicializarModuloBebida()
{
    setDetalleBebidaVisible(false);
    llenarComboBoxCategorias();
    llenarTabla();
}
// Esta función valida que todos los campos esten llenos
// antes de guardar los datos.
function validarCampos() 
{
    // Obtener los valores de todos los campos
    let nombre = document.getElementById("txtBebida").value;
    let descripcion = document.getElementById("txtDescripcionBebida").value;
    let precio = document.getElementById("txtPrecioBebida").value;

    // Verificar si todos los campos están llenos
    if (nombre === "" || descripcion === "" || precio === "") {
        return false;
    }
    return true;
}
export function guardarBebida()
{
        // Verificar si todos los campos están llenos
    if (!validarCampos()) {
        Swal.fire('Error', 'Por favor, complete todos los campos.', 'error');
        return;
    }
    //Declaro una variable temporal para guardar la posicion del alimento:
    let posTemp = -1;
    
    //Declaro una variable temporal para la categoria:
    let catTemp = null;
    
    //Generamos un nuevo objeto de alimento:
    let b = new Object();    
    
    //Lleno los atributos del objeto alimento:
    b.id = 0;
    b.producto = new Object();
    b.producto.id = 0;
    b.producto.nombre = document.getElementById("txtBebida").value;
    b.producto.descripcion = document.getElementById("txtDescripcionBebida").value;
    b.producto.precio = parseFloat(document.getElementById("txtPrecioBebida").value);    
    catTemp = buscarCategoriaPorID(parseInt(document.getElementById("cmbCategoriab").value));    
    b.producto.categoria = catTemp;
    
    //Una vez que tenemos el objeto de la bebida con sus datos llenos,
    //revisamos si se va a insertar o actualizar:
    posTemp = buscarPosicionBebidaPorID(parseInt(document.getElementById("txtIdBebida").value));
    if (posTemp >= 0) //Si esta condicion se cumple, la bebida ya existe
    {
        b.id = parseInt(document.getElementById("txtIdBebida").value);
        
        //Reemplazamos el objeto en la posicion de la bebida anterior:
        bebidas[posTemp] = b; 
    }
    else
    {
        //Como la bebida no existe, lo agregamos al final del arreglo:
        b.id = generarIDBebida();
        bebidas.push(b);
        document.getElementById("txtIdBebida").value = b.id;
    }
    
    llenarTabla();
    
    Swal.fire('Movimiento realizado.', 'Datos de producto guardados.', 'success');
}

export function eliminarBebida() // Función para eliminar una bebida
{
    // Obtener el Id de la bebida a eliminar desde el campo 
    let idEliminBebida = parseInt(document.getElementById("txtIdBebida").value);
    
    // Buscar la posición de la bebida en el arreglo de bebidas usando su ID
    let posEliminBebida = buscarPosicionBebidaPorID(idEliminBebida);

    // Verificar si la bebida se encontró
    if (posEliminBebida >= 0) {
        // Si se encontró, eliminar la bebida del arreglo
        bebidas.splice(posEliminBebida, 1);
        
        // Actualizar la tabla para reflejar la eliminación
        llenarTabla();
        
        // Limpiar los campos del formulario
        limpiarBebida();
        
        // Mostrar mensaje de éxito
        Swal.fire('Movimiento realizdo', 'La bebida ha sido eliminada.', 'success');
    } else {
        // Si no se encontró, mostrar mensaje de error
        Swal.fire('Error', 'No se encontró la bebida a eliminar.', 'error');
    }
}
export function limpiarBebida()
{
    document.getElementById("txtIdBebida").value = '';
    document.getElementById("txtBebida").value = '';
    document.getElementById("txtDescripcionBebida").value = '';
    document.getElementById("txtPrecioBebida").value = '';
    document.getElementById("cmbCategoriab").value = 1;
}
// Consulta bebidas por nombre
export function consultarBebida() 
{
let nombreBebida = document.getElementById("txtBuscarBebida").value.toLowerCase();
let contenido = '';
let encontrada = false;

// Recorremos el arreglo de bebidas buscando coincidencias con el nombre
for (let i = 0; i < bebidas.length; i++) {
    if (bebidas[i].producto.nombre.toLowerCase().includes(nombreBebida)) {
        encontrada = true;
        contenido +=    '<tr>' +
                        '<td>' + bebidas[i].producto.nombre + '</td>' +
                        '<td>' + bebidas[i].producto.categoria.nombre + '</td>' +
                        '<td class="text-end"> $' + bebidas[i].producto.precio + '</td>' +
                        '<td><a href="#" class="text-info" onclick="cm.mostrarDetalleBebida(' + bebidas[i].id + ');"><i class="fas fa-eye" style="color: #C60000"></i></a>'+ '</td>' +
                    '</tr>';
    }
}


    if (!encontrada) {
        contenido = '<tr><td colspan="20">Bebida no encontrada.</td></tr>';
    }

    document.getElementById("tbodyBebida").innerHTML = contenido;
}

export function mostrarDetalleBebidas(idBebida)
{    
    let bebida = null;
    let pos = buscarPosicionBebidaPorID(idBebida);
    
    if (pos < 0)
    {
        Swal.fire('', 'Bebida no encontrado.', 'warning');
        return;
    }
    
    limpiarBebida();
    bebida = bebidas[pos];
    document.getElementById("txtIdBebida").value = bebida.id;
    document.getElementById("txtBebida").value = bebida.producto.nombre;
    document.getElementById("txtDescripcionBebida").value = bebida.producto.descripcion;
    document.getElementById("txtPrecioBebida").value = bebida.producto.precio;
    document.getElementById("cmbCategoriab").value = bebida.producto.categoria.id;
    setDetalleBebidaVisible(true);
}
export function mostrarFormulariNuevoBebidas()
{
    limpiarBebida();
    setDetalleBebidaVisible(true);
}
/**
 * Llena el cuerpo (tbody) de una tabla HTML
 * utilizando los valores del arreglo JSON
 * de alimentos.
 */
function llenarTabla()
{
    //Aqui guardaremos el contenido de la tabla:
    let conten = '';
    
    //Recorremos el arreglo de la bebida:
    for (let i = 0; i < bebidas.length; i++)
    {
        //Vamos generando el contenido de forma dinamica:
        //contenido = contenido + '<tr>' + '</tr>'
        conten +=    '<tr>' +
                            '<td>' + bebidas[i].producto.nombre + '</td>' +
                            '<td>' + bebidas[i].producto.categoria.nombre + '</td>' +
                            '<td class="text-end"> $ ' + bebidas[i].producto.precio + '</td>' +
                            '<td><a href="#" class="text-info" onclick="cm.mostrarDetalleBebidas(' + bebidas[i].id + ');"><i class="fas fa-eye" style="color: #C60000"></i></a>'+ '</td>' +
                        '</tr>';
    }
    
    //Insertamos el contenido HTML generado dentro del cuerpo de la tabla:
    document.getElementById("tbodyBebida").innerHTML = conten;
}
function llenarComboBoxCategorias()
{
    let contenido = '';
    
    //Recorremos el arreglo de categorias:
    for (let i = 0; i < categorias.length; i++)
    {
        contenido +=    '<option value="' + categorias[i].id + '">' +
                            categorias[i].nombre +
                        '</option>';
    }
    
    document.getElementById('cmbCategoriab').innerHTML = contenido;
}

/*
 * Busca la posicion de un alimento con base en su ID.
 * 
 * Si el ID no se encuentra, la funcion devuelve -1.
 */
function buscarPosicionBebidaPorID(idBebida)
{    
    //Recorremos el arreglo de alimentos:
    for (let i = 0; i < bebidas.length; i++)
    {
        if (bebidas[i].id === idBebida)
            return i;
    }
    
    return -1;
}

/*
 * Esta funcion muestra y oculta el detalle
 * de un alimento.
 */
export function setDetalleBebidaVisible(valor)
{    
    // Si valor es true:
    if (valor)
    {
        //Oculto el catalogo:    divCatalogoAlimentos
        document.getElementById('divCatalogoBebida').style.display = 'none';
        
        //Muestro el detalle:    divDetalleAlimento
        document.getElementById('divDetalleBebida').style.display = '';
    }
    else
    {
        //Oculto el detalle:    divDetalleAlimento
        document.getElementById('divDetalleBebida').style.display = 'none';
        
        //Muestro el catalogo:   divDetalleAlimento
        document.getElementById('divCatalogoBebida').style.display = '';
    }
}
function generarIDBebida()
{
    let ultimoID = 0;
    
    //Primero revisamos que haya bebidas en el arreglo:
    if (bebidas.length > 0)
    {
        ultimoID = bebidas[0].id;
        for (let i = 0; i < bebidas.length; i++)
        {
            if (bebidas[i].id > ultimoID)
                ultimoID = bebidas[i].id;
        }
    }
    ultimoID ++;
    return ultimoID;
}
function generarIDProducto()
{
    let ultimoID = 0;
    
    //Primero revisamos que haya bebidass en el arreglo:
    if (bebidas.length > 0)
    {
        ultimoID = bebidas[0].producto.id;
        for (let i = 0; i < bebidas.length; i++)
        {
            if (bebidas[i].producto.id > ultimoID)
                ultimoID = bebidas[i].producto.id;
        }
    }
    ultimoID ++;
    return ultimoID;
}
function buscarCategoriaPorID(idCategoria)
{
    for (let i = 0; i < categorias.length; i++) 
    {
        if (categorias[i].id == idCategoria)
            
            return categorias[i];
    }
    
    return null;
}

