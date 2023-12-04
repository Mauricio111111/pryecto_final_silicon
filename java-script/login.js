
console.log("=======soy js========")

const login = () =>{
    let usu = document.getElementById('usuario').value;
    let pass = document.getElementById('password').value;
    console.log(`El usuario es ${usu} y la contraseña es ${pass}`);

    window.location.href = "../index.html";

    localStorage.usuario = usu;
    localStorage.password = pass;

}
