//declaramos un arreglo JSON de categoria
let categorias = [
    {
        id: 1,
        nombre: "Platillo"
    },
    {
        id: 2,
        nombre: "Torta"
    },
    {
        id: 3,
        nombre: "Ensalada"
    },
    {
        id: 4,
        nombre: "Postre"
    },
    {
        id: 5,
        nombre: "Fruta"
    }
];

//Definimos un arreglo JSON de alimentos de forma global:
let alimentos = [
    {
        id: 1,

        producto: {
            id: 1,
            nombre: "Tacos",
            descripcion: "Muy ricos.",
            foto: "",
            precio: 14.99,

            categoria: {
                id: 1,
                nombre: "Platillo"
            }
        }
    },
    {
        id: 2,

        producto: {
            id: 2,
            nombre: "Taparterias",
            descripcion: "Tortas Grandes.",
            foto: "",
            precio: 14.99,

            categoria: {
                id: 2,
                nombre: "Platillo"
            }
        }
    },
    {
        id: 3,

        producto: {
            id: 3,
            nombre: "Zopesotes",
            descripcion: "Zopes Grandes.",
            foto: "",
            precio: 30.23,

            categoria: {
                id: 3,
                nombre: "Platillo"
            }
        }
    },
    {
        id: 4,

        producto: {
            id: 4,
            nombre: "ChocoCake",
            descripcion: "Cake mediano.",
            foto: "",
            precio: 32.34,

            categoria: {
                id: 4,
                nombre: "Postres"
            }
        }
    },
    {
        id: 5,

        producto: {
            id: 5,
            nombre: "Ensapollo",
            descripcion: "Ensalada de Pollo.",
            foto: "",
            precio: 35.90,

            categoria: {
                id: 5,
                nombre: "Ensaladas"
            }
        }
    }
];

export function inicializarModulo()
{
    setDetalleAlimentoVisible(false);
    llenarComboBoxCategorias();
    llenarTabla();
}

export function guardarAlimento()
{
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
    posTemp = buscarPosicionAlimentoPorID(parseInt(document.getElementById("txtId").value));
    if (posTemp >= 0) //Si esta condicion se cumple, el alimento ya existe
    {
        a.id = parseInt(document.getElementById("txtId").value);

        //Reemplazamos el objeto en la posicion del alimento anterior:
        alimentos[posTemp] = a;
    } else
    {
        //Como el alimento no existe, lo agregamos al final del arreglo:
        a.id = generarIDAlimento();
        alimentos.push(a);
        document.getElementById("txtId").value = a.id;
    }

    llenarTabla();

    Swal.fire('Movimiento realizado.', 'Datos de producto guardados.', 'success');
}

export function limpiarAlimento()
{
    document.getElementById("txtId").value = ' ';
    document.getElementById("txtAlimento").value = ' ';
    document.getElementById("txtDescripcionAlimento").value = ' ';
    document.getElementById("txtPrecioAlimento").value = ' ';
    document.getElementById("cmbCategoria").value = 1;
}

export function mostrarDetalleAlimento(idAlimento)
{
    let alimento = null;
    let pos = buscarPosicionAlimentoPorID(idAlimento);

    if (pos < 0)
    {
        Swal.fire('', 'Alimento no encontrado.', 'warning');
        return;
    }

    limpiarAlimento();
    alimento = alimentos[pos];
    document.getElementById("txtId").value = alimento.id;
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

/**
 * Llena el cuerpo (tbody) de una tabla HTML
 * utilizando los valores del arreglo JSON
 * de alimentos.
 */
function llenarTabla()
{
    //Aqui guardaremos el contenido de la tabla:
    let contenido = '';

    //Recorremos el arreglo de alimentos:
    for (let i = 0; i < alimentos.length; i++)
    {
        //Vamos generando el contenido de forma dinamica:
        //contenido = contenido + '<tr>' + '</tr>'
        contenido += '<tr>' +
                '<td>' + alimentos[i].producto.nombre + '</td>' +
                '<td>' + alimentos[i].producto.categoria.nombre + '</td>' +
                '<td class="text-end">' + alimentos[i].producto.precio + '</td>' +
                '<td><a href="#" class="text-info" onclick="cm.mostrarDetalleAlimento(' + alimentos[i].id + ');"><i class="fas fa-eye"></i></a>' + '</td>' +
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
        contenido += '<option value="' + categorias[i].id + '">' +
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
            contenido += '<tr>' +
                    '<td>' + alimentos[i].producto.nombre + '</td>' +
                    '<td>' + alimentos[i].producto.categoria.nombre + '</td>' +
                    '<td>' + alimentos[i].producto.precio + '</td>' +
                    '<td><a href="#" class="text-info" onclick="cm.mostrarDetalleAlimento(' + alimentos[i].id + ');"><i class="fas fa-eye"></i></a>' + '</td>' +
                    '</tr>';
        }
    }

    if (!encontrada) {
        contenido = '<tr><td colspan="20">Alimento no encontrado.</td></tr>';
    }

    document.getElementById("tbodyAlimentos").innerHTML = contenido;
}

export function eliminarAlimento()
{
    // Obtener el ID del alimento a eliminar desde el campo correspondiente
    let idEliminar = parseInt(document.getElementById("txtId").value);

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

/*
 * Esta funcion muestra y oculta el detalle
 * de un alimento.
 */
export function setDetalleAlimentoVisible(valor)
{
    // Si valor es true:
    if (valor)
    {
        //Oculto el catalogo:
        document.getElementById('divCatalogoAlimentos').style.display = 'none';

        //Muestro el detalle:
        document.getElementById('divDetalleAlimento').style.display = '';
    } else
    {
        //Oculto el detalle:
        document.getElementById('divDetalleAlimento').style.display = 'none';

        //Muestro el catalogo:
        document.getElementById('divCatalogoAlimentos').style.display = '';
    }
}

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
    ultimoID++;
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
    ultimoID++;
    return ultimoID;
}

function buscarCategoriaPorID(idCategoria)
{
    for (let i = 0; i < categorias.length; i++)
    {
        if (categorias[i].id === idCategoria)
            return categorias[i];
    }
    return null;
}