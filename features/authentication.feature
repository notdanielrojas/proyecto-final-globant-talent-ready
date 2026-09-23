Requisito: Autenticación y Gestión de Usuarios

  Escenario: Registro exitoso de un nuevo pasajero
    Dado que el usuario está en la pantalla de registro
    Cuando ingresa un nombre válido, correo electrónico y contraseña
    Y confirma el formulario de registro
    Entonces la aplicación debe crear la cuenta
    Y redirigir al usuario al mapa principal

  Escenario: Inicio de sesión de un pasajero registrado
    Dado que el usuario tiene una cuenta creada
    Cuando ingresa sus credenciales válidas
    Entonces debe ingresar exitosamente a su sesión