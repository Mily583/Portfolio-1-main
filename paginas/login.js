document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener los valores del formulario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;

    // Crear objeto con los datos del formulario
    const formData = {
        username: username,
        password: password,
        remember: remember
    };

    //enviar datos del fortmu
    fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Manejar la respuesta del API si es necesario
        console.log('Datos guardados en el API:', data);
        // Redirigir al usuario a otra página, mostrar un mensaje de éxito, etc.
    })
    .catch(error => console.error('Error:', error));
});
