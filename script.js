document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;

    if ((username === 'salsa' && password === 'salsa123') || (username === 'admin' && password === 'admin123')) {
        // Redirect to biodata page after successful login
        window.location.href = 'biodata.html';
    } else {
        alert('Invalid username or password');
    }
});