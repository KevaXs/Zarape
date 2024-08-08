// Definimos un arreglo JSON de Sucursales:
let sucursales = [ 
                    {
                        id           :  1,
                        nombre       :  "El Zarape (Plaza Mayor)",
                        latitud      :  "21.15",
                        longitud     :  "-101.69",
                        calle        :  "Blvd. Juan Alonso de Torres Pte.",
                        numero       :  "2002",
                        colonia      :  "Centro Comercial",
                        codigoPostal :  "37150",
                        horario      :  "Lunes - Domingo 9:00 a.m. - 1:00 p.m.",
                        estatus      :  "Activa"
                    },
                    {
                        id           :  2,
                        nombre       :  "El Zarape (Centro Max)",
                        latitud      :  "21.10",
                        longitud     :  "-101.63",
                        calle        :  "Blvd. Adolfo López Mateos",
                        numero       :  "2540",
                        colonia      :  "Jardines de Jerez",
                        codigoPostal :  "37530",
                        horario      :  "Lunes - Domingo 9:00 a.m. - 1:00 p.m.",
                        estatus      :  "Activa"
                    },
                    {
                        id           :  3,
                        nombre       :  "El Zarape (Altacia)",
                        latitud      :  "21.09",
                        longitud     :  "-101.62",
                        calle        :  "Blvd. Aeropuerto",
                        numero       :  "105",
                        colonia      :  "Cerrito de Jerez Nte.",
                        codigoPostal :  "37545",
                        horario      :  "Lunes - Domingo 9:00 a.m. - 1:00 p.m.",
                        estatus      :  "Activa"
                    },
                    {
                        id           :  4,
                        nombre       :  "El Zarape (Centro)",
                        latitud      :  "21.12",
                        longitud     :  "-101.68",
                        calle        :  "5 de Febrero",
                        numero       :  "108",
                        colonia      :  "Centro",
                        codigoPostal :  "37000",
                        horario      :  "Lunes - Domingo 9:00 a.m. - 1:00 p.m.",
                        estatus      :  "Activa"
                    },
                    {
                        id           :  5,
                        nombre       :  "El Zarape (Centro II)",
                        latitud      :  "21.13",
                        longitud     :  "-101.69",
                        calle        :  "Hidalgo",
                        numero       :  "102-B",
                        colonia      :  "Centro",
                        codigoPostal :  "37000",
                        horario      :  "Lunes - Domingo 9:00 a.m. - 1:00 p.m.",
                        estatus      :  "Activa"
                    }
                 ];
                 
export function inicializarModulo()
{
    setDetalleSucursalVisible(false);
    llenarTabla();
}

export function guardarSucursal()
{
    // Verificar si todos los campos están llenos
    if (!validarCampos()) {
        Swal.fire('Error', 'Por favor, complete todos los campos.', 'error');
        return;
    }
    
    // Declaro una variable temporal para guardar la posicion de la sucursal:
    let posTemp = -1;
    
    // Generamos un nuevo objeto de sucursal:
    let s = new Object();    
    
    // Lleno los atributos del objeto sucursal:
    s.id = 0;
    s.nombre = document.getElementById("txtSucursal").value;
    s.latitud = document.getElementById("txtLatitud").value;
    s.longitud = document.getElementById("txtLongitud").value;
    s.calle = document.getElementById("txtCalle").value;
    s.numero = document.getElementById("txtNumero").value;
    s.colonia = document.getElementById("txtColonia").value;
    s.codigoPostal = document.getElementById("txtCodigoPostal").value;
    s.horario = document.getElementById("txtHorario").value;
    
    // Una vez que tenemos el objeto de sucursal con sus datos llenos,
    // revisamos si se va a insertar o actualizar:
    posTemp = buscarPosicionSucursalPorID(parseInt(document.getElementById("txtIdSucursal").value));
    if (posTemp >= 0) // Si esta condicion se cumple, la sucursal ya existe
    {
        s.id = parseInt(document.getElementById("txtIdSucursal").value);
        
        // Reemplazamos el objeto en la posicion de la sucursal anterior:
        sucursales[posTemp] = s; 
    }
    else
    {
        // Como la sucursal no existe, la agregamos al final del arreglo:
        s.id = generarIDSucursal();
        sucursales.push(s);
        document.getElementById("txtIdSucursal").value = s.id;
    }
    
    llenarTabla();
    
    Swal.fire('Movimiento realizado.', 'Datos de la sucursal guardados.', 'success');
}

export function eliminarSucursal()
{
     // Obtener el ID de la sucursal a eliminar desde el campo correspondiente
    let idEliminar = parseInt(document.getElementById("txtIdSucursal").value);
    
    // Buscar la posición de la sucursal en el arreglo por su ID
    let posEliminar = buscarPosicionSucursalPorID(idEliminar);
    
    if (posEliminar >= 0) {
        // Eliminar el elemento del arreglo usando splice
        sucursales.splice(posEliminar, 1);
        
        // Limpiar los campos después de eliminar
        limpiarSucursal();
        
        // Volver a llenar la tabla con los datos actualizados
        llenarTabla();
        
        Swal.fire('Movimiento realizado.', 'Sucursal eliminada.', 'success');
    } else {
        Swal.fire('Error', 'La sucursal no existe.', 'error');
    }
}

// Esta función limpia los campos del formulario
export function limpiarSucursal()
{
    document.getElementById("txtIdSucursal").value = '';
    document.getElementById("txtSucursal").value = '';
    document.getElementById("txtLatitud").value = '';
    document.getElementById("txtLongitud").value = '';
    document.getElementById("txtCalle").value = '';
    document.getElementById("txtNumero").value = '';
    document.getElementById("txtColonia").value = '';
    document.getElementById("txtCodigoPostal").value = '';
    document.getElementById("txtHorario").value = '';
}


// Esta funcion permite consultar una sucursal mediante su nombre
// y muestra solo la sucursal encontrada, ocultando las demas. 
export function consultarSucursal() 
{
    let nombreSucursal = document.getElementById("txtBuscarSucursal").value.toLowerCase();
    let contenido = '';
    let encontrada = false;

    // Recorremos el arreglo de sucursales buscando coincidencias con el nombre
    for (let i = 0; i < sucursales.length; i++) {
        if (sucursales[i].nombre.toLowerCase().includes(nombreSucursal)) {
            encontrada = true;
            contenido +=    '<tr>' +
                            '<td>' + sucursales[i].nombre + '</td>' +
                            '<td>' + sucursales[i].calle + " " + sucursales[i].numero + ", " + sucursales[i].colonia + ", " + sucursales[i].codigoPostal + "." + '</td>' +
                            '<td>' + sucursales[i].horario + '</td>' +
                            '<td><a href="#" class="text-info" onclick="cm.mostrarDetalleSucursal(' + sucursales[i].id + ');"><i class="fas fa-eye" style="color: #C60000"></i></a>'+ '</td>' +
                        '</tr>';
        }
    }

    if (!encontrada) {
        contenido = '<tr><td colspan="20">Sucursal no encontrada.</td></tr>';
    }

    document.getElementById("tbodySucursales").innerHTML = contenido;
}

// Esta función valida que todos los campos esten llenos
// antes de guardar los datos.
function validarCampos() 
{
    // Obtener los valores de todos los campos
    let nombre = document.getElementById("txtSucursal").value;
    let latitud = document.getElementById("txtLatitud").value;
    let longitud = document.getElementById("txtLongitud").value;
    let calle = document.getElementById("txtCalle").value;
    let numero = document.getElementById("txtNumero").value;
    let colonia = document.getElementById("txtColonia").value;
    let codigoPostal = document.getElementById("txtCodigoPostal").value;
    let horario = document.getElementById("txtHorario").value;

    // Verificar si todos los campos están llenos
    if (nombre === "" || latitud === "" || longitud === "" || calle === "" || 
        numero === "" || colonia === "" || codigoPostal === "" || horario === "") 
    {
        return false;
    }
    return true;
}


export function mostrarDetalleSucursal(idSucursal) 
{    
    let sucursal = null;
    let pos = buscarPosicionSucursalPorID(idSucursal);

    if (pos < 0) 
    {
        Swal.fire('', 'Sucursal no encontrada.', 'warning');
        return;
    }

    limpiarSucursal();
    sucursal = sucursales[pos];
    document.getElementById("txtIdSucursal").value = sucursal.id;
    document.getElementById("txtSucursal").value = sucursal.nombre;
    document.getElementById("txtLatitud").value = sucursal.latitud;
    document.getElementById("txtLongitud").value = sucursal.longitud;
    document.getElementById("txtCalle").value = sucursal.calle;
    document.getElementById("txtNumero").value = sucursal.numero;
    document.getElementById("txtColonia").value = sucursal.colonia;
    document.getElementById("txtCodigoPostal").value = sucursal.codigoPostal;
    document.getElementById("txtHorario").value = sucursal.horario;
    setDetalleSucursalVisible(true);
}

export function mostrarFormularioNuevo()
{
    limpiarSucursal();
    setDetalleSucursalVisible(true);
}


// Llena el cuerpo (tbody) de una tabla HTML
// utilizando los valores del arreglo JSON de sucursales.
function llenarTabla()
{
    // Aqui guardaremos el contenido de la tabla:
    let contenido = '';
    
    // Recorremos el arreglo de sucursales:
    for (let i = 0; i < sucursales.length; i++)
    {
        // Vamos generando el contenido de forma dinamica:
        // contenido = contenido + '<tr>' + '</tr>'
        contenido +=    '<tr>' +
                            '<td>' + sucursales[i].nombre + '</td>' +
                            '<td>' + sucursales[i].calle + " " + sucursales[i].numero + ", " + sucursales[i].colonia + ", " + sucursales[i].codigoPostal + "." + '</td>' +
                            '<td>' + sucursales[i].horario + '</td>' +
                            '<td><a href="#" class="text-info" onclick="cm.mostrarDetalleSucursal(' + sucursales[i].id + ');"><i class="fas fa-eye" style="color: #C60000"></i></a>'+ '</td>' +
                        '</tr>';
    }
    
    // Insertamos el contenido HTML generado dentro del cuerpo de la tabla:
    document.getElementById("tbodySucursales").innerHTML = contenido;
}



/*
 * Busca la posicion de una sucursal con base en su ID.
 * 
 * Si el ID no se encuentra, la funcion devuelve -1.
 */
function buscarPosicionSucursalPorID(idSucursal)
{    
    // Recorremos el arreglo de sucursales:
    for (let i = 0; i < sucursales.length; i++)
    {
        if (sucursales[i].id === idSucursal)
            return i;
    }
    
    return -1;
}

// Esta funcion muestra y oculta el detalle de una sucursal.
export function setDetalleSucursalVisible(valor)
{    
    // Si valor es true:
    if (valor)
    {
        // Oculto el catalogo:
        document.getElementById('divCatalogoSucursales').style.display = 'none';
        
        // Muestro el detalle:
        document.getElementById('divDetalleSucursal').style.display = '';
    }
    else
    {
        // Oculto el detalle:
        document.getElementById('divDetalleSucursal').style.display = 'none';
        
        // Muestro el catalogo:
        document.getElementById('divCatalogoSucursales').style.display = '';
    }
}

// Esta funcion genera un nuevo ID de sucursal
// tomando en cuenta el ultimo ID de sucursal existente.
function generarIDSucursal()
{
    let ultimoID = 0;
    
    // Primero revisamos que haya sucursales en el arreglo:
    if (sucursales.length > 0)
    {
        ultimoID = sucursales[0].id;
        for (let i = 0; i < sucursales.length; i++)
        {
            if (sucursales[i].id > ultimoID)
                ultimoID = sucursales[i].id;
        }
    }
    ultimoID ++;
    return ultimoID;
}

