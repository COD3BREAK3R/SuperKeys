<?php

require "./app/config/csrf.php";
require "./app/utils/security.php";
require "./app/config/credenciales.php";
require "./app/config/crear_tablas.php";
require "./app/models/usuario/verificar_sesion_login.php";

?>

<!DOCTYPE html>
<html lang="es">
<!-- Sitio Web creado por Luis Enrique, contactame por Telegram https://t.me/HACKERMATR1X o WhatsApp https://wa.me/+5355055789 -->

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login PHP</title>
    <!-- Rubik Font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
        rel="stylesheet">
    <!-- Mis Estilos -->
    <link rel="stylesheet" href="./css/main.css">
</head>

<body>

    <!-- Mostrar Popup -->
    <div class="popup" style="display: none;">

        <!-- Mostrar Error -->
        <section class="error ocultarPopUp opacidadPopUp">
            <div class="error__icono">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                        <path
                            d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240ZM330-120 120-330v-300l210-210h300l210 210v300L630-120H330Zm34-80h232l164-164v-232L596-760H364L200-596v232l164 164Zm116-280Z" />
                    </svg>
                </span>
            </div>

            <h1>Inicio de sesión fallido</h1>

            <p>El usuario o contraseña fueron manipulados, no toque el código de la aplicación</p>

            <div class="botones">
                <button id="aceptarError">Aceptar</button>
            </div>
        </section>
        <!-- Fin Mostrar Error -->

        <!-- Mostrar Registro -->
        <section class="registro ocultarPopUp opacidadPopUp">
            <div class="registro__icono">
                <span>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16.0303 10.0303C16.3232 9.73744 16.3232 9.26256 16.0303 8.96967C15.7374 8.67678 15.2626 8.67678 14.9697 8.96967L10.5 13.4393L9.03033 11.9697C8.73744 11.6768 8.26256 11.6768 7.96967 11.9697C7.67678 12.2626 7.67678 12.7374 7.96967 13.0303L9.96967 15.0303C10.2626 15.3232 10.7374 15.3232 11.0303 15.0303L16.0303 10.0303Z" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z" />
                    </svg>
                </span>
            </div>

            <h1>Registro Exitoso</h1>

            <p>Usted se ha registrado correctamente</p>

            <div class="botones">
                <button id="aceptarRegistro">Aceptar</button>
            </div>
        </section>
        <!-- Fin Mostrar Registro -->

    </div>
    <!-- Fin Mostrar Popup -->

    <main class="login">


        <!-- Imagen Login -->
        <section class="login__Imagen__Contenedor">
            <!-- IMG -->
            <div class="login__Imagen__Textos">
                <!-- H1 -->
                <h1 class="login__Imagen__Bienvenida">Bienvenido a SuperKeys
                </h1>
                <!-- Fin H1 -->
                <!-- Imagen Párrafo -->
                <p class="login__Imagen__Parrafo">
                    Su lugar favorito para adquirir claves digitales falsas que le permitan activar Windows y Office de
                    por vida con un costo ridículamente bajo en comparación a nuestra competencia. No esperes más
                    para
                    disfrutar de nuestro servicio
                </p>
                <!-- Fin Imagen Párrafo -->
            </div>
        </section>
        <!-- Fin Login -->


        <!-- Formulario Login -->
        <form class="login__Formulario">

            <!-- Intro Login -->
            <section class="login__Formulario__Encabezado">
                <h2 class="login__Formulario__Titulo">Iniciar Sesión
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                            <path
                                d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
                        </svg>
                    </span>
                </h2>
                <!-- Intro Parrafo -->
                <p class="login__Formulario__Descripcion">
                    Puede generar un máximo de 3 licencias para Windows y Office por usuario.
                    Crédito a <a
                        href="https://www.freepik.es/vector-gratis/pagina-inicio-sesion-ondas-abstractas_5481485.htm#fromView=search&page=1&position=0&uuid=2c6d60c6-70f8-4d8f-bd22-b17adc44fbda">esta
                        plantilla</a> alojada en Freepik. Web programada por Luis Enrique
                </p>
                <!-- Fin Intro Parrafo -->

                <!-- Error Formulario-->
                <div class="login__Formulario__Error oculto">

                    <!-- Encabezado Error -->
                    <p class="login__Formulario__Error__Titulo"><b>Error</b>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24">
                                <path
                                    d="m40-120 440-760 440 760H40Zm104-60h672L480-760 144-180Zm340.175-57q12.825 0 21.325-8.675 8.5-8.676 8.5-21.5 0-12.825-8.675-21.325-8.676-8.5-21.5-8.5-12.825 0-21.325 8.675-8.5 8.676-8.5 21.5 0 12.825 8.675 21.325 8.676 8.5 21.5 8.5ZM454-348h60v-224h-60v224Zm26-122Z" />
                            </svg>
                        </span>
                    </p>
                    <!-- Fin Encabezado Error -->

                    <!-- Párrafos de Error -->
                    <p class="login__Formulario__Error__Parrafo oculto">El nombre de usuario y la contraseña solo pueden
                        contener
                        <u>letras y números</u>
                    </p>
                    <!-- -------- -->
                    <p class="login__Formulario__Error__Parrafo oculto">La longitud del usuario y la contraseña es
                        de <u>mínimo 3 caracteres</u></p>
                    <!-- Fin Párrafos de Error -->

                </div>
                <!-- Fin Error Formulario -->
            </section>
            <!-- Fin Intro Login -->

            <!-- Inputs Login -->
            <section class="login__Formulario__Inputs">

                <input type="text" maxlength="15" placeholder="Usuario" id="inputUsuario">

                <input type="password" maxlength="20" placeholder="Contraseña" id="inputContrasena">

                <!-- Botón Form -->
                <section class="login__Formulario__Boton" form="login">
                    Acceder
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                            <path
                                d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z" />
                        </svg>
                    </span>
                </section>
                <!-- Fin Botón Form -->
            </section>
            <!-- Fin Inputs Login -->

            <!-- Sección Change Form -->
            <section class="login__Formulario__Change" form="login">
                <p>¿No tienes una cuenta? Regístrate</p>
            </section>
            <!-- Fin Sección Change Form -->
        </form>
        <!-- Fin Formulario Login -->
    </main>

    <script src="./js/login/login.js"></script>
    <script src="./js/login/validarFormulario.js"></script>
    <script src="./js/login/inicioSesionRegistro.js"></script>
    <script src="./js/login/popUps.js"></script>
    
</body>

</html>