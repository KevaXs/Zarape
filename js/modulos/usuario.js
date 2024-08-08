let usuarios =
        [
            {
                id: 1,
                usuario: "jrolmmar",
                contraseña: "F4rX7wL9bQ1p",
                persona: {
                    id: 1,
                    nombre: "Jorge Luis",
                    apellidoP: "Olmedo",
                    apellidoM: "Martinez",
                    telefono: 4779090963,
                    calle: "Regulo ",
                    Numero: 201,
                    colonia: "Observatorio II"
                }

            },

            {
                id: 2,
                usuario: "jmormez",
                contraseña: "m2Vj8H5kR3zN",
                persona: {
                    id: 2,
                    nombre: "Jimena ",
                    apellidoP: "Oropeza",
                    apellidoM: "Cruces",
                    telefono: 4779090452,
                    calle: "Elche",
                    Numero: 501,
                    colonia: "Loma Dorada"
                }

            },
            {
                id: 3,
                usuario: "jsmrmar",
                contraseña: "Y7nQ4pK1sW6d",
                persona: {
                    id: 3,
                    nombre: "José Juan",
                    apellidoP: "Garcia",
                    apellidoM: "Hernández",
                    telefono: 4779090745,
                    calle: "Vibar",
                    Numero: 201,
                    colonia: "León II"
                }



            },
            {
                id: 4,
                usuario: "axlmarz",
                contraseña: "z9nQ1im2sq7d",
                persona: {
                    id: 4,
                    nombre: "Kevin Axel",
                    apellidoP: "Rocha ",
                    apellidoM: "Rodriguez",
                    telefono: 4779090146,
                    calle: "Michen",
                    Numero: 201,
                    colonia: "San Juan De Dios"
                }


            }
            ,
            {
                id: 5,
                usuario: "dgormmel",
                contraseña: "L8tR5yX3bM9q",
                persona: {
                    id: 5,
                    nombre: "Diego",
                    apellidoP: "Rommel",
                    apellidoM: "Ledezma",
                    telefono: 4779090174,
                    calle: "Mexican ",
                    Numero: 501,
                    colonia: "Mirador"

                }


            }

        ];

export function inicializarModuloUsuario()
{
    setDetalleUsuarioVisible(false);
    llenarTabla();
}

function generarContraseña(longitud = 12) {
    const caracteres = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let contraseña = '';
    for (let i = 0; i < longitud; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        contraseña += caracteres[indiceAleatorio];
    }
    return contraseña;
}

function validarCampos() {
    // Obtiene los valores de todos los campos
    let usuario = document.getElementById("txtUsuario").value;
    let contraseña = document.getElementById("txtContraseña").value;
    let nombre = document.getElementById("txtNombre").value;
    let apellidoP = document.getElementById("txtApellidoP").value;
    let apellidoM = document.getElementById("txtApellidoM").value;
    let telefono = document.getElementById("txtTelefono").value;
    let calle = document.getElementById("txtCalle").value;
    let numero = document.getElementById("txtNumero").value;
    let colonia = document.getElementById("txtColonia").value;

    // Verifica que todos los campos requeridos no estén vacíos
    if (
        usuario === "" ||
        contraseña === "" ||
        nombre === "" ||
        apellidoP === "" ||
        apellidoM === "" ||
        telefono === "" ||
        calle === "" ||
        numero === "" ||
        colonia === ""
    ) {
        // Si algún campo está vacío, retorna false
        return false;
    }
    
    // Si todos los campos están llenos, retorna true
    return true;
}



export function guardarU() {
    // Verificar si todos los campos están llenos
    if (!validarCampos()) {
        Swal.fire('Error', 'Por favor, complete todos los campos.', 'error');
        return;
    }

    let posTemp = -1;
    let u = {
        id: 0,
        usuario: document.getElementById("txtUsuario").value,
        contraseña: document.getElementById("txtContraseña").value || generarContraseña(),
        persona: {
            id: 0,
            nombre: document.getElementById("txtNombre").value,
            apellidoP: document.getElementById("txtApellidoP").value,
            apellidoM: document.getElementById("txtApellidoM").value,
            telefono: parseInt(document.getElementById("txtTelefono").value),
            calle: document.getElementById("txtCalle").value,
            Numero: parseInt(document.getElementById("txtNumero").value),
            colonia: document.getElementById("txtColonia").value
        }
    };

    posTemp = buscarPosicionUsuarioPorID(parseInt(document.getElementById("txtIdUsuario").value));
    if (posTemp >= 0) { // Si el usuario ya existe
        u.id = parseInt(document.getElementById("txtIdUsuario").value);
        usuarios[posTemp] = u;
    } else { // Si el usuario es nuevo
        u.id = generarIDUsuario();
        usuarios.push(u);
        document.getElementById("txtIdUsuario").value = u.id;
    }

    llenarTabla();
    Swal.fire('Movimiento realizado.', 'Datos de usuario guardados.', 'success');
}



export function eliminarU()
{
    // Obtener el ID del alimento a eliminar desde el campo correspondiente
    let idEliminar = parseInt(document.getElementById("txtIdUsuario").value);

    // Buscar la posición del alimento en el arreglo por su ID
    let posEliminar = buscarPosicionUsuarioPorID(idEliminar);

    if (posEliminar >= 0) {
        // Eliminar el elemento del arreglo usando splice
        usuarios.splice(posEliminar, 1);

        // Limpiar los campos después de eliminar
        document.getElementById("txtIdUsuario").value = '';
        document.getElementById("txtUsuario").value = '';
        document.getElementById("txtContraseña").value = '';
        document.getElementById("txtNombre").value = '';
        document.getElementById("txtApellidoP").value = '';
        document.getElementById("txtApellidoM").value = '';
        document.getElementById("txtTelefono").value = '';
        document.getElementById("txtCalle").value = '';
        document.getElementById("txtNumero").value = '';
        document.getElementById("txtColonia").value = '';

        // Volver a llenar la tabla con los datos actualizados
        llenarTabla();

        Swal.fire('Movimiento realizado.', 'Producto eliminado.', 'success');
    } else {
        Swal.fire('Error', 'El usuario  ' + ' no existe.', 'error');
    }
}


export function limpiarU()
{
    document.getElementById("txtIdUsuario").value = '';
    document.getElementById("txtUsuario").value = '';
    document.getElementById("txtContraseña").value = '';
    document.getElementById("txtNombre").value = '';
    document.getElementById("txtApellidoP").value = '';
    document.getElementById("txtApellidoM").value = '';
    document.getElementById("txtTelefono").value = '';
    document.getElementById("txtCalle").value = '';
    document.getElementById("txtNumero").value = '';
    document.getElementById("txtColonia").value = '';
}

//Esta funcion permite consultar una sucursal mediante su nombre
//y muestra solo la sucursal encontrada, ocultando las demas. 
export function consultar() {
    // Obtén el nombre de usuario desde el campo de búsqueda y conviértelo a minúsculas
    let nombreUsuario = document.getElementById("txtBuscarUsuario").value.toLowerCase();
    let contenido = '';
    let encontrada = false;

    // Recorremos el arreglo de usuarios buscando coincidencias con el nombre de usuario
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].usuario.toLowerCase().startsWith(nombreUsuario)) {
            encontrada = true;
            // Accedemos a la información de la persona
            let persona = usuarios[i].persona;
            // Construimos el nombre completo concatenando nombre, apellidoP y apellidoM
            let nombreCompleto = persona.nombre + ' ' + persona.apellidoP + ' ' + persona.apellidoM;

            // Vamos generando el contenido de forma dinámica:
            contenido += '<tr>' +
                    '<td>'+ usuarios[i].usuario + '</td>' +
                    '<td>' + nombreCompleto + '</td>' + // Muestra el nombre completo concatenado
                    '<td>' + persona.telefono + '</td>' + // Muestra el teléfono
                    '<td>' + persona.calle + ' ' + persona.Numero + ', ' + persona.colonia + '</td>' + // Muestra la dirección completa
                    '<td><a href="#" class="text-info" onclick="cm.mostrarDetalleUsuario(' + usuarios[i].id + ');"><i class="fas fa-eye" style="color:#c60000"></i></a></td>' +
                    '</tr>';
        }
    }

    if (!encontrada) {
        contenido = '<tr><td colspan="4">Usuario no encontrado.</td></tr>'; // Cambiar colspan si es necesario
    }

    // Insertamos el contenido HTML generado dentro del cuerpo de la tabla:
    document.getElementById("tbodyUsuarios").innerHTML = contenido;
}


export function mostrarDetalleUsuario(idUsuario)
{
    let usuario = null;
    let pos = buscarPosicionUsuarioPorID(idUsuario);

    if (pos < 0)
    {
        Swal.fire('', 'usuario no encontrado.', 'warning');
        return;
    }

    limpiarU();
    usuario = usuarios[pos];
    document.getElementById("txtIdUsuario").value = usuario.id;
    document.getElementById("txtUsuario").value = usuario.usuario;
    document.getElementById("txtContraseña").value = usuario.contraseña;
    document.getElementById("txtNombre").value = usuario.persona.nombre;
    document.getElementById("txtApellidoP").value = usuario.persona.apellidoP;
    document.getElementById("txtApellidoM").value = usuario.persona.apellidoM;
    document.getElementById("txtTelefono").value = usuario.persona.telefono;
    document.getElementById("txtCalle").value = usuario.persona.calle;
    document.getElementById("txtNumero").value = usuario.persona.Numero;
    document.getElementById("txtColonia").value = usuario.persona.colonia;
    setDetalleUsuarioVisible(true);
}

export function mostrarFormularioNuevo()
{
    limpiarU();
    setDetalleUsuarioVisible(true);
}
function llenarTabla() {
    // Aquí guardaremos el contenido de la tabla:
    let contenido = '';

    // Recorremos el arreglo de usuarios:
    for (let i = 0; i < usuarios.length; i++) {
        // Accedemos a la información de la persona
        let persona = usuarios[i].persona;
        // Construimos el nombre completo concatenando nombre, apellidoP y apellidoM
        let nombreCompleto = persona.nombre + ' ' + persona.apellidoP + ' ' + persona.apellidoM;

        // Vamos generando el contenido de forma dinámica:
        contenido += '<tr>' +
                '<td>'+ usuarios[i].usuario + '</td>' +
                '<td>' + nombreCompleto + '</td>' + // Muestra el nombre completo concatenado
                '<td>' + persona.telefono + '</td>' + // Muestra el teléfono
                '<td>' + persona.calle + ' ' + persona.Numero + ', ' + persona.colonia + '</td>' + // Muestra la dirección completa
                '<td><a href="#" class="text-info" onclick="cm.mostrarDetalleUsuario(' + usuarios[i].id + ');"><i class="fas fa-eye" style="color:#c60000"></i></a></td>' +
                '</tr>';
    }

    // Insertamos el contenido HTML generado dentro del cuerpo de la tabla:
    document.getElementById("tbodyUsuarios").innerHTML = contenido;
}


function buscarPosicionUsuarioPorID(idUsuario)
{
    //Recorremos el arreglo de alimentos:
    for (let i = 0; i < usuarios.length; i++)
    {
        if (usuarios[i].id === idUsuario)
            return i;
    }

    return -1;

}

export function setDetalleUsuarioVisible(valor)
{

    // Si valor es true:
    if (valor)
    {
        //Oculto el catalogo:
        document.getElementById('divCatalogoUsuarios').style.display = 'none';

        //Muestro el detalle:
        document.getElementById('divDetalleUsuario').style.display = '';
    } else
    {
        //Oculto el detalle:
        document.getElementById('divDetalleUsuario').style.display = 'none';

        //Muestro el catalogo:
        document.getElementById('divCatalogoUsuarios').style.display = '';
    }
}


function generarIDUsuario()
{
    let ultimoID = 0;

    //Primero revisamos que haya alimentos en el arreglo:
    if (usuarios.length > 0)
    {
        ultimoID = usuarios[0].id;
        for (let i = 0; i < usuarios.length; i++)
        {
            if (usuarios[i].id > ultimoID)
                ultimoID = usuarios[i].id;
        }
    }
    ultimoID++;
    return ultimoID;
}

