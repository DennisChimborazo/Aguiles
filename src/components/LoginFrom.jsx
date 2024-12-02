import React from "react";
import "./LoginFrom.css";
const LoginFrom=()=>{
    return (
        <div class="login-container">
        <form class="login-form" action="" method="post">
            <h2>Iniciar Sesión</h2>
            <div class="form-group">
                <label for="usuario">Usuario</label>
                <input type="text" id="usuario" name="usuario" placeholder="Ingrese su usuario" required />
            </div>
            <div class="form-group">
                <label for="password">Contraseña</label>
                <input type="password" id="password" name="password" placeholder="Ingrese su contraseña" required />
            </div>
            <button type="submit" class="login-button">Ingresar</button>
        </form>
    </div>
    
    );
};
export default LoginFrom;