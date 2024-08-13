let alimentos = [
    {
        id: 1,
        producto: {
            id: 1,
            nombre: "Orden de tacos",
            descripcion: "5 Tacos con tortilla de maíz al pastor preparados " +
                    " con piña asada, cilantro y cebollas finamente picadas.",
            foto: "",
            precio: 65.58,
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
            nombre: "Pozole",
            descripcion: "Rico pozole, caldo tradicional servido caliente.",
            foto: "",
            precio: 75,
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
            nombre: "Mole",
            descripcion: "Comida tradicional mole con pollo.",
            foto: "",
            precio: 80,
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
            nombre: "Carnitas",
            descripcion: "Ricas carnitas de carne de cerdo.",
            foto: "",
            precio: 70.34,
            categoria: {
                id: 4,
                nombre: "Platillo"
            }
        }
    },
    {
        id: 5,
        producto: {
            id: 5,
            nombre: "Ensalada de nopales",
            descripcion: "Esta ensalada incluye cebolla morada," +
                    " jitomate, aguacate, cilantro fresco y sal.",
            foto: "",
            precio: 50.90,
            categoria: {
                id: 5,
                nombre: "Ensaladas"
            }
        }
    }
];


let bebidas = [
    {
        id: 1,
        producto: {
            id: 1,
            nombre: "Refresco ligero",
            descripcion: "600 ml, refresco sin azucar.",
            foto: "",
            precio: 19.99,
            categoria: {
                id: 1,
                nombre: "Refrescos"
            }
        }
    },
    {
        id: 2,
        producto: {
            id: 2,
            nombre: "Agua de horchata",
            descripcion: "Agua Fresca y Deliciosa.",
            foto: "",
            precio: 25,
            categoria: {
                id: 2,
                nombre: "Aguas"
            }
        }
    },
    {
        id: 3,
        producto: {
            id: 3,
            nombre: "Jugo de naranja",
            descripcion: "100% extracto de naranja.",
            foto: "",
            precio: 34.95,
            categoria: {
                id: 3,
                nombre: "Jugos"
            }
        }
    },
    {
        id: 4,
        producto: {
            id: 4,
            nombre: "Cafe negro",
            descripcion: "Café negro de olla.",
            foto: "",
            precio: 22.50,
            categoria: {
                id: 4,
                nombre: "Cafes"
            }
        }
    },
    {
        id: 5,
        producto: {
            id: 5,
            nombre: "Refresco",
            descripcion: "600ml",
            foto: "",
            precio: 19.99,
            categoria: {
                id: 5,
                nombre: "Refrescos"
            }
        }
    }
];

//// Función para buscar un alimento por id
//function buscarAlimentoPorId(id) {
//    return alimentos.find(alimento => alimento.id === id);
//}
//
//// Función para buscar una bebida por id
//function buscarBebidaPorId(id) {
//    return bebidas.find(bebida => bebida.id === id);
//}

let combos = [
    {
        id: 1,
        nombre: "Tradicional",
        precio: 162.58,
        descripcion: "Disfruta de una auténtica experiencia mexicana" +
                " con un festín de tacos al pastor y un refrescante" +
                " jugo de naranja, acompañado de un delicioso pozole" +
                " para mantener el espíritu festivo.",
        alimentos: [
            {
                id: 1,
                producto: {
                    id: 1,
                    nombre: "Orden de tacos",
                    descripcion: "5 Tacos con tortilla de maíz al pastor preparados" +
                            " con piña asada, cilantro y cebollas finamente picadas.",
                    foto: "",
                    precio: 65.58,
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
                    nombre: "Pozole",
                    descripcion: "Rico pozole, caldo tradicional servido caliente.",
                    foto: "",
                    precio: 75,
                    categoria: {
                        id: 2,
                        nombre: "Platillo"
                    }
                }
            }
        ],
        bebidas: [
            {
                id: 3,
                producto: {
                    id: 3,
                    nombre: "Jugo de naranja",
                    descripcion: "100% extracto de naranja.",
                    foto: "",
                    precio: 34.95,
                    categoria: {
                        id: 3,
                        nombre: "Jugos"
                    }
                }
            }
        ],
        estatus: "Activo"
    },
    {
        id: 2,
        nombre: "Fiesta Mexicana",
        precio: 187.58,
        descripcion: "Este combo celebra lo mejor de la comida" +
                " tradicional mexicana con una selección" +
                " de los platillos más emblemáticos.",
        alimentos: [
            {
                id: 1,
                producto: {
                    id: 1,
                    nombre: "Orden de tacos",
                    descripcion: "5 Tacos con tortilla de maíz al pastor preparados" +
                            " con piña asada, cilantro y cebollas finamente picadas.",
                    foto: "",
                    precio: 65.58,
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
                    nombre: "Pozole",
                    descripcion: "Rico pozole, caldo tradicional servido caliente.",
                    foto: "",
                    precio: 75,
                    categoria: {
                        id: 2,
                        nombre: "Platillo"
                    }
                }
            }
        ],
        bebidas: [
            {
                id: 2,
                producto: {
                    id: 2,
                    nombre: "Agua de horchata",
                    descripcion: "Agua Fresca y Deliciosa.",
                    foto: "",
                    precio: 25,
                    categoria: {
                        id: 2,
                        nombre: "Aguas"
                    }
                }
            },
            {
                id: 5,
                producto: {
                    id: 5,
                    nombre: "Refresco",
                    descripcion: "600ml",
                    foto: "",
                    precio: 19.99,
                    categoria: {
                        id: 5,
                        nombre: "Refrescos"
                    }
                }
            }
        ],
        estatus: "Activo"
    },
    {
        id: 3,
        nombre: "Sabor a Tradicion",
        precio: 195.00,
        descripcion: "Un combo lleno de sabores auténticos para aquellos" +
                " que buscan disfrutar de un almuerzo o cena completa" +
                " con un toque tradicional.",
        alimentos: [
            {
                id: 3,
                producto: {
                    id: 3,
                    nombre: "Mole",
                    descripcion: "Comida tradicional mole con pollo.",
                    foto: "",
                    precio: 80,
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
                    nombre: "Carnitas",
                    descripcion: "Ricas carnitas de carne de cerdo.",
                    foto: "",
                    precio: 70.34,
                    categoria: {
                        id: 4,
                        nombre: "Postres"
                    }
                }
            }
        ],
        bebidas: [
            {
                id: 3,
                producto: {
                    id: 3,
                    nombre: "Jugo de naranja",
                    descripcion: "100% extracto de naranja.",
                    foto: "",
                    precio: 34.95,
                    categoria: {
                        id: 3,
                        nombre: "Jugos"
                    }
                }
            },
            {
                id: 4,
                producto: {
                    id: 4,
                    nombre: "Cafe negro",
                    descripcion: "Café negro de olla.",
                    foto: "",
                    precio: 22.50,
                    categoria: {
                        id: 4,
                        nombre: "Cafes"
                    }
                }
            }
        ],
        estatus: "Activo"
    },
    {
        id: 4,
        nombre: "Fresco y Ligero",
        precio: 165.58,
        descripcion: "Este combo es perfecto para quienes prefieren" +
                " una comida ligera pero deliciosa, acompañada de" +
                " bebidas refrescantes.",
        alimentos: [
            {
                id: 1,
                producto: {
                    id: 1,
                    nombre: "Orden de tacos",
                    descripcion: "5 Tacos con tortilla de maíz al pastor preparados" +
                            " con piña asada, cilantro y cebollas finamente picadas.",
                    foto: "",
                    precio: 65.58,
                    categoria: {
                        id: 1,
                        nombre: "Platillo"
                    }
                }
            },
            {
                id: 5,
                producto: {
                    id: 5,
                    nombre: "Ensalada de nopales",
                    descripcion: "Esta ensalada incluye cebolla morada," +
                            " jitomate, aguacate, cilantro fresco y sal.",
                    foto: "",
                    precio: 50.90,
                    categoria: {
                        id: 5,
                        nombre: "Ensaladas"
                    }
                }
            }
        ],
        bebidas: [
            {
                id: 1,
                producto: {
                    id: 1,
                    nombre: "Refresco ligero",
                    descripcion: "600 ml, refresco sin azucar.",
                    foto: "",
                    precio: 19.99,
                    categoria: {
                        id: 1,
                        nombre: "Refrescos"
                    }
                }
            },
            {
                id: 3,
                producto: {
                    id: 3,
                    nombre: "Jugo de naranja",
                    descripcion: "100% extracto de naranja.",
                    foto: "",
                    precio: 34.95,
                    categoria: {
                        id: 3,
                        nombre: "Jugos"
                    }
                }
            }
        ],
        estatus: "Activo"
    },
    {
        id: 5,
        nombre: "Placer Completo",
        precio: 110,
        descripcion: "Una combinación que te llevará a través de una deliciosa travesía por la cocina mexicana",
        alimentos: [

            {
                id: 1,
                producto: {
                    id: 1,
                    nombre: "Orden de tacos",
                    descripcion: "5 Tacos con tortilla de maíz al pastor preparados" +
                            " con piña asada, cilantro y cebollas finamente picadas.",
                    foto: "",
                    precio: 65.58,
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
                    nombre: "Pozole",
                    descripcion: "Rico pozole, caldo tradicional servido caliente.",
                    foto: "",
                    precio: 75,
                    categoria: {
                        id: 2,
                        nombre: "Platillo"
                    }
                }
            },
            {
                id: 5,
                producto: {
                    id: 5,
                    nombre: "Ensalada de nopales",
                    descripcion: "Esta ensalada incluye cebolla morada," +
                            " jitomate, aguacate, cilantro fresco y sal.",
                    foto: "",
                    precio: 50.90,
                    categoria: {
                        id: 5,
                        nombre: "Ensaladas"
                    }
                }
            }
        ],
        bebidas: [
            {
                id: 2,
                producto: {
                    id: 2,
                    nombre: "Agua de horchata",
                    descripcion: "Agua Fresca y Deliciosa.",
                    foto: "",
                    precio: 25,
                    categoria: {
                        id: 2,
                        nombre: "Aguas"
                    }
                }
            },
            {
                id: 5,
                producto: {
                    id: 5,
                    nombre: "Refresco",
                    descripcion: "600ml",
                    foto: "",
                    precio: 19.99,
                    categoria: {
                        id: 5,
                        nombre: "Refrescos"
                    }
                }
            }
        ],
        estatus: "Activo"
    }
];

export function inicializarModuloCombo()
{
    setDetalleComboVisible(false);
    llenarTabla();
}

export function limpiarCombo()
{
    document.getElementById("txtId").value = ' ';
    document.getElementById("txtCombo").value = ' ';
    document.getElementById("txtPrecioCombo").value = ' ';
    document.getElementById("txtDescripcionCombo").value = ' ';
    document.getElementById("chkAlimento1").checked = false;
    document.getElementById("chkAlimento2").checked = false;
    document.getElementById("chkAlimento3").checked = false;
    document.getElementById("chkAlimento4").checked = false;
    document.getElementById("chkAlimento5").checked = false;
    document.getElementById("chkBebida1").checked = false;
    document.getElementById("chkBebida2").checked = false;
    document.getElementById("chkBebida3").checked = false;
    document.getElementById("chkBebida4").checked = false;
    document.getElementById("chkBebida5").checked = false;
}

export function mostrarFormularioNuevo()
{
    limpiarCombo();
    setDetalleComboVisible(true);
}

export function guardarCombo()
{
    // Verificar si todos los campos están llenos
    if (!validarCampos()) {
        Swal.fire('Error', 'Por favor, complete todos los campos.', 'error');
        return;
    }

    //Declaro una variable temporal para guardar la posicion del alimento:
    let posTemp = -1;

    //Generamos un nuevo objeto de combo:
    let combo = new Object();

    //Lleno los atributos del objeto combo:
    combos.id = 0;
    combo.nombre = document.getElementById("txtCombo").value;
    combo.descripcion = document.getElementById("txtDescripcionCombo").value;
    combo.precio = parseFloat(document.getElementById("txtPrecioCombo").value);

    //Inicializar los arrays para alimentos y bebidas:
    combo.alimentos = [];
    combo.bebidas = [];

    // Verificar y agregar alimentos seleccionados:
    if (document.getElementById("chkAlimento1").checked) {
        combo.alimentos.push({producto: {nombre: "Orden de tacos"}});
    }
    if (document.getElementById("chkAlimento2").checked) {
        combo.alimentos.push({producto: {nombre: "Pozole"}});
    }
    if (document.getElementById("chkAlimento3").checked) {
        combo.alimentos.push({producto: {nombre: "Mole"}});
    }
    if (document.getElementById("chkAlimento4").checked) {
        combo.alimentos.push({producto: {nombre: "Carnitas"}});
    }
    if (document.getElementById("chkAlimento5").checked) {
        combo.alimentos.push({producto: {nombre: "Ensalada de nopales"}});
    }

    // Verificar y agregar bebidas seleccionadas:
    if (document.getElementById("chkBebida1").checked) {
        combo.bebidas.push({producto: {nombre: "Refresco ligero"}});
    }
    if (document.getElementById("chkBebida2").checked) {
        combo.bebidas.push({producto: {nombre: "Agua de horchata"}});
    }
    if (document.getElementById("chkBebida3").checked) {
        combo.bebidas.push({producto: {nombre: "Jugo de naranja"}});
    }
    if (document.getElementById("chkBebida4").checked) {
        combo.bebidas.push({producto: {nombre: "Cafe negro"}});
    }
    if (document.getElementById("chkBebida5").checked) {
        combo.bebidas.push({producto: {nombre: "Refresco"}});
    }

    // Verificar si el combo ya existe para actualizarlo o agregar uno nuevo:
    posTemp = buscarPosicionComboPorID(parseInt(document.getElementById("txtId").value));

    if (posTemp >= 0) { // Si existe, actualizamos
        combo.id = parseInt(document.getElementById("txtId").value);

        combos[posTemp] = combo;
    } else { // Si no existe, agregamos uno nuevo
        combo.id = generarIDCombo();
        combos.push(combo);
        document.getElementById("txtId").value = combo.id;
    }

    llenarTabla();

    Swal.fire('Movimiento realizado.', 'Datos del combo guardado.', 'success');
}

export function setDetalleComboVisible(valor)
{
// Si valor es true:
    if (valor)
    {
//Oculto el catalogo:
        document.getElementById('divCatalogoCombos').style.display = 'none';
        //Muestro el detalle:
        document.getElementById('divDetalleCombo').style.display = '';
    } else
    {
//Oculto el detalle:
        document.getElementById('divDetalleCombo').style.display = 'none';
        //Muestro el catalogo:
        document.getElementById('divCatalogoCombos').style.display = '';
    }
}

function llenarTabla()
{
    // Aquí guardaremos el contenido de la tabla:
    let contenido = '';

    // Recorremos el arreglo de combos:
    for (let i = 0; i < combos.length; i++) {
        // Concatenar nombres de alimentos
        let nombresAlimentos = combos[i].alimentos.map(alimentos => alimentos.producto.nombre).join(', ');

        // Concatenar nombres de bebidas
        let nombresBebidas = combos[i].bebidas.map(bebidas => bebidas.producto.nombre).join(', ');

        // Generar el contenido de forma dinámica
        contenido += '<tr>' +
                '<td>' + combos[i].nombre + '</td>' +
                '<td>' + nombresAlimentos + '</td>' +
                '<td>' + nombresBebidas + '</td>' +
                '<td class="text-end"> $' + combos[i].precio + '</td>' +
                '<td><a href="#" class="text-info" onclick="cm.mostrarDetalleCombo(' + combos[i].id + ');"><i class="fas fa-eye" style="color:#c60000"></i></a>' + '</td>' +
                '</tr>';
    }

    // Insertamos el contenido HTML generado dentro del cuerpo de la tabla:
    document.getElementById("tbodyCombos").innerHTML = contenido;
}

function validarCampos() {
    // Obtener los valores de los campos de texto
    let nombre = document.getElementById("txtCombo").value;
    let precio = document.getElementById("txtPrecioCombo").value;
    let descripcion = document.getElementById("txtDescripcionCombo").value;

    // Verificar si los campos de texto están llenos
    if (nombre === "" || precio === "" || descripcion === "") {
        Swal.fire('Error', 'Por favor, complete todos los campos de texto.', 'error');
        return false;
    }

    // Verificar si al menos un alimento está seleccionado
    let alimentoSeleccionado = false;
    for (let i = 1; i <= 5; i++) {
        if (document.getElementById('chkAlimento' + i).checked) {
            alimentoSeleccionado = true;
            break;
        }
    }

    // Verificar si al menos una bebida está seleccionada
    let bebidaSeleccionada = false;
    for (let i = 1; i <= 5; i++) {
        if (document.getElementById('chkBebida' + i).checked) {
            bebidaSeleccionada = true;
            break;
        }
    }

    // Verificar si se ha seleccionado al menos un alimento y una bebida
    if (!alimentoSeleccionado) {
        Swal.fire('Error', 'Por favor, seleccione al menos un alimento.', 'error');
        return false;
    }

    if (!bebidaSeleccionada) {
        Swal.fire('Error', 'Por favor, seleccione al menos una bebida.', 'error');
        return false;
    }

    // Si todas las condiciones se cumplen, retornar true
    return true;
}

//export function mostrarDetalleCombo(idCombo)
//{
//    let combo = null;
//    let pos = buscarPosicionComboPorID(idCombo);
//
//    if (pos < 0)
//    {
//        Swal.fire('', 'Combo no encontrado.', 'warning');
//        return;
//    }
//
//    limpiarCombo();
//    combo = combos[pos];
//    document.getElementById("txtId").value = combo.id;
//    document.getElementById("txtCombo").value = combo.nombre;
//    document.getElementById("txtPrecioCombo").value = combo.precio;
//    document.getElementById("txtDescripcionCombo").value = combo.descripcion;
//
//    for (let j = 0; j < alimentos.lenght; j++) {
//        if (combo.alimentos[j].nombre === alimentos[j].nombre) {
//            document.getElementById("chkAlimento1").checked = true;
//        }
//
//        if (combo.alimentos[j].nombre === alimentos[j].nombre) {
//            document.getElementById("chkAlimento2").checked = true;
//        }
//
//        if (combo.alimentos[j].nombre === alimentos[j].nombre) {
//            document.getElementById("chkAlimento3").checked = true;
//        }
//
//        if (combo.alimentos[j].nombre === alimentos[j].nombre) {
//            document.getElementById("chkAlimento4").checked = true;
//        }
//
//        if (combo.alimentos[j].nombre === alimentos[j].nombre) {
//            document.getElementById("chkAlimento5").checked = true;
//        }
//
//        if (combo.bebidas[j].nombre === bebidas[j].nombre) {
//            document.getElementById("chkBebida1").checked = true;
//        }
//
//        if (combo.bebidas[j].nombre === bebidas[j].nombre) {
//            document.getElementById("chkBebida2").checked = true;
//        }
//
//        if (combo.bebidas[j].nombre === bebidas[j].nombre) {
//            document.getElementById("chkBebida3").checked = true;
//        }
//
//        if (combo.bebidas[j].nombre === bebidas[j].nombre) {
//            document.getElementById("chkBebida4").checked = true;
//        }
//
//        if (combo.bebidas[j].nombre === bebidas[j].nombre) {
//            document.getElementById("chkBebida5").checked = true;
//        }
//    }
//    document.getElementById("cmbEstatusCombo").value = combo.estatus;
//
//    // Selecciona los checkboxes de los alimentos del combo
//    combo.alimentos.forEach(alimento => {
//        let checkbox = document.querySelector(`input[type="checkbox"][value="${alimento.producto.nombre}"]`);
//        if (checkbox) {
//            checkbox.checked = true;
//        }
//    });
//
//    // Selecciona los checkboxes de las bebidas del combo
//    combo.bebidas.forEach(bebida => {
//        let checkbox = document.querySelector(`input[type="checkbox"][value="${bebida.producto.nombre}"]`);
//        if (checkbox) {
//            checkbox.checked = true;
//        }
//    });
//
//    setDetalleComboVisible(true);
//}

export function mostrarDetalleCombo(idCombo) {
    let combo = null;
    let pos = buscarPosicionComboPorID(idCombo);

    if (pos < 0) {
        Swal.fire('', 'Combo no encontrado.', 'warning');
        return;
    }

    limpiarCombo();
    combo = combos[pos]; 
    document.getElementById("txtId").value = combo.id;
    document.getElementById("txtCombo").value = combo.nombre;
    document.getElementById("txtPrecioCombo").value = combo.precio;
    document.getElementById("txtDescripcionCombo").value = combo.descripcion;

    // Comparar alimentos del combo con los disponibles
    for (let j = 0; j < alimentos.length; j++) {
        if (combo.alimentos.find(al => al.producto.nombre === alimentos[j].producto.nombre)) {
            document.getElementById(`chkAlimento${alimentos[j].id}`).checked = true;
        }
    }

    // Comparar bebidas del combo con las disponibles
    for (let j = 0; j < bebidas.length; j++) {
        if (combo.bebidas.find(be => be.producto.nombre === bebidas[j].producto.nombre)) {
            document.getElementById(`chkBebida${bebidas[j].id}`).checked = true;
        }
    }

    setDetalleComboVisible(true);
}

export function consultarCombo()
{
    let nombreCombo = document.getElementById("txtBuscarCombo").value.toLowerCase();
    let contenido = '';
    let encontrada = false;

    // Recorremos el arreglo de alimentos buscando coincidencias con el nombre
    for (let i = 0; i < combos.length; i++) {
        // Concatenar nombres de alimentos
        let nombresAlimentos = combos[i].alimentos.map(alimentos => alimentos.producto.nombre).join(', ');

        // Concatenar nombres de bebidas
        let nombresBebidas = combos[i].bebidas.map(bebidas => bebidas.producto.nombre).join(', ');

        if (combos[i].nombre.toLowerCase().startsWith(nombreCombo)) {
            encontrada = true;
            contenido += '<tr>' +
                    '<td>' + combos[i].nombre + '</td>' +
                    '<td>' + nombresAlimentos + '</td>' +
                    '<td>' + nombresBebidas + '</td>' +
                    '<td class="text-end">' + combos[i].precio + '</td>' +
                    '<td><a href="#" class="text-info" onclick="cm.mostrarDetalleCombo(' + combos[i].id + ');"><i class="fas fa-eye" style="color:#c60000"></i></a>' + '</td>' +
                    '</tr>';
        }
    }

    if (!encontrada) {
        contenido = '<tr><td colspan="20">Combo no encontrado.</td></tr>';
    }

    document.getElementById("tbodyCombos").innerHTML = contenido;
}

export function eliminarCombo()
{
    // Obtener el ID del alimento a eliminar desde el campo correspondiente
    let idEliminar = parseInt(document.getElementById("txtId").value);

    // Buscar la posición del alimento en el arreglo por su ID
    let posEliminar = buscarPosicionComboPorID(idEliminar);

    if (posEliminar >= 0) {
        // Eliminar el elemento del arreglo usando splice
        combos.splice(posEliminar, 1);

        // Limpiar los campos después de eliminar
        limpiarCombo();

        // Volver a llenar la tabla con los datos actualizados
        llenarTabla();

        Swal.fire('Movimiento realizado.', 'Combo eliminado.', 'success');
    } else {
        Swal.fire('Error', 'El combo no existe.', 'error');
    }
}

function buscarPosicionComboPorID(idCombo)
{
    //Recorremos el arreglo de alimentos:
    for (let i = 0;
    i < combos.length; i++) {
        if (combos[i].id === idCombo)
            return i;
    }

    return -1;
}

function generarIDCombo()
{
    let ultimoID = 0;

    //Primero revisamos que haya alimentos en el arreglo:
    if (combos.length > 0)
    {
        ultimoID = combos[0].id;
        for (let i = 0; i < combos.length; i++)
        {
            if (combos[i].id > ultimoID)
                ultimoID = combos[i].id;
        }
    }
    ultimoID++;
    return ultimoID;
}

//function buscarPosicionAlimentoPorID(idAlimento)
//{
//    //Recorremos el arreglo de alimentos:
//    for (let i = 0; i < alimentos.length; i++)
//    {
//        if (alimentos[i].id === idAlimento)
//            return i;
//    }
//
//    return -1;
//}
//
//function buscarPosicionBebidaPorID(idBebida)
//{
//    //Recorremos el arreglo de alimentos:
//    for (let i = 0; i < bebidas.length; i++)
//    {
//        if (bebidas[i].id === idBebida)
//            return i;
//    }
//
//    return -1;
//}
