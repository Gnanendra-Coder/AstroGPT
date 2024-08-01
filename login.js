document.getElementById('loginButton').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        window.location.href = 'chatbot.html';
    } else {
        alert('Invalid login credentials or user not registered.');
    }
});
