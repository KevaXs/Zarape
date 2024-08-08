//Definimos un arreglo JSON de categoria
let categorias =   [
                        {
                            id      : 1,
                            nombre  : "Platillo"
                        },
                        {
                            id      : 2,
                            nombre  : "Torta"
                        },
                        {
                            id      : 3,
                            nombre  : "Ensalada"
                        },
                        {
                            id      : 4,
                            nombre  : "Postre"
                        },
                        {
                            id      : 5,
                            nombre  : "Fruta"
                        }
                    ];

//Definimos un arreglo JSON de alimentos de forma global:
let alimentos = [
                    {
                        id       :  1,
                        producto :  {
                                        id          : 1,
                                        nombre      : "Orden de tacos",
                                        descripcion : "5 Tacos con tortilla de maíz al pastor preparados " +
                                                        " con piña asada, cilantro y cebollas finamente picadas.",
                                        foto        : "",
                                        precio      : 65.58,
                                        categoria   :   {
                                                            id : 1,
                                                            nombre : "Platillo"
                                                        }
                                    }
                    },
                    {
                        id       :  2,
                        producto :  {
                                        id          : 2,
                                        nombre      : "Pozole",
                                        descripcion : "Rico pozole, caldo tradicional servido caliente.",
                                        foto        : "",
                                        precio      : 75,
                                        categoria   :   {
                                                            id : 1,
                                                            nombre : "Platillo"
                                                        }
                                    }
                    },
                    {
                        id       :  3,
                        producto :  {
                                        id          : 3,
                                        nombre      : "Mole",
                                        descripcion : "Comida tradicional mole con pollo.",
                                        foto        : "",
                                        precio      : 80,
                                        categoria   :   {
                                                            id : 1,
                                                            nombre : "Platillo"
                                                        }
                                    }
                    },
                    {
                        id       :  4,
                        producto :  {
                                        id          : 4,
                                        nombre      : "Carnitas",
                                        descripcion : "Ricas carnitas de carne de cerdo.",
                                        foto        : "",
                                        precio      : 70.34,
                                        categoria   :   {
                                                            id : 1,
                                                            nombre : "Platillo"
                                                        }
                                    }
                    },
                    {
                        id       :  5,
                        producto :  {
                                        id          : 5,
                                        nombre      : "Ensalada de nopales",
                                        descripcion : "Esta ensalada incluye cebolla morada," +
                                                        " jitomate, aguacate, cilantro fresco y sal.",
                                        foto        : "",
                                        precio      : 50.90,
                                        categoria   :   {
                                                            id : 3,
                                                            nombre : "Ensalada"
                                                        }
                                    }
                    }
                ];
                
                
export function inicializarModuloAlimento()
{
    setDetalleAlimentoVisible(false);
    llenarComboBoxCategorias();
    llenarTabla();
}

export function guardarAlimento()
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
    let a = new Object();    
    
    //Lleno los atributos del objeto alimento:
    a.id = 0;
    a.producto = new Object();
    a.producto.id = 0;
    a.producto.nombre = document.getElementById("txtAlimento").value;
    a.producto.descripcion = document.getElementById("txtDescripcionAlimento").value;
    a.producto.precio = parseFloat(document.getElementById("txtPrecioAlimento").value);    
    catTemp = buscarCategoriaPorID(parseInt(document.getElementById("cmbCategoria").value)); 
    a.producto.categoria = catTemp;
    
    //Una vez que tenemos el objeto de alimento con sus datos llenos,
    //revisamos si se va a insertar o actualizar:
    posTemp = buscarPosicionAlimentoPorID(parseInt(document.getElementById("txtIdAlimento").value));
    if (posTemp >= 0) //Si esta condicion se cumple, el alimento ya existe
    {
        a.id = parseInt(document.getElementById("txtIdAlimento").value);
        
        //Reemplazamos el objeto en la posicion del alimento anterior:
        alimentos[posTemp] = a; 
    }
    else
    {
        //Como el alimento no existe, lo agregamos al final del arreglo:
        a.id = generarIDAlimento();
        alimentos.push(a);
        document.getElementById("txtIdAlimento").value = a.id;
    }
    
    llenarTabla();
    
    Swal.fire('Movimiento realizado.', 'Datos de producto guardados.', 'success');
}

export function eliminarAlimento()
{
     // Obtener el ID del alimento a eliminar desde el campo correspondiente
    let idEliminar = parseInt(document.getElementById("txtIdAlimento").value);
    
    // Buscar la posición del alimento en el arreglo por su ID
    let posEliminar = buscarPosicionAlimentoPorID(idEliminar);
    
    if (posEliminar >= 0) {
        // Eliminar el elemento del arreglo usando splice
        alimentos.splice(posEliminar, 1);
        
        // Limpiar los campos después de eliminar
        limpiarAlimento();
        
        // Volver a llenar la tabla con los datos actualizados
        llenarTabla();
        
        Swal.fire('Movimiento realizado.', 'Producto eliminado.', 'success');
    } else {
        Swal.fire('Error', 'El producto no existe.', 'error');
    }
}

export function limpiarAlimento()
{
    document.getElementById("txtIdAlimento").value = '';
    document.getElementById("txtAlimento").value = '';
    document.getElementById("txtDescripcionAlimento").value = '';
    document.getElementById("txtPrecioAlimento").value = '';
    document.getElementById("cmbCategoria").value = 1;
}

//Esta funcion permite consultar un alimento mediante su nombre
//y muestra solo el alimento encontrado, ocultando los demas. 
export function consultarAlimento() 
{
    let nombreAlimento = document.getElementById("txtBuscarAlimento").value.toLowerCase();
    let contenido = '';
    let encontrada = false;

    // Recorremos el arreglo de alimentos buscando coincidencias con el nombre
    for (let i = 0; i < alimentos.length; i++) {
        if (alimentos[i].producto.nombre.toLowerCase().startsWith(nombreAlimento)) {
            encontrada = true;
            contenido +=    '<tr>' +
                            '<td>' + alimentos[i].producto.nombre + '</td>' +
                            '<td>' + alimentos[i].producto.categoria.nombre + '</td>' +
                            '<td class="text-end"> $' + alimentos[i].producto.precio + '</td>' +
                            '<td><a href="#" class="text-info" onclick="cm.mostrarDetalleAlimento(' + alimentos[i].id + ');"><i class="fas fa-eye" style="color: #C60000"></i></a>'+ '</td>' +
                        '</tr>';
        }
    }

    if (!encontrada) {
        contenido = '<tr><td colspan="20">Producto no encontrado.</td></tr>';
    }

    document.getElementById("tbodyAlimentos").innerHTML = contenido;
}

// Esta función valida que todos los campos esten llenos
// antes de guardar los datos.
function validarCampos() 
{
    // Obtener los valores de todos los campos
    let nombre = document.getElementById("txtAlimento").value;
    let descripcion = document.getElementById("txtDescripcionAlimento").value;
    let precio = document.getElementById("txtPrecioAlimento").value;
    let categoria = document.getElementById("cmbCategoria").value;

    // Verificar si todos los campos están llenos
    if (nombre === "" || descripcion === "" || precio === "" || categoria === "") 
    {
        return false;
    }
    return true;
}
                
                
export function mostrarDetalleAlimento(idAlimento)
{    
    let alimento = null;
    let pos = buscarPosicionAlimentoPorID(idAlimento);
    
    if (pos < 0)
    {
        Swal.fire('', 'Producto no encontrado.', 'warning');
        return;
    }
    
    limpiarAlimento();
    alimento = alimentos[pos];
    document.getElementById("txtIdAlimento").value = alimento.id;
    document.getElementById("txtAlimento").value = alimento.producto.nombre;
    document.getElementById("txtDescripcionAlimento").value = alimento.producto.descripcion;
    document.getElementById("txtPrecioAlimento").value = alimento.producto.precio;
    document.getElementById("cmbCategoria").value = alimento.producto.categoria.id;
    setDetalleAlimentoVisible(true);
}

export function mostrarFormularioNuevo()
{
    limpiarAlimento();
    setDetalleAlimentoVisible(true);
}


//Llena el cuerpo (tbody) de una tabla HTML
//utilizando los valores del arreglo JSON de alimentos.
function llenarTabla()
{
    //Aqui guardaremos el contenido de la tabla:
    let contenido = '';
    
    //Recorremos el arreglo de alimentos:
    for (let i = 0; i < alimentos.length; i++)
    {
        //Vamos generando el contenido de forma dinamica:
        //contenido = contenido + '<tr>' + '</tr>'
        contenido +=    '<tr>' +
                            '<td>' + alimentos[i].producto.nombre + '</td>' +
                            '<td>' + alimentos[i].producto.categoria.nombre + '</td>' +
                            '<td class="text-end"> $' + alimentos[i].producto.precio + '</td>' +
                            '<td><a href="#" class="text-info" onclick="cm.mostrarDetalleAlimento(' + alimentos[i].id + ');"><i class="fas fa-eye" style="color: #C60000"></i></a>'+ '</td>' +
                        '</tr>';
    }
    
    //Insertamos el contenido HTML generado dentro del cuerpo de la tabla:
    document.getElementById("tbodyAlimentos").innerHTML = contenido;
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
    
    document.getElementById('cmbCategoria').innerHTML = contenido;
}

/*
 * Busca la posicion de un alimento con base en su ID.
 * 
 * Si el ID no se encuentra, la funcion devuelve -1.
 */
function buscarPosicionAlimentoPorID(idAlimento)
{    
    //Recorremos el arreglo de alimentos:
    for (let i = 0; i < alimentos.length; i++)
    {
        if (alimentos[i].id === idAlimento)
            return i;
    }
    
    return -1;
}


//Esta funcion muestra y oculta el detalle de un alimento.
export function setDetalleAlimentoVisible(valor)
{    
    // Si valor es true:
    if (valor)
    {
        //Oculto el catalogo:
        document.getElementById('divCatalogoAlimentos').style.display = 'none';
        
        //Muestro el detalle:
        document.getElementById('divDetalleAlimento').style.display = '';
    }
    else
    {
        //Oculto el detalle:
        document.getElementById('divDetalleAlimento').style.display = 'none';
        
        //Muestro el catalogo:
        document.getElementById('divCatalogoAlimentos').style.display = '';
    }
}

//Esta funcion genera un nuevo ID de alimento
//tomando en cuenta el ultimo ID de alimento existente.
function generarIDAlimento()
{
    let ultimoID = 0;
    
    //Primero revisamos que haya alimentos en el arreglo:
    if (alimentos.length > 0)
    {
        ultimoID = alimentos[0].id;
        for (let i = 0; i < alimentos.length; i++)
        {
            if (alimentos[i].id > ultimoID)
                ultimoID = alimentos[i].id;
        }
    }
    ultimoID ++;
    return ultimoID;
}

function generarIDProducto()
{
    let ultimoID = 0;
    
    //Primero revisamos que haya alimentos en el arreglo:
    if (alimentos.length > 0)
    {
        ultimoID = alimentos[0].producto.id;
        for (let i = 0; i < alimentos.length; i++)
        {
            if (alimentos[i].producto.id > ultimoID)
                ultimoID = alimentos[i].producto.id;
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