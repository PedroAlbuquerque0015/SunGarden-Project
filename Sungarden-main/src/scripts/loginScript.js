function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (username === "admin" && password === "senha1234") {
        alert("Login bem-sucedido!");
        window.location.href = 'index.html';
    } else {
        alert('Login ou senha incorretos!');
    }
}
