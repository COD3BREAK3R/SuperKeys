<?php

require "../app/config/csrf.php";
require '../app/utils/security.php';
require "../app/models/usuario/verificar_sesion_usuario.php";

?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login PHP - Usuario</title>
    <!-- Mis Estilos -->
    <link rel="stylesheet" href="../css/main.css">
    <!-- Rubik Font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
        rel="stylesheet">
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

    </div>
    <!-- Fin Mostrar Popup -->

    <main class="usuario">
        <!-- Titulo -->
        <section class="usuario__Titulo">
            <h1>Bienvenido&nbsp;<?php echo $_SESSION['usuario']; ?></h1>

            <div id="cerrarSesion">Cerrar Sesión &nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path
                        d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
                </svg>
            </div>
        </section>
        <!-- Fin Titulo -->

        <!-- Seleccion Tipo Licencia -->
        <section class="usuario__TipoLicencia">
            <!-- Titulo Tipo Licencia -->
            <div class="usuario__TituloSeleccionLicencia">
                <h3>Seleccione el tipo de Licencia:
                </h3>
            </div>
            <!-- Fin Titulo Tipo Licencia -->

            <!-- Opciones de Licencia -->
            <form class="usuario__FormularioTipoLiencia">
                <!-- ----- -->
                <div class="usuario__OpcionTipoLicencia">
                    <input type="radio" id="windows" name="grupo" value="windows">
                    <label for="windows">Windows &nbsp;
                        <svg viewBox="0 0 14 14" role="img" focusable="false" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="m 5.91827,7.331731 v 4.694712 L 1,11.348557 V 7.331731 h 4.91827 z m 0,-5.358174 V 6.725962 H 1 V 2.651443 z M 13,7.331731 V 13 L 6.45913,12.098557 V 7.331731 H 13 z M 13,1 V 6.725962 H 6.45913 V 1.901443 z" />
                        </svg>
                    </label>
                </div>
                <!-- ----- -->
                <div class="usuario__OpcionTipoLicencia">
                    <input type="radio" id="Office" name="grupo" value="Office">
                    <label for="Office">Office &nbsp;
                        <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M25.925 25.583v-19.198c0-0.005 0-0.011 0-0.016 0-0.22-0.075-0.422-0.202-0.583l0.002 0.002c-0.133-0.166-0.314-0.289-0.521-0.348l-0.007-0.002-4.234-1.162q-0.496-0.139-0.992-0.287-0.496-0.146-0.992-0.27v24.593l6.218-1.783c0.215-0.059 0.396-0.183 0.526-0.348l0.002-0.002c0.125-0.158 0.201-0.36 0.201-0.579 0-0.006-0-0.012-0-0.018v0.001zM27.909 6.385v19.198c0 0.008 0 0.018 0 0.028 0 1.343-0.903 2.474-2.135 2.82l-0.021 0.005-8.607 2.467c-0.102 0.029-0.225 0.053-0.351 0.068l-0.012 0.001c-0.109 0.015-0.236 0.023-0.365 0.024h-0.001c-0.011 0-0.023 0-0.035 0-0.309 0-0.606-0.048-0.885-0.137l0.021 0.006c-0.316-0.108-0.587-0.231-0.843-0.377l0.023 0.012-5.63-3.179c-0.202-0.11-0.367-0.265-0.485-0.452l-0.003-0.005c-0.112-0.179-0.179-0.396-0.179-0.628 0-0.005 0-0.011 0-0.016v0.001c0-0.001 0-0.003 0-0.004 0-0.718 0.582-1.299 1.299-1.299 0.001 0 0.003 0 0.004 0h7.286v-17.709l-5.473 1.953c-0.446 0.156-0.813 0.443-1.065 0.815l-0.005 0.007c-0.252 0.357-0.402 0.801-0.402 1.28 0 0.002 0 0.005 0 0.008v-0 10.095c0 0.004 0 0.009 0 0.015 0 0.835-0.466 1.561-1.152 1.933l-0.012 0.006-2.589 1.412c-0.206 0.114-0.452 0.182-0.713 0.185h-0.001c-0.002 0-0.004 0-0.007 0-0.819 0-1.483-0.664-1.483-1.483 0-0.002 0-0.004 0-0.006v0-14.221c0.002-0.549 0.155-1.062 0.42-1.5l-0.007 0.013c0.262-0.462 0.633-0.836 1.078-1.093l0.014-0.007 9.244-5.257c0.192-0.107 0.414-0.197 0.647-0.258l0.020-0.004c0.214-0.059 0.459-0.093 0.712-0.094h0c0.007-0 0.015-0 0.023-0 0.16 0 0.316 0.014 0.468 0.041l-0.016-0.002c0.181 0.035 0.334 0.075 0.483 0.124l-0.028-0.008 8.608 2.373c1.254 0.362 2.156 1.499 2.156 2.847 0 0.002 0 0.004 0 0.007v-0z">
                            </path>
                        </svg>
                    </label>
                </div>
                <!-- ----- -->
            </form>
            <!-- Fin Opciones de Licencia -->

            <!-- Btn Generar Licencia -->
            <div class="usuario__BtnGenerarLicencia">
                <span>Generar &nbsp;</span>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M22 8.29344C22 11.7692 19.1708 14.5869 15.6807 14.5869C15.0439 14.5869 13.5939 14.4405 12.8885 13.8551L12.0067 14.7333C11.4883 15.2496 11.6283 15.4016 11.8589 15.652C11.9551 15.7565 12.0672 15.8781 12.1537 16.0505C12.1537 16.0505 12.8885 17.075 12.1537 18.0995C11.7128 18.6849 10.4783 19.5045 9.06754 18.0995L8.77362 18.3922C8.77362 18.3922 9.65538 19.4167 8.92058 20.4412C8.4797 21.0267 7.30403 21.6121 6.27531 20.5876L5.2466 21.6121C4.54119 22.3146 3.67905 21.9048 3.33616 21.6121L2.45441 20.7339C1.63143 19.9143 2.1115 19.0264 2.45441 18.6849L10.0963 11.0743C10.0963 11.0743 9.3615 9.90338 9.3615 8.29344C9.3615 4.81767 12.1907 2 15.6807 2C19.1708 2 22 4.81767 22 8.29344ZM15.681 10.4889C16.8984 10.4889 17.8853 9.50601 17.8853 8.29353C17.8853 7.08105 16.8984 6.09814 15.681 6.09814C14.4635 6.09814 13.4766 7.08105 13.4766 8.29353C13.4766 9.50601 14.4635 10.4889 15.681 10.4889Z" />
                </svg>
            </div>
            <!-- Fin Btn Generar Licencia -->
        </section>
        <!-- Fin Seleccion Tipo Licencia -->

        <!-- Licencias de Usuario -->
        <section class="usuario__Licencias">
            <!-- ----- -->
            <div class="usuario__LicenciasContenedor" id="licenciasWindows">
                <div class="usuario__LicenciasEncabezado">
                    <h3>Licencias de Windows
                        <span>
                            <svg viewBox="0 0 14 14" role="img" focusable="false" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="m 5.91827,7.331731 v 4.694712 L 1,11.348557 V 7.331731 h 4.91827 z m 0,-5.358174 V 6.725962 H 1 V 2.651443 z M 13,7.331731 V 13 L 6.45913,12.098557 V 7.331731 H 13 z M 13,1 V 6.725962 H 6.45913 V 1.901443 z" />
                            </svg>
                        </span>
                    </h3>
                </div>
            </div>
            <!-- ----- -->
            <!-- ----- -->
            <div class="usuario__LicenciasContenedor" id="licenciasOffice">
                <div class="usuario__LicenciasEncabezado">
                    <h3>Licencias de Office
                        <span>
                            <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M25.925 25.583v-19.198c0-0.005 0-0.011 0-0.016 0-0.22-0.075-0.422-0.202-0.583l0.002 0.002c-0.133-0.166-0.314-0.289-0.521-0.348l-0.007-0.002-4.234-1.162q-0.496-0.139-0.992-0.287-0.496-0.146-0.992-0.27v24.593l6.218-1.783c0.215-0.059 0.396-0.183 0.526-0.348l0.002-0.002c0.125-0.158 0.201-0.36 0.201-0.579 0-0.006-0-0.012-0-0.018v0.001zM27.909 6.385v19.198c0 0.008 0 0.018 0 0.028 0 1.343-0.903 2.474-2.135 2.82l-0.021 0.005-8.607 2.467c-0.102 0.029-0.225 0.053-0.351 0.068l-0.012 0.001c-0.109 0.015-0.236 0.023-0.365 0.024h-0.001c-0.011 0-0.023 0-0.035 0-0.309 0-0.606-0.048-0.885-0.137l0.021 0.006c-0.316-0.108-0.587-0.231-0.843-0.377l0.023 0.012-5.63-3.179c-0.202-0.11-0.367-0.265-0.485-0.452l-0.003-0.005c-0.112-0.179-0.179-0.396-0.179-0.628 0-0.005 0-0.011 0-0.016v0.001c0-0.001 0-0.003 0-0.004 0-0.718 0.582-1.299 1.299-1.299 0.001 0 0.003 0 0.004 0h7.286v-17.709l-5.473 1.953c-0.446 0.156-0.813 0.443-1.065 0.815l-0.005 0.007c-0.252 0.357-0.402 0.801-0.402 1.28 0 0.002 0 0.005 0 0.008v-0 10.095c0 0.004 0 0.009 0 0.015 0 0.835-0.466 1.561-1.152 1.933l-0.012 0.006-2.589 1.412c-0.206 0.114-0.452 0.182-0.713 0.185h-0.001c-0.002 0-0.004 0-0.007 0-0.819 0-1.483-0.664-1.483-1.483 0-0.002 0-0.004 0-0.006v0-14.221c0.002-0.549 0.155-1.062 0.42-1.5l-0.007 0.013c0.262-0.462 0.633-0.836 1.078-1.093l0.014-0.007 9.244-5.257c0.192-0.107 0.414-0.197 0.647-0.258l0.020-0.004c0.214-0.059 0.459-0.093 0.712-0.094h0c0.007-0 0.015-0 0.023-0 0.16 0 0.316 0.014 0.468 0.041l-0.016-0.002c0.181 0.035 0.334 0.075 0.483 0.124l-0.028-0.008 8.608 2.373c1.254 0.362 2.156 1.499 2.156 2.847 0 0.002 0 0.004 0 0.007v-0z">
                                </path>
                            </svg>
                        </span>
                    </h3>
                </div>
            </div>
            <!-- ----- -->

        </section>
        <!-- Fin Licencias de Usuario -->
    </main>

    <script src="../js/login/popUps.js"></script>

    <script src="../js/usuario/usuario.js"></script>
    <script src="../js/usuario/onFunction.js"></script>
    <script src="../js/usuario/cerrarSesion.js"></script>
    <script src="../js/usuario/btnCargando.js"></script>
    <script src="../js/usuario/copiarEliminar.js"></script>
    <script src="../js/usuario/generarLicencia.js"></script>
    <script src="../js/usuario/obtenerLicencias.js"></script>
    <script src="../js/usuario/eliminarLicencias.js"></script>
</body>

</html>