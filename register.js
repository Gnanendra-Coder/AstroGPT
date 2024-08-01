document.getElementById('registerButton').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.email === email);

    if (userExists) {
        alert('User already registered.');
    } else {
        users.push({ username, email, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Successfully registered.');
        window.location.href = 'login.html';
    }
});
