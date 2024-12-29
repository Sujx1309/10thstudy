$(document).ready(() => {
    // Check if user is already logged in
    if (localStorage.getItem('loggedInUser')) {
        window.location.href = '../Index.html'; // Redirect to main page if already logged in
    }

    // Function to log in a user
    const loginUser = (user) => {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        window.location.href = '../Index.html'; // Redirect to main page after login
    };

    // Handle login form submission
    $('#login-form').on('submit', (e) => {
        e.preventDefault();
        
        const username = $('#username').val();
        const password = $('#password').val();

        // Validate form fields
        if (!username || !password) {
            alert('Please enter both username and password');
            return;
        }
        
        // Validate credentials
        if (username === 'admin' && password === 'adminpass') {
            const user = { username: 'admin', role: 'admin' };
            loginUser(user);
        } else {
            alert('Invalid username or password');
        }
    });

    // Handle guest login
    $('#guest-login').on('click', () => {
        // Create a guest user object
        const guestUser = { username: 'Guest', password: '', role: 'guest' };
        loginUser(guestUser);
    });
});
